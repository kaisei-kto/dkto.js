const { Client } = require("discord.js");
const { existsSync, lstatSync, readdirSync } = require("fs");
const { join } = require("path")

/**
 * @type {Client}
 */
var client_;
var hotReload = false
var eventsDir = 'events'
const watching = new Map()
/**
 * @type {Map<string, {
 * filePath: string
 * function: Function<any>
 * }>}
 */
const events = new Map()
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
		} else {
			delete require.cache[filePath]
		}
	}
}, 1000)

var get_function = function(module) {
	if (typeof module === 'object' && 'default' in module) {
		return module.default
	} else {
		return module
	}
}

class event_handler {
	constructor() {}

	listen (eventName, listener) {
		
		if (typeof listener === 'string') {
			listener = require.resolve(listener, { paths: [ join(process.cwd(), eventsDir) ] })
			require(listener)
			events.set(eventName, listener)
			if (watching.has(listener)) return;
			watching.set(listener, true)
		}

		const self = this
		
		client_.on(eventName, async function (...args) {
			if (events.has(eventName)) {
				const o = typeof listener === 'function' ? listener : get_function(require(listener))
				if (typeof o === 'function') {
					o(...args)
				} else if (typeof o === 'object' && !Array.isArray(o) && 'default' in o) {
					o.default(...args)
				}
			}
		})

		return this
	}

	load () {
		for (const file_name of readdirSync(eventsDir || '.')) {
			if (lstatSync(join(eventsDir || '.', file_name)).isFile()) {
				this.listen(file_name.split('.').slice(0, -1).join('.'), `./${file_name}`)
			}
		}

		return this
	}

	setOptions (data) {
		client_ = data.client
		hotReload = !!data.hotReload
		eventsDir = typeof data.relativePath === 'string' ? data.relativePath : eventsDir

		return this
	}

	setHandler (cb) {
		get_function = cb

		return this
	}
}

module.exports = { event_handler }