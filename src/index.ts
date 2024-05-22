import skullImage from '../src/resources/images/skull.png'
import hpBarEmptyImage from '../src/resources/images/hp_bar_empty.png'
import hpBarFullImage from '../src/resources/images/hp_bar_full.png'
import playerHpBarEmptyImage from '../src/resources/images/player_hp_bar_empty.png'
import playerHpBarFullImage from '../src/resources/images/player_hp_bar_full.png'
import textBarBackgroundImage from '../src/resources/images/text_bar.png'
import mobBattleTemplateBackgroundImage from '../src/resources/images/mob_battle_template.png'
import playerBattleTemplateBackgroundImage from '../src/resources/images/player_battle_template.png'
import { Farm } from './resources/regions/farm.js'
import { Forest } from './resources/regions/forest.js'
import { Mall } from './resources/regions/mall.js'
import { Prison } from './resources/regions/prison.js'
import { Suburbs } from './resources/regions/suburbs.js'
import * as ranged from './resources/items/ranged.js'
import * as melee from './resources/items/melee.js'
import * as armor from './resources/items/armor.js'
import * as helmets from './resources/items/helmets.js'
import * as ammunition from './resources/items/ammunition.js'
import * as medicals from './resources/items/medicals.js'
import * as keys from './resources/items/keys.js'
import * as backpacks from './resources/items/backpacks.js'
import * as collectibles from './resources/items/collectibles.js'
import * as throwables from './resources/items/throwables.js'
import * as foods from './resources/items/foods.js'
import * as supplies from './resources/items/supplies.js'
import { Item } from './structures/items/Item.js'


export const images = {
	skull: skullImage,
	hpBarEmpty: hpBarEmptyImage,
	hpBarFull: hpBarFullImage,
	playerHpBarEmpty: playerHpBarEmptyImage,
	playerHpBarFull: playerHpBarFullImage,
	textBarBackground: textBarBackgroundImage,
	mobBattleTemplateBackground: mobBattleTemplateBackgroundImage,
	playerBattleTemplateBackground: playerBattleTemplateBackgroundImage
}

const item_classes = {
	...ranged,
	...melee,
	...armor,
	...helmets,
	...ammunition,
	...medicals,
	...keys,
	...backpacks,
	...collectibles,
	...throwables,
	...foods,
	...supplies
}

export const regions = {
	Suburbs,
	Farm,
	Forest,
	Mall,
	Prison
}

export type RegionName = typeof regions[keyof typeof regions]['name']

type ItemNameExtract<T> = T extends Item<infer Name> ? Name : never
type ItemNameClassMap = { [K in keyof typeof item_classes]: ItemNameExtract<typeof item_classes[K]> }
export type ItemName = ItemNameClassMap[keyof ItemNameClassMap]

export const allRegions = Object.values(regions)
export const allItems = Object.values(item_classes)

const getKeys = <T extends object>(obj: T) => Object.keys(obj) as Array<keyof T>

export const items = getKeys(item_classes)
	.reduce((prev, curr) => ({
		...prev,
		[item_classes[curr].name]: item_classes[curr]
	}), {} as { [K in keyof ItemNameClassMap as ItemNameClassMap[K]]: typeof item_classes[K] })

export const isValidRegion = (s: string): s is RegionName => s in allRegions.map(r => r.name)
export const isValidItemName = (s: string): s is ItemName => s in allItems.map(i => i.name)

export * as constants from './resources/constants.js'

// export types
export * from './structures/Region.js'
export * from './structures/items/Ammunition.js'
export * from './structures/items/Backpack.js'
export * from './structures/items/BodyArmor.js'
export * from './structures/items/Collectible.js'
export * from './structures/items/Food.js'
export * from './structures/items/Helmet.js'
export * from './structures/items/Item.js'
export * from './structures/items/Key.js'
export * from './structures/items/Medical.js'
export * from './structures/items/MeleeWeapon.js'
export * from './structures/items/RangedWeapon.js'
export * from './structures/items/Supply.js'
export * from './structures/items/ThrowableWeapon.js'
export * from './structures/mobs/GenericMob.js'
export * from './structures/mobs/UniqueMob.js'
export type * from './resources/constants.js'
