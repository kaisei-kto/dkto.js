# Types

> ## Option Type
```ts
{
	client: Discord.Client
	hotReload?: boolean
}
```

# Examples
```ts
const events = dkto.handler.events.setOptions({
	client: bot,
	hotReload: true
})

events.listen('ready', function (bot) {
	console.log(bot.user.tag, 'has started')
})
```