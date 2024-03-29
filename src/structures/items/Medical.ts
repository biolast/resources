import { Item, ItemProperties } from './Item.js'


export class Medical<T extends string = string> extends Item<T> {
	constructor (public data: ItemProperties<T> & {
		readonly type: 'Medical'

		/** How many times this item can be used to heal before it breaks. Leave undefined if this item is single-use */
		readonly durability?: number

		/** Amount this medical item will heal player for */
		readonly healsFor: number

		/** How fast this weapon attacks in duels (player who uses item with higher speed goes first) */
		readonly speed: number
	}) {
		super(data)

		this.data = data
	}
}
