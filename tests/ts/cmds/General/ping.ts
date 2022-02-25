import { BaseCommandInteraction } from "discord.js";
import { sep } from "path";
import { dkto } from "dkto.js";

export async function run (interaction: BaseCommandInteraction) {
	const use_embed = interaction.options.get('embed', true).value as boolean

	interaction.followUp({  })
}

export const config = {
	name: (__filename.split(sep).pop() as string).split('.').shift() as string,
	description: 'Ping pong',
	category: (__dirname.split(sep).pop() as string),
	ephemeral: true, // to make this message private without utilizing direct message

	options: dkto.builder.command_options()
		.boolean({ name: 'embed', description: 'An option to send a response as an embed or non-embed message', required: true })
	.toJSON()
}