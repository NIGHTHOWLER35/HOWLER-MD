const axios = require('axios');
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const fs = require('fs');
const path = require('path');

const IZUMI_API_BASE = "https://api.xyro.site/download/youtubemp4?url="; // replace if you use a different working endpoint

async function videoCommand(sock, chatId, message) {
  try {
    const text = message.message?.conversation || message.message?.extendedTextMessage?.text || "";
    const searchQuery = text.split(' ').slice(1).join(' ').trim();

    if (!searchQuery) {
      await sock.sendMessage(chatId, { text: '❗ Usage: .video <search term or youtube link>' }, { quoted: message });
      return;
    }

    // Resolve video URL (direct or via search)
    let videoUrl = '';
    let videoTitle = '';
    let videoThumbnail = '';

    if (/^https?:\/\//i.test(searchQuery)) {
      videoUrl = searchQuery;
    } else {
      const { videos } = await yts(searchQuery);
      if (!videos || videos.length === 0) {
        await sock.sendMessage(chatId, { text: '❌ No videos found.' }, { quoted: message });
        return;
      }
      videoUrl = videos[0].url;
      videoTitle = videos[0].title;
      videoThumbnail = videos[0].thumbnail;
    }

    // send thumbnail for better UX (optional)
    try {
      const ytId = (videoUrl.match(/(?:youtu\.be\/|v=|\/shorts\/)([a-zA-Z0-9_-]{11})/) || [])[1];
      const thumb = videoThumbnail || (ytId ? `https://i.ytimg.com/vi/${ytId}/sddefault.jpg` : undefined);
      if (thumb) {
        await sock.sendMessage(chatId, {
          image: { url: thumb },
          caption: `*${videoTitle || videoUrl}*\nDownloading...`
        }, { quoted: message });
      }
    } catch (e) { console.warn('[VIDEO] thumb send failed', e?.message || e); }

    // Call the API that returns JSON like the one you pasted
    let apiDownloadUrl = null;
    try {
      const apiUrl = IZUMI_API_BASE + encodeURIComponent(videoUrl);
      const res = await axios.get(apiUrl, { timeout: 30000 });
      if (res?.data?.status && res.data.result?.download) {
        apiDownloadUrl = res.data.result.download;
        videoTitle = res.data.result.title || videoTitle;
      } else {
        console.warn('[VIDEO] API did not return expected result:', res.data);
      }
    } catch (e) {
      console.warn('[VIDEO] API request failed:', e?.message || e);
    }

    // helper: try sending direct url (fast)
    const trySendFromUrl = async (url, title) => {
      try {
        // quick HEAD-like check by requesting a small range
        const head = await axios.get(url, {
          method: 'GET',
          responseType: 'stream',
          timeout: 10000,
          headers: { Range: 'bytes=0-1023' }
        });
        const ctype = (head.headers['content-type'] || '').toLowerCase();
        if (!ctype.includes('video') && !ctype.includes('application/octet-stream')) {
          console.warn('[VIDEO] URL content-type not video:', ctype);
          return false;
        }
        // send using URL (Baileys supports this)
        await sock.sendMessage(chatId, {
          video: { url },
          mimetype: 'video/mp4',
          fileName: `${(title || 'video').replace(/[<>:"/\\|?*\x00-\x1F]/g, '')}.mp4`,
          caption: `*${title || 'Video'}*\n\n> _Downloaded by HOWLER MD_`
        }, { quoted: message });
        return true;
      } catch (err) {
        console.warn('[VIDEO] trySendFromUrl failed:', err?.message || err);
        return false;
      }
    };

    // If API gave us a download URL, try that first
    if (apiDownloadUrl) {
      const ok = await trySendFromUrl(apiDownloadUrl, videoTitle);
      if (ok) return; // success
    }

    // Fallback: use ytdl-core to download and send (safe but slower)
    try {
      const tempFile = path.join(process.cwd(), `temp_video_${Date.now()}.mp4`);
      await new Promise((resolve, reject) => {
        const stream = ytdl(videoUrl, { quality: 'highestvideo', filter: f => f.container === 'mp4' || !f.container });
        const ws = fs.createWriteStream(tempFile);
        stream.pipe(ws);
        stream.on('error', err => {
          ws.destroy();
          reject(err);
        });
        ws.on('finish', resolve);
        ws.on('error', err => { ws.destroy(); reject(err); });

        // safety timeout
        setTimeout(() => {
          reject(new Error('ytdl timeout'));
        }, 120000); // 2 minutes
      });

      // read and send the file
      const buf = fs.readFileSync(tempFile);
      await sock.sendMessage(chatId, {
        video: buf,
        mimetype: 'video/mp4',
        fileName: `${(videoTitle || 'video').replace(/[<>:"/\\|?*\x00-\x1F]/g, '')}.mp4`,
        caption: `*${videoTitle || 'Video'}*\n\n> _Downloaded by HOWLER MD_`
      }, { quoted: message });

      // cleanup
      try { fs.unlinkSync(tempFile); } catch (e) { /* ignore */ }
      return;
    } catch (err) {
      console.error('[VIDEO] ytdl fallback error:', err?.message || err);
      // cleanup any temp file if exists
      try {
        const files = fs.readdirSync(process.cwd()).filter(f => f.startsWith('temp_video_') && f.endsWith('.mp4'));
        for (const f of files) fs.unlinkSync(path.join(process.cwd(), f));
      } catch (e) {}
      throw err;
    }

  } catch (err) {
    console.error('[VIDEO] Generic error:', err?.message || err);
    await sock.sendMessage(chatId, { text: '❌ Download failed: ' + (err?.message || 'Unknown') }, { quoted: message });
  }
}

module.exports = videoCommand;