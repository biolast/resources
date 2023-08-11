import { Ammunition, Backpack, BodyArmor, Food, Helmet, Medical, MeleeWeapon, Supply, ThrowableWeapon } from '../index.js'
import { RangedWeapon } from './items/RangedWeapon.js'
import { Tool } from './items/Tool.js'


export type Item<Name extends string = string> = Ammunition<Name>
	| BodyArmor<Name>
	| Backpack<Name>
	| Food<Name>
	| Helmet<Name>
	| Medical<Name>
	| MeleeWeapon<Name>
	| RangedWeapon<Name>
	| Supply<Name>
	| ThrowableWeapon<Name>
	| Tool<Name>

export type ItemDrop<T extends Item = Item> = T['durability'] extends number ?
	{
		item: T
		durability: {
			min: number
			max: number
		}
	} :
	{
		item: T
	}

export type ItemDropExistential<I extends Item, DropType extends ItemDrop<I> = ItemDrop<I>> = <R>(cb: <T extends DropType>(drop: T) => R) => R

/**
 * Extracts {@link Item} from {@link ItemDropExistential}
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ExistentialToItemDrops<T> = T extends ItemDropExistential<infer Itm, infer ItmDrop>[] ? ItmDrop[] : never

/**
 *
 * @param drop Object containing item property
 * @example
 * loot({ item: Apple })
 * loot({ item: Pistol, durability: { min: 3, max: 6 } })
 */
export const loot = <T extends Item>(drop: ItemDrop<T>): ItemDropExistential<T> => cb => cb(drop)

/**
 * Utility function for generating item min-max durability in loot pools
 * @example
 * loot({ item: Pistol, durability: generateDurability(Pistol.durability, 0.75) }) // durability min will be 75% of items max durability, max will be same as the items max
 */
export const generateLootDurability = (durability: number, multiplier: number): { min: number, max: number } => ({
	min: Math.round(durability * multiplier),
	max: durability
})

/**
 * Used to roll random items based on their rarity
 *
 * @example
 * const pool = new LootPool({
 *		common: [loot({ item: Apple }), loot({ item: HeavyJacket, durability: 4 })],
 *		uncommon: [loot({ item: WoodenBat })],
 *		rare: undefined,
 *		rarest: [loot({ item: PumpShotgun })]
 *	})
 *
 * console.log(pool.getRandomDrop()?.item) // random item from the pool
 */
export class LootPool<
	LimitItemsToType extends Item = Item,
	Common extends Item = LimitItemsToType, // holds types for common items
	Uncommon extends Item = LimitItemsToType, // holds types for uncommon items
	Rare extends Item = LimitItemsToType, // holds types for rare items
	Rarest extends Item = LimitItemsToType, // holds types for rarest items
	C extends ItemDropExistential<Common>[] = ItemDropExistential<Common>[],
	U extends ItemDropExistential<Uncommon>[] = ItemDropExistential<Uncommon>[],
	R extends ItemDropExistential<Rare>[] = ItemDropExistential<Rare>[],
	Rrest extends ItemDropExistential<Rarest>[] = ItemDropExistential<Rarest>[]
> {
	readonly common: C
	readonly uncommon: U
	readonly rare: R
	readonly rarest: Rrest

	constructor (data: {
		/**
		 * Array of loot that can be rolled (60% chance to roll)
		 *
		 * Make sure to enclose each drop inside of the {@link loot()} function
		 *
		 * @example
		 * common: [loot({ item: Apple }), loot({ item: Pistol })]
		 */
		readonly common: C
		/**
		 * Array of loot that can be rolled (25% chance to roll)
		 *
		 * Make sure to enclose each drop inside of the {@link loot()} function
		 *
		 * @example
		 * uncommon: [loot({ item: Apple }), loot({ item: Pistol })]
		 */
		readonly uncommon: U
		/**
		 * Array of loot that can be rolled (10% chance to roll)
		 *
		 * Make sure to enclose each drop inside of the {@link loot()} function
		 *
		 * @example
		 * rare: [loot({ item: Apple }), loot({ item: Pistol })]
		 */
		readonly rare: R
		/**
		 * Array of loot that can be rolled (5% chance to roll)
		 *
		 * Make sure to enclose each drop inside of the {@link loot()} function
		 *
		 * @example
		 * rarest: [loot({ item: Apple }), loot({ item: Pistol })]
		 */
		readonly rarest: Rrest
	}) {
		this.common = data.common
		this.uncommon = data.uncommon
		this.rare = data.rare
		this.rarest = data.rarest
	}

	getLootPoolDrops (): {
		common: ExistentialToItemDrops<C>
		uncommon: ExistentialToItemDrops<U>
		rare: ExistentialToItemDrops<R>
		rarest: ExistentialToItemDrops<Rrest>
	} {
		return {
			common: this.common.map(drop => drop(i => i)) as ExistentialToItemDrops<C>,
			uncommon: this.uncommon.map(drop => drop(i => i)) as ExistentialToItemDrops<U>,
			rare: this.rare.map(drop => drop(i => i)) as ExistentialToItemDrops<R>,
			rarest: this.rarest.map(drop => drop(i => i)) as ExistentialToItemDrops<Rrest>
		}
	}

	/**
	 * Retrieves a random {@link ItemDrop} from the loot pool
	 *
	 * @example
	 * exampleLootPool.getRandomDrop()?.rarity
	 * exampleLootPool.getRandomDrop()?.item
	 */
	getRandomDrop (): {
		rarity: 'Common' | 'Uncommon' | 'Rare' | 'Insanely Rare'
	} & (ExistentialToItemDrops<C>[number] | ExistentialToItemDrops<U>[number] | ExistentialToItemDrops<R>[number] | ExistentialToItemDrops<Rrest>[number]) | undefined {
		const possibleItems = this.getLootPoolDrops()
		const rand = Math.floor((Math.random() * 100) + 1) // generate random number 1 - 100 (inclusive) could make this more secure in the future?

		if (possibleItems.rarest.length && rand <= 5) {
			return {
				rarity: 'Insanely Rare',
				...possibleItems.rarest[Math.floor(Math.random() * possibleItems.rarest.length)] as ExistentialToItemDrops<Rrest>[number]
			}
		}
		else if (possibleItems.rare.length && rand > 5 && rand <= 15) {
			return {
				rarity: 'Rare',
				...possibleItems.rare[Math.floor(Math.random() * possibleItems.rare.length)] as ExistentialToItemDrops<R>[number]
			}
		}
		else if (possibleItems.uncommon.length && rand > 15 && rand <= 40) {
			return {
				rarity: 'Uncommon',
				...possibleItems.uncommon[Math.floor(Math.random() * possibleItems.uncommon.length)] as ExistentialToItemDrops<U>[number]
			}
		}
		else if (possibleItems.common.length) {
			return {
				rarity: 'Common',
				...possibleItems.common[Math.floor(Math.random() * possibleItems.common.length)] as ExistentialToItemDrops<C>[number]
			}
		}
	}
}
