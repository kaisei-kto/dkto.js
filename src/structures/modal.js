const assert = require("assert")

const TEXT_INPUT_STYLES = [
	'Short', 'Paragraph'
]

const BUTTON_STYLES = [
	'Primary', 'Secondary', 'Success',
	'Danger', 'Link'
]

function CreateModalComponents() {
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

		text_input (data) {
			assert(typeof data === 'object' && !Array.isArray(data), new TypeError('data must be an object'))
			data.style = TEXT_INPUT_STYLES.indexOf(String(data.style))
			assert(data.style !== -1, new TypeError('data.style must be either "Short" or "Paragraph"'))
			data.style += 1

			this.#options.push(Object.assign(data, { type: 4 }))
			
			return this.build()
		}

		build() {
			this.#parent_options.push({
				components: this.#options,
				type: 1
			})

			return this.#self
		}
	}

	class ModalComponentClass {
		#options = []

		action_row() {
			return new ActionRowClass(this, this.#options)
		}

		toJSON() {
			return Object.freeze(this.#options)
		}
	}

	return new ModalComponentClass()
}

module.exports = { CreateModalComponents }