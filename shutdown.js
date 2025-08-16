// 75% Hanmade 25% Chatgpt
// Suicide bom

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    owner: true,
    data: new SlashCommandBuilder()
        .setName('shutdown')
        .setDescription('Kill the bot (dev only)')
        .addStringOption(option => 
            option.setName('message')
                .setDescription('Message sent to server owner')
                .setRequired(true)
        ),
    async execute(interaction, client) {
        const guilds = await client.guilds.fetch();
        const message = interaction.options.getString('message');

        var owners = [];
        for (const guild of guilds.values()) {
            var guildinfo = await client.guilds.fetch(guild.id);
            owners.push(guildinfo.ownerId);
        }
       
        owners = [...new Set(owners)];

        for (const owner of owners) {
            var user = await client.users.fetch(owner);
            await user.send(message).catch(err => {});
        }

        await interaction.reply({ content: 'Payo Bot has been shutdown (please run the shutdown command 2 times to actually kill the bot if you are still in the first step of actually turning Payo Bot off as the server will restart itself.)', ephemeral: true });
        process.exit();
    }
};
