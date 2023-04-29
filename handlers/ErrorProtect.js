const client = require("../index")
const { EmbedBuilder, WebhookClient } = require("discord.js")

module.exports = async (client) => {

const Embed = new EmbedBuilder().setColor("Red").setTimestamp()
    const webhook = new WebhookClient({
        id: "1100686075694956544" || process.env.ERROR_ID,
        token: "JkOV1iIp6si_GOQkgiWOY2bAthmLtd-bc7UqEbHKLiKcDLq-iUpTxyyKD7dxVNs0T_cP" || process.env.ERROR_TOKEN
    });

    process.on("unhandledRejection", (reason, p) => {
        console.log(reason, p)
        webhook.send({ embeds: [Embed.setDescription("**Unhandled Rejection/Catch:\n\n** ```" + reason + "```")
        .setTitle(`⚠ | Error Encountered`)] })
    })

    process.on("uncaughtException", (err, origin) => {
        console.log(err, origin)
        webhook.send({ embeds: [Embed.setDescription("**Uncaught Exception/Catch:\n\n** ```" + err + "\n\n" + origin.toString() + "```")
        .setTitle(`⚠ | Error Encountered`)] })
    })

    process.on("uncaughtExceptionMonitor", (err, origin) => {
        console.log(err, origin)
        webhook.send({ embeds: [Embed.setDescription("**Uncaught Exception/Catch (MONITOR):\n\n** ```" + err + "\n\n" + origin.toString() + "```")
        .setTitle(`⚠ | Error Encountered`)] })
    })
}

/* 
  𝖢 O D E D  B Y: 𝖮𝗀𝗀𝗒𝖭𝗈𝗍𝖮𝗉#𝟤𝟧𝟧𝟫
  S U P P O R T | S E R V E R : https://dsc.gg/hypnos-codes
  */