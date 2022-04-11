import { Intents } from 'discord.js'
import * as djs from 'discord.js'
import { Client, dkto } from '../../index'
import { token1, token2 } from '../config.json'

const client = new Client({
	intents: Intents.FLAGS.GUILDS
})

dkto.handler.events.setOptions({
	client,
	hotReload: true,
	relativePath: './events'
}).load()

dkto.handler.events.setHandler(function(module) {
	console.log(module)
	return module
})

client.login(token2)