import { BodyArmor } from '../items/BodyArmor.js'
import { Helmet } from '../items/Helmet.js'
import { MeleeWeapon } from '../items/MeleeWeapon.js'
import { RangedWeapon } from '../items/RangedWeapon.js'
import { Item } from '../items/Item.js'
import { LootPool, getLootPoolItems } from '../../utils.js'


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
		const scavenge = getLootPoolItems(this.data.loot.pool)

		obtainableItems.push(
			...scavenge.common,
			...scavenge.uncommon,
			...scavenge.rare,
			...scavenge.rarest
		)

		if ('helmet' in this.data && this.data.helmet) {
			const helmet = getLootPoolItems(this.data.helmet.pool)
			obtainableItems.push(
				...helmet.common,
				...helmet.uncommon,
				...helmet.rare,
				...helmet.rarest
			)
		}

		if ('armor' in this.data && this.data.armor) {
			const armor = getLootPoolItems(this.data.armor.pool)
			obtainableItems.push(
				...armor.common,
				...armor.uncommon,
				...armor.rare,
				...armor.rarest
			)
		}

		if ('weaponPool' in this.data) {
			const weapon = getLootPoolItems(this.data.weaponPool)
			const ammo = getLootPoolItems(this.data.weaponPool, true)

			obtainableItems.push(
				...weapon.common,
				...weapon.uncommon,
				...weapon.rare,
				...weapon.rarest,
				...ammo.common,
				...ammo.uncommon,
				...ammo.rare,
				...ammo.rarest
			)
		}

		return [...new Set(obtainableItems)]
	}
}
