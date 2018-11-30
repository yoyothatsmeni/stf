const Discord = require('discord.js');
const client = new Discord.Client();   

const adminprefix = "-f";
const devs = ['495680518365511721','495680518365511721'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'sp')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى ** :white_check_mark:`)
} else 
  if (message.content.startsWith(adminprefix + 'sn')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى :white_check_mark:`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'sa')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت :white_check_mark:`);
} else     
if (message.content.startsWith(adminprefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}** :white_check_mark:`);
} else
if (message.content.startsWith(adminprefix + 'sw')) {
  client.user.setGame(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**  ${argresult} تم تغيير الحاله الي :white_check_mark:**`);
}else
if (message.content.startsWith(adminprefix + 'sl')) {
  client.user.setGame(argresult , {type:'LISTENING'});
    message.channel.sendMessage(`**  ${argresult} تم تغيير الحاله الي :white_check_mark:**`)
}
});

client.login(process.env.BOT_KEY);
