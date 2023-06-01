import * as debuffs from './debuffs.js'
import { Farm } from './regions/farm.js'
import { Forest } from './regions/forest.js'
import { Mall } from './regions/mall.js'
import { Prison } from './regions/prison.js'
import { Suburbs } from './regions/suburbs.js'


export const regions = { Suburbs, Farm, Forest, Mall, Prison }

export type DebuffType = typeof debuffs[keyof typeof debuffs]['name']
export type RegionName = typeof regions[keyof typeof regions]['name']

export const allDebuffs = Object.values(debuffs)
export const allRegions = Object.values(regions)

export const isValidRegion = (l: string): l is RegionName => l in allRegions.map(r => r.name)

export * as Constants from './constants.js'
export {
	debuffs
}
