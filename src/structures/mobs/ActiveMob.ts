import { Item } from '../item.js'


export class ActiveMob<MobType extends 'zombie' | 'bandit' | 'animal'> {
	readonly type: MobType
	/** Display name for this mob shown in battles */
	readonly name: string
	/** Items the mob has in their inventory */
	readonly inventory: { item: Item, durability?: number }[]
	/** Weapon mob uses */
	readonly weapon?: { weapon: Item<'Melee Weapon'> } | { weapon: Item<'Ranged Weapon'>, ammo: Item<'Ammunition'> }
	/** Helmet mob is wearing, if any */
	readonly helmet?: Item<'Helmet'>
	/** Armor mob is wearing, if any */
	readonly armor?: Item<'Body Armor'>
	/** xp player receives for defeating this mob */
	readonly xp: number
	/** Sets the amount of damage this mob deals per turn. Overrides weapon damage */
	readonly damage?: number
	/** Sets the armor pen of this mobs attacks. Overrides weapon armor pen. */
	readonly armorPenetration?: number

	readonly maxHealth: number
	currentHealth: number

	constructor (data: {
		readonly type: MobType
		/** Display name for this mob shown in battles */
		readonly name: string
		/** Items the mob has in their inventory */
		readonly inventory: { item: Item, durability?: number }[]
		/** Weapon mob uses */
		readonly weapon?: { weapon: Item<'Melee Weapon'> } | { weapon: Item<'Ranged Weapon'>, ammo: Item<'Ammunition'> }
		/** Helmet mob is wearing, if any */
		readonly helmet?: Item<'Helmet'>
		/** Armor mob is wearing, if any */
		readonly armor?: Item<'Body Armor'>
		/** XP player receives for defeating this mob */
		readonly xp: number
		/** Sets the amount of damage this mob deals per turn. Overrides weapon damage */
		readonly damage?: number
		/** Sets the armor pen of this mobs attacks. Overrides weapon armor pen. */
		readonly armorPenetration?: number
		readonly health: number
	}) {
		this.type = data.type
		this.name = data.name
		this.inventory = data.inventory
		this.weapon = data.weapon
		this.helmet = data.helmet
		this.armor = data.armor
		this.xp = data.xp
		this.damage = data.damage
		this.armorPenetration = data.armorPenetration
		this.maxHealth = data.health
		this.currentHealth = data.health
	}
}
