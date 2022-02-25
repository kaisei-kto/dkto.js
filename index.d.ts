import { Client } from 'discord.js'
import { Cooldown } from './src/typings/cooldown'
import { event_handler } from './src/typings/event_handler'
import { CreateMessageComponents } from './src/typings/components'
import { CreateSlashCommandOptions } from './src/typings/interactions'

const dkto = {
	builder: {
		command_options: CreateSlashCommandOptions,
		message_components: CreateMessageComponents
	},
	handler: {
		events: new event_handler()
	}
}

export {
	Client,
	CreateSlashCommandOptions,
	Cooldown,
	Handlers,

	dkto
}