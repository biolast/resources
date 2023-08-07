import { Item, LootPool } from '../LootPool.js'


export interface MobProperties {
	/** Name of the mob (displayed in battle menu) */
	name: string
	/** Items mob can have in their inventory */
	loot: {
		pool: LootPool
		rolls: {
			min: number
			max: number
		}
	}
}

export abstract class MobBase {
	/** Name of the mob (displayed in battle menu) */
	name: string
	/** Items mob can have in their inventory */
	loot: {
		pool: LootPool
		rolls: {
			min: number
			max: number
		}
	}

	constructor (data: MobProperties) {
		this.name = data.name
		this.loot = data.loot
	}

	abstract getObtainableItems (): Item[]
}
