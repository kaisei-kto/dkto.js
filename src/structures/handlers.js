const { Client } = require("discord.js");
const { existsSync, lstatSync } = require("fs");

class Handlers {
	/**
	 * @type {Client}
	 */
	#client
	#watching = new Map()

	/**
	 * 
	 * @param {Client} client 
	 * @param {boolean} hotReload 
	 */
	constructor(client, hotReload = false) {
		this.#client = client

		if (!!hotReload) {
			const map = new Map()

			setInterval(() => {
				for (const filePath of Array.from(this.#watching.keys())) {
					if (existsSync(filePath)) {
						const mtimeMs = lstatSync(filePath).mtimeMs

						if (!map.has(filePath)) map.set(filePath, mtimeMs)

						if (map.get(filePath) !== mtimeMs) {
							delete require.cache[filePath]
							map.set(filePath, mtimeMs)
						}
					}
				}
			}, 1000)
		}
	}

	addClientEvent (eventName, listener) {
		if (typeof listener === 'string') {
			listener = require.resolve(listener, { paths: [ process.cwd() ] })
			require(listener)
			this.#watching.set(listener, true)
		}

		this.#client.on(eventName, async function (...args) {
			const o = typeof listener === 'function' ? listener : require(listener)
			
			if (typeof o === 'function') {
				o(...args)
			} else if (typeof o === 'object' && !Array.isArray(o) && 'default' in o) {
				o.default(...args)
			}
		})
	}
}

module.exports = { Handlers }