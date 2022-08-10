module.exports = {

name:"$alwaysExecute",

code:`
$sendWebhookMessage[webhookID;URL;**[$userTag]:** \`$message\` [<t:$truncate[$math[$datestamp/1000]]:R>]]

`,

nonPrefixed: true

} 

