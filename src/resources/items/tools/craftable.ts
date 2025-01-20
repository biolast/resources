import { createItem } from '../../../structures/item.js'
import { Gasoline, Plastic } from '../supplies/lootable.js'


export const Lighter = createItem({
	type: 'Tool',
	name: 'lighter',
	aliases: [],
	discordIcon: '<:lighter:1006890846622335006>',
	description: 'Used to light a fire for cooking food.',
	slotsUsed: 1,
	crafting: {
		levelRequired: 2,
		recipes: [
			{
				possibleTools: [],
				supplies: [
					{
						item: Plastic,
						amount: 2
					},
					{
						item: Gasoline,
						amount: 1
					}
				],
				yield: 1
			}
		]
	},
	durability: 3
})
