import { Item } from './Item.js'


export class Key<T extends string = string> extends Item<T> {
	type: 'Key'
	durability?: undefined

	constructor (data: Omit<Key<T>, 'durability'>) {
		super(data)

		this.type = data.type
		this.durability = undefined
	}
}
