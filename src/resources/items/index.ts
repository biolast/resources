import { ItemBase } from '../../structures/items/ItemBase.js'
import * as ammunitionLoot from './ammunition/lootable.js'
import * as ammunitionCraft from './ammunition/craftable.js'
import * as armorLoot from './armor/lootable.js'
import * as armorCraft from './armor/craftable.js'
import * as backpacksLoot from './backpacks/lootable.js'
import * as backpacksCraft from './backpacks/craftable.js'
import * as foodsLoot from './foods/lootable.js'
// import * as foodsCraft from './foods/craftable.js'
import * as helmetsLoot from './helmets/lootable.js'
import * as helmetsCraft from './helmets/craftable.js'
import * as medicalsLoot from './medicals/lootable.js'
import * as medicalsCraft from './medicals/craftable.js'
import * as meleeLoot from './melee/lootable.js'
import * as meleeCraft from './melee/craftable.js'
import * as rangedLoot from './ranged/lootable.js'
import * as rangedCraft from './ranged/craftable.js'
import * as suppliesLoot from './supplies/lootable.js'
import * as suppliesCraft from './supplies/craftable.js'
import * as throwablesLoot from './throwables/lootable.js'
import * as throwablesCraft from './throwables/craftable.js'
import * as toolsLoot from './tools/lootable.js'
import * as toolsCraft from './tools/craftable.js'


const rawItemObject = {
	...ammunitionLoot,
	...ammunitionCraft,
	...armorLoot,
	...armorCraft,
	...backpacksLoot,
	...backpacksCraft,
	...foodsLoot,
	...helmetsLoot,
	...helmetsCraft,
	...medicalsLoot,
	...medicalsCraft,
	...meleeLoot,
	...meleeCraft,
	...rangedLoot,
	...rangedCraft,
	...suppliesLoot,
	...suppliesCraft,
	...throwablesLoot,
	...throwablesCraft,
	...toolsLoot,
	...toolsCraft
}

type ItemNameExtract<T> = T extends ItemBase<infer Name> ? Name : never
type ItemNameClassMap = { [K in keyof typeof rawItemObject]: ItemNameExtract<typeof rawItemObject[K]> }

export const getObjectKeys = <T extends object>(obj: T) => Object.keys(obj) as Array<keyof T>

export const items = getObjectKeys(rawItemObject)
	.reduce((prev, curr) => ({
		...prev,
		[rawItemObject[curr].name]: rawItemObject[curr]
	}), {} as { [K in keyof ItemNameClassMap as ItemNameClassMap[K]]: typeof rawItemObject[K] })

export const allItems = Object.values(items)

export const isValidItemName = (s: string): s is keyof typeof items => s in allItems.map(i => i.name)
