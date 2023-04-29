const {
    Client,
    ApplicationCommandType,
    EmbedBuilder
} = require('discord.js');

module.exports = {
    name: 'uptime',
    description: 'Check Bots uptime',
    userPermissions: "ManageRoles",
    botPermissions: "ManageRoles" , 
    maintenance: false,
    ownerOnly: false,
   
    /** 
     * @param {Client} client 
     * @param {CommandInteraction} interaction
     */
     async execute(client, interaction) {
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);

        const embed = new EmbedBuilder()
            .setColor(client.color)
            .setTimestamp()
            .setDescription(`**Uptime**: \` ${days} Day(s), ${hours} Hour(s), ${minutes} Minute(s), ${seconds} Second(s) \``)

        interaction.reply({
            embeds: [embed]
        });
    }
}