const fs = Ft.fs
const fetch = require("node-fetch")

module.exports = {

name: ["estetik"],

type: ["random"],
useLimit: true,
description: "aesthetic foto",
utilisation: userbot.prefix + "estetik",

async execute(m) {
 let { conn, text } = data

let res = await fetch('https://github.com/Rizxyu/FEATURE-BOT/raw/main/random/cecan.json')


let dot = await res.json()
    let json = dot[Math.floor(Math.random() * dot.length)]
 //let cp = `${json.url}`
conn.sendFile(m.chat, json.url, 'p.jpg', 'done', m)
   }
}
