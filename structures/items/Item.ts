import unknownIcon from '../../src/images/unknown_icon.png'


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

export interface ItemProperties<T extends string = string> {
	readonly type: ItemType
	readonly name: T
	readonly description?: string
	readonly craftingRecipes?: CraftingRecipe[]

	/** Other names that will be resolved to this item */
	readonly aliases: string[]
	/** Discord string representation of an icon (ie. <1232412412:emoji>) */
	readonly discordIcon: string
	/** How many slots does this item take up in inventories */
	readonly slotsUsed: number
	/** How many uses this item has (if applicable) */
	readonly durability?: number
}

export class Item<T extends string = string> {
	readonly name: T
	private _image?: string

	constructor (public data: ItemProperties<T>) {
		this.data = data
		this.name = data.name
	}

	/** get base64 representation of image */
	async image (): Promise<string> {
		if (this._image) return this._image

		try {
			this._image = (await import(`../../src/images/items/${this.name}.png`)).default as string
		}
		catch (err) {
			this._image = unknownIcon
		}

		return this._image
	}
}
