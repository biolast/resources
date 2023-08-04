import { PumpShotgun } from '../resources/items/ranged.js'
import { Apple } from '../resources/items/foods.js'
import { Ammunition, Backpack, BodyArmor, Food, Helmet, Medical, MeleeWeapon, Supply, ThrowableWeapon } from '../index.js'
import { WoodenBat } from '../resources/items/melee.js'
import { NonEmptyArray } from '../resources/constants.js'
import { RangedWeapon } from './items/RangedWeapon.js'


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

export type ItemDrop<T extends Item = Item> = { item: T }
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
 * loot({ item: Pistol })
 */
export const loot = <T extends Item>(drop: ItemDrop<T>): ItemDropExistential<T> => cb => cb(drop)

/**
 * used to roll random items based on their rarity
 *
 * @example
 * const pool = new LootPool({
 *		common: [loot({ item: Apple }), loot({ item: HeavyJacket })],
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
	C extends NonEmptyArray<ItemDropExistential<Common>> = NonEmptyArray<ItemDropExistential<Common>>,
	U extends NonEmptyArray<ItemDropExistential<Uncommon>> | undefined = NonEmptyArray<ItemDropExistential<Uncommon>>,
	R extends NonEmptyArray<ItemDropExistential<Rare>> | undefined = NonEmptyArray<ItemDropExistential<Rare>>,
	Rrest extends NonEmptyArray<ItemDropExistential<Rarest>> | undefined = NonEmptyArray<ItemDropExistential<Rarest>>
> {
	protected readonly common: C
	protected readonly uncommon: U
	protected readonly rare: R
	protected readonly rarest: Rrest

	constructor (data: {
		/**
		 * array of loot that can be rolled (60% chance to roll)
		 *
		 * make sure to enclose each drop inside of the {@link loot()} function
		 *
		 * @example
		 * common: [loot({ item: Apple }), loot({ item: Pistol })]
		 */
		readonly common: C
		/**
		 * array of loot that can be rolled (25% chance to roll)
		 *
		 * make sure to enclose each drop inside of the {@link loot()} function
		 *
		 * @example
		 * uncommon: [loot({ item: Apple }), loot({ item: Pistol })]
		 */
		readonly uncommon: U
		/**
		 * array of loot that can be rolled (10% chance to roll)
		 *
		 * make sure to enclose each drop inside of the {@link loot()} function
		 *
		 * @example
		 * rare: [loot({ item: Apple }), loot({ item: Pistol })]
		 */
		readonly rare: R
		/**
		 * array of loot that can be rolled (5% chance to roll)
		 *
		 * make sure to enclose each drop inside of the {@link loot()} function
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
		const commonItems = this.common.map(drop => drop(i => i))
		let uncommonItems
		let rareItems
		let rarestItems

		if (this.uncommon) {
			uncommonItems = this.uncommon.map(drop => drop(i => i))
		}

		if (this.rare) {
			rareItems = this.rare.map(drop => drop(i => i))
		}

		if (this.rarest) {
			rarestItems = this.rarest.map(drop => drop(i => i))
		}

		return {
			common: commonItems as ExistentialToItemDrops<C>,
			uncommon: uncommonItems as ExistentialToItemDrops<U>,
			rare: rareItems as ExistentialToItemDrops<R>,
			rarest: rarestItems as ExistentialToItemDrops<Rrest>
		}
	}

	/**
	 * retrieves a random {@link ItemDrop} from the loot pool
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

		if (possibleItems.rarest?.length && rand <= 5) {
			return {
				rarity: 'Insanely Rare',
				...possibleItems.rarest[Math.floor(Math.random() * possibleItems.rarest.length)] as ExistentialToItemDrops<Rrest>[number]
			}
		}
		else if (possibleItems.rare?.length && rand > 5 && rand <= 15) {
			return {
				rarity: 'Rare',
				...possibleItems.rare[Math.floor(Math.random() * possibleItems.rare.length)] as ExistentialToItemDrops<R>[number]
			}
		}
		else if (possibleItems.uncommon?.length && rand > 15 && rand <= 40) {
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


const exampleLootPool = new LootPool({
	common: [loot({ item: Apple }), loot({ item: WoodenBat })],
	uncommon: undefined,
	rare: undefined,
	rarest: [loot({ item: PumpShotgun })]
})

console.log(exampleLootPool.getRandomDrop()?.item) // random item from loot pool
console.log(exampleLootPool.getLootPoolDrops().common) // undefined

