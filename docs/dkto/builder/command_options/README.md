# Types (too much, ill do this later)

# Examples
```ts
dkto.builder.command_options()
	.sub_command_group({
		name: 'hi',
		description: 'b'
	})
	.sub_command({ name: 'hi', description: 'h' })
		.boolean({name: 'hi', description: 'a', required: true})
		.boolean({name: 'hi', description: 'a2', required: true}).build()
	.done()
.toJSON()
```