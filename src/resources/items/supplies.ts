import { Supply } from '../../structures/items/Supply.js'
import { Chainsaw, FireAxe } from './melee.js'
import { CanOpener } from './tools.js'


export const CannedCorn = new Supply({
	name: 'canned_corn',
	description: `Can be opened using a ${CanOpener.discordIcon} \`${CanOpener.toString()}\``,
	discordIcon: undefined,
	aliases: ['canned_food'],
	slotsUsed: 1
})

export const WoodLog = new Supply({
	name: 'wood_log',
	aliases: ['wood'],
	discordIcon: '<:wood_log:1005187227535560815>',
	slotsUsed: 1
})

export const Fabric = new Supply({
	name: 'fabric',
	aliases: ['cloth'],
	discordIcon: undefined,
	slotsUsed: 1
})

export const Metal = new Supply({
	name: 'metal',
	aliases: ['steel'],
	discordIcon: undefined,
	slotsUsed: 1
})

export const WoodTwig = new Supply({
	name: 'wood_twig',
	aliases: ['twig'],
	discordIcon: '<:wood_twig:1007113351006003210>',
	slotsUsed: 0.25
})

export const Nails = new Supply({
	name: 'nails',
	aliases: ['nail'],
	discordIcon: '<:nails:1006847745388191835>',
	slotsUsed: 0.5
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
	slotsUsed: 0.5,
	craftingRecipes: [
		{
			levelRequired: 2,
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
