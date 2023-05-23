import { Debuff } from '../../src/debuffs.js'
import { Item } from './Item.js'


export class Medical<T extends string = string> extends Item<T> {
	type: 'Medical'

	/**
	 * How many times this item can be used to heal before it breaks
	 */
	durability?: number

	/**
	 * Amount this medical item will heal player for
	 */
	healsFor: number

	/**
	 * How fast this weapon attacks in duels (player who uses item with higher speed goes first)
	 */
	speed: number

	curesDebuffs: Debuff[]

	constructor (data: Medical<T>) {
		super(data)

		this.type = data.type
		this.durability = data.durability
		this.healsFor = data.healsFor
		this.speed = data.speed
		this.curesDebuffs = data.curesDebuffs
	}
}
