const client = require('../index'); 
const { WebhookClient, EmbedBuilder } = require("discord.js")
const config = require("../config.js")

//---------------------------- B O T | L E A V E --------------------------

 client.on("guildDelete", async (guild) => {
     const logchannel = new WebhookClient({
       url: `${config.webhook.leave}`
    })
    let guilds = client.guilds.cache.size;

    let owner = await guild.fetchOwner();
    const embed = new EmbedBuilder()
    .setAuthor({ iconURL: guild.iconURL(), name: guild.name})
    .setTitle("GUILD REMOVED")
    .setDescription(`**Guild Name:**\n \`\`\`${guild.name} (${guild.id})\`\`\` \n**Guild Owner:** \`\`\`${owner.user.tag} (${owner.id})\`\`\`\n**Guild Members:** \`\`\`${guild.memberCount}\`\`\`\n**Total Guilds:** \`\`\`${guilds}\`\`\``)
    .setColor(client.color)
    
    logchannel.send({ embeds: [embed], username: "Leave Logger"})

})
