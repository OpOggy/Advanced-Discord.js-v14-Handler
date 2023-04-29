require('dotenv').config() // remove this line if you are using replit
const client = require("../index")
const Discord = require('discord.js')
const { Database } = require("quickmongo")
const { EmbedBuilder } = require('discord.js')
const DATABASE = process.env.DATABASE_TOKEN
const quickmongo = new Database(DATABASE)
const cooldowns = new Map()
const prefix = process.env.PREFIX

client.on("messageCreate", async (message) => {

    if (message.author.bot || !message.guild) return

    if (!message.content.startsWith(prefix)) return

    const args = message.content.slice(prefix.length).split(/ +/)
    const cmd = args.shift().toLowerCase()

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd))

   //-------------------------------------------- C O O L D O W N -------------------------------------------

  if (command) {

    if (!cooldowns.has(command.name)) {

      cooldowns.set(command.name, new Discord.Collection())

    }

    const currentTime = Date.now()
    const timeStamps = cooldowns.get(command.name)
    const cooldownAmount = (command.cooldown) * 1000

    if (timeStamps.has(message.author.id)) {

      const expTime = timeStamps.get(message.author.id) + cooldownAmount

      if (currentTime < expTime) {

        const timeLeft = (expTime - currentTime) / 1000

        const tmotEmbed = new Discord.EmbedBuilder()
          .setColor("#deec0f")
          .setDescription(`❌ - Please wait \`${timeLeft.toFixed(1)}\` more seconds before using \`${command.name}\`!`)

        return message.reply({ embeds: [tmotEmbed] })

      }

    }
    timeStamps.set(message.author.id, currentTime)

        setTimeout(() => {
            timeStamps.delete(message.author.id)
        }, cooldownAmount)

        // cooldown system ends

//-------------------------------------------- P E R M I S S I O N-------------------------------------------

     const momsgEmbed = new EmbedBuilder()
            .setColor('#deec0f')
            .setDescription("❌ - I need atleast `SEND MESSAGES`, `EMBED LINKS` permissions to execute any command in this server!")

        const upEmbed = new EmbedBuilder()
            .setColor('#deec0f')
            .setDescription(`❌ - You need \`${command.UserPerms || []}\` permission(s) to execute this command!`)

        const bpEmbed = new EmbedBuilder()
            .setColor('#deec0f')
            .setDescription(`❌ - I need \`${command.BotPerms || []}\` permission(s) to execute this command!`)

        if (!message.guild.members.me.permissions.has(["SendMessages", "EmbedLinks"])) return message.member.send({ embeds: [momsgEmbed] }).catch(err => console.log(err))

        if (!message.member.permissions.has(command.UserPerms || [])) return message.reply({ embeds: [upEmbed] })

        if (!message.guild.members.me.permissions.has(command.BotPerms || [])) return message.reply({ embeds: [bpEmbed] });

         //-------------------------------------------- M A I N T A I N C E-------------------------------------------
        if (command.maintenance) {
            if (!owners.includes(message.author.id)) {
                return message.reply({
                  embeds: [new EmbedBuilder()
           .setColor(client.color)
           .setDescription(`This command is on maintenance please try later, Thank you!`)]
                })
            }
        }
     //-------------------------------------------- O W N E R S-------------------------------------------
        
        if (command.ownerOnly) {
            if (!owners.includes(message.author.id)) {
                return message.reply({
                   embeds: [new EmbedBuilder()
           .setColor(client.color)
           .setDescription(`Only the Bot Developers are allowed to run this command!`)]
                })
            }
        }; 


        command.execute(client, message, cmd, args, Discord)

    }

})

/* 
  𝖢 O D E D  B Y: 𝖮𝗀𝗀𝗒𝖭𝗈𝗍𝖮𝗉#𝟤𝟧𝟧𝟫
  S U P P O R T | S E R V E R : https://dsc.gg/hypnos-codes
  */