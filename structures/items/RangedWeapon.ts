import { Item } from './Item.js'


export class RangedWeapon<T extends string = string> extends Item<T> {
	type: 'Ranged Weapon'

	/**
	 * The percent chance for this weapon to hit target (0% - 100%)
	 */
	accuracy: number

	/**
	 * How many times this weapon can be used to attack
	 */
	durability: number

	/**
	 * How fast this weapon attacks in duels (player who uses item with higher speed goes first)
	 */
	speed: number

	constructor (data: RangedWeapon<T>) {
		super(data)

		this.type = data.type
		this.accuracy = data.accuracy
		this.durability = data.durability
		this.speed = data.speed
	}
}
