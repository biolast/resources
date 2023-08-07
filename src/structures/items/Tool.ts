import { ItemBase, ItemProperties } from './ItemBase.js'


/** Item used to craft other items */
export class Tool<T extends string = string> extends ItemBase<T> {
	/** How many times this tool can be used */
	readonly durability: number

	constructor (data: ItemProperties<T> & {
		/** How many times this tool can be used */
		readonly durability: number
	}) {
		super(data)

		this.durability = data.durability
	}
}
