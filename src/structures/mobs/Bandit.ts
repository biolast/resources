import { Item } from '../item.js'
import { LootPool } from '../LootPool.js'
import { ActiveMob } from './ActiveMob.js'


export class Bandit {
	/** Possible display names for this mob, shown in battles */
	readonly names: string[]
	/** Amount of health this mob spawns with */
	readonly health: number
	/** XP earned for defeating this mob */
	readonly xp: number
	/** Armor mob is wearing, if any */
	readonly armor?: {
		pool: LootPool<{ helmet?: Item<'Helmet'>, armor?: Item<'Body Armor'> } & ({ helmet: Item<'Helmet'> } | { armor: Item<'Body Armor'> })>
		/** chance mob is wearing armor 1 - 100% */
		chance: number
	}
	/** Weapon mob uses */
	readonly weapon: LootPool<{ weapon: Item<'Melee Weapon'> } | { weapon: Item<'Ranged Weapon'>, ammo: Item<'Ammunition'> }>
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

	constructor (data: {
		/** Possible display names for this mob, shown in battles */
		readonly names: string[]
		/** Amount of health this mob spawns with */
		readonly health: number
		/** XP earned for defeating this mob */
		readonly xp: number
		/** Armor mob is wearing, if any */
		readonly armor?: {
			pool: LootPool<{ helmet?: Item<'Helmet'>, armor?: Item<'Body Armor'> } & ({ helmet: Item<'Helmet'> } | { armor: Item<'Body Armor'> })>
			/** chance mob is wearing armor 1 - 100% */
			chance: number
		}
		/** Weapon mob uses */
		readonly weapon: LootPool<{ weapon: Item<'Melee Weapon'> } | { weapon: Item<'Ranged Weapon'>, ammo: Item<'Ammunition'> }>
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
	}) {
		this.names = data.names
		this.health = data.health
		this.xp = data.xp
		this.armor = data.armor
		this.weapon = data.weapon
		this.randomDrops = data.randomDrops
		this.staticDrops = data.staticDrops
	}

	generate () {
		const name = this.names[Math.floor(Math.random() * this.names.length)]
		const lootRolls = Math.floor((Math.random() * (this.randomDrops.rolls.max - this.randomDrops.rolls.min + 1)) + this.randomDrops.rolls.min)
		const weapon = this.weapon.roll()
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
			name,
			inventory,
			weapon: weapon.value,
			helmet: armor?.value.helmet,
			armor: armor?.value.armor,
			health: this.health,
			xp: this.xp
		})
	}
}
