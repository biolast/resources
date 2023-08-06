import { BodyArmor } from '../items/BodyArmor.js'
import { Helmet } from '../items/Helmet.js'
import { Item, LootPool } from '../LootPool.js'
import { MobBase, MobProperties } from './MobBase.js'


export class Walker extends MobBase {
	/** pool of possible helmets mob can wear */
	helmet: LootPool<Helmet>
	/** pool of possible armor mob can wear */
	armor: LootPool<BodyArmor>

	constructor (data: MobProperties & {
		/** pool of possible helmets mob can wear */
		helmet: LootPool<Helmet>
		/** pool of possible armor mob can wear */
		armor: LootPool<BodyArmor>
	}) {
		super(data)

		this.helmet = data.helmet
		this.armor = data.armor
	}

	getObtainableItems (): Item[] {
		const obtainableItems = []
		const scavenge = this.loot.pool.getLootPoolDrops()
		const helmet = this.helmet.getLootPoolDrops()
		const armor = this.armor.getLootPoolDrops()

		obtainableItems.push(...[
			...scavenge.common,
			...scavenge.uncommon,
			...scavenge.rare,
			...scavenge.rarest
		].map(d => d.item))

		obtainableItems.push(...[
			...helmet.common,
			...helmet.uncommon,
			...helmet.rare,
			...helmet.rarest
		].map(d => d.item))

		obtainableItems.push(...[
			...armor.common,
			...armor.uncommon,
			...armor.rare,
			...armor.rarest
		].map(d => d.item))

		return [...new Set(obtainableItems)]
	}
}
