import unknownIcon from '../../src/images/unknown_icon.png'
import { RegionName } from '../../src/index.js'


export type ItemType = 'Ranged Weapon'
	| 'Melee Weapon'
	| 'Helmet'
	| 'Body Armor'
	| 'Ammunition'
	| 'Medical'
	| 'Stimulant'
	| 'Backpack'
	| 'Key'
	| 'Collectible'
	| 'Throwable Weapon'
	| 'Food'
	| 'Supply'

export interface CraftingRecipe {
	/**
	 * Player will need 1 of these tools, 1 durability will be consumed. Leave array empty if no tool is needed.
	 */
	possibleTools: Item[]
	supplies: {
		item: Item
		amount: number
	}[]
	/**
	 * How much of the item this recipe creates
	 */
	yield: number
}

export abstract class Item<T extends string = string> {
	type: ItemType
	name: T
	description?: string
	craftingRecipes?: CraftingRecipe[]

	/** Other names that will be resolved to this item */
	aliases: string[]
	/** Discord string representation of an icon (ie. <1232412412:emoji>) */
	discordIcon: string
	/** How many slots does this item take up in inventories */
	slotsUsed: number
	/** How many uses this item has (if applicable) */
	durability?: number
	/** The regions this item can be found in. if undefined, the item isn't found in a specific region (typically obtained by other means such as wood from chopping) */
	regions?: RegionName[]

	constructor (data: Item<T>) {
		this.type = data.type
		this.name = data.name
		this.aliases = data.aliases
		this.discordIcon = data.discordIcon
		this.description = data.description
		this.durability = data.durability
		this.slotsUsed = data.slotsUsed
		this.craftingRecipes = data.craftingRecipes
		this.regions = data.regions
	}

	/** get base64 representation of image */
	async image (): Promise<string> {
		try {
			return (await import(`../../src/images/items/${this.name}.png`)).default
		}
		catch (err) {
			return unknownIcon
		}
	}
}
