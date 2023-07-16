import { LootPool } from '../../resources/constants.js'
import { BodyArmor } from '../items/BodyArmor.js'
import { Helmet } from '../items/Helmet.js'
import { MeleeWeapon } from '../items/MeleeWeapon.js'
import { RangedWeapon } from '../items/RangedWeapon.js'
import { Item } from '../items/Item.js'


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
	weaponPool: LootPool<MeleeWeapon | RangedWeapon>
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

	// TODO add function to generate active mob

	getObtainableItems (): Item[] {
		const obtainableItems = []

		obtainableItems.push(
			...this.data.loot.pool.common || [],
			...this.data.loot.pool.uncommon || [],
			...this.data.loot.pool.rare || [],
			...this.data.loot.pool.rarest || []
		)

		if ('helmet' in this.data && this.data.helmet) {
			obtainableItems.push(
				...this.data.helmet.pool.common || [],
				...this.data.helmet.pool.uncommon || [],
				...this.data.helmet.pool.rare || [],
				...this.data.helmet.pool.rarest || []
			)
		}

		if ('armor' in this.data && this.data.armor) {
			obtainableItems.push(
				...this.data.armor.pool.common || [],
				...this.data.armor.pool.uncommon || [],
				...this.data.armor.pool.rare || [],
				...this.data.armor.pool.rarest || []
			)
		}

		if ('weaponPool' in this.data) {
			obtainableItems.push(
				...this.data.weaponPool.common || [],
				...this.data.weaponPool.uncommon || [],
				...this.data.weaponPool.rare || [],
				...this.data.weaponPool.rarest || []
			)
		}

		return [...new Set(obtainableItems)]
	}
}
