const Telegrambot = require('node-telegram-bot-api');

const token = '';

const bot = new Telegrambot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, resp);
})

bot.on('message',  (msg) => {
    const chatId = msg.chat.id;
    
    bot.sendMessage(chatId, '메시지 수신')
})