import { ItemBase, ItemProperties } from './ItemBase.js'


export class Food<T extends string = string> extends ItemBase<T> {
	protected readonly category: 'Food'
	/** How much energy this item provides */
	readonly energy: number
	/** The combination of ingredients to cook on campfire that will create this dish (combining is separate from cooking, refer to cooksInto for cooking) */
	readonly recipes?: Food[][]
	/** The cooked version of this food (if food is cooked using a campfire, it will turn into this) */
	readonly cooksInto?: Food

	constructor (data: Omit<ItemProperties<T>, 'durability'> & {
		/** How much energy this item provides */
		energy: number
		/** The combination of ingredients to cook on campfire that will create this dish (combining is separate from cooking, refer to cooksInto for cooking) */
		recipes?: Food[][]
		/** The cooked version of this food (if food is cooked using a campfire, it will turn into this) */
		cooksInto?: Food
	}) {
		super(data)

		this.category = 'Food'
		this.energy = data.energy
		this.recipes = data.recipes
		this.cooksInto = data.cooksInto
	}
}
