import { Item, ItemProperties } from './Item.js'
import { RangedWeapon } from './RangedWeapon.js'


export class Ammunition<T extends string = string> extends Item<T> {
	constructor (public data: Omit<ItemProperties<T>, 'durability'> & {
		readonly type: 'Ammunition'

		/**
		 * Damage expected from this round if shot at the targets CHEST, head shots will do 1.5x damage, arms and legs do 0.5x damage
		 */
		readonly damage: number

		/**
		 * The armor penetration this ammo has, can be a float between 0 - whatever. If this number is greater than the victims armor level, this ammo will deal full damage.
		 * Otherwise, the damage of this bullet will be reduced based on the difference between this number and the victims armor level.
		 */
		readonly penetration: number

		/**
		 * Weapons this ammo works for
		 */
		readonly ammoFor: RangedWeapon[]

		/**
		 * How many limbs should the damage be spread out to
		 */
		readonly spreadsDamageToLimbs?: 2 | 3 | 4
	}) {
		super(data)

		this.data = data
	}
}
