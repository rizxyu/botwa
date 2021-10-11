const { exec } = require('child_process')
const { MessageType } = require('@adiwajshing/baileys')
//const { sticker } = require('../lib/sticker')
const WSF = require('wa-sticker-formatter')

module.exports = {
name: ["s"],
type: ["create"],
description: "membuat command",
utilisation: "#s <reply sticker>",
async execute(m) {
let { conn, args } = data
let stiker = false
  let wsf = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/webp/.test(mime)) {
      let img = await q.download()
      m.reply('wait')
      if (!img) throw `balas stiker dengan perintah ${usedPrefix + command}`
      wsf = new WSF.Sticker(img, {
        pack: 'BOT BY FTEAM',
        author: '@_RIZXYU',
        crop: false,
      })
    } else if (/image/.test(mime)) {
      let img = await q.download()
      if (!img) throw `balas gambar dengan perintah ${usedPrefix + command}`
      wsf = new WSF.Sticker(img, {
        pack: 'BOT BY FTEAM',
        author: '@_RIZXYU',
        crop: false,
      })
    } else if (/video/.test(mime)) {
      if ((q.msg || q).seconds > 11) throw 'Maksimal 10 detik!'
      let img = await q.download()
      //m.reply(wait)
      if (!img) throw `balas video dengan perintah ${usedPrefix + command}`
      wsf = new WSF.Sticker(img, {
        pack: 'BOT BY FTEAM',
        author: '@_RIZXYU',
        crop: true,
      })
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], 'BOT BY FTEAM', '@_RIZXYU')
      else throw 'URL tidak valid!'
    }
  } catch (e) {
    throw e
  }
  finally {
    if (wsf) {
      await wsf.build()
      const sticBuffer = await wsf.get()
      if (sticBuffer) await conn.sendMessage(m.chat, sticBuffer, MessageType.sticker, {
        quoted: m,
        mimetype: 'image/webp'
      })
    }
    if (stiker) await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    // else throw `Gagal${m.isGroup ? ', balas gambarnya!' : ''}`
  }
}
}
