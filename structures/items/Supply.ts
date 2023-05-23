import { Item } from './Item.js'


export class Supply<T extends string = string> extends Item<T> {
	type: 'Supply'
	durability?: undefined

	constructor (data: Omit<Supply<T>, 'durability'>) {
		super(data)

		this.type = data.type
		this.durability = undefined
	}
}
