import { Client, ClientEvents } from "discord.js";

class Handlers {
	constructor (client: Client, hotReload: boolean)

	addClientEvent <K extends keyof ClientEvents>(eventName: K, listener: (...args: ClientEvents[K]) => Awaitable<void>) : void
	addClientEvent (eventName: keyof ClientEvents, filePath: string) : void
}

export { Handlers }