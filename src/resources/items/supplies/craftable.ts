import { Supply } from '../../../structures/items/Supply.js'
import { Chainsaw, FireAxe, Hatchet } from '../melee/lootable.js'
import { Adhesive, Fabric, Wood } from './lootable.js'


export const WoodPlank = new Supply({
	type: 'Supply',
	name: 'wood_plank',
	aliases: ['plank'],
	discordIcon: '<:wood_plank:1009832931805630504>',
	slotsUsed: 0.5,
	crafting: {
		levelRequired: 1,
		recipes: [
			{
				possibleTools: [FireAxe, Hatchet],
				supplies: [
					{
						item: Wood,
						amount: 4
					}
				],
				yield: 1
			},
			{
				possibleTools: [Chainsaw],
				supplies: [
					{
						item: Wood,
						amount: 3
					}
				],
				yield: 1
			}
		]
	}
})

export const DuctTape = new Supply({
	type: 'Supply',
	name: 'duct_tape',
	aliases: [],
	discordIcon: '<:nails:1006847745388191835>',
	slotsUsed: 0.25,
	crafting: {
		levelRequired: 1,
		recipes: [
			{
				possibleTools: [],
				supplies: [
					{
						item: Adhesive,
						amount: 1
					},
					{
						item: Fabric,
						amount: 1
					}
				],
				yield: 1
			}
		]
	}
})
