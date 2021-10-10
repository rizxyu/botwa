const fs = Ft.fs
const { canvas } = require("canvacord")

module.exports = {
name: ["rip"],
type: ["maker"],
useLimit: true,
description: "make Rip picture",
utilisation: userbot.prefix + "rip",

async execute(m) {
const name = conn.getName(m.sender)

canvas.rip(await conn.getProfilePicture(m.sender)).then((p) => 
conn.sendButImg(m.chat, p, `Telah meninggal ${conn.getName(m.sender)}`, `Botol`, `innalilahi`, `innalilahi`, m))
}
}
