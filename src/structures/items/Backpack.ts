import { Item, ItemProperties } from './Item.js'


export class Backpack<T extends string = string> extends Item<T> {
	/** How many slots will this backpack add to the users inventory? Higher = player can hold more items */
	readonly slots: number

	constructor (data: Omit<ItemProperties<T>, 'durability'> & {
		readonly type: 'Backpack'

		/** How many slots will this backpack add to the users inventory? Higher = player can hold more items */
		readonly slots: number
	}) {
		super(data)

		this.slots = data.slots
	}
}
