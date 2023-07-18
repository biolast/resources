import { BodyArmor } from '../items/BodyArmor.js'
import { Helmet } from '../items/Helmet.js'
import { MeleeWeapon } from '../items/MeleeWeapon.js'
import { RangedWeapon } from '../items/RangedWeapon.js'
import { Item } from '../items/Item.js'
import { LootPool, getLootPoolItems } from '../../utils.js'
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

export type UniqueMobInfo = RaiderMobInfo | ZombieMobInfo | PassiveAnimalMobInfo | AggressiveAnimalMobInfo

export class UniqueMob {
	constructor (public data: UniqueMobInfo) {
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
			const weapon = getLootPoolItems(this.data.generatedLoot.pool)

			obtainableItems.push(
				...weapon.common,
				...weapon.uncommon,
				...weapon.rare,
				...weapon.rarest
			)
		}

		return [...new Set(obtainableItems)]
	}
}
