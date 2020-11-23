const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'm!ping') {
    msg.reply('Pong!');
  }
});

client.on('message', msg => {
  if (msg.content === 'ez') {
    msg.reply('EZ');
  }
});

client.on('message', msg => {
  if (msg.content === 'm!regulamin') {
    msg.reply('<#772724735695781923>');
  }
});

client.login('Nzc4MTk0NjY3NTk0MDU1NzAx.X7OcQg.Brjo33k70Wu6H0RQkpHBI0oEwCA');