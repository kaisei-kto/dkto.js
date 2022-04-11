import { Client, ClientEvents } from "discord.js";

class event_handler {
	constructor(): this

	listen<K extends keyof ClientEvents>(
		eventName: K,
		listener: (...args: ClientEvents[K]) => Awaitable<void>
	): this;
	listen(eventName: keyof ClientEvents, filePath: string): this;

	/**
	 * @description ```
	 * client -> discordjs.Client
	 * hotReload -> ?boolean, automatically hot-reloads the loaded modules on file update/change
	 * relativePath -> ?string, by default, the event directory is `./events`
	 * ```
	 */
	setOptions(data: { client: Client, hotReload?: boolean, relativePath?: string }): this;

	/**
	 * @param {Function<object|function|string|undefined>} cb
	 * @description ```
	 * The event files will be loaded and redirected to this function to retrieve the actual function to call from
	 * 
	 * For an example, the event file only returns an module.export of `run`
	 * So we return module.exports.run inside of loadHandler to actually call the function from dkto.js event handler
	 * ```
	 */
	setHandler(cb: (module: object|function|string|undefined) => Function<any>): this;

	/**
	 * @description ```
	 * Automatically loads what is under the relative path, default relativePath is './events'
	 * 
	 * **Only run this once after initializing client, you have been warned**
	 * ```
	 */
	load(): this;
}

export { event_handler };
