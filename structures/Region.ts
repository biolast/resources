import { BodyArmor } from './items/BodyArmor.js'
import { Helmet } from './items/Helmet.js'
import { Item } from './items/Item.js'
import { MeleeWeapon } from './items/MeleeWeapon.js'
import { RangedWeapon } from './items/RangedWeapon.js'


export interface LootPool<T extends Item = Item> {
	/**
	 * Item types that can be rolled
	 */
	common?: {
		categories: T['data']['type'][]
		items: T[]
	}
	/**
	 * Item types that can be rolled
	 * 25% chance to roll
	 */
	uncommon?: {
		categories: T['data']['type'][]
		items: T[]
	}
	/**
	 * Item types that can be rolled
	 * 10% chance to roll
	 */
	rare?: {
		categories: T['data']['type'][]
		items: T[]
	}
	/**
	 * Item types that can be rolled
	 * 5% chance to roll
	 */
	rarest?: {
		categories: T['data']['type'][]
		items: T[]
	}
}

export type MobType = 'walker' | 'raider' | 'aggressive animal' | 'passive animal'

interface MobInfoBase {
	type: MobType
	boss: boolean
	/**
	 * Possible display names for this mob
	 */
	name: string | string[]
	/**
	 * Items the mob can have in their inventory
	 */
	loot: {
		/**
		 * static items will spawn EVERY time this mob is encountered (not rolled)
		 */
		static?: {
			item: Item
			amount: number
		}[]
		generated?: {
			pool: LootPool
			rolls: {
				min: number
				max: number
			}
		}
	}
	/**
	 * health this mob starts with, will be automatically set based on region level if left undefined
	 */
	health?: number
	/**
	 * xp this mob gives when killed, will be automatically set based on region level if left undefined
	 */
	xp?: number
}
interface RaiderMobInfo extends MobInfoBase {
	type: 'raider'
	helmet?: {
		pool: LootPool<Helmet>
		/**
		 * Chance the mob is wearing a helmet (1 - 100%)
		 */
		chance: number
	}
	armor?: {
		pool: LootPool<BodyArmor>
		/**
		 * Chance the mob is wearing armor (1 - 100%)
		 */
		chance: number
	}
	weaponPool: LootPool<MeleeWeapon | RangedWeapon>
}

interface OptionalAttackMobAttributes {
	/**
	 * damage this mob deals, will be automatically set based on region level if left undefined
	 */
	damage?: number
	/**
	 * the penetration this mob has with it's attacks, will be automatically set based on region level if left undefined
	 */
	attackPenetration?: number
	/**
	 * chance 0 - 100 this mob inflicts bitten debuff, will be automatically set based on region level if left undefined
	 */
	chanceToBite?: number
}
interface ZombieMobInfo extends MobInfoBase, OptionalAttackMobAttributes {
	type: 'walker'
	helmet?: {
		pool: LootPool<Helmet>
		/**
		 * Chance the mob is wearing a helmet (1 - 100%)
		 */
		chance: number
	}
	armor?: {
		pool: LootPool<BodyArmor>
		/**
		 * Chance the mob is wearing armor (1 - 100%)
		 */
		chance: number
	}
}
interface PassiveAnimalMobInfo extends MobInfoBase {
	type: 'passive animal'
}
interface AggressiveAnimalMobInfo extends MobInfoBase, OptionalAttackMobAttributes {
	type: 'aggressive animal'
}

export type MobInfo = RaiderMobInfo | ZombieMobInfo | PassiveAnimalMobInfo | AggressiveAnimalMobInfo

export class Region<T extends string = string> {
	readonly name: T

	constructor (public data: {
		readonly name: T
		readonly imageURL: string

		/**
		 * higher number = stronger mobs, easiest being 1
		 */
		readonly difficultyLevel: number

		/**
		 * The distance of this region relative to other regions (suburbs as 0km away)
		 */
		readonly distance: number

		/**
		 * Icon to display in select menu on travel command for this region
		 */
		readonly discordIcon: string

		/**
		 * Info about mobs that can spawn in this region
		 */
		readonly mobs: {
			spawnTypes: (MobInfo & {
				/**
				 * Determines the rate this mob type spawns compared to other mob types (ie. higher number = more likely to spawn)
				 */
				spawnWeight: number
			})[]
			/**
			 * Quotes when hunting for mobs
			 */
			huntQuotes: string[]
		}

		/**
		 * The boss player must defeat before they can travel to this region
		 */
		readonly boss?: {
			quote: string
			info: MobInfo & { boss: true }
		}

		/**
		 * Loot received when scavenging this region
		 */
		readonly scavengeLoot: {
			pool: LootPool
			rolls: {
				min: number
				max: number
			}
		}

		/**
		 * Areas that require a key to scavenge, drop loot from a separate loot pool
		 */
		readonly keyAreas: {
			name: string
			loot: {
				pool: LootPool
				rolls: {
					min: number
					max: number
				}
			}

			/**
			 * Key/item user must have in order to scavenge this area.
			 */
			requiresKey: Item
		}[]
	}) {
		this.name = data.name
		this.data = data
	}
}
