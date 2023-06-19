import { Item, ItemProperties } from './Item.js'


export class Key<T extends string = string> extends Item<T> {
	constructor (public data: Omit<ItemProperties<T>, 'durability'> & {
		readonly type: 'Key'
	}) {
		super(data)

		this.data = data
	}
}
