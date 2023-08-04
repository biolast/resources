import { Helmet } from '../../structures/items/Helmet.js'


export const HardHat = new Helmet({
	name: 'hard_hat',
	discordIcon: '<:U_helmet:874671013181415434>',
	aliases: ['construction_hat', 'hard', 'level_1_helm'],
	durability: 6,
	protectionLevel: 1,
	slotsUsed: 2,
	scavengeLevel: 1
})

export const CyclingHelmet = new Helmet({
	name: 'cycling_helmet',
	discordIcon: '<:U_helmet:874671013181415434>',
	aliases: ['bike_helm', 'cycle_helm', 'cycling'],
	durability: 5,
	protectionLevel: 1,
	slotsUsed: 2,
	scavengeLevel: 1
})

export const WoodenHelmet = new Helmet({
	name: 'wooden_helmet',
	discordIcon: '<:U_helmet:874671013181415434>',
	aliases: ['wood_helmet', 'helmet', 'level_2_helm'],
	durability: 9,
	protectionLevel: 2,
	slotsUsed: 2,
	scavengeLevel: 2
})

export const RiotHelmet = new Helmet({
	name: 'riot_helmet',
	discordIcon: '<:U_helmet:874671013181415434>',
	aliases: ['riot', 'level_3_helm'],
	durability: 10,
	protectionLevel: 3,
	slotsUsed: 2,
	scavengeLevel: 3
})

export const SwatHelmet = new Helmet({
	name: 'swat_helmet',
	discordIcon: '<:aramid_helmet:931797015376068618>',
	aliases: ['swathelm', 'level_4_helm', 'steel_helm'],
	durability: 11,
	protectionLevel: 4,
	slotsUsed: 1,
	scavengeLevel: 4
})

export const MilitaryHelmet = new Helmet({
	name: 'military_helmet',
	discordIcon: '<:U_helmet:874671013181415434>',
	aliases: ['mili_helm', 'level_5_helm'],
	durability: 14,
	protectionLevel: 5,
	slotsUsed: 2,
	scavengeLevel: 5
})

export const PolyethyleneHelmet = new Helmet({
	name: 'polyethylene_helmet',
	discordIcon: '<:U_helmet:874671013181415434>',
	aliases: ['poly_helm', 'polyeth_helm', 'polyethylene_helm', 'level_6_helm'],
	description: 'Polyethylene (UHMWPE) armor is designed to have better stopping power and weigh less than steel armor.',
	durability: 25,
	protectionLevel: 6,
	slotsUsed: 2
})
