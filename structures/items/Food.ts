import { Item, ItemProperties } from './Item.js'


export class Food<T extends string = string> extends Item<T> {
	constructor (public data: Omit<ItemProperties<T>, 'durability'> & {
		readonly type: 'Food'

		/** How much energy this item provides */
		readonly energy: number

		/** The combination of ingredients to cook on campfire that will create this dish (combining is separate from cooking, refer to cooksInto for cooking) */
		readonly recipes?: Food[][]

		/** The cooked version of this food (if food is cooked using a campfire, it will turn into this) */
		readonly cooksInto?: Food
	}) {
		super(data)

		this.data = data
	}
}
