import { Item } from './Item.js'

/**
 * Status effects that can be applied to a user (such as the effects from using stimulants or debuffs like Burning)
 */
export interface StatusEffects {
	/**
	 * Percent damage bonus (10 would be 10% damage bonus)
	 */
	damageBonus: number
	/**
	 * Percent accuracy bonus (10 would be 10% accuracy bonus)
	 */
	accuracyBonus: number
	/**
	 * Percent damage taken from attacks (-10 would be -10% damage taken, 10 would be +10% damage taken)
	 */
	damageTaken: number
}

export class Stimulant<T extends string = string> extends Item<T> {
	type: 'Stimulant'
	durability?: undefined

	/**
	 * The effects this item gives when used
	 */
	effects: StatusEffects

	/**
	 * How fast this weapon attacks in duels (player who uses item with higher speed goes first)
	 */
	speed: number

	constructor (data: Omit<Stimulant<T>, 'durability'>) {
		super(data)

		this.type = data.type
		this.durability = undefined
		this.effects = data.effects
		this.speed = data.speed
	}
}
