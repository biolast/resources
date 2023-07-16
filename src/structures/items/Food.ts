import { Item, ItemProperties } from './Item.js'


export class Food<T extends string = string> extends Item<T> {
	readonly type: 'Food'

	/** How much energy this item provides */
	readonly energy: number
	/** The combination of ingredients to cook on campfire that will create this dish (combining is separate from cooking, refer to cooksInto for cooking) */
	readonly recipes?: Food[][]
	/** The cooked version of this food (if food is cooked using a campfire, it will turn into this) */
	readonly cooksInto?: Food

	constructor (data: Omit<ItemProperties<T>, 'durability'> & {
		readonly type: 'Food'

		/** How much energy this item provides */
		readonly energy: number
		/** The combination of ingredients to cook on campfire that will create this dish (combining is separate from cooking, refer to cooksInto for cooking) */
		readonly recipes?: Food[][]
		/** The cooked version of this food (if food is cooked using a campfire, it will turn into this) */
		readonly cooksInto?: Food
	}) {
		super(data)

		this.type = data.type
		this.energy = data.energy
		this.recipes = data.recipes
		this.cooksInto = data.cooksInto
	}
}
