require("dotenv").config();
const {  Client, Discord, GatewayIntentBits, Partials, Collection } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildMessages, 
		GatewayIntentBits.GuildPresences, 
		GatewayIntentBits.GuildMessageReactions, 
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent
	], 
	partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction] 
});

const fs = require('fs');
require('dotenv').config() // remove this line if you are using replit

client.commands = new Collection()
client.events = new Collection()
client.config = require('./config.js')
client.aliases = new Collection()
client.SlashCommands = new Collection();

module.exports = client;

client.color = "#FFFF99"; // all embeds color change if you want to.

['common_handler', 'mongo_handler', 'cmdLogs', 'ErrorProtect'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord)
})


client.login(process.env.TOKEN)


/*

███╗░░░███╗░█████╗░██████╗░███████╗
████╗░████║██╔══██╗██╔══██╗██╔════╝
██╔████╔██║███████║██║░░██║█████╗░░
██║╚██╔╝██║██╔══██║██║░░██║██╔══╝░░
██║░╚═╝░██║██║░░██║██████╔╝███████╗     
╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═════╝░╚══════╝   

██████╗░██╗░░░██╗
██╔══██╗╚██╗░██╔╝
██████╦╝░╚████╔╝░
██╔══██╗░░╚██╔╝░░
██████╦╝░░░██║░░░
╚═════╝░░░░╚═╝░░░

██╗░░██╗██╗░░░██╗██████╗░███╗░░██╗░█████╗░░██████╗
██║░░██║╚██╗░██╔╝██╔══██╗████╗░██║██╔══██╗██╔════╝
███████║░╚████╔╝░██████╔╝██╔██╗██║██║░░██║╚█████╗░
██╔══██║░░╚██╔╝░░██╔═══╝░██║╚████║██║░░██║░╚═══██╗
██║░░██║░░░██║░░░██║░░░░░██║░╚███║╚█████╔╝██████╔╝
╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░░░░╚═╝░░╚══╝░╚════╝░╚═════╝░

░█████╗░░█████╗░██████╗░███████╗░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔════╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░╚█████╗░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░╚═══██╗
╚█████╔╝╚█████╔╝██████╔╝███████╗██████╔╝
░╚════╝░░╚════╝░╚═════╝░╚══════╝╚═════╝░
  */