import { Item } from './Item.js'


export class ThrowableWeapon<T extends string = string> extends Item<T> {
	type: 'Throwable Weapon'
	subtype: 'Fragmentation Grenade' | 'Incendiary Grenade'

	/**
	 * The amount of damage this melee weapon deals when used
	 */
	damage: number

	/**
	 * The percent chance for this weapon to hit target (0% - 100%)
	 */
	accuracy: number

	/**
	 * How many limbs should the damage be spread out to
	 */
	spreadsDamageToLimbs?: 2 | 3 | 4

	/**
	 * The armor penetration this throwable has, can be a float between 0 - whatever. If this number is greater than the victims armor level, this will deal full damage.
	 * Otherwise, the damage will be reduced based on the difference between this number and the victims armor level.
	 */
	penetration: number

	/**
	 * How fast this weapon attacks in duels (player who uses item with higher speed goes first)
	 */
	speed: number

	durability: 1

	constructor (data: Omit<ThrowableWeapon<T>, 'durability'>) {
		super(data)

		this.type = data.type
		this.subtype = data.subtype
		this.damage = data.damage
		this.accuracy = data.accuracy
		this.spreadsDamageToLimbs = data.spreadsDamageToLimbs
		this.durability = 1
		this.penetration = data.penetration
		this.speed = data.speed
	}
}
