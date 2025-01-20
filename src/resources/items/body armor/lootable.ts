import { createItem } from '../../../structures/item.js'


export const MilitaryArmor = createItem({
	type: 'Body Armor',
	name: 'military_armor',
	discordIcon: '<:military_armor:1062852231478657094>',
	aliases: ['mili_armor', 'military', 'level_5_armor'],
	durability: 14,
	level: 5,
	protectsArms: true,
	slotsUsed: 4
})

export const PolyethyleneArmor = createItem({
	type: 'Body Armor',
	name: 'polyethylene_armor',
	discordIcon: '<:U_shield:601366669474136074>',
	aliases: ['poly_armor', 'polyeth', 'polyethylene', 'level_6_armor'],
	description: 'Polyethylene (UHMWPE) armor is designed to have better stopping power and weigh less than steel armor.',
	durability: 25,
	level: 6,
	protectsArms: false,
	slotsUsed: 3
})
