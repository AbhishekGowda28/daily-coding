import telebot
import time

# piebot
# potpybot

bot_token = "777937869:AAFKyFhwn7SLo52YulPx7ZJuQILKxBh3TM0"

bot = telebot.TeleBot(token=bot_token)


def find_at(msg):
    for text in msg:
        if '@' in text:
            return text


@bot.message_handler(commands=['start'])
def send_welcome(message):
    bot.reply_to(message, 'Welcome!')


@bot.message_handler(commands=['help'])
def responde_to_help(message):
    userName = message.from_user['first_name']
    bot.reply_to(message, 'How can {}, I help you!'.format(userName))


@bot.message_handler(func=lambda msg: msg.text is not None and '@' in msg.text)
def at_answer(message):
    texts = message.text.split()
    at_text = find_at(texts)

    bot.reply_to(message, 'https://instagram.com/{}'.format(at_text[1:]))


while True:
    try:
        bot.polling()
    except Exception:
        time.sleep(15)
