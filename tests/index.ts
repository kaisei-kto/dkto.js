import { Intents } from 'discord.js'
import * as djs from 'discord.js'
import { Client, dkto } from 'dkto.js'

const client = new Client({
	intents: [...Object.values(Intents.FLAGS)]
})

const events = dkto.handler.events.setOptions({
	client,
	hotReload: true
})

events.listen('ready', (bot: djs.Client) => {
	console.log(bot.user?.tag)
})