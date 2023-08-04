import { NonEmptyArray } from '../resources/constants.js'
import { RangedWeapon } from './items/RangedWeapon.js'
import { MeleeWeapon } from './items/MeleeWeapon.js'
import { ItemDrop, ItemDropExistential, LootPool } from './LootPool.js'


type Weapon = RangedWeapon | MeleeWeapon

type WeaponDrop<T extends Weapon = Weapon> = T extends RangedWeapon ? ItemDrop<T> & {
	/** ammo to use with ranged weapon */
	ammo: NonEmptyArray<T['ammo'][number]>
} : ItemDrop<T>

/**
 *
 * @param drop Object containing item property, ammo is required for ranged weapons
 * @example
 * weapon({ item: WoodenBat })
 * weapon({ item: Pistol, ammo: [PistolBullet] })
 */
export const weapon = <T extends Weapon>(drop: WeaponDrop<T>): ItemDropExistential<T, WeaponDrop<T>> => cb => cb(drop)

/**
 * used to roll a random weapon
 *
 * @example
 * const pool = new WeaponPool({
 *		common: [weapon({ item: WoodenBat }), weapon({ item: Fork })],
 *		uncommon: [weapon({ item: FireAxe })],
 *		rare: undefined,
 *		rarest: [weapon({ item: PumpShotgun, ammo: [Shotgun12GaugeSlug] })]
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
	U extends NonEmptyArray<ItemDropExistential<Uncommon>> | undefined = NonEmptyArray<ItemDropExistential<Uncommon>>,
	R extends NonEmptyArray<ItemDropExistential<Rare>> | undefined = NonEmptyArray<ItemDropExistential<Rare>>,
	Rrest extends NonEmptyArray<ItemDropExistential<Rarest>> | undefined = NonEmptyArray<ItemDropExistential<Rarest>>
> extends LootPool<Weapon, Common, Uncommon, Rare, Rarest, C, U, R, Rrest> {
	protected readonly common: C
	protected readonly uncommon: U
	protected readonly rare: R
	protected readonly rarest: Rrest

	constructor (data: {
		/**
		 * array of weapons that can be rolled (60% chance to roll)
		 *
		 * make sure to enclose each drop inside of the {@link weapon()} function
		 *
		 * @example
		 * common: [weapon({ item: Pistol, ammo: PistolBullet })]
		 */
		readonly common: C
		/**
		 * array of weapons that can be rolled (25% chance to roll)
		 *
		 * make sure to enclose each drop inside of the {@link weapon()} function
		 *
		 * @example
		 * uncommon: [weapon({ item: Pistol, ammo: PistolBullet })]
		 */
		readonly uncommon: U
		/**
		 * array of weapons that can be rolled (10% chance to roll)
		 *
		 * make sure to enclose each drop inside of the {@link weapon()} function
		 *
		 * @example
		 * rare: [weapon({ item: Pistol, ammo: PistolBullet })]
		 */
		readonly rare: R
		/**
		 * array of weapons that can be rolled (5% chance to roll)
		 *
		 * make sure to enclose each drop inside of the {@link weapon()} function
		 *
		 * @example
		 * rarest: [weapon({ item: Pistol, ammo: PistolBullet })]
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
	 * retrieves a random {@link WeaponDrop} from the loot pool
	 *
	 * @example
	 * const drop = exampleLootPool.getRandomDrop()
	 *
	 * drop?.rarity
	 * drop?.item
	 *
	 * if ('ammo' in drop) {
	 *		drop.ammo // possible ammo weapon can fire, this is only present if item is ranged weapon
	 *		drop.item // item is a ranged weapon
	 * }
	 */
	getRandomDrop () {
		return super.getRandomDrop()
	}
}
