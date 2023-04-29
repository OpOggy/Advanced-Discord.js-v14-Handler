const { Message, EmbedBuilder } = require("discord.js");



module.exports = {
    name: 'ping',
    description: 'Checks the client ping',
    usage: "ping",
    maintenance: true,
    ownerOnly: false,
    userPerms: "ManageRoles",
    botPerms: "ManageRoles" , 

    async execute(client, message, cmd, args, Discord) {
       message.reply({

            embeds: [
                new EmbedBuilder()
                    .setColor("#FFFF99")
                    .setDescription(`🔍 Checking Ping...`)
            ]

        }).then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            msg.edit({
                embeds: [
                    new EmbedBuilder()
                        .setColor(client.color)
                        .setDescription(`🤖 **Bot Ping:** \`${(Date.now() - message.createdTimestamp)}ms\`\n\n:hourglass: **Api Latency:** \`${Math.round(client.ws.ping)}ms\``)
                ]
            }).catch(err => {
                if (err.code !== 50007) return console.log(err)
            })

        })
    }
}