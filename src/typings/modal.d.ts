// @ts-nocheck

import {
	MessageActionRow,
	MessageButtonOptions,
	MessageButtonStyle,
	MessageSelectMenuOptions,
} from "discord.js";

import { APIPartialEmoji } from 'discord-api-types/v9'

export function CreateModalComponents() {
	interface base_type {
		custom_id?: string
	}

	interface button_type extends base_type {
		style: 'Primary'|'Secondary'|'Success'|'Danger'|'Link',
		emoji?: {
			name: string,
			id: string
		},
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

	interface select_menu_type {
		custom_id: string,
		placeholder?: string,
		min_values?: number,
		max_values?: number,
		disabled?: boolean
	}

	interface text_input_type {
		custom_id: string,
		style: 'Short'|'Paragraph',
		label: string,
		/**
		 * @description the minimum input length for a text input, min 0, max 4000
		 */
		min_length?: number,
		/**
		 * @description the maximum input length for a text input, min 1, max 4000
		 */
		max_length?: number,
		required?: boolean,
		/**
		 * @description a pre-filled value for this component, max 4000 characters
		 */
		value?: string,
		/**
		 * @description custom placeholder text if the input is empty, max 100 characters
		 */
		placeholder?: string
	}

	class SelectMenuClass {
		add_option (data: select_menu_option_type) : this

		build() : ActionRowClass
	}

	class ActionRowClass {
		// button (data: button_type) : this

		// select_menu (data: select_menu_type) : SelectMenuClass

		text_input (data: text_input_type) : ModalComponentsClass

		// build() : ModalComponentsClass
	}

	class ModalComponentsClass {
		action_row() : ActionRowClass

		toJSON() : MessageActionRow[]
	}

	return new ModalComponentsClass()
}

export { CreateModalComponents }