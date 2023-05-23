import { Item } from './Item.js'


export class Food<T extends string = string> extends Item<T> {
	type: 'Food'
	durability?: undefined

	/**
	 * How much energy this item provides
	 */
	energy: number

	/**
	 * The combination of ingredients to cook on campfire that will create this dish (combining is separate from cooking, refer to cooksInto for cooking)
	 */
	recipes?: Food[][]

	/**
	 * The cooked version of this food (if food is cooked using a campfire, it will turn into this)
	 */
	cooksInto?: Food

	constructor (data: Omit<Food<T>, 'durability'>) {
		super(data)

		this.type = data.type
		this.durability = undefined
		this.energy = data.energy
		this.recipes = data.recipes
		this.cooksInto = data.cooksInto
	}
}
