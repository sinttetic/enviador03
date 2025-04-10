require('dotenv').config();

const { Client } = require('discord.js-selfbot-v13');

const client = new Client();

const SERVER_ID = '1313681515921801237';
const CHANNEL_ID = '1357094802956750978';
const TARGET_BOT_ID = '1171547983842660420';

client.on('ready', () => {
    console.log(`${client.user.username} está pronta!`);
});

client.on('messageCreate', async (message) => {
    if (message.guildId !== SERVER_ID) return; // Check if message is in the correct server
    if (message.channelId !== CHANNEL_ID) return; // Check if message is in the correct channel
    if (message.author.id !== TARGET_BOT_ID) return; // Check if message is from the target bot


    const content = message.content;
    const commandPattern = /^(3\s)Use\s(o\scomando\s`)(.*?)(`)/i; // Regex atualizada para pegar o texto correto
    const match = content.match(commandPattern);

    if (match) {
        const textBetweenBackticks = match[3].trim(); // Extract the text and trim whitespace
        try {
            await message.channel.send(textBetweenBackticks);
            console.log(`Enviado: ${textBetweenBackticks}`);
            console.log(`Conteúdo da mensagem do bot: ${message.content}`); // Print para debug
            console.log(`Match[0]: ${match[0]}`);
            console.log(`Match[1]: ${match[1]}`);
            console.log(`Match[2]: ${match[2]}`);
            console.log(`Match[3]: ${match[3]}`);
        } catch (error) {
            console.error("Erro ao enviar a mensagem:", error);
        }
    } else {
        console.log("Nenhuma correspondência encontrada.");
        console.log(`Conteúdo da mensagem do bot: ${message.content}`); //Print para debug
    }
});

// client.login("NDk3NTAwODk0NzI0NjIwMzAw.Gu-GdN.C3JsZgradzEGj-eH_M3Zi8XGOt7c05laNr2SmU"); // token conta 03 rky

const token = process.env.token03
client.login(token);