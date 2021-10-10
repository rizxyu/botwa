const fs = Ft.fs
const fetch = require("node-fetch")

module.exports = {
name: ["poly"],
type: ["maker"],
useLimit: true,
description: "make poly video",
utilisation: userbot.prefix + "poly",

async execute(m) {
let { conn, text } = data
let json = await res.json()

let res = await fetch(`https://hardianto.xyz/api/photooxy?effect=poly&query=${text}&apikey=hardianto`)
conn.sendFile(m.chat, json.result, 'poly.mp4', 'done', m)
  }
}
