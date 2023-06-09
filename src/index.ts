import skullImage from '../src/resources/images/skull.png'
import hpBarEmptyImage from '../src/resources/images/hp_bar_empty.png'
import hpBarFullImage from '../src/resources/images/hp_bar_full.png'
import playerHpBarEmptyImage from '../src/resources/images/player_hp_bar_empty.png'
import playerHpBarFullImage from '../src/resources/images/player_hp_bar_full.png'
import textBarBackgroundImage from '../src/resources/images/text_bar.png'
import mobBattleTemplateBackgroundImage from '../src/resources/images/mob_battle_template.png'
import playerBattleTemplateBackgroundImage from '../src/resources/images/player_battle_template.png'
import * as debuffs from './resources/debuffs.js'
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
import * as stimulants from './resources/items/stimulants.js'
import * as supplies from './resources/items/supplies.js'


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

export const items = {
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
	...stimulants,
	...supplies
}

export const regions = {
	Suburbs,
	Farm,
	Forest,
	Mall,
	Prison
}

export type DebuffType = typeof debuffs[keyof typeof debuffs]['name']
export type RegionName = typeof regions[keyof typeof regions]['name']
export type ItemName = typeof items[keyof typeof items]['name']

export const allDebuffs = Object.values(debuffs)
export const allRegions = Object.values(regions)
export const allItems = Object.values(items)

export const isValidRegion = (s: string): s is RegionName => s in allRegions.map(r => r.name)
export const isValidItemName = (s: string): s is ItemName => s in allItems.map(i => i.name)

export * as constants from './resources/constants.js'
export {
	debuffs
}
