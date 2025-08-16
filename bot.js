const { Client, GatewayIntentBits, REST, Routes } = require('discord.js');

// Include only the intents your bot requires
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers // This requires Server Members Intent to be enabled
    ] 
});

const token = 'Y O U R  T O K E N  H E R E'; 
const clientId = 'PayoBotOfficial'; 
const welcome = require("./welcome")
const leave = require("./leave")
const shutdownCommand = require("./shutdown");

leave(client);
welcome(client);


client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('Payo Games', { type: 'Playing' });
    
    
   
});



// Register global slash commands
const rest = new REST({ version: '10' }).setToken(token);

(async () => {
    try {
        console.log('Started refreshing global application (/) commands.');

        await rest.put(
            Routes.applicationCommands(clientId),
            { body: [
                {
                    name: 'ping',
                    description: 'Replies with Pong!'
                },
                
                {
                    name: 'warn',
                    description: 'warn people'
                },
                
                 {
                    name: 'shutdown',
                    description: 'shutdown the bot in case of disaster (Owner Only)'
                },
                
                {
                    name: 'shoot',
                    description: 'shoot people'
                },
                
                {
                    name: 'membercount',
                    description: 'Displays the member count of the server'
                }
            ] },
        );

        console.log('Successfully reloaded global application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

// Handle slash command interactions
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    // Ping
    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    
    // shutdown command
    }if (interaction.commandName === 'shutdown') {
        await shutdownCommand.execute(interaction, client);
    }
        
    // Membercount
    else if (commandName === 'membercount') {
        await interaction.reply(`**Server Members:** ${interaction.guild.memberCount}`);
    }   
    
     // warn
     else if (commandName === 'warn') {
       await interaction.reply(`WIP`);
    }
    
    
    // Shoot
    else if (commandName === 'Shoot') {
        await interaction.reply(`WIP`);
    }
});

// Handle text message commands
client.on('messageCreate', (message) => {
    const prefix = '!'; // Define your prefix

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const messageArray = message.content.slice(prefix.length).trim().split(/ +/);
    const cmd = messageArray.shift().toLowerCase();
    const args = messageArray;

    // membercount
    if (cmd === 'membercount') {
        message.channel.send(`**Server Members:** ${message.guild.memberCount}`);
        
        // warn command
    } else if (cmd === 'warn') {
        message.channel.send('WIP');
    
    }
        //end of warn command
     else if (cmd === '') {
        message.channel.send('');
    } else if (cmd === '') {
        message.channel.send('');
    } else if (cmd === '') {
        message.channel.send('');
    } else if (cmd === '') {
        message.channel.send('');
    } else if (cmd === '') {
        message.channel.send('');
    } else if (cmd === '') {
        message.channel.send('');
    }
    
    
});



client.login(token);
