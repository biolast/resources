import { ItemBase, ItemProperties } from './ItemBase.js'


export class BodyArmor<T extends string = string> extends ItemBase<T> {
	readonly type: 'Body Armor'
	/** How many times this armor can be shot before it breaks */
	readonly durability: number
	/** The protection level of this armor: 1 = crap, 2 = protects against pistols, 3 = pretty good, 4 = protects against rifles */
	readonly level: 1 | 2 | 3 | 4 | 5 | 6
	/** Whether this armor protects players arms from attacks */
	readonly protectsArms: boolean

	constructor (data: ItemProperties<T> & {
		readonly type: 'Body Armor'
		/** How many times this armor can be shot before it breaks */
		readonly durability: number
		/** The protection level of this armor: 1 = crap, 2 = protects against pistols, 3 = pretty good, 4 = protects against rifles */
		readonly level: 1 | 2 | 3 | 4 | 5 | 6
		/** Whether this armor protects players arms from attacks */
		readonly protectsArms: boolean
	}) {
		super(data)

		this.type = data.type
		this.durability = data.durability
		this.level = data.level
		this.protectsArms = data.protectsArms
	}
}
