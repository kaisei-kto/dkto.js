const { Client } = require("discord.js");
const { existsSync, lstatSync } = require("fs");
const { join } = require("path")

/**
 * @type {Client}
 */
var client_;
var hotReload = false
var eventsDir = 'events'
const watching = new Map()
const map = new Map()

setInterval(() => {
	if (!hotReload) return;

	for (const filePath of Array.from(watching.keys())) {
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

class event_handler {
	constructor() {}

	listen (eventName, listener) {
		if (typeof listener === 'string') {
			listener = require.resolve(listener, { paths: [ process.cwd() ] })
			require(listener)
			watching.set(listener, true)
		}

		client_.on(eventName, async function (...args) {
			const o = typeof listener === 'function' ? listener : require(listener)
			
			if (typeof o === 'function') {
				o(...args)
			} else if (typeof o === 'object' && !Array.isArray(o) && 'default' in o) {
				o.default(...args)
			}
		})

		return this
	}

	setOptions (data) {
		client_ = data.client
		hotReload = !!data.hotReload

		return this
	}
}

module.exports = { event_handler }