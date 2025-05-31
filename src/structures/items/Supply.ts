import { ItemBase, ItemProperties } from './_Base.js'


export class Supply<T extends string = string> extends ItemBase<T> {
	readonly type: 'Supply'

	constructor (data: Omit<ItemProperties<T>, 'durability'> & {
		readonly type: 'Supply'
	}) {
		super(data)

		this.type = data.type
	}
}
