import { Item, ItemProperties } from './Item.js'


export class Collectible<T extends string = string> extends Item<T> {
	constructor (public data: Omit<ItemProperties<T>, 'durability'> & {
		readonly type: 'Collectible'
	}) {
		super(data)

		this.data = data
	}
}
