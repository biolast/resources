import { Item } from './Item.js'
import { RangedWeapon } from './RangedWeapon.js'


export class Ammunition<T extends string = string> extends Item<T> {
	type: 'Ammunition'
	durability: undefined

	/**
	 * Damage expected from this round if shot at the targets CHEST, head shots will do 1.5x damage, arms and legs do 0.5x damage
	 */
	damage: number

	/**
	 * The armor penetration this ammo has, can be a float between 0 - whatever. If this number is greater than the victims armor level, this ammo will deal full damage.
	 * Otherwise, the damage of this bullet will be reduced based on the difference between this number and the victims armor level.
	 */
	penetration: number

	/**
	 * Weapons this ammo works for
	 */
	ammoFor: RangedWeapon[]

	/**
	 * How many limbs should the damage be spread out to
	 */
	spreadsDamageToLimbs?: 2 | 3 | 4

	constructor (data: Omit<Ammunition<T>, 'durability'>) {
		super(data)

		this.type = data.type
		this.durability = undefined
		this.damage = data.damage
		this.penetration = data.penetration
		this.ammoFor = data.ammoFor
		this.spreadsDamageToLimbs = data.spreadsDamageToLimbs
	}
}
