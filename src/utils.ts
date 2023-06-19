import { Item } from './structures/items/Item.js'


export interface LootPool<T extends Item = Item> {
	/**
	 * items that can be rolled
	 *
	 * 60% chance to roll
	 */
	common?: T[]
	/**
	 * items that can be rolled
	 *
	 * 25% chance to roll
	 */
	uncommon?: T[]
	/**
	 * items that can be rolled
	 *
	 * 10% chance to roll
	 */
	rare?: T[]
	/**
	 * items that can be rolled
	 *
	 * 5% chance to roll
	 */
	rarest?: T[]
}
