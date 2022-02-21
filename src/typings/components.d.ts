// @ts-nocheck

import {
	MessageActionRow,
	MessageButtonOptions,
	MessageButtonStyle,
	MessageSelectMenuOptions,
} from "discord.js";

export function CreateMessageComponents() {
	interface base_type {
		custom_id?: string
	}

	interface button_type extends base_type {
		style: MessageButtonStyle,
		emoji?: string,
		label?: string,
		url?: string,
		disabled?: boolean
	}

	interface select_menu_option_type {
		label: string,
		value: string,
		description?: string,
		emoji?: string,
		default?: boolean
	}

	interface select_menu_type extends base_type {
		custom_id: string,
		placeholder?: string,
		min_values?: number,
		max_values?: number,
		disabled?: boolean
	}

	class SelectMenuClass {
		add_option (data: select_menu_option_type) : this

		build() : ActionRowClass
	}

	class ActionRowClass {
		button(data: button_type) : this

		select_menu (data: select_menu_type) : SelectMenuClass

		build() : MessageComponentClass
	}

	class MessageComponentClass {
		action_row() : ActionRowClass

		toJSON() : MessageActionRow[]
	}

	return new MessageComponentClass()
}

export { CreateMessageComponents }