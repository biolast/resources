import { ItemBase, ItemProperties } from './ItemBase.js'


export class Tool<T extends string = string> extends ItemBase<T> {
	readonly type: 'Tool'
	/** How many times this tool can be used */
	readonly durability: number

	constructor (data: ItemProperties<T> & {
		readonly type: 'Tool'
		/** How many times this weapon can be used to attack */
		readonly durability: number
	}) {
		super(data)

		this.type = data.type
		this.durability = data.durability
	}
}
