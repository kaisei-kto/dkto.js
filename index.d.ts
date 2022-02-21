import { Client } from 'discord.js'
import { Cooldown } from './src/typings/cooldown'
import { Handlers } from './src/typings/handlers'
import { CreateMessageComponents } from './src/typings/components'
import { CreateSlashCommandOptions } from './src/typings/interactions'

const dkto = {
	builder: {
		command_options: CreateSlashCommandOptions,
		message_components: CreateMessageComponents
	}
}

export {
	Client,
	CreateSlashCommandOptions,
	Cooldown,
	Handlers,

	dkto
}