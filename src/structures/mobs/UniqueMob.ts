import { LootPool } from '../../utils.js'
import { BodyArmor } from '../items/BodyArmor.js'
import { Helmet } from '../items/Helmet.js'
import { MeleeWeapon } from '../items/MeleeWeapon.js'
import { RangedWeapon } from '../items/RangedWeapon.js'
import { Item } from '../items/Item.js'
import { MobType } from './GenericMob.js'


interface MobInfoBase {
	type: MobType
	/** Display name for this mob */
	name: string
	/** Items the mob has in their inventory */
	inventory: {
		item: Item
		amount: number
		durability?: number
	}[]
	/** health this mob starts with */
	health: number
	/** xp this mob gives when killed */
	xp: number
	/** optional randomly generated loot */
	generatedLoot?: {
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
		item: Helmet
		durability: number
	}
	armor?: {
		item: BodyArmor
		durability: number
	}
	weapon: {
		item: MeleeWeapon | RangedWeapon
		durability: number
	}
}

interface ZombieMobInfo extends MobInfoBase {
	type: 'walker'
	helmet?: {
		item: Helmet
		durability: number
	}
	armor?: {
		item: BodyArmor
		durability: number
	}
	/** damage this mob deals */
	damage: number
	/** the penetration this mob has with it's attacks */
	attackPenetration: number
	/** chance 0 - 100 this mob inflicts bitten debuff */
	chanceToBite: number
}
interface PassiveAnimalMobInfo extends MobInfoBase {
	type: 'passive animal'
}
interface AggressiveAnimalMobInfo extends MobInfoBase {
	type: 'aggressive animal'
	/** damage this mob deals */
	damage: number
	/** the penetration this mob has with it's attacks */
	attackPenetration: number
	/** chance 0 - 100 this mob inflicts bitten debuff */
	chanceToBite: number
}

export type MobInfo = RaiderMobInfo | ZombieMobInfo | PassiveAnimalMobInfo | AggressiveAnimalMobInfo

export class UniqueMob {
	constructor (public data: MobInfo) {
		this.data = data
	}

	getObtainableItems (): Item[] {
		const obtainableItems = []

		for (const itemAmnt of this.data.inventory) {
			obtainableItems.push(itemAmnt.item)
		}

		if ('helmet' in this.data && this.data.helmet) {
			obtainableItems.push(this.data.helmet.item)
		}

		if ('armor' in this.data && this.data.armor) {
			obtainableItems.push(this.data.armor.item)
		}

		if ('weapon' in this.data) {
			obtainableItems.push(this.data.weapon.item)
		}

		if (this.data.generatedLoot) {
			obtainableItems.push(
				...this.data.generatedLoot.pool.common || [],
				...this.data.generatedLoot.pool.uncommon || [],
				...this.data.generatedLoot.pool.rare || [],
				...this.data.generatedLoot.pool.rarest || []
			)
		}

		return [...new Set(obtainableItems)]
	}
}
