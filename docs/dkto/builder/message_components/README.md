# Types
> ## Button Type (button_type)
```ts
{
	custom_id?: string
	style: 'PRIMARY'|'SECONDARY'|'SUCCESS'|'DANGER'|'LINK'
	emoji?: string
	label?: string
	url?: string
	disabled?: boolean
}
```

> ## Select Menu Option Type (select_menu_option_type)
```ts
{
	label: string
	value: string
	description?: string
	emoji?: string
	default?: boolean
}
```

> ## Select Menu Type (select_menu_type)
```ts
{
	custom_id: string
	placeholder?: string
	min_values?: number
	max_values?: number
	disabled?: boolean
}
```

# Examples
```ts
dkto.builder.message_components()
	.action_row()
		.button({ custom_id: '1', label: 'hello', style: 'PRIMARY' })
	.build()
.toJSON()
```