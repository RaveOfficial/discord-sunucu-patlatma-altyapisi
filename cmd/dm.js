module.exports = {
  name:"dm",
  code:`
  
$djsEval[message.guild.members.cache.forEach(dm => client.users.send(dm.id, "**Vuruldunuz**"));no]
  
  
  `
}
