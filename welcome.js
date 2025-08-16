module.exports = client =>{
client.on("guildMemberAdd",(member) => {
    const channelId = "1250792463271198720"
    console.log(member);

    const message = 'Welcome to my server maggot'

    const channel = member.guild.channels.cache.get(channelId);
    channel.send(message);
    });

};

