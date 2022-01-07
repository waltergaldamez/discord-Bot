/* eslint-disable no-lonely-if */
/* eslint-disable indent */
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

const Discord = require('discord.js');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', msg => {
    const parsed = msg.content.toLowerCase().split(' ');
    console.log(parsed);
    if (parsed.includes('looking', 'for', 'delegator')
        || parsed.includes('delegate', 'me')
        || parsed.includes('need', 'delegator')
        || parsed.includes('looking', 'for', 'delegation')
        || parsed.includes('delegator', 'here')
        || parsed.includes('have', 'experience', 'poker')
        || parsed.includes('looking', 'to', 'be', 'delegated')
        || parsed.includes('consider', 'me')) {
        msg.reply('please fill out application at <#922892819050401902> to apply for delegation');
    }
    return;
});
/*
// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephermal:true });
    }
});
*/
client.login(token);

