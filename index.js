const builder = {
	command_options: require('./src/structures/interactions').CreateSlashCommandOptions,
	message_components: require('./src/structures/components').CreateMessageComponents
}

const handler = {
	events: new (require('./src/structures/event_handler').event_handler)()
}

const dkto = { dkto: { builder, handler } }

module.exports = Object.assign(
	{ Client: require("discord.js").Client },
	require("./src/structures/interactions"),
	require("./src/structures/cooldown"),
	
	dkto,
	builder,
	handler
)