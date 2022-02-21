# Types (too much, ill do this later)

# Examples
```ts
dkto.builder.command_options()
	.action_row()
		.button({ custom_id: '1', label: 'hello', style: 'PRIMARY' })
	.build()
.toJSON()
```