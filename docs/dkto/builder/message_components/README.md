# Types
> ## Button Type (button_type)
```ts
interface button_type {
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
interface select_menu_option_type {
	label: string
	value: string
	description?: string
	emoji?: string
	default?: boolean
}
```

> ## Select Menu Type (select_menu_type)
```ts
interface select_menu_type {
	custom_id: string
	placeholder?: string
	min_values?: number
	max_values?: number
	disabled?: boolean
}
```

> ## Text Input Type (text_input_type)
```ts
interface text_input_type {
	custom_id: string
	style: 'Short'|'Paragraph'
	label: string
	placeholder?: string
	value?: string
	min_length?: number
	max_length?: number
	required?: boolean
}
```

# Methods
> ## Action Row
```ts
action_row() : ActionRowClass
```

> ## Button
```ts
button(object: button_type) : ActionRowClass
```

> ## Select Menu
```ts
select_menu(object: select_menu_type) : SelectMenuClass
```

> ## Text Input
```ts
text_input(object: select_menu_type) : ActionRowClass
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