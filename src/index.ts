import * as debuffs from './debuffs.js'
import { Farm } from './regions/farm.js'
import { Forest } from './regions/forest.js'
import { Mall } from './regions/mall.js'
import { Prison } from './regions/prison.js'
import { Suburbs } from './regions/suburbs.js'
import * as ranged from './items/ranged.js'
import * as melee from './items/melee.js'
import * as armor from './items/armor.js'
import * as helmets from './items/helmets.js'
import * as ammunition from './items/ammunition.js'
import * as medicals from './items/medicals.js'
import * as keys from './items/keys.js'
import * as backpacks from './items/backpacks.js'
import * as collectibles from './items/collectibles.js'
import * as throwables from './items/throwables.js'
import * as foods from './items/foods.js'
import * as stimulants from './items/stimulants.js'
import * as supplies from './items/supplies.js'


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

export * as Constants from './constants.js'
export {
	debuffs
}
