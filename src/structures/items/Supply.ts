import { Item, ItemProperties } from './Item.js'


export class Supply<T extends string = string> extends Item<T> {
	readonly type: 'Supply'

	constructor (data: Omit<ItemProperties<T>, 'durability'> & {
		readonly type: 'Supply'
	}) {
		super(data)

		this.type = data.type
	}
}
