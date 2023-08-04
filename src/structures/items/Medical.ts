import { ItemBase, ItemProperties } from './ItemBase.js'


export class Medical<T extends string = string> extends ItemBase<T> {
	readonly type: 'Medical'

	/** How many times this item can be used to heal before it breaks. Leave undefined if this item is single-use */
	readonly durability?: number
	/** Amount this medical item will heal player for */
	readonly healsFor: number
	/** How fast this weapon attacks in duels (player who uses item with higher speed goes first) */
	readonly speed: number

	constructor (data: ItemProperties<T> & {
		readonly type: 'Medical'

		/** How many times this item can be used to heal before it breaks. Leave undefined if this item is single-use */
		readonly durability?: number
		/** Amount this medical item will heal player for */
		readonly healsFor: number
		/** How fast this weapon attacks in duels (player who uses item with higher speed goes first) */
		readonly speed: number
	}) {
		super(data)

		this.type = data.type
		this.durability = data.durability
		this.healsFor = data.healsFor
		this.speed = data.speed
	}
}
