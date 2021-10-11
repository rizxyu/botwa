module.exports = {
  name: ["invert"],
  type: ["image"],
  description: "make invert images",
  utilisation: userbot.prefix+"invert",
  
  async execute(m){
    var input = "a.png"
    var output = "b.png"
    Ft.fs.writeFileSync(input,await m.quoted.download())
    var jInpt = Ft.Jimp.read(input)

Promise.all([jInpt]).then(function(images){
  const a = images[0];
  a
  .invert()
  .quality(60)
  .background(0)
  .resize(256, Ft.Jimp.AUTO)
  .write(output, (err)=>{
    if(err){
     	console.log(err)
    } else {
      conn.sendFile(m.chat,Ft.fs.readFileSync(output), output,"y")
    }
  })
}).catch((e) => console.log(e) && client.reply("Error!"))
  }
}
