const settings = require("../settings.js");
function formatTime(_0x390e25) {
  const _0x1a9702 = Math.floor(_0x390e25 / 86400);
  _0x390e25 = _0x390e25 % 86400;
  const _0x5287dd = Math.floor(_0x390e25 / 3600);
  _0x390e25 = _0x390e25 % 3600;
  const _0x4a42df = Math.floor(_0x390e25 / 0x3c);
  _0x390e25 = Math.floor(_0x390e25 % 0x3c);
  let _0x3c5dfb = '';
  if (_0x1a9702 > 0x0) {
    _0x3c5dfb += _0x1a9702 + "d ";
  }
  if (_0x5287dd > 0x0) {
    _0x3c5dfb += _0x5287dd + "h ";
  }
  if (_0x4a42df > 0x0) {
    _0x3c5dfb += _0x4a42df + "m ";
  }
  if (_0x390e25 > 0x0 || _0x3c5dfb === '') {
    _0x3c5dfb += _0x390e25 + 's';
  }
  return _0x3c5dfb.trim();
}
async function pingCommand(_0x5cae3a, _0x14a9ae, _0x43f7f7) {
  try {
    const _0x562c8c = Date.now();
    await _0x5cae3a.sendMessage(_0x14a9ae, {
      'text': 'Pong!'
    }, {
      'quoted': _0x43f7f7
    });
    const _0x166798 = Date.now();
    const _0x1a5c38 = Math.round((_0x166798 - _0x562c8c) / 0x2);
    const _0x2fa338 = process.uptime();
    const _0x4d7cd0 = formatTime(_0x2fa338);
    const _0x43d9d7 = ("\n┏━━〔🏆 𓆩𓆪𝖧𝖮𝖶𝖫𝖤𝖱-𝖡𝖮𝖳💀〕━━┓\n┃ 🚀 Ping     : " + _0x1a5c38 + " ms\n┃ ⏱️ Uptime   : " + _0x4d7cd0 + "\n┃ 🔖 Version  : v" + settings.version + "\n┃    𝗢𝗪𝗡𝗘𝗥 : ɴɪɢʜᴛ-ʜᴏᴡʟᴇʀ\n┃    𝐎𝐖𝐍𝐄𝐑 : 𝐍𝐈𝐆𝐇𝐓-𝐇𝐎𝐖𝐋𝐄𝐑....!!™ 👾  \n┗━━━━━━━━━━━━━━━━━━━┛").trim();
    await _0x5cae3a.sendMessage(_0x14a9ae, {
      'text': _0x43d9d7
    }, {
      'quoted': _0x43f7f7
    });
  } catch (_0x519554) {
    console.error("Error in ping command:", _0x519554);
    await _0x5cae3a.sendMessage(_0x14a9ae, {
      'text': "❌ Failed to get bot status."
    });
  }
}
module.exports = pingCommand;