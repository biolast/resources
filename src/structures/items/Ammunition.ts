import { ItemBase, ItemProperties } from './_Base.js'


export class Ammunition<T extends string = string> extends ItemBase<T> {
	readonly type: 'Ammunition'
	/**
	 * The armor penetration this ammo has, can be a float between 0 - whatever. If this number is greater than the victims armor level, this ammo will deal full damage.
	 *
	 * Otherwise, the damage of this bullet will be reduced based on the difference between this number and the victims armor level.
	 */
	readonly penetration: number
	/** How many limbs should the damage be spread out to */
	readonly spreadsDamageToLimbs?: 2 | 3 | 4

	constructor (data: Omit<ItemProperties<T>, 'durability'> & {
		readonly type: 'Ammunition'
		/**
		 * The armor penetration this ammo has, can be a float between 0 - whatever. If this number is greater than the victims armor level, this ammo will deal full damage.
		 *
		 * Otherwise, the damage of this bullet will be reduced based on the difference between this number and the victims armor level.
		 */
		readonly penetration: number
		/** How many limbs should the damage be spread out to */
		readonly spreadsDamageToLimbs?: 2 | 3 | 4
	}) {
		super(data)

		this.type = data.type
		this.penetration = data.penetration
		this.spreadsDamageToLimbs = data.spreadsDamageToLimbs
	}
}
