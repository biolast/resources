import { BodyArmor } from '../items/BodyArmor.js'
import { Helmet } from '../items/Helmet.js'
import { Item, LootPool } from '../LootPool.js'
import { isRangedWeaponDrop, WeaponPool } from '../WeaponPool.js'
import { MobBase, MobProperties } from './MobBase.js'


export class Raider extends MobBase {
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
	/** {@link WeaponPool} of possible weapons this raider can use */
	weapon: WeaponPool

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
		/** {@link WeaponPool} of possible weapons this raider can use */
		weapon: WeaponPool
	}) {
		if (data.loot.rolls > 4) {
			throw new Error('Raider mobs cannot have more than 4 loot rolls in order to prevent the battle image from overflowing')
		}

		super(data)

		this.helmet = data.helmet
		this.armor = data.armor
		this.weapon = data.weapon
	}

	getObtainableItems (): Item[] {
		const obtainableItems = []
		const scavenge = this.loot.pool.getLootPoolDrops()
		const helmet = this.helmet.pool.getLootPoolDrops()
		const armor = this.armor.pool.getLootPoolDrops()
		const weaponDrops = this.weapon.getLootPoolDrops()
		const weapons = [
			...weaponDrops.common,
			...(weaponDrops.uncommon || []),
			...(weaponDrops.rare || []),
			...(weaponDrops.rarest || [])
		]
		const ammunition = []

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

		for (const weap of weapons) {
			if (isRangedWeaponDrop(weap)) {
				ammunition.push(...weap.ammo)
			}
		}

		obtainableItems.push(...ammunition, ...weapons.map(d => d.item))

		return [...new Set(obtainableItems)]
	}
}
