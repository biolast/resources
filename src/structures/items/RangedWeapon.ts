import { Ammunition } from './Ammunition.js'
import { ItemBase, ItemProperties } from './ItemBase.js'


export class RangedWeapon<T extends string = string, A extends Ammunition = Ammunition> extends ItemBase<T> {
	protected readonly category: 'Ranged Weapon'
	/** Ammo this weapon can fire */
	readonly ammo: A[]
	/** The percent chance for this weapon to hit target (0% - 100%) */
	readonly accuracy: number
	/** How many times this weapon can be used to attack */
	readonly durability: number
	/** How fast this weapon attacks in battles (player who uses item with higher speed goes first) */
	readonly speed: number

	constructor (data: ItemProperties<T> & {
		/** Ammo this weapon can fire */
		ammo: A[]
		/** The percent chance for this weapon to hit target (0% - 100%) */
		accuracy: number
		/** How many times this weapon can be used to attack */
		durability: number
		/** How fast this weapon attacks in battles (player who uses item with higher speed goes first) */
		speed: number
	}) {
		super(data)

		this.category = 'Ranged Weapon'
		this.ammo = data.ammo
		this.accuracy = data.accuracy
		this.durability = data.durability
		this.speed = data.speed
	}
}
