import { Supply } from '../../structures/items/Supply.js'
import { Chainsaw, FireAxe } from './melee.js'


export const WoodLog = new Supply({
	name: 'wood_log',
	aliases: ['wood'],
	discordIcon: '<:wood_log:1005187227535560815>',
	slotsUsed: 0.5
})

export const WoodTwig = new Supply({
	name: 'wood_twig',
	aliases: ['twig'],
	discordIcon: '<:wood_twig:1007113351006003210>',
	slotsUsed: 0.2
})

export const Nails = new Supply({
	name: 'nails',
	aliases: ['nail'],
	discordIcon: '<:nails:1006847745388191835>',
	slotsUsed: 0.1
})

export const Lighter = new Supply({
	name: 'lighter',
	aliases: [],
	discordIcon: '<:lighter:1006890846622335006>',
	slotsUsed: 0.1
})

export const TechTrash = new Supply({
	name: 'tech_trash',
	aliases: ['tech', 'trash'],
	description: 'Various bits and gadgets salvaged from computers.',
	discordIcon: '<:tech_trash:933851376981790820>',
	slotsUsed: 2
})


// craftable supplies
export const WoodPlank = new Supply({
	name: 'wood_plank',
	aliases: ['plank'],
	discordIcon: '<:wood_plank:1009832931805630504>',
	slotsUsed: 0.3,
	craftingRecipes: [
		{
			possibleTools: [FireAxe, Chainsaw],
			supplies: [
				{
					item: WoodLog,
					amount: 1
				}
			],
			yield: 1
		}
	]
})
