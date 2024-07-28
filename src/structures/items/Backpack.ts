import { ItemBase, ItemProperties } from './ItemBase.js'


export class Backpack<T extends string = string> extends ItemBase<T> {
	readonly type: 'Backpack'
	/** How many slots will this backpack add to the users inventory? Higher = player can hold more items */
	readonly slots: number

	constructor (data: Omit<ItemProperties<T>, 'durability'> & {
		readonly type: 'Backpack'
		/** How many slots will this backpack add to the users inventory? Higher = player can hold more items */
		readonly slots: number
	}) {
		super(data)

		this.type = data.type
		this.slots = data.slots
	}
}
