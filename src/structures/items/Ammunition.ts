import { ItemBase, ItemProperties } from './ItemBase.js'


export class Ammunition<T extends string = string> extends ItemBase<T> {
	/** Damage expected from this round if shot at the targets CHEST, head shots will do 1.5x damage, arms and legs do 0.5x damage */
	readonly damage: number
	/**
	 * The armor penetration this ammo has, can be a float between 0 - whatever. If this number is greater than the victims armor level, this ammo will deal full damage.
	 *
	 * Otherwise, the damage of this bullet will be reduced based on the difference between this number and the victims armor level.
	 */
	readonly penetration: number
	/** How many limbs should the damage be spread out to */
	readonly spreadsDamageToLimbs?: 2 | 3 | 4

	constructor (data: Omit<ItemProperties<T>, 'durability'> & {
		/** Damage expected from this round if shot at the targets CHEST, head shots will do 1.5x damage, arms and legs do 0.5x damage */
		readonly damage: number
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

		this.damage = data.damage
		this.penetration = data.penetration
		this.spreadsDamageToLimbs = data.spreadsDamageToLimbs
	}
}
