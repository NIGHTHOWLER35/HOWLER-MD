const settings = require("./settings");
require("./config.js");
const {
  isBanned
} = require("./lib/isBanned");
const fs = require('fs');
const {
  addWelcome,
  delWelcome,
  isWelcomeOn,
  addGoodbye,
  delGoodBye,
  isGoodByeOn,
  isSudo
} = require("./lib/index");
const {
  autotypingCommand,
  isAutotypingEnabled,
  handleAutotypingForMessage,
  handleAutotypingForCommand,
  showTypingAfterCommand
} = require("./commands/autotyping");
const {
  autoreadCommand,
  isAutoreadEnabled,
  handleAutoread
} = require("./commands/autoread");
const tagAllCommand = require("./commands/tagall");
const helpCommand = require("./commands/help");
const banCommand = require("./commands/ban");
const {
  promoteCommand
} = require('./commands/promote');
const {
  demoteCommand
} = require("./commands/demote");
const muteCommand = require("./commands/mute");
const unmuteCommand = require("./commands/unmute");
const stickerCommand = require("./commands/sticker");
const isAdmin = require("./lib/isAdmin");
const warnCommand = require("./commands/warn");
const warningsCommand = require("./commands/warnings");
const ttsCommand = require("./commands/tts");
const {
  tictactoeCommand,
  handleTicTacToeMove
} = require("./commands/tictactoe");
const {
  incrementMessageCount,
  topMembers
} = require("./commands/topmembers");
const ownerCommand = require('./commands/owner');
const deleteCommand = require('./commands/delete');
const {
  handleAntilinkCommand,
  handleLinkDetection
} = require("./commands/antilink");
const {
  handleAntitagCommand,
  handleTagDetection
} = require('./commands/antitag');
const {
  Antilink
} = require("./lib/antilink");
const memeCommand = require('./commands/meme');
const tagCommand = require("./commands/tag");
const tagNotAdminCommand = require("./commands/tagnotadmin");
const hideTagCommand = require('./commands/hidetag');
const jokeCommand = require("./commands/joke");
const quoteCommand = require("./commands/quote");
const factCommand = require('./commands/fact');
const weatherCommand = require("./commands/weather");
const newsCommand = require('./commands/news');
const kickCommand = require("./commands/kick");
const simageCommand = require("./commands/simage");
const attpCommand = require('./commands/attp');
const {
  startHangman,
  guessLetter
} = require("./commands/hangman");
const {
  startTrivia,
  answerTrivia
} = require("./commands/trivia");
const {
  complimentCommand
} = require("./commands/compliment");
const {
  insultCommand
} = require("./commands/insult");
const {
  eightBallCommand
} = require("./commands/eightball");
const {
  lyricsCommand
} = require("./commands/lyrics");
const {
  dareCommand
} = require("./commands/dare");
const {
  truthCommand
} = require('./commands/truth');
const {
  clearCommand
} = require("./commands/clear");
const pingCommand = require("./commands/ping");
const aliveCommand = require("./commands/alive");
const blurCommand = require('./commands/img-blur');
const welcomeCommand = require("./commands/welcome");
const goodbyeCommand = require("./commands/goodbye");
const githubCommand = require("./commands/github");
const {
  handleAntiBadwordCommand,
  handleBadwordDetection
} = require('./lib/antibadword');
const antibadwordCommand = require("./commands/antibadword");
const {
  handleChatbotCommand,
  handleChatbotResponse
} = require("./commands/chatbot");
const takeCommand = require('./commands/take');
const {
  flirtCommand
} = require("./commands/flirt");
const characterCommand = require("./commands/character");
const wastedCommand = require("./commands/wasted");
const shipCommand = require("./commands/ship");
const groupInfoCommand = require("./commands/groupinfo");
const resetlinkCommand = require('./commands/resetlink');
const staffCommand = require("./commands/staff");
const unbanCommand = require("./commands/unban");
const emojimixCommand = require("./commands/emojimix");
const {
  handlePromotionEvent
} = require("./commands/promote");
const {
  handleDemotionEvent
} = require('./commands/demote');
const viewOnceCommand = require("./commands/viewonce");
const clearSessionCommand = require("./commands/clearsession");
const {
  autoStatusCommand,
  handleStatusUpdate
} = require("./commands/autostatus");
const {
  simpCommand
} = require("./commands/simp");
const {
  stupidCommand
} = require("./commands/stupid");
const stickerTelegramCommand = require("./commands/stickertelegram");
const textmakerCommand = require('./commands/textmaker');
const {
  handleAntideleteCommand,
  handleMessageRevocation,
  storeMessage
} = require("./commands/antidelete");
const clearTmpCommand = require("./commands/cleartmp");
const setProfilePicture = require("./commands/setpp");
const {
  setGroupDescription,
  setGroupName,
  setGroupPhoto
} = require('./commands/groupmanage');
const instagramCommand = require("./commands/instagram");
const facebookCommand = require("./commands/facebook");
const spotifyCommand = require("./commands/spotify");
const playCommand = require("./commands/play");
const tiktokCommand = require('./commands/tiktok');
const songCommand = require('./commands/song');
const aiCommand = require('./commands/ai');
const urlCommand = require("./commands/url");
const {
  handleTranslateCommand
} = require("./commands/translate");
const {
  handleSsCommand
} = require('./commands/ss');
const {
  addCommandReaction,
  handleAreactCommand
} = require('./lib/reactions');
const {
  goodnightCommand
} = require("./commands/goodnight");
const {
  shayariCommand
} = require("./commands/shayari");
const {
  rosedayCommand
} = require("./commands/roseday");
const imagineCommand = require("./commands/imagine");
const videoCommand = require("./commands/video");
const sudoCommand = require("./commands/sudo");
const {
  miscCommand,
  handleHeart
} = require('./commands/misc');
const {
  animeCommand
} = require("./commands/anime");
const {
  piesCommand,
  piesAlias
} = require("./commands/pies");
const stickercropCommand = require("./commands/stickercrop");
const updateCommand = require("./commands/update");
const removebgCommand = require("./commands/removebg");
const {
  reminiCommand
} = require("./commands/remini");
const {
  igsCommand
} = require("./commands/igs");
const {
  anticallCommand,
  readState: readAnticallState
} = require("./commands/anticall");
const {
  pmblockerCommand,
  readState: readPmBlockerState
} = require("./commands/pmblocker");
const settingsCommand = require("./commands/settings");
const soraCommand = require("./commands/sora");
global.packname = settings.packname;
global.author = settings.author;
global.channelLink = "https://whatsapp.com/channel/0029Vb56S8R4yltWXkgB5s1h";
global.ytch = "TEAM_NIGHT-HOWLER";
const channelInfo = {
  'contextInfo': {
    'forwardingScore': 0x1,
    'isForwarded': true,
    'forwardedNewsletterMessageInfo': {
      'newsletterJid': "120363417002426604@newsletter",
      'newsletterName': "HOWLER MD",
      'serverMessageId': -0x1
    }
  }
};
async function handleMessages(_0x2cb0b6, _0x8c2a8a, _0x3dfe3c) {
  try {
    const {
      messages: _0x1bfba0,
      type: _0x75668b
    } = _0x8c2a8a;
    if (_0x75668b !== "notify") {
      return;
    }
    const _0xfa1eec = _0x1bfba0[0x0];
    if (!_0xfa1eec?.['message']) {
      return;
    }
    await handleAutoread(_0x2cb0b6, _0xfa1eec);
    if (_0xfa1eec.message) {
      storeMessage(_0xfa1eec);
    }
    if (_0xfa1eec.message?.['protocolMessage']?.["type"] === 0x0) {
      await handleMessageRevocation(_0x2cb0b6, _0xfa1eec);
      return;
    }
    const _0x3b15e4 = _0xfa1eec.key.remoteJid;
    const _0x206523 = _0xfa1eec.key.participant || _0xfa1eec.key.remoteJid;
    const _0xe22b87 = _0x3b15e4.endsWith("@g.us");
    const _0x18901d = await isSudo(_0x206523);
    const _0x9b265b = (_0xfa1eec.message?.["conversation"]?.["trim"]() || _0xfa1eec.message?.['extendedTextMessage']?.["text"]?.["trim"]() || _0xfa1eec.message?.["imageMessage"]?.["caption"]?.["trim"]() || _0xfa1eec.message?.['videoMessage']?.["caption"]?.["trim"]() || '').toLowerCase().replace(/\.\s+/g, '.').trim();
    const _0x3a15ab = _0xfa1eec.message?.["conversation"]?.['trim']() || _0xfa1eec.message?.["extendedTextMessage"]?.["text"]?.["trim"]() || _0xfa1eec.message?.['imageMessage']?.["caption"]?.['trim']() || _0xfa1eec.message?.['videoMessage']?.["caption"]?.["trim"]() || '';
    if (_0x9b265b.startsWith('.')) {
      console.log("📝 Command used in " + (_0xe22b87 ? "group" : 'private') + ": " + _0x9b265b);
    }
    try {
      const _0x2a71c5 = JSON.parse(fs.readFileSync('./data/messageCount.json'));
      if (!_0x2a71c5.isPublic && !_0xfa1eec.key.fromMe && !_0x18901d) {
        return;
      }
    } catch (_0x2369a9) {
      console.error("Error checking access mode:", _0x2369a9);
    }
    if (isBanned(_0x206523) && !_0x9b265b.startsWith('.unban')) {
      if (Math.random() < 0.1) {
        await _0x2cb0b6.sendMessage(_0x3b15e4, {
          'text': "❌ You are banned from using the bot. Contact an admin to get unbanned.",
          ...channelInfo
        });
      }
      return;
    }
    if (/^[1-9]$/.test(_0x9b265b) || _0x9b265b.toLowerCase() === "surrender") {
      await handleTicTacToeMove(_0x2cb0b6, _0x3b15e4, _0x206523, _0x9b265b);
      return;
    }
    if (!_0xfa1eec.key.fromMe) {
      incrementMessageCount(_0x3b15e4, _0x206523);
    }
    if (_0xe22b87 && _0x9b265b) {
      await handleBadwordDetection(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b, _0x206523);
    }
    if (!_0xe22b87 && !_0xfa1eec.key.fromMe && !_0x18901d) {
      try {
        const _0x7d1a16 = readPmBlockerState();
        if (_0x7d1a16.enabled) {
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': _0x7d1a16.message || "Private messages are blocked. Please contact the owner in groups only."
          });
          await new Promise(_0x16a826 => setTimeout(_0x16a826, 0x5dc));
          try {
            await _0x2cb0b6.updateBlockStatus(_0x3b15e4, "block");
          } catch (_0x22cf25) {}
          return;
        }
      } catch (_0x23ac1b) {}
    }
    if (!_0x9b265b.startsWith('.')) {
      await handleAutotypingForMessage(_0x2cb0b6, _0x3b15e4, _0x9b265b);
      if (_0xe22b87) {
        await handleChatbotResponse(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b, _0x206523);
        await Antilink(_0xfa1eec, _0x2cb0b6);
        await handleBadwordDetection(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b, _0x206523);
        await handleTagDetection(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x206523);
      }
      return;
    }
    const _0x2afd7e = [".mute", ".unmute", '.ban', '.unban', ".promote", ".demote", ".kick", ".tagall", ".tagnotadmin", '.hidetag', ".antilink", ".antitag", ".setgdesc", '.setgname', '.setgpp'];
    const _0x417e1d = _0x2afd7e.some(_0x143675 => _0x9b265b.startsWith(_0x143675));
    const _0x3c09e1 = [".mode", '.autostatus', ".antidelete", ".cleartmp", ".setpp", ".clearsession", ".areact", ".autoreact", ".autotyping", ".autoread", ".pmblocker"];
    const _0x304aec = _0x3c09e1.some(_0x5b5ca6 => _0x9b265b.startsWith(_0x5b5ca6));
    let _0x2caacf = false;
    let _0x123318 = false;
    if (_0xe22b87 && _0x417e1d) {
      const _0x37aa91 = await isAdmin(_0x2cb0b6, _0x3b15e4, _0x206523, _0xfa1eec);
      _0x2caacf = _0x37aa91.isSenderAdmin;
      _0x123318 = _0x37aa91.isBotAdmin;
      if (!_0x123318) {
        await _0x2cb0b6.sendMessage(_0x3b15e4, {
          'text': "Please make the bot an admin to use admin commands.",
          ...channelInfo
        }, {
          'quoted': _0xfa1eec
        });
        return;
      }
      if (_0x9b265b.startsWith('.mute') || _0x9b265b === '.unmute' || _0x9b265b.startsWith(".ban") || _0x9b265b.startsWith(".unban") || _0x9b265b.startsWith(".promote") || _0x9b265b.startsWith('.demote')) {
        if (!_0x2caacf && !_0xfa1eec.key.fromMe) {
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "Sorry, only group admins can use this command.",
            ...channelInfo
          }, {
            'quoted': _0xfa1eec
          });
          return;
        }
      }
    }
    if (_0x304aec) {
      if (!_0xfa1eec.key.fromMe && !_0x18901d) {
        await _0x2cb0b6.sendMessage(_0x3b15e4, {
          'text': "❌ This command is only available for the owner or sudo!"
        }, {
          'quoted': _0xfa1eec
        });
        return;
      }
    }
    let _0x2267e9 = false;
    switch (true) {
      case _0x9b265b === ".simage":
        {
          const _0x4a01b0 = _0xfa1eec.message?.["extendedTextMessage"]?.["contextInfo"]?.['quotedMessage'];
          if (_0x4a01b0?.["stickerMessage"]) {
            await simageCommand(_0x2cb0b6, _0x4a01b0, _0x3b15e4);
          } else {
            await _0x2cb0b6.sendMessage(_0x3b15e4, {
              'text': "Please reply to a sticker with the .simage command to convert it.",
              ...channelInfo
            }, {
              'quoted': _0xfa1eec
            });
          }
          _0x2267e9 = true;
          break;
        }
      case _0x9b265b.startsWith('.kick'):
        const _0x50c082 = _0xfa1eec.message.extendedTextMessage?.["contextInfo"]?.["mentionedJid"] || [];
        await kickCommand(_0x2cb0b6, _0x3b15e4, _0x206523, _0x50c082, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".mute"):
        {
          const _0x4b9340 = _0x9b265b.trim().split(/\s+/);
          const _0x5cc3d7 = _0x4b9340[0x1];
          const _0x557055 = _0x5cc3d7 !== undefined ? parseInt(_0x5cc3d7, 0xa) : undefined;
          if (_0x5cc3d7 !== undefined && (isNaN(_0x557055) || _0x557055 <= 0x0)) {
            await _0x2cb0b6.sendMessage(_0x3b15e4, {
              'text': "Please provide a valid number of minutes or use .mute with no number to mute immediately.",
              ...channelInfo
            }, {
              'quoted': _0xfa1eec
            });
          } else {
            await muteCommand(_0x2cb0b6, _0x3b15e4, _0x206523, _0xfa1eec, _0x557055);
          }
        }
        break;
      case _0x9b265b === ".unmute":
        await unmuteCommand(_0x2cb0b6, _0x3b15e4, _0x206523);
        break;
      case _0x9b265b.startsWith(".ban"):
        await banCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b.startsWith('.unban'):
        await unbanCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b === '.help' || _0x9b265b === ".menu" || _0x9b265b === '.bot' || _0x9b265b === ".list":
        await helpCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, global.channelLink);
        _0x2267e9 = true;
        break;
      case _0x9b265b === ".sticker" || _0x9b265b === '.s':
        await stickerCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        _0x2267e9 = true;
        break;
      case _0x9b265b.startsWith(".warnings"):
        const _0x41fb42 = _0xfa1eec.message.extendedTextMessage?.["contextInfo"]?.["mentionedJid"] || [];
        await warningsCommand(_0x2cb0b6, _0x3b15e4, _0x41fb42);
        break;
      case _0x9b265b.startsWith(".warn"):
        const _0x4988e6 = _0xfa1eec.message.extendedTextMessage?.['contextInfo']?.['mentionedJid'] || [];
        await warnCommand(_0x2cb0b6, _0x3b15e4, _0x206523, _0x4988e6, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".tts"):
        const _0x5ef4f9 = _0x9b265b.slice(0x4).trim();
        await ttsCommand(_0x2cb0b6, _0x3b15e4, _0x5ef4f9, _0xfa1eec);
        break;
      case _0x9b265b.startsWith('.delete') || _0x9b265b.startsWith(".del"):
        await deleteCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x206523);
        break;
      case _0x9b265b.startsWith(".attp"):
        await attpCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b === ".settings":
        await settingsCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".mode"):
        if (!_0xfa1eec.key.fromMe && !_0x18901d) {
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "Only bot owner can use this command!",
            ...channelInfo
          }, {
            'quoted': _0xfa1eec
          });
          return;
        }
        let _0x1a8ec4;
        try {
          _0x1a8ec4 = JSON.parse(fs.readFileSync("./data/messageCount.json"));
        } catch (_0x39b9af) {
          console.error("Error reading access mode:", _0x39b9af);
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "Failed to read bot mode status",
            ...channelInfo
          });
          return;
        }
        const _0x385238 = _0x9b265b.split(" ")[0x1]?.["toLowerCase"]();
        if (!_0x385238) {
          const _0x448184 = _0x1a8ec4.isPublic ? 'public' : 'private';
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "Current bot mode: *" + _0x448184 + "*\n\nUsage: .mode public/private\n\nExample:\n.mode public - Allow everyone to use bot\n.mode private - Restrict to owner only",
            ...channelInfo
          }, {
            'quoted': _0xfa1eec
          });
          return;
        }
        if (_0x385238 !== 'public' && _0x385238 !== "private") {
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "Usage: .mode public/private\n\nExample:\n.mode public - Allow everyone to use bot\n.mode private - Restrict to owner only",
            ...channelInfo
          }, {
            'quoted': _0xfa1eec
          });
          return;
        }
        try {
          _0x1a8ec4.isPublic = _0x385238 === 'public';
          fs.writeFileSync("./data/messageCount.json", JSON.stringify(_0x1a8ec4, null, 0x2));
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "Bot is now in *" + _0x385238 + "* mode",
            ...channelInfo
          });
        } catch (_0xa32d34) {
          console.error("Error updating access mode:", _0xa32d34);
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "Failed to update bot access mode",
            ...channelInfo
          });
        }
        break;
      case _0x9b265b.startsWith(".anticall"):
        if (!_0xfa1eec.key.fromMe && !_0x18901d) {
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "Only owner/sudo can use anticall."
          }, {
            'quoted': _0xfa1eec
          });
          break;
        }
        {
          const _0x1ee38f = _0x9b265b.split(" ").slice(0x1).join(" ");
          await anticallCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x1ee38f);
        }
        break;
      case _0x9b265b.startsWith('.pmblocker'):
        if (!_0xfa1eec.key.fromMe && !_0x18901d) {
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "Only owner/sudo can use pmblocker."
          }, {
            'quoted': _0xfa1eec
          });
          _0x2267e9 = true;
          break;
        }
        {
          const _0xe1e780 = _0x9b265b.split(" ").slice(0x1).join(" ");
          await pmblockerCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0xe1e780);
        }
        _0x2267e9 = true;
        break;
      case _0x9b265b === '.owner':
        await ownerCommand(_0x2cb0b6, _0x3b15e4);
        break;
      case _0x9b265b === '.tagall':
        if (_0x2caacf || _0xfa1eec.key.fromMe) {
          await tagAllCommand(_0x2cb0b6, _0x3b15e4, _0x206523, _0xfa1eec);
        } else {
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "Sorry, only group admins can use the .tagall command.",
            ...channelInfo
          }, {
            'quoted': _0xfa1eec
          });
        }
        break;
      case _0x9b265b === ".tagnotadmin":
        await tagNotAdminCommand(_0x2cb0b6, _0x3b15e4, _0x206523, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".hidetag"):
        {
          const _0x39df33 = _0x3a15ab.slice(0x8).trim();
          const _0x104b5f = _0xfa1eec.message?.['extendedTextMessage']?.['contextInfo']?.['quotedMessage'] || null;
          await hideTagCommand(_0x2cb0b6, _0x3b15e4, _0x206523, _0x39df33, _0x104b5f, _0xfa1eec);
        }
        break;
      case _0x9b265b.startsWith(".tag"):
        const _0x58ae75 = _0x3a15ab.slice(0x4).trim();
        const _0x2d8a01 = _0xfa1eec.message?.["extendedTextMessage"]?.["contextInfo"]?.["quotedMessage"] || null;
        await tagCommand(_0x2cb0b6, _0x3b15e4, _0x206523, _0x58ae75, _0x2d8a01, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".antilink"):
        if (!_0xe22b87) {
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "This command can only be used in groups.",
            ...channelInfo
          }, {
            'quoted': _0xfa1eec
          });
          return;
        }
        if (!_0x123318) {
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "Please make the bot an admin first.",
            ...channelInfo
          }, {
            'quoted': _0xfa1eec
          });
          return;
        }
        await handleAntilinkCommand(_0x2cb0b6, _0x3b15e4, _0x9b265b, _0x206523, _0x2caacf, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".antitag"):
        if (!_0xe22b87) {
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "This command can only be used in groups.",
            ...channelInfo
          }, {
            'quoted': _0xfa1eec
          });
          return;
        }
        if (!_0x123318) {
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "Please make the bot an admin first.",
            ...channelInfo
          }, {
            'quoted': _0xfa1eec
          });
          return;
        }
        await handleAntitagCommand(_0x2cb0b6, _0x3b15e4, _0x9b265b, _0x206523, _0x2caacf, _0xfa1eec);
        break;
      case _0x9b265b === ".meme":
        await memeCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b === ".joke":
        await jokeCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b === '.quote':
        await quoteCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b === ".fact":
        await factCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".weather"):
        const _0x43544d = _0x9b265b.slice(0x9).trim();
        if (_0x43544d) {
          await weatherCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x43544d);
        } else {
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "Please specify a city, e.g., .weather London",
            ...channelInfo
          }, {
            'quoted': _0xfa1eec
          });
        }
        break;
      case _0x9b265b === '.news':
        await newsCommand(_0x2cb0b6, _0x3b15e4);
        break;
      case _0x9b265b.startsWith('.ttt') || _0x9b265b.startsWith(".tictactoe"):
        const _0x485459 = _0x9b265b.split(" ").slice(0x1).join(" ");
        await tictactoeCommand(_0x2cb0b6, _0x3b15e4, _0x206523, _0x485459);
        break;
      case _0x9b265b.startsWith('.move'):
        const _0x5e8084 = parseInt(_0x9b265b.split(" ")[0x1]);
        if (isNaN(_0x5e8084)) {
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "Please provide a valid position number for Tic-Tac-Toe move.",
            ...channelInfo
          }, {
            'quoted': _0xfa1eec
          });
        } else {
          tictactoeMove(_0x2cb0b6, _0x3b15e4, _0x206523, _0x5e8084);
        }
        break;
      case _0x9b265b === ".topmembers":
        topMembers(_0x2cb0b6, _0x3b15e4, _0xe22b87);
        break;
      case _0x9b265b.startsWith(".hangman"):
        startHangman(_0x2cb0b6, _0x3b15e4);
        break;
      case _0x9b265b.startsWith('.guess'):
        const _0x175d83 = _0x9b265b.split(" ")[0x1];
        if (_0x175d83) {
          guessLetter(_0x2cb0b6, _0x3b15e4, _0x175d83);
        } else {
          _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "Please guess a letter using .guess <letter>",
            ...channelInfo
          }, {
            'quoted': _0xfa1eec
          });
        }
        break;
      case _0x9b265b.startsWith('.trivia'):
        startTrivia(_0x2cb0b6, _0x3b15e4);
        break;
      case _0x9b265b.startsWith(".answer"):
        const _0x48b557 = _0x9b265b.split(" ").slice(0x1).join(" ");
        if (_0x48b557) {
          answerTrivia(_0x2cb0b6, _0x3b15e4, _0x48b557);
        } else {
          _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "Please provide an answer using .answer <answer>",
            ...channelInfo
          }, {
            'quoted': _0xfa1eec
          });
        }
        break;
      case _0x9b265b.startsWith(".compliment"):
        await complimentCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b.startsWith('.insult'):
        await insultCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".8ball"):
        const _0x1fb5ac = _0x9b265b.split(" ").slice(0x1).join(" ");
        await eightBallCommand(_0x2cb0b6, _0x3b15e4, _0x1fb5ac);
        break;
      case _0x9b265b.startsWith(".lyrics"):
        const _0x97bae9 = _0x9b265b.split(" ").slice(0x1).join(" ");
        await lyricsCommand(_0x2cb0b6, _0x3b15e4, _0x97bae9, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".simp"):
        const _0x3bca38 = _0xfa1eec.message?.["extendedTextMessage"]?.["contextInfo"]?.["quotedMessage"];
        const _0x1d3d81 = _0xfa1eec.message?.["extendedTextMessage"]?.["contextInfo"]?.["mentionedJid"] || [];
        await simpCommand(_0x2cb0b6, _0x3b15e4, _0x3bca38, _0x1d3d81, _0x206523);
        break;
      case _0x9b265b.startsWith('.stupid') || _0x9b265b.startsWith('.itssostupid') || _0x9b265b.startsWith(".iss"):
        const _0x5cc114 = _0xfa1eec.message?.['extendedTextMessage']?.["contextInfo"]?.["quotedMessage"];
        const _0x122a3d = _0xfa1eec.message?.["extendedTextMessage"]?.['contextInfo']?.['mentionedJid'] || [];
        const _0x17568e = _0x9b265b.split(" ").slice(0x1);
        await stupidCommand(_0x2cb0b6, _0x3b15e4, _0x5cc114, _0x122a3d, _0x206523, _0x17568e);
        break;
      case _0x9b265b === ".dare":
        await dareCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b === ".truth":
        await truthCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b === ".clear":
        if (_0xe22b87) {
          await clearCommand(_0x2cb0b6, _0x3b15e4);
        }
        break;
      case _0x9b265b.startsWith(".promote"):
        const _0x502451 = _0xfa1eec.message.extendedTextMessage?.["contextInfo"]?.["mentionedJid"] || [];
        await promoteCommand(_0x2cb0b6, _0x3b15e4, _0x502451, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".demote"):
        const _0x46e5a6 = _0xfa1eec.message.extendedTextMessage?.["contextInfo"]?.['mentionedJid'] || [];
        await demoteCommand(_0x2cb0b6, _0x3b15e4, _0x46e5a6, _0xfa1eec);
        break;
      case _0x9b265b === ".ping":
        await pingCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b === ".alive":
        await aliveCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".blur"):
        const _0x1cae4b = _0xfa1eec.message?.["extendedTextMessage"]?.["contextInfo"]?.["quotedMessage"];
        await blurCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x1cae4b);
        break;
      case _0x9b265b.startsWith(".welcome"):
        if (_0xe22b87) {
          if (!_0x2caacf) {
            const _0x4f23fb = await isAdmin(_0x2cb0b6, _0x3b15e4, _0x206523);
            _0x2caacf = _0x4f23fb.isSenderAdmin;
          }
          if (_0x2caacf || _0xfa1eec.key.fromMe) {
            await welcomeCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
          } else {
            await _0x2cb0b6.sendMessage(_0x3b15e4, {
              'text': "Sorry, only group admins can use this command.",
              ...channelInfo
            }, {
              'quoted': _0xfa1eec
            });
          }
        } else {
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "This command can only be used in groups.",
            ...channelInfo
          }, {
            'quoted': _0xfa1eec
          });
        }
        break;
      case _0x9b265b.startsWith('.goodbye'):
        if (_0xe22b87) {
          if (!_0x2caacf) {
            const _0x45e14f = await isAdmin(_0x2cb0b6, _0x3b15e4, _0x206523);
            _0x2caacf = _0x45e14f.isSenderAdmin;
          }
          if (_0x2caacf || _0xfa1eec.key.fromMe) {
            await goodbyeCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
          } else {
            await _0x2cb0b6.sendMessage(_0x3b15e4, {
              'text': "Sorry, only group admins can use this command.",
              ...channelInfo
            }, {
              'quoted': _0xfa1eec
            });
          }
        } else {
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "This command can only be used in groups.",
            ...channelInfo
          }, {
            'quoted': _0xfa1eec
          });
        }
        break;
      case _0x9b265b === ".git":
      case _0x9b265b === '.github':
      case _0x9b265b === ".sc":
      case _0x9b265b === '.script':
      case _0x9b265b === ".repo":
        await githubCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b.startsWith('.antibadword'):
        if (!_0xe22b87) {
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "This command can only be used in groups.",
            ...channelInfo
          }, {
            'quoted': _0xfa1eec
          });
          return;
        }
        const _0x31d048 = await isAdmin(_0x2cb0b6, _0x3b15e4, _0x206523);
        _0x2caacf = _0x31d048.isSenderAdmin;
        _0x123318 = _0x31d048.isBotAdmin;
        if (!_0x123318) {
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "*Bot must be admin to use this feature*",
            ...channelInfo
          }, {
            'quoted': _0xfa1eec
          });
          return;
        }
        await antibadwordCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x206523, _0x2caacf);
        break;
      case _0x9b265b.startsWith(".chatbot"):
        if (!_0xe22b87) {
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "This command can only be used in groups.",
            ...channelInfo
          }, {
            'quoted': _0xfa1eec
          });
          return;
        }
        const _0x1594fc = await isAdmin(_0x2cb0b6, _0x3b15e4, _0x206523);
        if (!_0x1594fc.isSenderAdmin && !_0xfa1eec.key.fromMe) {
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "*Only admins or bot owner can use this command*",
            ...channelInfo
          }, {
            'quoted': _0xfa1eec
          });
          return;
        }
        const _0x45c5d9 = _0x9b265b.slice(0x8).trim();
        await handleChatbotCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x45c5d9);
        break;
      case _0x9b265b.startsWith(".take"):
        const _0x35de3d = _0x3a15ab.slice(0x5).trim().split(" ");
        await takeCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x35de3d);
        break;
      case _0x9b265b === ".flirt":
        await flirtCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b.startsWith('.character'):
        await characterCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".waste"):
        await wastedCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b === ".ship":
        if (!_0xe22b87) {
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "This command can only be used in groups!",
            ...channelInfo
          }, {
            'quoted': _0xfa1eec
          });
          return;
        }
        await shipCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b === ".groupinfo" || _0x9b265b === ".infogp" || _0x9b265b === '.infogrupo':
        if (!_0xe22b87) {
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "This command can only be used in groups!",
            ...channelInfo
          }, {
            'quoted': _0xfa1eec
          });
          return;
        }
        await groupInfoCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b === ".resetlink" || _0x9b265b === ".revoke" || _0x9b265b === '.anularlink':
        if (!_0xe22b87) {
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "This command can only be used in groups!",
            ...channelInfo
          }, {
            'quoted': _0xfa1eec
          });
          return;
        }
        await resetlinkCommand(_0x2cb0b6, _0x3b15e4, _0x206523);
        break;
      case _0x9b265b === ".staff" || _0x9b265b === ".admins" || _0x9b265b === ".listadmin":
        if (!_0xe22b87) {
          await _0x2cb0b6.sendMessage(_0x3b15e4, {
            'text': "This command can only be used in groups!",
            ...channelInfo
          }, {
            'quoted': _0xfa1eec
          });
          return;
        }
        await staffCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".tourl") || _0x9b265b.startsWith('.url'):
        await urlCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".emojimix") || _0x9b265b.startsWith(".emix"):
        await emojimixCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".tg") || _0x9b265b.startsWith(".stickertelegram") || _0x9b265b.startsWith(".tgsticker") || _0x9b265b.startsWith(".telesticker"):
        await stickerTelegramCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b === ".vv":
        await viewOnceCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b === '.clearsession' || _0x9b265b === ".clearsesi":
        await clearSessionCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".autostatus"):
        const _0x4e71df = _0x9b265b.split(" ").slice(0x1);
        await autoStatusCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x4e71df);
        break;
      case _0x9b265b.startsWith(".simp"):
        await simpCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".metallic"):
        await textmakerCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b, 'metallic');
        break;
      case _0x9b265b.startsWith(".ice"):
        await textmakerCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b, 'ice');
        break;
      case _0x9b265b.startsWith('.snow'):
        await textmakerCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b, 'snow');
        break;
      case _0x9b265b.startsWith(".impressive"):
        await textmakerCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b, "impressive");
        break;
      case _0x9b265b.startsWith('.matrix'):
        await textmakerCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b, "matrix");
        break;
      case _0x9b265b.startsWith(".light"):
        await textmakerCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b, "light");
        break;
      case _0x9b265b.startsWith(".neon"):
        await textmakerCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b, "neon");
        break;
      case _0x9b265b.startsWith(".devil"):
        await textmakerCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b, "devil");
        break;
      case _0x9b265b.startsWith('.purple'):
        await textmakerCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b, "purple");
        break;
      case _0x9b265b.startsWith(".thunder"):
        await textmakerCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b, "thunder");
        break;
      case _0x9b265b.startsWith(".leaves"):
        await textmakerCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b, 'leaves');
        break;
      case _0x9b265b.startsWith('.1917'):
        await textmakerCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b, "1917");
        break;
      case _0x9b265b.startsWith(".arena"):
        await textmakerCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b, "arena");
        break;
      case _0x9b265b.startsWith(".hacker"):
        await textmakerCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b, 'hacker');
        break;
      case _0x9b265b.startsWith('.sand'):
        await textmakerCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b, "sand");
        break;
      case _0x9b265b.startsWith(".blackpink"):
        await textmakerCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b, "blackpink");
        break;
      case _0x9b265b.startsWith(".glitch"):
        await textmakerCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b, "glitch");
        break;
      case _0x9b265b.startsWith('.fire'):
        await textmakerCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b, "fire");
        break;
      case _0x9b265b.startsWith(".antidelete"):
        const _0xeec446 = _0x9b265b.slice(0xb).trim();
        await handleAntideleteCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0xeec446);
        break;
      case _0x9b265b === ".surrender":
        await handleTicTacToeMove(_0x2cb0b6, _0x3b15e4, _0x206523, 'surrender');
        break;
      case _0x9b265b === ".cleartmp":
        await clearTmpCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b === ".setpp":
        await setProfilePicture(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".setgdesc"):
        {
          const _0x51d02e = _0x3a15ab.slice(0x9).trim();
          await setGroupDescription(_0x2cb0b6, _0x3b15e4, _0x206523, _0x51d02e, _0xfa1eec);
        }
        break;
      case _0x9b265b.startsWith(".setgname"):
        {
          const _0x1276d4 = _0x3a15ab.slice(0x9).trim();
          await setGroupName(_0x2cb0b6, _0x3b15e4, _0x206523, _0x1276d4, _0xfa1eec);
        }
        break;
      case _0x9b265b.startsWith(".setgpp"):
        await setGroupPhoto(_0x2cb0b6, _0x3b15e4, _0x206523, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".instagram") || _0x9b265b.startsWith(".insta") || _0x9b265b === '.ig' || _0x9b265b.startsWith(".ig "):
        await instagramCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".igsc"):
        await igsCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, true);
        break;
      case _0x9b265b.startsWith(".igs"):
        await igsCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, false);
        break;
      case _0x9b265b.startsWith('.fb') || _0x9b265b.startsWith(".facebook"):
        await facebookCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b.startsWith('.music'):
        await playCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".spotify"):
        await spotifyCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".play") || _0x9b265b.startsWith(".mp3") || _0x9b265b.startsWith('.ytmp3') || _0x9b265b.startsWith('.song'):
        await songCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".video") || _0x9b265b.startsWith('.ytmp4'):
        await videoCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".tiktok") || _0x9b265b.startsWith(".tt"):
        await tiktokCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b.startsWith('.gpt') || _0x9b265b.startsWith('.gemini'):
        await aiCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".translate") || _0x9b265b.startsWith(".trt"):
        const _0x37d4a5 = _0x9b265b.startsWith(".translate") ? 0xa : 0x4;
        await handleTranslateCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b.slice(_0x37d4a5));
        return;
      case _0x9b265b.startsWith('.ss') || _0x9b265b.startsWith(".ssweb") || _0x9b265b.startsWith(".screenshot"):
        const _0x1524d5 = _0x9b265b.startsWith(".screenshot") ? 0xb : _0x9b265b.startsWith(".ssweb") ? 0x6 : 0x3;
        await handleSsCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b.slice(_0x1524d5).trim());
        break;
      case _0x9b265b.startsWith(".areact") || _0x9b265b.startsWith('.autoreact') || _0x9b265b.startsWith(".autoreaction"):
        const _0x3d7b2d = _0xfa1eec.key.fromMe || _0x18901d;
        await handleAreactCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x3d7b2d);
        break;
      case _0x9b265b.startsWith('.sudo'):
        await sudoCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b === '.goodnight' || _0x9b265b === ".lovenight" || _0x9b265b === '.gn':
        await goodnightCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b === '.shayari' || _0x9b265b === ".shayri":
        await shayariCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b === ".roseday":
        await rosedayCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".imagine") || _0x9b265b.startsWith(".flux") || _0x9b265b.startsWith('.dalle'):
        await imagineCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b === '.jid':
        await _0x1f9fc5(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b.startsWith('.autotyping'):
        await autotypingCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        _0x2267e9 = true;
        break;
      case _0x9b265b.startsWith('.autoread'):
        await autoreadCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        _0x2267e9 = true;
        break;
      case _0x9b265b.startsWith(".heart"):
        await handleHeart(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      case _0x9b265b.startsWith(".horny"):
        {
          const _0x3b4560 = _0x9b265b.trim().split(/\s+/);
          const _0x7392eb = ["horny", ..._0x3b4560.slice(0x1)];
          await miscCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x7392eb);
        }
        break;
      case _0x9b265b.startsWith('.circle'):
        {
          const _0x45cc8a = _0x9b265b.trim().split(/\s+/);
          const _0x3493ec = ["circle", ..._0x45cc8a.slice(0x1)];
          await miscCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x3493ec);
        }
        break;
      case _0x9b265b.startsWith(".lgbt"):
        {
          const _0xd967e4 = _0x9b265b.trim().split(/\s+/);
          const _0x26a452 = ["lgbt", ..._0xd967e4.slice(0x1)];
          await miscCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x26a452);
        }
        break;
      case _0x9b265b.startsWith(".lolice"):
        {
          const _0x450f0c = _0x9b265b.trim().split(/\s+/);
          const _0x29e69c = ["lolice", ..._0x450f0c.slice(0x1)];
          await miscCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x29e69c);
        }
        break;
      case _0x9b265b.startsWith('.simpcard'):
        {
          const _0x194f21 = _0x9b265b.trim().split(/\s+/);
          const _0x5a70fe = ["simpcard", ..._0x194f21.slice(0x1)];
          await miscCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x5a70fe);
        }
        break;
      case _0x9b265b.startsWith('.tonikawa'):
        {
          const _0x5513ed = _0x9b265b.trim().split(/\s+/);
          const _0x3bb863 = ["tonikawa", ..._0x5513ed.slice(0x1)];
          await miscCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x3bb863);
        }
        break;
      case _0x9b265b.startsWith('.its-so-stupid'):
        {
          const _0x3221a7 = _0x9b265b.trim().split(/\s+/);
          const _0x4409cf = ["its-so-stupid", ..._0x3221a7.slice(0x1)];
          await miscCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x4409cf);
        }
        break;
      case _0x9b265b.startsWith(".namecard"):
        {
          const _0x25a70c = _0x9b265b.trim().split(/\s+/);
          const _0x2f44b9 = ["namecard", ..._0x25a70c.slice(0x1)];
          await miscCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x2f44b9);
        }
        break;
      case _0x9b265b.startsWith(".oogway2"):
      case _0x9b265b.startsWith(".oogway"):
        {
          const _0x2474b6 = _0x9b265b.trim().split(/\s+/);
          const _0x3c2c29 = _0x9b265b.startsWith(".oogway2") ? 'oogway2' : "oogway";
          const _0x566bd5 = [_0x3c2c29, ..._0x2474b6.slice(0x1)];
          await miscCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x566bd5);
        }
        break;
      case _0x9b265b.startsWith(".tweet"):
        {
          const _0x13e0db = _0x9b265b.trim().split(/\s+/);
          const _0x589069 = ["tweet", ..._0x13e0db.slice(0x1)];
          await miscCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x589069);
        }
        break;
      case _0x9b265b.startsWith(".ytcomment"):
        {
          const _0x212a16 = _0x9b265b.trim().split(/\s+/);
          const _0x161239 = ["youtube-comment", ..._0x212a16.slice(0x1)];
          await miscCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x161239);
        }
        break;
      case _0x9b265b.startsWith(".comrade"):
      case _0x9b265b.startsWith(".gay"):
      case _0x9b265b.startsWith('.glass'):
      case _0x9b265b.startsWith(".jail"):
      case _0x9b265b.startsWith(".passed"):
      case _0x9b265b.startsWith(".triggered"):
        {
          const _0xf47dd5 = _0x9b265b.trim().split(/\s+/);
          const _0x5093f6 = _0x9b265b.slice(0x1).split(/\s+/)[0x0];
          const _0x11776b = [_0x5093f6, ..._0xf47dd5.slice(0x1)];
          await miscCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x11776b);
        }
        break;
      case _0x9b265b.startsWith(".animu"):
        {
          const _0x4acaa2 = _0x9b265b.trim().split(/\s+/);
          const _0x394fa5 = _0x4acaa2.slice(0x1);
          await animeCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x394fa5);
        }
        break;
      case _0x9b265b.startsWith('.nom'):
      case _0x9b265b.startsWith(".poke"):
      case _0x9b265b.startsWith(".cry"):
      case _0x9b265b.startsWith(".kiss"):
      case _0x9b265b.startsWith(".pat"):
      case _0x9b265b.startsWith(".hug"):
      case _0x9b265b.startsWith(".wink"):
      case _0x9b265b.startsWith('.facepalm'):
      case _0x9b265b.startsWith(".face-palm"):
      case _0x9b265b.startsWith(".animuquote"):
      case _0x9b265b.startsWith(".quote"):
      case _0x9b265b.startsWith(".loli"):
        {
          const _0x7fc881 = _0x9b265b.trim().split(/\s+/);
          let _0x1381c6 = _0x7fc881[0x0].slice(0x1);
          if (_0x1381c6 === "facepalm") {
            _0x1381c6 = "face-palm";
          }
          if (_0x1381c6 === "quote" || _0x1381c6 === "animuquote") {
            _0x1381c6 = "quote";
          }
          await animeCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, [_0x1381c6]);
        }
        break;
      case _0x9b265b === ".crop":
        await stickercropCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        _0x2267e9 = true;
        break;
      case _0x9b265b.startsWith(".pies"):
        {
          const _0x2461af = _0x3a15ab.trim().split(/\s+/);
          const _0x3fbc30 = _0x2461af.slice(0x1);
          await piesCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x3fbc30);
          _0x2267e9 = true;
        }
        break;
      case _0x9b265b === ".china":
        await piesAlias(_0x2cb0b6, _0x3b15e4, _0xfa1eec, "china");
        _0x2267e9 = true;
        break;
      case _0x9b265b === '.indonesia':
        await piesAlias(_0x2cb0b6, _0x3b15e4, _0xfa1eec, "indonesia");
        _0x2267e9 = true;
        break;
      case _0x9b265b === ".japan":
        await piesAlias(_0x2cb0b6, _0x3b15e4, _0xfa1eec, "japan");
        _0x2267e9 = true;
        break;
      case _0x9b265b === ".korea":
        await piesAlias(_0x2cb0b6, _0x3b15e4, _0xfa1eec, "korea");
        _0x2267e9 = true;
        break;
      case _0x9b265b === '.hijab':
        await piesAlias(_0x2cb0b6, _0x3b15e4, _0xfa1eec, 'hijab');
        _0x2267e9 = true;
        break;
      case _0x9b265b.startsWith(".update"):
        {
          const _0x436f05 = _0x3a15ab.trim().split(/\s+/);
          const _0x87117a = _0x436f05[0x1] && _0x436f05[0x1].startsWith("http") ? _0x436f05[0x1] : '';
          await updateCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x18901d, _0x87117a);
        }
        _0x2267e9 = true;
        break;
      case _0x9b265b.startsWith(".removebg") || _0x9b265b.startsWith('.rmbg') || _0x9b265b.startsWith(".nobg"):
        await removebgCommand.exec(_0x2cb0b6, _0xfa1eec, _0x9b265b.split(" ").slice(0x1));
        break;
      case _0x9b265b.startsWith(".remini") || _0x9b265b.startsWith('.enhance') || _0x9b265b.startsWith('.upscale'):
        await reminiCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b.split(" ").slice(0x1));
        break;
      case _0x9b265b.startsWith(".sora"):
        await soraCommand(_0x2cb0b6, _0x3b15e4, _0xfa1eec);
        break;
      default:
        if (_0xe22b87) {
          if (_0x9b265b) {
            await handleChatbotResponse(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b, _0x206523);
          }
          await Antilink(_0xfa1eec, _0x2cb0b6);
          await handleBadwordDetection(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x9b265b, _0x206523);
          await handleTagDetection(_0x2cb0b6, _0x3b15e4, _0xfa1eec, _0x206523);
        }
        _0x2267e9 = false;
        break;
    }
    if (_0x2267e9 !== false) {
      await showTypingAfterCommand(_0x2cb0b6, _0x3b15e4);
    }
    async function _0x1f9fc5(_0x5a1797, _0x6bd56f, _0x406c18) {
      const _0x5cd133 = _0x406c18.key.remoteJid;
      if (!_0x5cd133.endsWith("@g.us")) {
        return await _0x5a1797.sendMessage(_0x6bd56f, {
          'text': "❌ This command can only be used in a group."
        });
      }
      await _0x5a1797.sendMessage(_0x6bd56f, {
        'text': "✅ Group JID: " + _0x5cd133
      }, {
        'quoted': _0x406c18
      });
    }
    if (_0x9b265b.startsWith('.')) {
      await addCommandReaction(_0x2cb0b6, _0xfa1eec);
    }
  } catch (_0x551737) {
    console.error("❌ Error in message handler:", _0x551737.message);
    if (chatId) {
      await _0x2cb0b6.sendMessage(chatId, {
        'text': "❌ Failed to process command!",
        ...channelInfo
      });
    }
  }
}
async function handleGroupParticipantUpdate(_0x356f45, _0x48f27a) {
  try {
    const {
      id: _0x46144a,
      participants: _0x5f47c6,
      action: _0x2b7330,
      author: _0x283c9c
    } = _0x48f27a;
    if (!_0x46144a.endsWith('@g.us')) {
      return;
    }
    let _0x6fffc4 = true;
    try {
      const _0x4ca048 = JSON.parse(fs.readFileSync("./data/messageCount.json"));
      if (typeof _0x4ca048.isPublic === 'boolean') {
        _0x6fffc4 = _0x4ca048.isPublic;
      }
    } catch (_0x2f444f) {}
    if (_0x2b7330 === "promote") {
      if (!_0x6fffc4) {
        return;
      }
      await handlePromotionEvent(_0x356f45, _0x46144a, _0x5f47c6, _0x283c9c);
      return;
    }
    if (_0x2b7330 === 'demote') {
      if (!_0x6fffc4) {
        return;
      }
      await handleDemotionEvent(_0x356f45, _0x46144a, _0x5f47c6, _0x283c9c);
      return;
    }
    if (_0x2b7330 === "add") {
      const _0x3177b9 = await isWelcomeOn(_0x46144a);
      if (!_0x3177b9) {
        return;
      }
      const _0x59a279 = await _0x356f45.groupMetadata(_0x46144a);
      const _0x4b4175 = _0x59a279.subject;
      const _0x207a95 = _0x59a279.desc || "No description available";
      for (const _0xfa87dd of _0x5f47c6) {
        const _0x51abf3 = _0xfa87dd.split('@')[0x0];
        const _0x59f539 = "Welcome {user} to {group}! 🎉".replace("{user}", '@' + _0x51abf3).replace("{group}", _0x4b4175).replace("{description}", _0x207a95);
        await _0x356f45.sendMessage(_0x46144a, {
          'text': _0x59f539,
          'mentions': [_0xfa87dd]
        });
      }
    }
    if (_0x2b7330 === "remove") {
      const _0x27170d = await isGoodByeOn(_0x46144a);
      if (!_0x27170d) {
        return;
      }
      const _0x2206c3 = await _0x356f45.groupMetadata(_0x46144a);
      const _0x1ea029 = _0x2206c3.subject;
      for (const _0x5625f2 of _0x5f47c6) {
        const _0x270e31 = _0x5625f2.split('@')[0x0];
        const _0x25e6e0 = "Goodbye {user} 👋".replace("{user}", '@' + _0x270e31).replace("{group}", _0x1ea029);
        await _0x356f45.sendMessage(_0x46144a, {
          'text': _0x25e6e0,
          'mentions': [_0x5625f2]
        });
      }
    }
  } catch (_0x4d65c5) {
    console.error("Error in handleGroupParticipantUpdate:", _0x4d65c5);
  }
}
module.exports = {
  'handleMessages': handleMessages,
  'handleGroupParticipantUpdate': handleGroupParticipantUpdate,
  'handleStatus': async (_0x14cd16, _0x32828b) => {
    await handleStatusUpdate(_0x14cd16, _0x32828b);
  }
};