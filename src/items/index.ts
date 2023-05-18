import { ranged } from './ranged.js'
import { melee } from './melee.js'
import { armor } from './armor.js'
import { helmets } from './helmets.js'
import { ammunition } from './ammunition.js'
import { medical } from './medical.js'
import { keys } from './keys.js'
import { backpacks } from './backpacks.js'
import { collectibles } from './collectibles.js'
import { throwables } from './throwables.js'
import { food } from './food.js'
import { stimulants } from './stimulants.js'
import { supplies } from './supplies.js'


export const items = {
	...ranged,
	...melee,
	...armor,
	...helmets,
	...ammunition,
	...medical,
	...keys,
	...backpacks,
	...collectibles,
	...throwables,
	...food,
	...stimulants,
	...supplies
}

export const allItems = [
	...Object.values(ranged),
	...Object.values(melee),
	...Object.values(armor),
	...Object.values(helmets),
	...Object.values(ammunition),
	...Object.values(medical),
	...Object.values(keys),
	...Object.values(backpacks),
	...Object.values(collectibles),
	...Object.values(throwables),
	...Object.values(food),
	...Object.values(stimulants),
	...Object.values(supplies)
]

export function isValidItemName (i: string): i is keyof typeof items {
	return i in items
}
