const client = require('../index'); 
const { owners } = require('../json/owners.json'); 
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
client.on("interactionCreate", async (interaction) => {

//-------------------------------------------- S L A S H | C M D-------------------------------------------
  
    if (interaction.isChatInputCommand()) {
        const command = client.SlashCommands.get(interaction.commandName);
      
        if (!command) return interaction.reply
          ({ content: `The Commands You're trying to execute doest't exist!`, 
            ephemeral: true 
           }) && client.commands.delete(commandName)

  

//-------------------------------------------- P E R M I S S I O N S -------------------------------------------

//---------------------------- D E F A U L T | P E R M ----------------------------

if(!interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.SendMessages))
      return interaction.user.dmChannel.send
        ({embeds: [new EmbedBuilder()
           .setColor(client.color)
           .setDescription(`I don't have permissions To \`SendMessages\``)]
         })
    
      
if(!interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.ViewChannel))
      return;
      
if (!interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.EmbedLinks))
      return interaction.reply
         ({embeds: [new EmbedBuilder()
           .setColor(client.color)
           .setDescription(`I don't have permissions To \`SendMessages\``)],
           ephemeral: true,
        
    })
       /* ({
        content: `I don't have permissions To \`EmbedLinks\``,
        ephemeral: true,
      }); */


      
//---------------------------- U S E R | P E R M ----------------------------

      const upEmbed = new EmbedBuilder()
            .setColor(client.color)
            .setDescription(`❌ - You need \`${command.userPermissions || []}\` permission(s) to execute this command!`)
        
        if
      (!interaction.member.permissions.has(command.userPermissions || [])) 
        return interaction.reply({
            embeds: [upEmbed],
            ephemeral: true
        });


//---------------------------- B O T S| P E R M ----------------------------

      const bpEmbed = new EmbedBuilder()
            .setColor(client.color)
            .setDescription(`❌ - I need \`${command.botPermissions || []}\` permission(s) to execute this command!`)

        if (!interaction.guild.members.me.permissions.has(command.botPermissions || []))
            return interaction.reply({
                embeds: [bpEmbed],
                ephemeral: true
            });

//-------------------------------------- M A I N T E N A N C E -------------------------------------------
      
        if (command.maintenance) {
            if (!owners.includes(interaction.user.id)) {
                return interaction.reply({
                   embeds: [new EmbedBuilder()
           .setColor(client.color)
           .setDescription(`This command is on maintenance please try later, Thank you!`)]
                })
            }
        }
      
//-------------------------------------- O W N E R | C M D S -------------------------------------------
      
        if (command.ownerOnly) {
            if (!owners.includes(interaction.user.id)) {
                return interaction.reply({
                   embeds: [new EmbedBuilder()
           .setColor(client.color)
           .setDescription(`Only the Bot Developers are allowed to run this command!`)]
                })
            }
        };

      command.execute(client, interaction)
    }

//-------------------------------------------- C O N T E X T | M E N U -------------------------------------------
  
    if (interaction.isContextMenuCommand ()) {
        const command = client.SlashCommands.get(interaction.commandName);
        if (command) command.execute(client, interaction);
    }

})


/* 
  𝖢 O D E D  B Y: 𝖮𝗀𝗀𝗒𝖭𝗈𝗍𝖮𝗉#𝟤𝟧𝟧𝟫
  S U P P O R T | S E R V E R : https://dsc.gg/hypnos-codes
  */