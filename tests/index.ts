import { Intents } from 'discord.js'
import * as djs from 'discord.js'
import { Client, handler } from 'dkto.js'

const client = new Client({
	intents: [...Object.values(Intents.FLAGS)]
})

const events = handler.events.setOptions({
	client,
	hotReload: true
})

events.listen('ready', (bot: djs.Client) => {
	console.log(bot.user?.tag)
})