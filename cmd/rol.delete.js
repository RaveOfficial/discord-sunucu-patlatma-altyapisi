module.exports = {
  name:"rol.delete",
  code:`
$djsEval[message.guild.roles.cache.forEach(r => {
r.delete().catch(err => {})
})]
  $deletecommand
  `
}
