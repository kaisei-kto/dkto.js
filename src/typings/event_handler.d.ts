import { Client, ClientEvents } from "discord.js";

class event_handler {
	constructor(): this

	listen<K extends keyof ClientEvents>(
		eventName: K,
		listener: (...args: ClientEvents[K]) => Awaitable<void>
	): this;
	listen(eventName: keyof ClientEvents, filePath: string): this;

	setOptions(data: { client: Client, hotReload: boolean }): this;
}

export { event_handler };
