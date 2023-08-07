import { ItemBase, ItemProperties } from './ItemBase.js'


export class Medical<T extends string = string> extends ItemBase<T> {
	/** How many times this item can be used to heal before it breaks. Leave undefined if this item is single-use */
	readonly durability?: number
	/** Amount this medical item will heal player for */
	readonly healsFor: number
	/** How fast this weapon attacks in battles (player who uses item with higher speed goes first) */
	readonly speed: number

	constructor (data: ItemProperties<T> & {
		/** How many times this item can be used to heal before it breaks. Leave undefined if this item is single-use */
		readonly durability?: number
		/** Amount this medical item will heal player for */
		readonly healsFor: number
		/** How fast this weapon attacks in battles (player who uses item with higher speed goes first) */
		readonly speed: number
	}) {
		super(data)

		this.durability = data.durability
		this.healsFor = data.healsFor
		this.speed = data.speed
	}
}
