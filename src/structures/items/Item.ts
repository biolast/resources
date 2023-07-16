import unknownIcon from '../../resources/images/unknown_icon.png'


export type ItemType = 'Ranged Weapon'
	| 'Melee Weapon'
	| 'Helmet'
	| 'Body Armor'
	| 'Ammunition'
	| 'Medical'
	| 'Backpack'
	| 'Collectible'
	| 'Throwable Weapon'
	| 'Food'
	| 'Supply'

export interface CraftingRecipe {
	/** Player will need 1 of these tools, 1 durability will be consumed. Leave array empty if no tool is needed */
	readonly possibleTools: Item[]
	readonly supplies: {
		readonly item: Item
		readonly amount: number
	}[]
	/** How much of the item this recipe creates */
	readonly yield: number
}

export interface ItemProperties<T extends string = string> {
	readonly type: ItemType
	readonly name: T
	readonly description?: string
	readonly craftingRecipes?: CraftingRecipe[]

	/** level this item can *normally* be obtained at */
	readonly level?: number // TODO make this required
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
	private _image?: string
	readonly type: ItemType
	readonly name: T
	readonly description?: string
	readonly craftingRecipes?: CraftingRecipe[]

	/** level this item can *normally* be obtained at */
	readonly level?: number // TODO make this required
	/** Other names that will be resolved to this item */
	readonly aliases: string[]
	/** Discord string representation of an icon (ie. <1232412412:emoji>) */
	readonly discordIcon: string
	/** How many slots does this item take up in inventories */
	readonly slotsUsed: number
	/** How many uses this item has (if applicable) */
	readonly durability?: number

	constructor (data: ItemProperties<T>) {
		this.type = data.type
		this.name = data.name
		this.description = data.description
		this.craftingRecipes = data.craftingRecipes
		this.level = data.level
		this.aliases = data.aliases
		this.discordIcon = data.discordIcon
		this.slotsUsed = data.slotsUsed
		this.durability = data.durability
	}

	/** get base64 representation of image */
	async image (): Promise<string> {
		if (this._image) return this._image

		try {
			this._image = (await import(`../../resources/images/items/${this.name}.png`)).default as string
		}
		catch (err) {
			this._image = unknownIcon
		}

		return this._image
	}

	toString () {
		return this.name
	}
}
