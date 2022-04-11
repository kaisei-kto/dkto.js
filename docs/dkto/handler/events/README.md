# Types

> ## Option Type
```ts
interface options {
	client: Discord.Client
	hotReload?: boolean
	relativePath?: string
}
```

# Examples
```ts
const events = dkto.handler.events.setOptions({
	client: bot,
	hotReload: true,
	relativePath: './events'
})

events.load()

events.listen('ready', function (bot) {
	console.log(bot.user.tag, 'has started')
})
```