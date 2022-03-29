import { Client } from 'discord.js'
import { Cooldown } from './src/typings/cooldown'
import { event_handler } from './src/typings/event_handler'
import { CreateMessageComponents } from './src/typings/components'
import { CreateSlashCommandOptions } from './src/typings/interactions'

const builder = {
	command_options: CreateSlashCommandOptions,
	message_components: CreateMessageComponents
}

const handler = {
	events: new event_handler()
}

export const dkto = {
	builder,
	handler
}

export {
	Client,
	CreateSlashCommandOptions,
	Cooldown,

	dkto,
	builder,
	handler
}