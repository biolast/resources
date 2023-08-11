import { ItemBase, ItemProperties } from './ItemBase.js'


/** Item used to craft other items */
export class Tool<T extends string = string> extends ItemBase<T> {
	protected readonly category: 'Tool'
	/** How many times this tool can be used */
	readonly durability: number

	constructor (data: ItemProperties<T> & {
		/** How many times this tool can be used */
		durability: number
	}) {
		super(data)

		this.category = 'Tool'
		this.durability = data.durability
	}
}
