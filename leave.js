
module.exports = client =>{
    client.on("guildMemberRemove",(member) => {
        const channelId = "1257229760770216057"
        console.log(member);
    
        const message = "Someone just left the server"
    
        const channel = member.guild.channels.cache.get(channelId);
        channel.send(message);
        });
    
    };
    
    