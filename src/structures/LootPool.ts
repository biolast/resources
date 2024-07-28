import { ItemBase } from './items/ItemBase.js'
import { Bandit } from './mobs/Bandit.js'
import { Zombie } from './mobs/Zombie.js'


type RollRarity = 'Common' | 'Uncommon' | 'Rare' | 'Rarest'

export class LootPool<T> {
	/** 60% chance drops */
	private common: T[]
	/** 25% chance drops */
	private uncommon?: T[]
	/** 10% chance drops */
	private rare?: T[]
	/** 5% chance drops */
	private rarest?: T[]

	constructor (data: {
		/** 60% chance drops */
		common: NoInfer<[T, ...T[]]>
		/** 25% chance drops */
		uncommon?: NoInfer<T>[]
		/** 10% chance drops */
		rare?: NoInfer<T>[]
		/** 5% chance drops */
		rarest?: NoInfer<T>[]
	}) {
		this.common = data.common
		this.uncommon = data.uncommon
		this.rare = data.rare
		this.rarest = data.rarest
	}

	/**
	 * Rolls a random drop from the pool
	 * @param options options to pass to the roll function
	 * @example
	 * interface DropType {
	 * 	levelRequired: number
	 * 	items: Item[]
	 * }
	 * const pool = new LootPool<DropType>({
	 * 	common: [
	 * 		{ levelRequired: 1, items: [items.bandage] },
	 * 		{ levelRequired: 2, items: [items.pistol] }
	 * 	]
	 * })
	 * const drop = pool.roll()
	 *
	 * console.log(pool.roll()) // will be one of DropType
	 */
	roll<
		RollValue = T,
		RollType extends { rarity: RollRarity, value: unknown }[] = { rarity: RollRarity, value: RollValue }[],
		Amount extends number | undefined = undefined
	> (options?: Partial<{
		/**
		 * filter function to run on drops prior to rolling
		 * @example
		 * interface DropType {
		 * 	levelRequired: number
		 * 	items: Item[]
		 * }
		 * const pool = new LootPool<DropType>({
		 * 	common: [
		 * 		{ levelRequired: 1, items: [items.bandage] },
		 * 		{ levelRequired: 2, items: [items.pistol] }
		 * 	]
		 * })
		 * const drop = pool.roll({ filter: d => d.levelRequired <= 1 })
		 *
		 * console.log(drop) // returns a random DropType that matches the filter
		 */
		filter: (drop: T) => boolean
		/**
		 * changes the returned value of roll to a random element of this functions returned array
		 * @example
		 * interface DropType {
		 * 	levelRequired: number
		 * 	items: Item[]
		 * }
		 * const pool = new LootPool<DropType>({
		 * 	common: [
		 * 		{ levelRequired: 1, items: [items.bandage] },
		 * 		{ levelRequired: 2, items: [items.pistol] }
		 * 	]
		 * })
		 * const drop = pool.roll({ rollValue: d => d.items })
		 *
		 * console.log(drop) // returns a random Item from items array
		 */
		rollValue: (drop: T) => RollValue[]
		/** amount of drops to roll, setting this changes the value return type to an array of drops */
		amountToRoll: Amount
	}>): Amount extends number ? RollType : RollType[number] {
		const rolls = []
		let common, uncommon, rare, rarest

		if (options?.filter) {
			common = this.common.filter(options.filter)
			uncommon = this.common.filter(options.filter)
			rare = this.common.filter(options.filter)
			rarest = this.common.filter(options.filter)

			if (!common.length && !uncommon.length && !rare.length && !rarest.length) throw new Error('the supplied filter has no possible drops')
		}
		else {
			common = this.common
			uncommon = this.common
			rare = this.common
			rarest = this.common
		}

		for (let i = 0; i < (options?.amountToRoll || 1); i++) {
			const rand = Math.random()
			let drop, rarity

			if (rarest.length && rand < 0.05) {
				drop = rarest[Math.floor(Math.random() * rarest.length)]
				rarity = 'rarest'
			}
			else if (rare.length && rand < 0.15) {
				drop = rare[Math.floor(Math.random() * rare.length)]
				rarity = 'rare'
			}
			else if (uncommon.length && rand < 0.40) {
				drop = uncommon[Math.floor(Math.random() * uncommon.length)]
				rarity = 'uncommon'
			}
			else {
				drop = common[Math.floor(Math.random() * common.length)]
				rarity = 'common'
			}

			if (options?.rollValue) {
				const rollValue = options.rollValue(drop)
				rolls.push({
					rarity,
					value: rollValue[Math.floor(Math.random() * rollValue.length)]
				})
			}
			else {
				rolls.push({
					rarity,
					value: drop
				})
			}
		}

		return (options?.amountToRoll ? rolls : rolls[0]) as Amount extends number ? RollType : RollType[number]
	}

	get allDrops () {
		return [
			...this.common,
			...this.uncommon || [],
			...this.rare || [],
			...this.rarest || []
		]
	}
}

export const ScavengePool = LootPool<{ levelRequired: number, items: ItemBase[] }>

export const MobPool = LootPool<{ level: number, mob: Bandit | Zombie }>
