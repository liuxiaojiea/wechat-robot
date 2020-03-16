/**
 * 实例化
 * by: Peanut
 */
const {
  Wechaty
} = require('wechaty')
const bot = new Wechaty()
bot.on('login', './listeners/on-login.js')
bot.on('message', './listeners/on-message')
bot.on('scan', './listeners/on-scan')
bot.on('friendship', './listeners/on-friendship')
bot.start()
  .then(() => console.log('开始登陆微信'))
  .catch(e => console.error(e))
module.exports = bot;