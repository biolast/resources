import { Ammunition } from '../items/Ammunition.js'
import { BodyArmor } from '../items/BodyArmor.js'
import { Helmet } from '../items/Helmet.js'
import { ItemBase } from '../items/ItemBase.js'
import { MeleeWeapon } from '../items/MeleeWeapon.js'
import { RangedWeapon } from '../items/RangedWeapon.js'


export class ActiveMob<MobType extends 'zombie' | 'bandit' | 'animal'> {
	readonly type: MobType
	/** Display name for this mob shown in battles */
	readonly name: string
	/** Items the mob has in their inventory */
	readonly inventory: { item: ItemBase, durability?: number }[]
	/** Weapon mob uses */
	readonly weapon?: { weapon: MeleeWeapon } | { weapon: RangedWeapon, ammo: Ammunition }
	/** Helmet mob is wearing, if any */
	readonly helmet?: Helmet
	/** Armor mob is wearing, if any */
	readonly armor?: BodyArmor
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
		readonly inventory: { item: ItemBase, durability?: number }[]
		/** Weapon mob uses */
		readonly weapon?: { weapon: MeleeWeapon } | { weapon: RangedWeapon, ammo: Ammunition }
		/** Helmet mob is wearing, if any */
		readonly helmet?: Helmet
		/** Armor mob is wearing, if any */
		readonly armor?: BodyArmor
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
