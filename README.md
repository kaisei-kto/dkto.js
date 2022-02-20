# dkto.js

**[dkto.js](https://www.npmjs.com/package/dkto.js)** will be kept up-to-date with the latest **[discord.js](https://www.npmjs.com/package/discord.js)** stable updates!

---

## Custom Handler
> Built-in Hot-Reload [default: false]:
- Auto-reloads a file upon save without having to restart the entire process
> TODO:
- Handling slash commands along with a hot-reload built-in feature

## Custom Slash Command Options Builder
> I dislike the way how it was made in **discord.js** so I had made my own, I am sorry.

## Proper Documentation
> Soon™

*pls give ideas so i can implement some or most into the framework*
_________________
# Basic Setup

> **JavaScript**
> 
> **index.js**

```js
const { Client, Handlers, CreateSlashCommandOptions } = require('dkto.js')
const client = new Client({ intents: 32767 })

// <Client, Boolean> [Client, hotReload]
const Handler = new Handlers(client, true)
	Handler.addClientEvent('ready', async (bot) => {
		console.log(bot.user.tag)

		bot.application.commands.set([
			{
				name: 'ping',
				description: 'Ping Pong',
				type: 'CHAT_INPUT',
				options: CreateSlashCommandOptions()
					.boolean({ name: 'pong', description: 'Say pong?', required: true })
				.toJSON()
			}
		])
	})
	Handler.addClientEvent('interactionCreate', './events/interactionCreate')

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
import { Client, Handlers, CreateSlashCommandOptions } from 'dkto.js'
const client = new Client({ intents: 32767 })

// <Client, Boolean> [Client, hotReload]
const Handler = new Handlers(client, true)
	Handler.addClientEvent('ready', async (bot: Client) => {
		console.log(bot.user?.tag)

		bot.application?.commands.set([
			{
				name: 'ping',
				description: 'Ping Pong',
				type: 'CHAT_INPUT',
				options: CreateSlashCommandOptions()
					.boolean({ name: 'pong', description: 'Say pong?', required: true })
				.toJSON()
			}
		])
	})
	Handler.addClientEvent('interactionCreate', './events/interactionCreate')

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