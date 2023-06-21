import { Ammunition } from './Ammunition.js'
import { Item, ItemProperties } from './Item.js'


export class RangedWeapon<T extends string = string> extends Item<T> {
	constructor (public data: ItemProperties<T> & {
		readonly type: 'Ranged Weapon'

		/** Ammo this weapon can fire */
		readonly ammo: Ammunition[]

		/** The percent chance for this weapon to hit target (0% - 100%) */
		readonly accuracy: number

		/** How many times this weapon can be used to attack */
		readonly durability: number

		/** How fast this weapon attacks in duels (player who uses item with higher speed goes first) */
		readonly speed: number
	}) {
		super(data)

		this.data = data
	}
}
