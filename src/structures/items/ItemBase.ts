import unknownIcon from '../../resources/images/unknown_icon.png'


export type ItemType = 'Ammunition'
	| 'Backpack'
	| 'Body Armor'
	| 'Food'
	| 'Helmet'
	| 'Medical'
	| 'Melee Weapon'
	| 'Ranged Weapon'
	| 'Supply'
	| 'Throwable Weapon'
	| 'Tool'

export interface CraftingRecipe {
	/** Player will need 1 of these tools, 1 durability will be consumed. Leave array empty if no tool is needed */
	readonly possibleTools: ItemBase[]
	readonly supplies: {
		readonly item: ItemBase
		readonly amount: number
	}[]
	/** How much of the item this recipe creates */
	readonly yield: number
}

export interface ItemProperties<T extends string = string> {
	readonly type: ItemType
	readonly name: T
	readonly description?: string
	readonly crafting?: {
		levelRequired: number
		recipes: CraftingRecipe[]
	}

	/** Other names that will be resolved to this item */
	readonly aliases: string[]
	/** Discord string representation of an icon (ie. <1232412412:emoji>) */
	readonly discordIcon: string
	/** How many slots does this item take up in inventories */
	readonly slotsUsed: number
	/** How many uses this item has (if applicable) */
	readonly durability?: number
}

export abstract class ItemBase<T extends string = string> {
	readonly type: ItemType
	readonly name: T
	readonly description?: string
	readonly crafting?: {
		levelRequired: number
		recipes: CraftingRecipe[]
	}

	/** Other names that will be resolved to this item */
	readonly aliases: string[]
	/** Discord string representation of an icon (ie. <1232412412:emoji>) */
	readonly discordIcon: string
	/** How many slots does this item take up in inventories */
	readonly slotsUsed: number
	/** How many uses this item has (if applicable) */
	readonly durability?: number

	private _image?: string

	constructor (data: ItemProperties<T>) {
		this.type = data.type
		this.name = data.name
		this.description = data.description
		this.crafting = data.crafting
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

	toString (icon = false) {
		return icon ? `${this.discordIcon} ${this.name.replace(/_/g, ' ')}` : this.name.replace(/_/g, ' ')
	}
}
