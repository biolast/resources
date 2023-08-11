import { RangedWeapon } from './items/RangedWeapon.js'
import { MeleeWeapon } from './items/MeleeWeapon.js'
import { ItemDrop, ItemDropExistential, LootPool } from './LootPool.js'


type Weapon = RangedWeapon | MeleeWeapon

type WeaponDrop<T extends Weapon = Weapon> = T extends RangedWeapon ? RangedWeaponDrop<T> : ItemDrop<T>

type NonEmptyArray<T> = [T, ...T[]]
type RangedWeaponDrop<T extends RangedWeapon = RangedWeapon> = ItemDrop<T> & {
	/** ammo to use with ranged weapon */
	ammo: NonEmptyArray<T['ammo'][number]>
}

/**
 *
 * @param drop Object containing item property, ammo is required for ranged weapons
 * @example
 * weapon({ item: WoodenBat, durability: { min: 4, max: 8 } })
 * weapon({ item: Pistol, ammo: [PistolBullet], durability: { min: 6, max: 8 } })
 */
export const weapon = <T extends Weapon>(drop: WeaponDrop<T>): ItemDropExistential<T, WeaponDrop<T>> => cb => cb(drop)

export const isRangedWeaponDrop = (d: ItemDrop): d is RangedWeaponDrop => 'ammo' in d

/**
 * Used to roll a random weapon
 *
 * @example
 * const pool = new WeaponPool({
 *		common: [weapon({ item: WoodenBat, durability: { min: 6, max: 8 } }), weapon({ item: Fork })],
 *		uncommon: [weapon({ item: FireAxe, durability: { min: 1, max: 4 } })],
 *		rare: [], // getRandomDrop() would return undefined if it rolled an empty array
 *		rarest: [weapon({ item: PumpShotgun, ammo: [Shotgun12GaugeSlug], durability: { min: 10, max: 15 } })]
 *	})
 *
 * console.log(pool.getRandomDrop()?.item) // random weapon from the pool
 */
export class WeaponPool<
	Common extends Weapon = Weapon,
	Uncommon extends Weapon = Weapon,
	Rare extends Weapon = Weapon,
	Rarest extends Weapon = Weapon,
	C extends NonEmptyArray<ItemDropExistential<Common>> = NonEmptyArray<ItemDropExistential<Common>>,
	U extends ItemDropExistential<Uncommon>[] = ItemDropExistential<Uncommon>[],
	R extends ItemDropExistential<Rare>[] = ItemDropExistential<Rare>[],
	Rrest extends ItemDropExistential<Rarest>[] = ItemDropExistential<Rarest>[]
> extends LootPool<Weapon, Common, Uncommon, Rare, Rarest, C, U, R, Rrest> {
	readonly common: C
	readonly uncommon: U
	readonly rare: R
	readonly rarest: Rrest

	constructor (data: {
		/**
		 * Array of weapons that can be rolled (60% chance to roll)
		 *
		 * Make sure to enclose each drop inside of the {@link weapon()} function
		 *
		 * @example
		 * common: [weapon({ item: Pistol, durability: { min: 8, max: 12 }, ammo: PistolBullet })]
		 */
		readonly common: C
		/**
		 * Array of weapons that can be rolled (25% chance to roll)
		 *
		 * Make sure to enclose each drop inside of the {@link weapon()} function
		 *
		 * @example
		 * uncommon: [weapon({ item: Pistol, durability: { min: 8, max: 12 }, ammo: PistolBullet })]
		 */
		readonly uncommon: U
		/**
		 * Array of weapons that can be rolled (10% chance to roll)
		 *
		 * Make sure to enclose each drop inside of the {@link weapon()} function
		 *
		 * @example
		 * rare: [weapon({ item: Pistol, durability: { min: 8, max: 12 }, ammo: PistolBullet })]
		 */
		readonly rare: R
		/**
		 * Array of weapons that can be rolled (5% chance to roll)
		 *
		 * Make sure to enclose each drop inside of the {@link weapon()} function
		 *
		 * @example
		 * rarest: [weapon({ item: Pistol, durability: { min: 8, max: 12 }, ammo: PistolBullet })]
		 */
		readonly rarest: Rrest
	}) {
		super(data)

		this.common = data.common
		this.uncommon = data.uncommon
		this.rare = data.rare
		this.rarest = data.rarest
	}

	/**
	 * Retrieves a random {@link WeaponDrop} from the loot pool
	 *
	 * @example
	 * const drop = exampleLootPool.getRandomDrop()
	 *
	 * drop?.rarity
	 * drop?.item
	 *
	 * if (isRangedWeaponDrop(drop)) {
	 *		drop.ammo // possible ammo weapon can fire, this is only present if item is ranged weapon
	 *		drop.item // item is a ranged weapon
	 * }
	 */
	getRandomDrop () {
		return super.getRandomDrop()
	}
}
