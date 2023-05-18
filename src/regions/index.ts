import { Region } from '../../types/Regions.js'
import { farm } from './farm.js'
import { forest } from './forest.js'
import { mall } from './mall.js'
import { prison } from './prison.js'
import { suburbs } from './suburbs.js'


const regionsObject = <T>(et: { [K in keyof T]: K extends string ? Region<K> : Region }) => et

export const regions = regionsObject({
	'Eastside Suburbs': suburbs,
	'Mulberry Farm': farm,
	'Redding Forest': forest,
	'Norwood Mall': mall,
	'Pike Prison': prison
})

export type RegionName = keyof typeof regions

export function isValidRegion (l: string): l is RegionName {
	return l in regions
}

export const allRegions = Object.values(regions)
