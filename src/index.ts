import * as debuffs from './debuffs.js'
import * as regions from './regions/index.js'


export type DebuffType = typeof debuffs[keyof typeof debuffs]['name']
export type RegionName = typeof regions[keyof typeof regions]['name']

export const allDebuffs = Object.values(debuffs)
export const allRegions = Object.values(regions)

export const isValidRegion = (l: string): l is RegionName => l in allRegions.map(r => r.name)

export * as Constants from './constants.js'
export * from './names.js'
export {
	debuffs,
	regions
}
