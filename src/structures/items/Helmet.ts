import { ItemBase, ItemProperties } from './ItemBase.js'


export class Helmet<T extends string = string> extends ItemBase<T> {
	protected readonly category: 'Helmet'
	/** How many times this armor can be shot before it breaks */
	readonly durability: number
	/** 1 = crap, 2 = protects against pistols, 3 = pretty good, 4 = protects against rifles */
	readonly protectionLevel: 1 | 2 | 3 | 4 | 5 | 6

	constructor (data: ItemProperties<T> & {
		/** How many times this armor can be shot before it breaks */
		durability: number
		/** 1 = crap, 2 = protects against pistols, 3 = pretty good, 4 = protects against rifles */
		protectionLevel: 1 | 2 | 3 | 4 | 5 | 6
	}) {
		super(data)

		this.category = 'Helmet'
		this.durability = data.durability
		this.protectionLevel = data.protectionLevel
	}
}
