import { ItemBase, ItemProperties } from './ItemBase.js'


export class ThrowableWeapon<T extends string = string> extends ItemBase<T> {
	readonly type: 'Throwable Weapon'
	readonly subtype: 'Fragmentation Grenade' | 'Incendiary Grenade'
	/** The amount of damage this weapon deals when used */
	readonly damage: number
	/** The percent chance for this weapon to hit target (0% - 100%) */
	readonly accuracy: number
	/** How many limbs should the damage be spread out to */
	readonly spreadsDamageToLimbs?: 2 | 3 | 4
	/**
	 * The armor penetration this throwable has, can be a float between 0 - whatever. If this number is greater than the victims armor level, this will deal full damage.
	 *
	 * Otherwise, the damage will be reduced based on the difference between this number and the victims armor level.
	 */
	readonly penetration: number
	/** How fast this weapon attacks in duels (player who uses item with higher speed goes first) */
	readonly speed: number
	readonly durability: 1

	constructor (data: Omit<ItemProperties<T>, 'durability'> & {
		readonly type: 'Throwable Weapon'
		readonly subtype: 'Fragmentation Grenade' | 'Incendiary Grenade'
		/** The amount of damage this weapon deals when used */
		readonly damage: number
		/** The percent chance for this weapon to hit target (0% - 100%) */
		readonly accuracy: number
		/** How many limbs should the damage be spread out to */
		readonly spreadsDamageToLimbs?: 2 | 3 | 4
		/**
		 * The armor penetration this throwable has, can be a float between 0 - whatever. If this number is greater than the victims armor level, this will deal full damage.
		 *
		 * Otherwise, the damage will be reduced based on the difference between this number and the victims armor level.
		 */
		readonly penetration: number
		/** How fast this weapon attacks in duels (player who uses item with higher speed goes first) */
		readonly speed: number
		readonly durability: 1
	}) {
		super(data)

		this.type = data.type
		this.subtype = data.subtype
		this.damage = data.damage
		this.accuracy = data.accuracy
		this.spreadsDamageToLimbs = data.spreadsDamageToLimbs
		this.penetration = data.penetration
		this.speed = data.speed
		this.durability = data.durability
	}
}
