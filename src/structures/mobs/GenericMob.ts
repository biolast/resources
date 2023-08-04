import { BodyArmor } from '../items/BodyArmor.js'
import { Helmet } from '../items/Helmet.js'
import { Item, LootPool } from '../LootPool.js'
import { isRangedWeaponDrop, WeaponPool } from '../WeaponPool.js'


export type MobType = 'walker' | 'raider' | 'aggressive animal' | 'passive animal'

interface MobInfoBase {
	type: MobType
	/** Possible display names for this mob */
	names: string[]
	/** Items the mob can have in their inventory */
	loot: {
		pool: LootPool
		rolls: {
			min: number
			max: number
		}
	}
}

interface RaiderMobInfo extends MobInfoBase {
	type: 'raider'
	helmet?: {
		pool: LootPool<Helmet>
		/** Chance the mob is wearing a helmet (1 - 100%) */
		chance: number
	}
	armor?: {
		pool: LootPool<BodyArmor>
		/** Chance the mob is wearing armor (1 - 100%) */
		chance: number
	}
	weaponPool: WeaponPool
}

interface ZombieMobInfo extends MobInfoBase {
	type: 'walker'
	helmet?: {
		pool: LootPool<Helmet>
		/** Chance the mob is wearing a helmet (1 - 100%) */
		chance: number
	}
	armor?: {
		pool: LootPool<BodyArmor>
		/** Chance the mob is wearing armor (1 - 100%) */
		chance: number
	}
}
interface PassiveAnimalMobInfo extends MobInfoBase {
	type: 'passive animal'
}

interface AggressiveAnimalMobInfo extends MobInfoBase {
	type: 'aggressive animal'
}

export type GenericMobInfo = RaiderMobInfo | ZombieMobInfo | PassiveAnimalMobInfo | AggressiveAnimalMobInfo

export class GenericMob {
	constructor (public data: GenericMobInfo) {
		this.data = data
	}

	getObtainableItems (): Item[] {
		const obtainableItems = []
		const scavenge = this.data.loot.pool.getLootPoolDrops()

		obtainableItems.push(...[
			...scavenge.common,
			...scavenge.uncommon,
			...scavenge.rare,
			...scavenge.rarest
		].map(d => d.item))

		if ('helmet' in this.data && this.data.helmet) {
			const helmet = this.data.helmet.pool.getLootPoolDrops()
			obtainableItems.push(...[
				...helmet.common,
				...helmet.uncommon,
				...helmet.rare,
				...helmet.rarest
			].map(d => d.item))
		}

		if ('armor' in this.data && this.data.armor) {
			const armor = this.data.armor.pool.getLootPoolDrops()
			obtainableItems.push(...[
				...armor.common,
				...armor.uncommon,
				...armor.rare,
				...armor.rarest
			].map(d => d.item))
		}

		if ('weaponPool' in this.data) {
			const weaponDrops = this.data.weaponPool.getLootPoolDrops()
			const weapons = [
				...weaponDrops.common,
				...weaponDrops.uncommon,
				...weaponDrops.rare,
				...weaponDrops.rarest
			]
			const ammunition = []

			for (const weap of weapons) {
				if (isRangedWeaponDrop(weap)) {
					ammunition.push(...weap.ammo)
				}
			}

			obtainableItems.push(...ammunition, ...weapons.map(d => d.item))
		}

		return [...new Set(obtainableItems)]
	}
}
