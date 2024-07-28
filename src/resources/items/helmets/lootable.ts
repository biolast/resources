import { Helmet } from '../../../structures/items/Helmet.js'


export const HardHat = new Helmet({
	type: 'Helmet',
	name: 'hard_hat',
	discordIcon: '<:U_helmet:874671013181415434>',
	aliases: ['construction_hat', 'hard', 'level_1_helm', 'hat'],
	durability: 6,
	level: 1,
	slotsUsed: 2
})

export const CyclingHelmet = new Helmet({
	type: 'Helmet',
	name: 'cycling_helmet',
	discordIcon: '<:U_helmet:874671013181415434>',
	aliases: ['bike_helm', 'cycle_helm', 'cycling', 'bike_helmet'],
	durability: 5,
	level: 1,
	slotsUsed: 2
})

export const MilitaryHelmet = new Helmet({
	type: 'Helmet',
	name: 'military_helmet',
	discordIcon: '<:U_helmet:874671013181415434>',
	aliases: ['mili_helm', 'level_5_helm'],
	durability: 14,
	level: 5,
	slotsUsed: 3
})

export const PolyethyleneHelmet = new Helmet({
	type: 'Helmet',
	name: 'polyethylene_helmet',
	discordIcon: '<:U_helmet:874671013181415434>',
	aliases: ['poly_helm', 'polyeth_helm', 'polyethylene_helm', 'level_6_helm'],
	description: 'Polyethylene (UHMWPE) armor is designed to have better stopping power and weigh less than steel armor.',
	durability: 25,
	level: 6,
	slotsUsed: 2
})
