import { Item, ItemProperties } from './Item.js'


export class Supply<T extends string = string> extends Item<T> {
	constructor (public data: Omit<ItemProperties<T>, 'durability'> & {
		readonly type: 'Supply'
	}) {
		super(data)

		this.data = data
	}
}
