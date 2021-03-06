> **JavaScript**
> 
> **index.js**

```js
const { Client, dkto } = require('dkto.js')
const client = new Client({ intents: 32767 })

// <Client, Boolean> [Client, hotReload]
const events = dkto.handler.events.setOptions({
	client,
	hotReload: true,
	relativePath: './events'
})
	events.listen('ready', async (bot) => {
		console.log(bot.user.tag)

		bot.application.commands.set([
			{
				name: 'ping',
				description: 'Ping Pong',
				type: 'CHAT_INPUT',
				options: dkto.builder.command_options()
					.boolean({ name: 'pong', description: 'Say pong?', required: true })
				.toJSON()
			}
		])
	})
	events.listen('interactionCreate', './events/interactionCreate')

client.login('token')
```

> **events/interactionCreate.js**

```js
const { Interaction } = require('discord.js')

/**
 * @param {Interaction} interaction
 */
module.exports = async function (interaction) {
	if (interaction.isCommand()) {
		if (interaction.commandName === 'ping') {
			await interaction.deferReply({ ephemeral: true })
			await interaction.followUp(`🏓${interaction.options.getBoolean('pong') ? ' Pong!' : ''}`)
		}
	}
}
```

---

> **TypeScript**
>
> **index.ts**

```ts
import { Client, dkto } from 'dkto.js'
const client = new Client({ intents: 32767 })

// <Client, Boolean> [Client, hotReload]
const events = dkto.handler.events.setOptions({
	client,
	hotReload: true,
	relativePath: './events'
})
	events.listen('ready', async (bot: Client) => {
		console.log(bot.user?.tag)

		bot.application?.commands.set([
			{
				name: 'ping',
				description: 'Ping Pong',
				type: 'CHAT_INPUT',
				options: dkto.builder.command_options()
					.boolean({ name: 'pong', description: 'Say pong?', required: true })
				.toJSON()
			}
		])
	})
	events.listen('interactionCreate', './events/interactionCreate')

client.login('token')
```

> **events/interactionCreate.ts**

```js
import { Interaction } from 'discord.js'

export default async function (interaction: Interaction) {
	if (interaction.isCommand()) {
		if (interaction.commandName === 'ping') {
			await interaction.deferReply({ ephemeral: true })
			await interaction.followUp(`🏓${interaction.options.getBoolean('pong') ? ' Pong!' : ''}`)
		}
	}
}
```