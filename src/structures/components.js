const assert = require("assert")

function CreateMessageComponents() {
	class SelectMenuClass {
		#options = []
		#object;
		#parent_options;
		#self;

		constructor (parent, options, data_object) {
			this.#self = parent
			this.#parent_options = options
			this.#object = data_object
		}

		add_option (data) {
			assert(typeof data === 'object' && !Array.isArray(data), new TypeError('data must be an object'));

			this.#options.push(data)
			return this
		}

		build() {
			this.#parent_options.push(Object.assign(this.#object, {
				options: this.#options,
				type: 3
			}))

			return this.#self
		}
	}

	class ActionRowClass {
		#options = []
		#parent_options;
		#self;

		constructor (parent, options) {
			this.#self = parent
			this.#parent_options = options
		}

		button (data) {
			assert(typeof data === 'object' && !Array.isArray(data), new TypeError('data must be an object'));

			this.#options.push(Object.assign(data, { type: 2 }))
			return this
		}

		select_menu (data) {
			assert(typeof data === 'object' && !Array.isArray(data), new TypeError('data must be an object'))

			new SelectMenuClass(this, this.#options, data)
			return this
		}

		build() {
			this.#parent_options.push(this.#options)

			return this.#self
		}
	}

	class MessageComponentClass {
		#options = []

		action_row() {
			return new ActionRowClass(this, this.#options)
		}

		toJSON() {
			return Object.freeze(this.#options)
		}
	}

	return new MessageComponentClass()
}

module.exports = { CreateMessageComponents }