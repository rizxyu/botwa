const fs = Ft.fs
const fetch = require('node-fetch')

module.exports = {

name: ["nuliskiri"],

type: ["maker"],
useLimit: true,
description: "menulis dengan text",
utilisation: userbot.prefix + "nuliskiri teks",

async execute(m) {
 let { conn, text } = data
if (text[0]) return m.reply('teksnya?')

let res = await fetch(`https://hardianto.xyz/api/nuliskiri?text=${text}&apikey=hardianto`)

conn.sendFile(m.chat, res, 'kertas.jpg', 'Sudah Jadi jangan lupa support bot kami ya', m)
   }
}
