import { Item } from './Item.js'


export class Backpack<T extends string = string> extends Item<T> {
	type: 'Backpack'
	durability?: undefined

	/**
	 * How many slots will this backpack add to the users inventory? Higher = player can hold more items
	 */
	slots: number

	constructor (data: Omit<Backpack<T>, 'durability'>) {
		super(data)

		this.type = data.type
		this.durability = undefined
		this.slots = data.slots
	}
}
