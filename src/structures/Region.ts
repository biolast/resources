import { LootPool } from '../utils.js'
import { Item } from './items/Item.js'
import { GenericMob } from './mobs/GenericMob.js'
import { UniqueMob } from './mobs/UniqueMob.js'


export class Region<T extends string = string> {
	readonly name: T

	constructor (public data: {
		readonly name: T
		readonly imageURL: string

		/** higher number = stronger mobs, easiest being 1 */
		readonly difficultyLevel: number

		/** The distance of this region relative to other regions (suburbs as 0km away) */
		readonly distance: number

		/** Icon to display in select menu on travel command for this region */
		readonly discordIcon: string

		/** Info about mobs that can spawn in this region */
		readonly mobs: {
			mob: GenericMob | UniqueMob
			/** Determines the rate this mob type spawns compared to other mob types (ie. higher number = more likely to spawn) */
			weight: number
		}[]

		/** The boss player must defeat before they can travel to this region */
		readonly boss?: UniqueMob

		/** Loot received when scavenging this region */
		readonly scavengeLoot: {
			pool: LootPool
			rolls: {
				min: number
				max: number
			}
		}

		/** Areas that require a key to scavenge, drop loot from a separate loot pool */
		readonly keyAreas: {
			pool: LootPool
			rolls: {
				min: number
				max: number
			}

			/** Key/item user must have in order to scavenge this area */
			key: Item
		}[]
	}) {
		this.name = data.name
		this.data = data
	}

	getObtainableItems (): Item[] {
		const obtainableItems = []

		obtainableItems.push(
			...this.data.scavengeLoot.pool.common || [],
			...this.data.scavengeLoot.pool.uncommon || [],
			...this.data.scavengeLoot.pool.rare || [],
			...this.data.scavengeLoot.pool.rarest || []
		)

		for (const area of this.data.keyAreas) {
			obtainableItems.push(
				...area.pool.common || [],
				...area.pool.uncommon || [],
				...area.pool.rare || [],
				...area.pool.rarest || []
			)
		}

		for (const mobInfo of this.data.mobs) {
			obtainableItems.push(...mobInfo.mob.getObtainableItems())
		}

		if (this.data.boss) {
			obtainableItems.push(...this.data.boss.getObtainableItems())
		}

		return [...new Set(obtainableItems)]
	}

	toString () {
		return this.name
	}
}
