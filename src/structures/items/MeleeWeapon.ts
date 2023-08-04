import { ItemBase, ItemProperties } from './ItemBase.js'


export class MeleeWeapon<T extends string = string> extends ItemBase<T> {
	readonly type: 'Melee Weapon'

	/** The amount of damage this melee weapon deals when used */
	readonly damage: number
	/** The percent chance for this weapon to hit target (0% - 100%) */
	readonly accuracy: number
	/** How many times this weapon can be used to attack */
	readonly durability: number
	/**
	 * The armor penetration this weapon has, can be a float between 0 - whatever. If this number is greater than the victims armor level, this weapon will deal full damage.
	 *
	 * Otherwise, the damage will be reduced based on the difference between this number and the victims armor level.
	 */
	readonly penetration: number
	/** How fast this weapon attacks in duels (player who uses item with higher speed goes first) */
	readonly speed: number

	constructor (data: ItemProperties<T> & {
		readonly type: 'Melee Weapon'

		/** The amount of damage this melee weapon deals when used */
		readonly damage: number
		/** The percent chance for this weapon to hit target (0% - 100%) */
		readonly accuracy: number
		/** How many times this weapon can be used to attack */
		readonly durability: number
		/**
		 * The armor penetration this weapon has, can be a float between 0 - whatever. If this number is greater than the victims armor level, this weapon will deal full damage.
		 *
		 * Otherwise, the damage will be reduced based on the difference between this number and the victims armor level.
		 */
		readonly penetration: number
		/** How fast this weapon attacks in duels (player who uses item with higher speed goes first) */
		readonly speed: number
	}) {
		super(data)

		this.type = data.type
		this.damage = data.damage
		this.accuracy = data.accuracy
		this.durability = data.durability
		this.penetration = data.penetration
		this.speed = data.speed
	}
}
