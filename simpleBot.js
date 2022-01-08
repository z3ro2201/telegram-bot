const Telegram_cfg = require("./config/telegram_cfg.js")
const Telegram_api = require("node-telegram-bot-api")

process.env.NTBA_FIX_319 = 1

const bot = new Telegram_api(Telegram_cfg.token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, resp);
})

bot.on('message',  (msg) => {
        const chatId = msg.chat.id;
        
       	if(msg.text == "Hello") bot.sendMessage(chatId, "Hello World!");
        else if(msg.text == "안녕!") bot.sendMessage(chatId, "안녕!");
        else bot.sendMessage(chatId, "없는 명령!");w

        return;
});
