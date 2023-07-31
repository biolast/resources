import { PumpShotgun } from '../resources/items/ranged.js'
import { Apple } from '../resources/items/foods.js'
import { Shotgun12GaugeSlug } from '../resources/items/ammunition.js'
import { Ammunition, Backpack, BodyArmor, Food, Helmet, Medical, MeleeWeapon, Supply, ThrowableWeapon } from '../index.js'
import { WoodenBat } from '../resources/items/melee.js'
import { RangedWeapon } from './items/RangedWeapon.js'
import { Item, ItemType } from './items/Item.js'


type ItemTypeToClass<I extends ItemType, Name extends string = string> = I extends 'Ammunition' ? Ammunition<Name> :
	I extends 'Body Armor' ? BodyArmor<Name> :
		I extends 'Backpack' ? Backpack<Name> :
			I extends 'Food' ? Food<Name> :
				I extends 'Helmet' ? Helmet<Name> :
					I extends 'Medical' ? Medical<Name> :
						I extends 'Melee Weapon' ? MeleeWeapon<Name> :
							I extends 'Ranged Weapon' ? RangedWeapon<Name> :
								I extends 'Supply' ? Supply<Name> :
									I extends 'Throwable Weapon' ? ThrowableWeapon<Name> :
										never

type ItemDrop<T extends Item = Item> = T extends RangedWeapon ? { item: T, ammo: T['ammo'][number] } : { item: T }
type ItemDropExistential<I extends ItemType, Itm extends Item & { type: I } = Item & { type: I }> = <R>(cb: <T extends Itm>(drop: ItemDrop<T>) => R) => R

/**
 * Extracts {@link ItemType} from {@link ItemDropExistential}
 */
type ExistentialItemType<T> = T extends ItemDropExistential<infer Type>[] ? Type : never

export interface PossibleItemDrops<
	C extends ItemDropExistential<ItemType>[],
	U extends ItemDropExistential<ItemType>[] | undefined,
	R extends ItemDropExistential<ItemType>[] | undefined,
	Rrest extends ItemDropExistential<ItemType>[] | undefined
> {
	readonly common: (ItemTypeToClass<ExistentialItemType<C>> & { type: ExistentialItemType<C> })[]
	readonly uncommon: U extends undefined ? U : (ItemTypeToClass<ExistentialItemType<U>> & { type: ExistentialItemType<U> })[]
	readonly rare: R extends undefined ? R : (ItemTypeToClass<ExistentialItemType<R>> & { type: ExistentialItemType<R> })[]
	readonly rarest: Rrest extends undefined ? Rrest : (ItemTypeToClass<ExistentialItemType<Rrest>> & { type: ExistentialItemType<Rrest> })[]
}

/**
 *
 * @param drop Object containing item property
 * @example
 * loot({ item: Apple })
 * loot({ item: Pistol })
 */
export const loot = <T extends Item>(drop: ItemDrop<T>): ItemDropExistential<T['type']> => cb => cb(drop)

export class LootPool<
	C extends ItemDropExistential<ItemType>[] = ItemDropExistential<ItemType>[],
	U extends ItemDropExistential<ItemType>[] | undefined = ItemDropExistential<ItemType>[],
	R extends ItemDropExistential<ItemType>[] | undefined = ItemDropExistential<ItemType>[],
	Rrest extends ItemDropExistential<ItemType>[] | undefined = ItemDropExistential<ItemType>[]
> {
	private readonly common: C
	private readonly uncommon: U
	private readonly rare: R
	private readonly rarest: Rrest

	constructor (data: {
		/**
		 * array of loot that can be rolled (60% chance to roll)
		 *
		 * @example
		 * common: [loot({ item: Apple }), loot({ item: Pistol })]
		 */
		readonly common: C
		/**
		 * array of loot that can be rolled (25% chance to roll)
		 *
		 * @example
		 * uncommon: [loot({ item: Apple }), loot({ item: Pistol })]
		 */
		readonly uncommon: U
		/**
		 * array of loot that can be rolled (10% chance to roll)
		 *
		 * @example
		 * rare: [loot({ item: Apple }), loot({ item: Pistol })]
		 */
		readonly rare: R
		/**
		 * array of loot that can be rolled (5% chance to roll)
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

	getLootPoolItems (): PossibleItemDrops<C, U, R, Rrest> {
		const commonItems = this.common.map(drop => drop(i => i.item))
		let uncommonItems
		let rareItems
		let rarestItems

		if (this.uncommon) {
			uncommonItems = this.uncommon.map(drop => drop(i => i.item))
		}

		if (this.rare) {
			rareItems = this.rare.map(drop => drop(i => i.item))
		}

		if (this.rarest) {
			rarestItems = this.rarest.map(drop => drop(i => i.item))
		}

		return {
			common: commonItems,
			uncommon: uncommonItems,
			rare: rareItems,
			rarest: rarestItems
		} as PossibleItemDrops<C, U, R, Rrest>
	}

	getRandomItem (): {
		rarity: 'Common' | 'Uncommon' | 'Rare' | 'Insanely Rare'
		item: ItemTypeToClass<ExistentialItemType<C | U | R | Rrest>> & { type: ExistentialItemType<C | U | R | Rrest> }
	} | undefined {
		const possibleItems = this.getLootPoolItems()
		const rand = Math.floor((Math.random() * 100) + 1) // generate random number 1 - 100 (inclusive) could make this more secure in the future?

		if (possibleItems.rarest?.length && rand <= 5) {
			return {
				rarity: 'Insanely Rare',
				item: possibleItems.rarest[Math.floor(Math.random() * possibleItems.rarest.length)] as ItemTypeToClass<ExistentialItemType<Rrest>> & { type: ExistentialItemType<Rrest> }
			}
		}
		else if (possibleItems.rare?.length && rand > 5 && rand <= 15) {
			return {
				rarity: 'Rare',
				item: possibleItems.rare[Math.floor(Math.random() * possibleItems.rare.length)] as ItemTypeToClass<ExistentialItemType<R>> & { type: ExistentialItemType<R> }
			}
		}
		else if (possibleItems.uncommon?.length && rand > 15 && rand <= 40) {
			const drop = possibleItems.uncommon[Math.floor(Math.random() * possibleItems.uncommon.length)] as ItemTypeToClass<ExistentialItemType<U>> & { type: ExistentialItemType<U> }
			return {
				rarity: 'Uncommon',
				item: drop
			}
		}
		else if (possibleItems.common.length) {
			return {
				rarity: 'Common',
				item: possibleItems.common[Math.floor(Math.random() * possibleItems.common.length)] as ItemTypeToClass<ExistentialItemType<C>> & { type: ExistentialItemType<C> }
			}
		}
	}
}


const exampleLootPool = new LootPool({
	common: [loot({ item: Apple })],
	uncommon: [loot({ item: WoodenBat })],
	rare: undefined,
	rarest: [loot({ item: PumpShotgun, ammo: Shotgun12GaugeSlug })]
})

console.log(exampleLootPool.getRandomItem()?.item) // random item from loot pool
console.log(exampleLootPool.getLootPoolItems().common) // array of items with type "Melee Weapon" or "Food"
console.log(exampleLootPool.getLootPoolItems().rare) // undefined

