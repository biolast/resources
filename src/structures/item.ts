import unknownIcon from '../resources/images/unknown_icon.png'


/* --- Properties shared by all items --- */
export type ItemType = 'Ammunition'
	| 'Backpack'
	| 'Body Armor'
	| 'Food'
	| 'Helmet'
	| 'Leggings'
	| 'Medical'
	| 'Melee Weapon'
	| 'Ranged Weapon'
	| 'Supply'
	| 'Throwable Weapon'
	| 'Tool'

interface ItemBase<T extends ItemType = ItemType, N extends string = string> {
	type: T
	name: N
	description?: string
	crafting?: {
		/** Level required to craft this item */
		levelRequired: number
		recipes: {
			/** How much of the item this recipe creates */
			yield: number
			/** Player will need 1 of these tools, 1 durability will be consumed. Leave array empty if no tool is needed */
			possibleTools: (Item & { durability: number })[]
			/** Array of items and amounts needed to craft using this recipe */
			supplies: {
				item: Item
				amount: number
			}[]
		}[]
	}

	/** Other names that will be resolved to this item */
	aliases: string[]
	/** Discord string representation of an icon (ie. <1232412412:emoji>) */
	discordIcon: string
	/** How many slots does this item take up in inventories */
	slotsUsed: number
	/** How many uses this item has (if applicable) */
	durability?: number
}


/* --- Individual properties by item type --- */
export interface Ammunition<T extends 'Ammunition' = 'Ammunition', N extends string = string> extends ItemBase<T, N> {
	type: T
	/** Damage expected from this round if shot at the targets CHEST, limbs have different damage multipliers */
	damage: number
	/**
	 * The armor penetration this ammo has, can be a float between 0 - whatever. If this number is greater than the victims armor level, this ammo will deal full damage.
	 *
	 * Otherwise, the damage of this bullet will be reduced based on the difference between this number and the victims armor level.
	 */
	penetration: number
	/** How many limbs should the damage be spread out to */
	spreadsDamageToLimbs?: 2 | 3 | 4
}
export interface Backpack<T extends 'Backpack' = 'Backpack', N extends string = string> extends ItemBase<T, N> {
	type: T
	/** How many slots will this backpack add to the users inventory? Higher = player can hold more items */
	slots: number
}
export interface BodyArmor<T extends 'Body Armor' = 'Body Armor', N extends string = string> extends ItemBase<T, N> {
	type: T
	/** How many times this armor can be shot before it breaks */
	durability: number
	/** The protection level of this armor: 1 = crap, 2 = protects against pistols, 3 = pretty good, 4 = protects against rifles */
	level: 1 | 2 | 3 | 4 | 5 | 6
	/** Whether this armor protects players arms from attacks */
	protectsArms: boolean
}
export interface Food<T extends 'Food' = 'Food', N extends string = string> extends ItemBase<T, N> {
	type: T
	/** How much energy this item provides */
	energy: number
	/** The combination of ingredients to cook on campfire that will create this dish (combining is separate from cooking, refer to cooksInto for cooking) */
	recipes?: Item<'Food'>[][]
	/** The cooked version of this food (if food is cooked using a campfire, it will turn into this) */
	cooksInto?: Item<'Food'>
}
export interface Helmet<T extends 'Helmet' = 'Helmet', N extends string = string> extends ItemBase<T, N> {
	type: T
	/** How many times this armor can be shot before it breaks */
	durability: number
	/** The protection level of this armor: 1 = crap, 2 = protects against pistols, 3 = pretty good, 4 = protects against rifles */
	level: 1 | 2 | 3 | 4 | 5 | 6
}
export interface Leggings<T extends 'Leggings' = 'Leggings', N extends string = string> extends ItemBase<T, N> {
	type: T
	/** How many times this armor can be shot before it breaks */
	durability: number
	/** The protection level of this armor: 1 = crap, 2 = protects against pistols, 3 = pretty good, 4 = protects against rifles */
	level: 1 | 2 | 3 | 4 | 5 | 6
}
export interface Medical<T extends 'Medical' = 'Medical', N extends string = string> extends ItemBase<T, N> {
	type: T
	/** How many times this item can be used to heal before it breaks. Leave undefined if this item is single-use */
	durability?: number
	/** Amount this medical item will heal player for */
	healsFor: number
	/** How fast this weapon attacks in duels (player who uses item with higher speed goes first) */
	speed: number
}
export interface MeleeWeapon<T extends 'Melee Weapon' = 'Melee Weapon', N extends string = string> extends ItemBase<T, N> {
	type: T
	/** The amount of damage this melee weapon deals when used */
	damage: number
	/** The percent chance for this weapon to hit target (0% - 100%) */
	accuracy: number
	/** How many times this weapon can be used to attack */
	durability: number
	/**
	 * The armor penetration this weapon has, can be a float between 0 - whatever. If this number is greater than the victims armor level, this weapon will deal full damage.
	 *
	 * Otherwise, the damage will be reduced based on the difference between this number and the victims armor level.
	 */
	penetration: number
	/** How fast this weapon attacks in duels (player who uses item with higher speed goes first) */
	speed: number
}
export interface RangedWeapon<T extends 'Ranged Weapon' = 'Ranged Weapon', N extends string = string> extends ItemBase<T, N> {
	type: T
	/** Ammo this weapon can fire */
	ammo: [Item<'Ammunition'>, ...Item<'Ammunition'>[]]
	/** The percent chance for this weapon to hit target (0% - 100%) */
	accuracy: number
	/** How many times this weapon can be used to attack */
	durability: number
	/** How fast this weapon attacks in duels (player who uses item with higher speed goes first) */
	speed: number
}
export interface Supply<T extends 'Supply' = 'Supply', N extends string = string> extends ItemBase<T, N> {
	type: T
}
export interface ThrowableWeapon<T extends 'Throwable Weapon' = 'Throwable Weapon', N extends string = string> extends ItemBase<T, N> {
	type: T
	subtype: 'Fragmentation Grenade' | 'Incendiary Grenade'
	/** The amount of damage this weapon deals when used */
	damage: number
	/** The percent chance for this weapon to hit target (0% - 100%) */
	accuracy: number
	/** How many limbs should the damage be spread out to */
	spreadsDamageToLimbs?: 2 | 3 | 4
	/**
	 * The armor penetration this throwable has, can be a float between 0 - whatever. If this number is greater than the victims armor level, this will deal full damage.
	 *
	 * Otherwise, the damage will be reduced based on the difference between this number and the victims armor level.
	 */
	penetration: number
	/** How fast this weapon attacks in duels (player who uses item with higher speed goes first) */
	speed: number
	durability: 1
}
export interface Tool<T extends 'Tool' = 'Tool', N extends string = string> extends ItemBase<T, N> {
	type: T
	/** How many times this tool can be used */
	durability: number
}


/** Resolves item properties based on item type */
export type ItemProperties<T extends ItemType = ItemType, N extends string = string> = T extends 'Ammunition' ? Ammunition<T, N> :
	T extends 'Backpack' ? Backpack<T, N> :
		T extends 'Body Armor' ? BodyArmor<T, N> :
			T extends 'Food' ? Food<T, N> :
				T extends 'Helmet' ? Helmet<T, N> :
					T extends 'Leggings' ? Leggings<T, N> :
						T extends 'Medical' ? Medical<T, N> :
							T extends 'Melee Weapon' ? MeleeWeapon<T, N> :
								T extends 'Ranged Weapon' ? RangedWeapon<T, N> :
									T extends 'Supply' ? Supply<T, N> :
										T extends 'Throwable Weapon' ? ThrowableWeapon<T, N> :
											T extends 'Tool' ? Tool<T, N> :
												never

/** Dynamic properties that return data based on item properties */
export interface DynamicItemProperties {
	/** get base64 representation of image */
	image (): Promise<string>
	/** @param icon default false */
	toString (icon: boolean): string
}

export type Item<T extends ItemType = ItemType, N extends string = string> = ItemProperties<T, N> & DynamicItemProperties

/** Function used to create an item */
export function createItem<ItmType extends ItemType = ItemType, ItmName extends string = string> (data: ItemProperties<ItmType, ItmName>): Item<ItmType, ItmName> {
	let _image: string | undefined

	return {
		...data,
		image: async () => {
			if (_image) return _image

			try {
				_image = (await import(`../../resources/images/items/${data.name}.png`)).default as string
			}
			catch (err) {
				_image = unknownIcon
			}

			return _image
		},
		toString: (icon = false) => icon ? `${data.discordIcon} ${data.name.replace(/_/g, ' ')}` : data.name.replace(/_/g, ' ')
	}
}
