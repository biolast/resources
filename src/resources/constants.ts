import { Ammunition, MeleeWeapon, RangedWeapon } from '../index.js'
import { Item } from '../structures/items/Item.js'


export * from './names.js'

/** the default storage space for player inventories */
export const DEFAULT_BACKPACK_LIMIT = 15.0

/** how much energy a player can have max */
export const DEFAULT_MAX_ENERGY = 30

/**
 * the percentage of accuracy needed for player to be able to target a limb in battles.
 * this percentage INCLUDES stimulant bonuses as well, so a 30% accuracy weapon with a +25% accuracy stimulant
 * would have 55% total accuracy.
 */
export const LIMB_TARGETING_ACCURACY_REQUIRED = 50

/** the max # of stimulants you can use in a fight */
export const DEFAULT_MAX_STIMULANTS_PER_BATTLE = 1

export const EMBED_COLORS = {
	get default () {
		const possibleColors = [9253685]
		return possibleColors[Math.floor(Math.random() * possibleColors.length)]
	},
	get success () {
		const possibleColors = [9043800]
		return possibleColors[Math.floor(Math.random() * possibleColors.length)]
	},
	get failure () {
		const possibleColors = [16734296]
		return possibleColors[Math.floor(Math.random() * possibleColors.length)]
	}
}

/** how much will damage be multiplied by when hitting specific limb */
export const LIMB_DAMAGE_MULTIPLIERS = {
	head: 1.5,
	chest: 1.0,
	arms: 0.5,
	legs: 0.5
} as const

/** how many items will scavenging produce */
export const DEFAULT_SCAVENGE_ROLLS = {
	min: 2,
	max: 3
} as const

/** how many items will a raider mob have in their inventory, increasing beyond 4 max overflows the battle image inventory */
export const DEFAULT_RAIDER_MOB_ROLLS = {
	min: 3,
	max: 4
} as const
/** how many items will a zombie mob have in their inventory, increasing beyond 5 max overflows the battle image inventory */
export const DEFAULT_ZOMBIE_MOB_ROLLS = {
	min: 3,
	max: 5
} as const


/** how many shelves does a new base start with */
export const BASE_STARTING_SHELVES = 1
/** how many beds does a new base start with */
export const BASE_STARTING_BEDS = 1

/** how many shelves can a user build max */
export const BASE_STARTING_MAX_SHELVES = 10
/** how many beds can a user build max */
export const BASE_STARTING_MAX_BEDS = 5

/** how much space can base storage hold with each shelf */
export const BASE_STORAGE_SPACE_PER_SHELF = 10.0
/** how many zombies does 1 wood spike trap kill when base is raided by horde */
export const BASE_WOOD_SPIKE_PROTECTION = 10

/**
 * Calculates the XP required to level up given a level.
 * @param level The level to get XP required for
 * @returns The XP required for specified level
 */
const LEVEL_FORMULA = (level: number) => Math.floor(200 * (level ** 1.7))
/**
 *
 * @param playerXp The players XP
 * @param level The players current level
 * @returns How much XP player needs to level up, how much XP player has relative to their current level
 */
export function getPlayerXp (playerXp: number, level: number): { relativeLevelXp: number, xpUntilLevelUp: number, levelTotalXpNeeded: number } {
	let levelXP = 0
	let totalNeeded = 0

	for (let i = 1; i <= level; i++) {
		totalNeeded += LEVEL_FORMULA(i)

		if (i !== level) {
			levelXP += LEVEL_FORMULA(i)
		}
	}

	return {
		relativeLevelXp: playerXp - levelXP,
		xpUntilLevelUp: totalNeeded - playerXp,
		levelTotalXpNeeded: LEVEL_FORMULA(level)
	}
}

/** aliases for commands when user is sending commands using messages instead of slash commands */
export const TEXT_COMMAND_ALIASES: {
	/** slash command the aliases will resolve to, can be a sub command as well */
	command: string
	/** possible aliases */
	aliases: string[]
}[] = [
	// info command aliases
	{
		command: 'inventory',
		aliases: ['i', 'inv']
	},
	{
		command: 'profile',
		aliases: ['p', 'stats', 'statistics']
	},
	{
		command: 'level',
		aliases: ['xp', 'lvl']
	},
	{
		command: 'item',
		aliases: ['items', 'info', 'itemlist']
	},
	{
		command: 'cooldowns',
		aliases: ['cd', 'cds']
	},
	{
		command: 'health',
		aliases: ['hp', 'status']
	},
	{
		command: 'notifications',
		aliases: ['notifs']
	},
	{
		command: 'base',
		aliases: ['b']
	},
	{
		command: 'base storage',
		aliases: ['b s']
	},
	{
		command: 'energy',
		aliases: ['e']
	},

	// scavenging command aliases
	{
		command: 'scavenge',
		aliases: ['scav', 'loot']
	},
	{
		command: 'cook',
		aliases: ['campfire', 'fire']
	},

	// equipment command aliases
	{
		command: 'consume',
		aliases: ['eat']
	},
	{
		command: 'trash',
		aliases: ['junk', 'drop']
	},
	{
		command: 'craft',
		aliases: ['crafting']
	}
]

export interface LootPool<T extends Item = Item> {
	/**
	 * items that can be rolled
	 *
	 * 60% chance to roll
	 */
	common?: (T extends RangedWeapon ? { item: T, ammo: Ammunition } : { item: T })[]
	/**
	 * items that can be rolled
	 *
	 * 25% chance to roll
	 */
	uncommon?: (T extends RangedWeapon ? { item: T, ammo: Ammunition } : { item: T })[]
	/**
	 * items that can be rolled
	 *
	 * 10% chance to roll
	 */
	rare?: (T extends RangedWeapon ? { item: T, ammo: Ammunition } : { item: T })[]
	/**
	 * items that can be rolled
	 *
	 * 5% chance to roll
	 */
	rarest?: (T extends RangedWeapon ? { item: T, ammo: Ammunition } : { item: T })[]
}
interface PossibleItemDrops<T extends Item = Item> {
	common: T[]
	uncommon: T[]
	rare: T[]
	rarest: T[]
}

/**
 * Finds all items that can be found in a loot pool and their rarity
 * @param location Location loot pool is in
 * @param pool Loot drop pool to find items for
 * @returns items that can be found
 */
export function getLootPoolItems<T extends Item = Item> (pool: LootPool<T>): PossibleItemDrops<T>
export function getLootPoolItems<T extends MeleeWeapon | RangedWeapon> (pool: LootPool<T>, getAmmo: boolean): PossibleItemDrops<T>
export function getLootPoolItems<T extends Item = Item> (pool: LootPool<T>, getAmmo?: boolean): PossibleItemDrops<T> {
	const commonItems = []
	const uncommonItems = []
	const rareItems = []
	const rarestItems = []

	if (pool.common) {
		commonItems.push(...pool.common.map(i => getAmmo ? (i as { item: T, ammo: Ammunition }).ammo : i.item))
	}

	if (pool.uncommon) {
		uncommonItems.push(...pool.uncommon.map(i => getAmmo ? (i as { item: T, ammo: Ammunition }).ammo : i.item))
	}

	if (pool.rare) {
		rareItems.push(...pool.rare.map(i => getAmmo ? (i as { item: T, ammo: Ammunition }).ammo : i.item))
	}

	if (pool.rarest) {
		rarestItems.push(...pool.rarest.map(i => getAmmo ? (i as { item: T, ammo: Ammunition }).ammo : i.item))
	}

	return {
		common: commonItems as T[],
		uncommon: uncommonItems as T[],
		rare: rareItems as T[],
		rarest: rarestItems as T[]
	}
}

/**
 * @param min The minimum value
 * @param max The maximum value
 * @returns A random number (inclusive) between min and max
 */
export function getRandomInt (min: number, max: number): number {
	return Math.floor((Math.random() * (max - min + 1)) + min)
}

export function getRandomLootDropItem<T extends Item = Item> (possibleItems: PossibleItemDrops<T>): { item: T, rarity: 'Common' | 'Uncommon' | 'Rare' | 'Insanely Rare' } | undefined {
	const rand = getRandomInt(1, 100)

	if (possibleItems.rarest.length && rand <= 5) {
		return {
			rarity: 'Insanely Rare',
			item: possibleItems.rarest[Math.floor(Math.random() * possibleItems.rarest.length)]
		}
	}
	else if (possibleItems.rare.length && rand > 5 && rand <= 15) {
		return {
			rarity: 'Rare',
			item: possibleItems.rare[Math.floor(Math.random() * possibleItems.rare.length)]
		}
	}
	else if (possibleItems.uncommon.length && rand > 15 && rand <= 40) {
		return {
			rarity: 'Uncommon',
			item: possibleItems.uncommon[Math.floor(Math.random() * possibleItems.uncommon.length)]
		}
	}
	else if (possibleItems.common.length) {
		return {
			rarity: 'Common',
			item: possibleItems.common[Math.floor(Math.random() * possibleItems.common.length)]
		}
	}
}
