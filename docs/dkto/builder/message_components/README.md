# Types
> ## Button Type (button_type)
```ts
{
	custom_id?: string
	style: 'PRIMARY'|'SECONDARY'|'SUCCESS'|'DANGER'|'LINK'
	emoji?: { id?: string, name?: string, animated?: boolean }
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

# Methods
> ## Action Row
```ts
action_row() : ActionRowClass
```

> ## Button
```ts
button(object: button_type) : this
```

> ## Select Menu
```ts
select_menu(object: select_menu_type) : SelectMenuClass
```

# Examples
```ts
dkto.builder.message_components()
	.action_row()
		.button({ custom_id: '1', label: 'hello', style: 'PRIMARY' })
	.build()
	.action_row()
		.select_menu({ custom_id: '2', placeholder: 'This is a placeholder' })
			.add_option({ label: 'Display Label', value: 'label_1' })
		.build()
	.build()
.toJSON()
```