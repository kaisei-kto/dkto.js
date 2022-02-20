const assert = require("assert");

const map = new Map()
const number = { s: 1e3, m: 6e4, h: 36e5, d: 864e5, w: 6048e5, mo: 26298e5, y: 315576e5 }
const create_duration = (n, p) => number[p] * n

class Cooldown {
	#key;
	#length;

	/**
	 * @param {string} keyName 
	 * @param {number} num
	 * @param {'s'|'m'|'h'|'d'|'w'} prefix
	 */
	constructor(keyName, num, prefix) {
		assert(typeof keyName === 'string', new TypeError('keyName must be a string'))
		assert(typeof num === 'number', new TypeError('num must be a number'))
		assert(typeof prefix === 'string', new TypeError('prefix must be a string'))

		this.#key = keyName
		this.#length = create_duration(num, prefix)
	}

	/**
	 * 
	 * @param {string} key 
	 */
	isOnCooldown(key) {
		assert(typeof key === 'string', new TypeError('key must be a string'))
		const fullName = `${this.#key}_${key}`

		return map.has(fullName) ? this.getRemaining(key) > 0 : false
	}

	/**
	 * 
	 * @param {string} key 
	 */
	getRemaining(key) {
		assert(typeof key === 'string', new TypeError('key must be a string'))
		return Math.ceil((this.#length - (Date.now() - map.get(`${this.#key}_${key}`))) / 1000)
	}

	/**
	 * 
	 * @param {string} key 
	 */
	setCooldown(key) {
		assert(typeof key === 'string', new TypeError('key must be a string'))
		map.set(`${this.#key}_${key}`, Date.now())
	}
}

module.exports = { Cooldown }