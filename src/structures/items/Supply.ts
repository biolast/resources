import { ItemBase, ItemProperties } from './ItemBase.js'


export class Supply<T extends string = string> extends ItemBase<T> {
	protected readonly category: 'Supply'
	readonly durability: undefined

	constructor (data: Omit<ItemProperties<T>, 'durability'>) {
		super(data)

		this.category = 'Supply'
		this.durability = undefined
	}
}
