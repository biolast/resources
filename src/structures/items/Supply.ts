import { ItemBase, ItemProperties } from './ItemBase.js'


export class Supply<T extends string = string> extends ItemBase<T> {
	durability: undefined

	constructor (data: Omit<ItemProperties<T>, 'durability'>) {
		super(data)

		this.durability = undefined
	}
}
