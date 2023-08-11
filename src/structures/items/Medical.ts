import { ItemBase, ItemProperties } from './ItemBase.js'


export class Medical<T extends string = string, D extends number | undefined = number | undefined> extends ItemBase<T> {
	protected readonly category: 'Medical'
	/** How many times this item can be used to heal before it breaks. Leave undefined if this item is single-use */
	readonly durability: D
	/** Amount this medical item will heal player for */
	readonly healsFor: number
	/** How fast this weapon attacks in battles (player who uses item with higher speed goes first) */
	readonly speed: number

	constructor (data: ItemProperties<T> & {
		/** How many times this item can be used to heal before it breaks. Leave undefined if this item is single-use */
		durability: D
		/** Amount this medical item will heal player for */
		healsFor: number
		/** How fast this weapon attacks in battles (player who uses item with higher speed goes first) */
		speed: number
	}) {
		super(data)

		this.category = 'Medical'
		this.durability = data.durability
		this.healsFor = data.healsFor
		this.speed = data.speed
	}
}
