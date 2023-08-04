import { ItemBase, ItemProperties } from './ItemBase.js'


export class Backpack<T extends string = string> extends ItemBase<T> {
	/** How many slots will this backpack add to the users inventory? Higher = player can hold more items */
	readonly slots: number

	constructor (data: Omit<ItemProperties<T>, 'durability'> & {
		/** How many slots will this backpack add to the users inventory? Higher = player can hold more items */
		readonly slots: number
	}) {
		super(data)

		this.slots = data.slots
	}
}
