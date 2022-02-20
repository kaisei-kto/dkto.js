module.exports = Object.assign(
	{ Client: require('discord.js').Client },
	require('./src/structures/interactions'),
	require('./src/structures/cooldown'),
	require('./src/structures/handlers')
)