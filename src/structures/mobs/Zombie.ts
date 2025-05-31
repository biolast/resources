import { BodyArmor, Helmet, Item } from '../items.js'
import { LootPool } from '../LootPool.js'
import { ActiveMob } from './ActiveMob.js'


export class Zombie {
	/** Display name for this mob, shown in battles */
	readonly name: string
	/** Amount of health this mob spawns with */
	readonly health: number
	/** XP earned for defeating this mob */
	readonly xp: number
	/** Armor mob is wearing, if any */
	readonly armor?: {
		pool: LootPool<{ helmet?: Helmet, armor?: BodyArmor } & ({ helmet: Helmet } | { armor: BodyArmor })>
		/** chance mob is wearing armor 1 - 100% */
		chance: number
	}
	/** Random items the mob can have in their inventory */
	readonly randomDrops: {
		pool: LootPool<Item>
		/** how many items should mob spawn with */
		rolls: {
			min: number
			max: number
		}
	}
	/** Items the mob ALWAYS has in their inventory */
	readonly staticDrops?: { item: Item, durability?: number }[]
	readonly damage: number
	readonly armorPenetration: number

	constructor (data: {
		/** Display name for this mob, shown in battles */
		readonly name: string
		/** Amount of health this mob spawns with */
		readonly health: number
		/** XP earned for defeating this mob */
		readonly xp: number
		/** Armor mob is wearing, if any */
		readonly armor?: {
			pool: LootPool<{ helmet?: Helmet, armor?: BodyArmor } & ({ helmet: Helmet } | { armor: BodyArmor })>
			/** chance mob is wearing armor 1 - 100% */
			chance: number
		}
		/** Random items the mob can have in their inventory */
		readonly randomDrops: {
			pool: LootPool<Item>
			/** how many items should mob spawn with */
			rolls: {
				min: number
				max: number
			}
		}
		/** Items the mob ALWAYS has in their inventory */
		readonly staticDrops?: { item: Item, durability?: number }[]
		readonly damage: number
		readonly armorPenetration: number
	}) {
		this.name = data.name
		this.health = data.health
		this.xp = data.xp
		this.armor = data.armor
		this.randomDrops = data.randomDrops
		this.staticDrops = data.staticDrops
		this.damage = data.damage
		this.armorPenetration = data.armorPenetration
	}

	generate () {
		const lootRolls = Math.floor((Math.random() * (this.randomDrops.rolls.max - this.randomDrops.rolls.min + 1)) + this.randomDrops.rolls.min)
		const inventory = []
		let armor

		for (let i = 0; i < lootRolls; i++) {
			const drop = this.randomDrops.pool.roll()
			let itemDura

			if (drop.value.durability) {
				const minDurability = Math.ceil(drop.value.durability / 2)

				itemDura = Math.floor((Math.random() * (drop.value.durability - minDurability + 1)) + minDurability)
			}

			inventory.push({ item: drop.value, durability: itemDura })
		}

		// add static drops to inventory
		inventory.push(...(this.staticDrops || []))

		if (this.armor && Math.random() < (this.armor.chance / 100)) {
			armor = this.armor.pool.roll()
		}

		return new ActiveMob({
			type: 'bandit',
			name: this.name,
			health: this.health,
			xp: this.xp,
			damage: this.damage,
			armorPenetration: this.armorPenetration,
			inventory,
			helmet: armor?.value.helmet,
			armor: armor?.value.armor
		})
	}
}
