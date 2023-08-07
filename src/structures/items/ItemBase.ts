import unknownIcon from '../../resources/images/unknown_icon.png'


export interface CraftingRecipe {
	/** Level required to use this recipe */
	readonly levelRequired: number
	/** Player will need 1 of these tools, 1 durability will be consumed. Leave undefined if no tool is needed */
	readonly possibleTools?: ItemBase[]
	readonly supplies: {
		readonly item: ItemBase
		readonly amount: number
	}[]
	/** How much of the item this recipe creates */
	readonly yield: number
}

export interface ItemProperties<T extends string = string> {
	readonly name: T
	readonly description?: string
	readonly craftingRecipes?: CraftingRecipe[]

	/** Level this item can be scavenged at (or undefined if it can't be scavenged) */
	readonly scavengeLevel?: number
	/** Other names that will be resolved to this item */
	readonly aliases: string[]
	/** Discord string representation of an icon (ie. <1232412412:emoji>) */
	readonly discordIcon?: string
	/** How many slots does this item take up in inventories */
	readonly slotsUsed: number
	/** How many uses this item has (if applicable) */
	readonly durability?: number
}

export abstract class ItemBase<T extends string = string> {
	private _image?: string
	readonly name: T
	readonly description?: string
	readonly craftingRecipes?: CraftingRecipe[]

	/** Level this item can be scavenged at (or undefined if it can't be scavenged) */
	readonly scavengeLevel?: number
	/** Other names that will be resolved to this item */
	readonly aliases: string[]
	/** Discord string representation of an icon (ie. <1232412412:emoji>) */
	readonly discordIcon?: string
	/** How many slots does this item take up in inventories */
	readonly slotsUsed: number
	/** How many uses this item has (if applicable) */
	readonly durability?: number

	constructor (data: ItemProperties<T>) {
		this.name = data.name
		this.description = data.description
		this.craftingRecipes = data.craftingRecipes
		this.scavengeLevel = data.scavengeLevel
		this.aliases = data.aliases
		this.discordIcon = data.discordIcon
		this.slotsUsed = data.slotsUsed
		this.durability = data.durability
	}

	/** Get base64 representation of image */
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
