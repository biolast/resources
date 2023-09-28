import { BodyArmor } from '../items/BodyArmor.js'
import { Helmet } from '../items/Helmet.js'
import { Item, LootPool } from '../LootPool.js'
import { MobBase, MobProperties } from './MobBase.js'


export class Walker extends MobBase {
	helmet: {
		/** {@link LootPool} of possible helmets mob can wear */
		pool: LootPool<Helmet>
		/** chance mob is wearing armor */
		chance: number
	}
	armor: {
		/** {@link LootPool} of possible armor mob can wear */
		pool: LootPool<BodyArmor>
		/** chance mob is wearing armor */
		chance: number
	}

	constructor (data: MobProperties & {
		helmet: {
			/** {@link LootPool} of possible helmets mob can wear */
			pool: LootPool<Helmet>
			/** chance mob is wearing armor */
			chance: number
		}
		armor: {
			/** {@link LootPool} of possible armor mob can wear */
			pool: LootPool<BodyArmor>
			/** chance mob is wearing armor */
			chance: number
		}
	}) {
		if (data.loot.rolls > 5) {
			throw new Error('Walker mobs cannot have more than 5 loot rolls to prevent the battle image from overflowing')
		}

		super(data)

		this.helmet = data.helmet
		this.armor = data.armor
	}

	getObtainableItems (): Item[] {
		const obtainableItems = []
		const scavenge = this.loot.pool.getLootPoolDrops()
		const helmet = this.helmet.pool.getLootPoolDrops()
		const armor = this.armor.pool.getLootPoolDrops()

		obtainableItems.push(...[
			...scavenge.common,
			...(scavenge.uncommon || []),
			...(scavenge.rare || []),
			...(scavenge.rarest || [])
		].map(d => d.item))

		obtainableItems.push(...[
			...helmet.common,
			...(helmet.uncommon || []),
			...(helmet.rare || []),
			...(helmet.rarest || [])
		].map(d => d.item))

		obtainableItems.push(...[
			...armor.common,
			...(armor.uncommon || []),
			...(armor.rare || []),
			...(armor.rarest || [])
		].map(d => d.item))

		return [...new Set(obtainableItems)]
	}
}
