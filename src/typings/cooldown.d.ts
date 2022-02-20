class Cooldown {
	/* Creates a map under a global cooldown map */
	constructor(parentKey: string, num: number, prefix: 's'|'m'|'h'|'d'|'w')

	/* Returns whether the subKey is on cooldown under the parentKey's map */
	isOnCooldown(subKey: string) : boolean

	/* Returns a number in seconds */
	getRemaining(subKey: string) : number

	/* Sets the cooldown of the subKey under the parentKey's map */
	setCooldown(subKey: string) : void
}

export { Cooldown }