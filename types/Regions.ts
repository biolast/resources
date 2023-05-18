import { Item, ItemType } from './Items.js'


export interface LootPool<T extends ItemType = ItemType> {
	/**
	 * Item types that can be rolled
	 */
	common?: {
		categories: T[]
		items: (Item & { type: T })[]
	}
	/**
	 * Item types that can be rolled
	 * 25% chance to roll
	 */
	uncommon?: {
		categories: T[]
		items: (Item & { type: T })[]
	}
	/**
	 * Item types that can be rolled
	 * 10% chance to roll
	 */
	rare?: {
		categories: T[]
		items: (Item & { type: T })[]
	}
	/**
	 * Item types that can be rolled
	 * 5% chance to roll
	 */
	rarest?: {
		categories: T[]
		items: (Item & { type: T })[]
	}
}

interface KeyArea {
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
		pool: LootPool<'Helmet'>
		/**
		 * Chance the mob is wearing a helmet (1 - 100%)
		 */
		chance: number
	}
	armor?: {
		pool: LootPool<'Body Armor'>
		/**
		 * Chance the mob is wearing armor (1 - 100%)
		 */
		chance: number
	}
	weaponPool: LootPool<'Melee Weapon' | 'Ranged Weapon'>
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
		pool: LootPool<'Helmet'>
		/**
		 * Chance the mob is wearing a helmet (1 - 100%)
		 */
		chance: number
	}
	armor?: {
		pool: LootPool<'Body Armor'>
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

export type RegionLevel = 1 | 2 | 3 | 4 | 5

export interface Region<T extends string = string> {
	name: T

	/**
	 * regionLevel of this region determines its ranking compared to other regions
	 */
	regionLevel: RegionLevel

	/**
	 * The minimum level player must be to travel here
	 */
	playerLevel: number

	/**
	 * The distance of this region relative to other regions (suburbs as 0km away)
	 */
	distance: number

	/**
	 * Icon to display in select menu on travel command for this region
	 */
	icon: string
	imageURL: string

	/**
	 * Info about mobs that can spawn in this region
	 */
	mobs: {
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
	boss?: {
		quote: string
		info: MobInfo & { boss: true }
	}

	/**
	 * Loot received when scavenging this region
	 */
	scavengeLoot: {
		pool: LootPool
		rolls: {
			min: number
			max: number
		}
	}

	/**
	 * Areas that require a key to scavenge, drop loot from a separate loot pool
	 */
	keyAreas: KeyArea[]

	/**
	 * Just display names of areas when users scavenge this region
	 */
	areas: string[]
}
