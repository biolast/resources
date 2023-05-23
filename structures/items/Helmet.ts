import { Item } from './Item.js'


export class Helmet<T extends string = string> extends Item<T> {
	type: 'Helmet'

	/**
	 * How many times this armor can be shot before it breaks
	 */
	durability: number

	/**
	 * The protection level of this armor: 1 = crap, 2 = protects against pistols, 3 = pretty good, 4 = protects against rifles
	 */
	level: 1 | 2 | 3 | 4 | 5 | 6

	constructor (data: Helmet<T>) {
		super(data)

		this.type = data.type
		this.durability = data.durability
		this.level = data.level
	}
}
