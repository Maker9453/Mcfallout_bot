try{
  const fs = require("fs")
  const mineflayer = require("mineflayer")

  const bot = mineflayer.createBot({
    host: "mcfallout.net",
    username: "hackerboss32029034@gmail.com",
    password: "sam32029034",
  })
  fs.readFile("setting.json",() => {})

  bot.once("spawn",() => {
    bot.chat("嗨 YenKa305")
  })
}catch (error){
  console.log(error)
}finally{
}
