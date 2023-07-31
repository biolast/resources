import { LEVEL_FORMULA } from './resources/constants.js'
import { Ammunition, Item, MeleeWeapon, RangedWeapon } from './index.js'


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
 * @returns A random number (inclusive) between min and max integer
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
