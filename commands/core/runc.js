module.exports = {
name: ["run"],

type: ["owner"],
description: "set status",
utilisation: userbot.prefix + "run",

async execute(m) {

 let { conn, text } = data

const uptime = process.uptime();
setInterval(() => {
conn.setStatus(`BOT AKTIF : ${count(uptime)} | BOT DIBUAT OLEH FEAR TEAM`)
   }, 2000000)
  
 }
}

function count(seconds){
if (typeof seconds !== "number") throw "connError: Unexpected Param " + typeof seconds
let hours = Math.floor(seconds / (60*60));
let minutes = Math.floor(seconds % (60*60) / 60);
let second = Math.floor(seconds % 60);
return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(second)} Detik`
}
function pad(s) {
return (s < 10 ? '0' : '') + s;
}
