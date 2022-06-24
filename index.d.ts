import { Client } from 'discord.js'
import { Cooldown } from './src/typings/cooldown'
import { event_handler } from './src/typings/event_handler'
import { CreateMessageComponents } from './src/typings/components'
import { CreateSlashCommandOptions } from './src/typings/interactions'
import { CreateModalComponents } from './src/typings/modal'

const builder = {
	command_options: CreateSlashCommandOptions,
	message_components: CreateMessageComponents,
	modal_components: CreateModalComponents
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
	Cooldown,

	dkto,
	builder,
	handler
}