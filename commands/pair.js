const axios = require("axios");
const {
  sleep
} = require('../lib/myfunc');
async function pairCommand(_0x590efb, _0x251eb0, _0x19b108, _0x37b539) {
  try {
    if (!_0x37b539) {
      return await _0x590efb.sendMessage(_0x251eb0, {
        'text': "Please provide valid WhatsApp number\nExample: .pair 91702395XXXX",
        'contextInfo': {
          'forwardingScore': 0x1,
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': {
            'newsletterJid': "120363417002426604@newsletter",
            'newsletterName': '𝐍𝐈𝐆𝐇𝐓-𝐇𝐎𝐖𝐋𝐄𝐑....!!™',
            'serverMessageId': -0x1
          }
        }
      });
    }
    const _0x5680d4 = _0x37b539.split(',').map(_0xbcbff5 => _0xbcbff5.replace(/[^0-9]/g, '')).filter(_0x58d81f => _0x58d81f.length > 0x5 && _0x58d81f.length < 0x14);
    if (_0x5680d4.length === 0x0) {
      return await _0x590efb.sendMessage(_0x251eb0, {
        'text': "Invalid number❌️ Please use the correct format!",
        'contextInfo': {
          'forwardingScore': 0x1,
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': {
            'newsletterJid': "120363417002426604@newsletter",
            'newsletterName': "𝐍𝐈𝐆𝐇𝐓-𝐇𝐎𝐖𝐋𝐄𝐑....!!™",
            'serverMessageId': -0x1
          }
        }
      });
    }
    for (const _0x2d9bec of _0x5680d4) {
      const _0x467e30 = _0x2d9bec + '@s.whatsapp.net';
      const _0x4f19a7 = await _0x590efb.onWhatsApp(_0x467e30);
      if (!_0x4f19a7[0x0]?.["exists"]) {
        return await _0x590efb.sendMessage(_0x251eb0, {
          'text': "That number is not registered on WhatsApp❗️",
          'contextInfo': {
            'forwardingScore': 0x1,
            'isForwarded': true,
            'forwardedNewsletterMessageInfo': {
              'newsletterJid': "120363417002426604@newsletter",
              'newsletterName': "𝐍𝐈𝐆𝐇𝐓-𝐇𝐎𝐖𝐋𝐄𝐑....!!™",
              'serverMessageId': -0x1
            }
          }
        });
      }
      await _0x590efb.sendMessage(_0x251eb0, {
        'text': "Wait a moment for the code",
        'contextInfo': {
          'forwardingScore': 0x1,
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': {
            'newsletterJid': '120363417002426604@newsletter',
            'newsletterName': "𝐍𝐈𝐆𝐇𝐓-𝐇𝐎𝐖𝐋𝐄𝐑....!!™",
            'serverMessageId': -0x1
          }
        }
      });
      try {
        const _0x1e66e1 = await axios.get("https://knight-bot-paircode.onrender.com/code?number=" + _0x2d9bec);
        if (_0x1e66e1.data && _0x1e66e1.data.code) {
          const _0x42871f = _0x1e66e1.data.code;
          if (_0x42871f === "Service Unavailable") {
            throw new Error("Service Unavailable");
          }
          await sleep(0x1388);
          await _0x590efb.sendMessage(_0x251eb0, {
            'text': "Your pairing code: " + _0x42871f,
            'contextInfo': {
              'forwardingScore': 0x1,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363417002426604@newsletter",
                'newsletterName': "𝐍𝐈𝐆𝐇𝐓-𝐇𝐎𝐖𝐋𝐄𝐑....!!™",
                'serverMessageId': -0x1
              }
            }
          });
        } else {
          throw new Error("Invalid response from server");
        }
      } catch (_0xc17cc5) {
        console.error("API Error:", _0xc17cc5);
        const _0x9a8895 = _0xc17cc5.message === "Service Unavailable" ? "Service is currently unavailable. Please try again later." : "Failed to generate pairing code. Please try again later.";
        await _0x590efb.sendMessage(_0x251eb0, {
          'text': _0x9a8895,
          'contextInfo': {
            'forwardingScore': 0x1,
            'isForwarded': true,
            'forwardedNewsletterMessageInfo': {
              'newsletterJid': "120363417002426604@newsletter",
              'newsletterName': "𝐍𝐈𝐆𝐇𝐓-𝐇𝐎𝐖𝐋𝐄𝐑....!!™",
              'serverMessageId': -0x1
            }
          }
        });
      }
    }
  } catch (_0x13cb88) {
    console.error(_0x13cb88);
    await _0x590efb.sendMessage(_0x251eb0, {
      'text': "An error occurred. Please try again later.",
      'contextInfo': {
        'forwardingScore': 0x1,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363417002426604@newsletter",
          'newsletterName': "𝐍𝐈𝐆𝐇𝐓-𝐇𝐎𝐖𝐋𝐄𝐑....!!™",
          'serverMessageId': -0x1
        }
      }
    });
  }
}
module.exports = pairCommand;