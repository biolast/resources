import { Ammunition } from './Ammunition.js'
import { ItemBase, ItemProperties } from './_Base.js'


interface AmmoData {
	ammo: Ammunition
	damage: number
}

export class RangedWeapon<T extends string = string> extends ItemBase<T> {
	readonly type: 'Ranged Weapon'
	/** Names of ammunition mapped to damage the ammo deals. */
	readonly ammo: Map<string, AmmoData>
	/** The percent chance for this weapon to hit target (0% - 100%) */
	readonly accuracy: number
	/** How many times this weapon can be used to attack */
	readonly durability: number
	/** How fast this weapon attacks in duels (player who uses item with higher speed goes first) */
	readonly speed: number

	constructor (data: ItemProperties<T> & {
		readonly type: 'Ranged Weapon'
		/** Ammo this weapon can fire */
		readonly ammo: AmmoData[]
		/** The percent chance for this weapon to hit target (0% - 100%) */
		readonly accuracy: number
		/** How many times this weapon can be used to attack */
		readonly durability: number
		/** How fast this weapon attacks in duels (player who uses item with higher speed goes first) */
		readonly speed: number
	}) {
		super(data)

		this.type = data.type
		this.ammo = new Map(data.ammo.map(i => [i.ammo.name, i]))
		this.accuracy = data.accuracy
		this.durability = data.durability
		this.speed = data.speed
	}
}
