import { Helmet } from '../../types/Items.js'


const helmetObject = <T>(et: { [K in keyof T]: (Helmet) & { name: K } }) => et

export const helmets = helmetObject({
	hard_hat: {
		type: 'Helmet',
		name: 'hard_hat',
		icon: '<:U_helmet:874671013181415434>',
		aliases: ['construction_hat', 'hard', 'level_1_helm'],
		durability: 6,
		level: 1,
		slotsUsed: 2,
		regions: ['Eastside Suburbs']
	},
	cycling_helmet: {
		type: 'Helmet',
		name: 'cycling_helmet',
		icon: '<:U_helmet:874671013181415434>',
		aliases: ['bike_helm', 'cycle_helm', 'cycling'],
		durability: 5,
		level: 1,
		slotsUsed: 2,
		regions: ['Eastside Suburbs']
	},
	sauce_pan: {
		type: 'Helmet',
		name: 'sauce_pan',
		icon: '<:sauce_pan:931822494468419655>',
		aliases: ['pan'],
		durability: 6,
		level: 1,
		slotsUsed: 2,
		artist: '168958344361541633',
		regions: ['Mulberry Farm']
	},
	wooden_helmet: {
		type: 'Helmet',
		name: 'wooden_helmet',
		icon: '<:U_helmet:874671013181415434>',
		aliases: ['wood_helmet', 'helmet', 'level_2_helm'],
		durability: 9,
		level: 2,
		slotsUsed: 2,
		regions: ['Mulberry Farm', 'Redding Forest']
	},
	cultist_mask: {
		type: 'Helmet',
		name: 'cultist_mask',
		icon: '<:U_helmet:874671013181415434>',
		aliases: ['cultist'],
		durability: 4,
		level: 3,
		slotsUsed: 1,
		regions: ['Redding Forest']
	},
	riot_helmet: {
		type: 'Helmet',
		name: 'riot_helmet',
		icon: '<:U_helmet:874671013181415434>',
		aliases: ['riot', 'level_3_helm'],
		durability: 10,
		level: 3,
		slotsUsed: 2,
		artist: '719365897458024558',
		regions: ['Norwood Mall']
	},
	psycho_mask: {
		type: 'Helmet',
		name: 'psycho_mask',
		icon: '<:psycho_mask:931813743397044254>',
		aliases: ['psycho', 'mask'],
		durability: 5,
		level: 3,
		slotsUsed: 1,
		artist: '719365897458024558',
		regions: ['Norwood Mall']
	},
	swat_helmet: {
		type: 'Helmet',
		name: 'swat_helmet',
		icon: '<:aramid_helmet:931797015376068618>',
		aliases: ['swathelm', 'level_4_helm', 'steel_helm'],
		durability: 11,
		level: 4,
		slotsUsed: 1,
		regions: ['Pike Prison', 'Norwood Mall']
	},
	military_helmet: {
		type: 'Helmet',
		name: 'military_helmet',
		icon: '<:U_helmet:874671013181415434>',
		aliases: ['mili_helm', 'level_5_helm'],
		durability: 14,
		level: 5,
		slotsUsed: 2,
		regions: ['Pike Prison']
	},
	polyethylene_helmet: {
		type: 'Helmet',
		name: 'polyethylene_helmet',
		icon: '<:U_helmet:874671013181415434>',
		aliases: ['poly_helm', 'polyeth_helm', 'polyethylene_helm', 'level_6_helm'],
		description: 'Polyethylene (UHMWPE) armor is designed to have better stopping power and weigh less than steel armor.',
		durability: 25,
		level: 6,
		slotsUsed: 2,
		regions: []
	}
})
