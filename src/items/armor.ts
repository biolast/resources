import { Armor } from '../../types/Items.js'


const armorObject = <T>(et: { [K in keyof T]: (Armor) & { name: K } }) => et

export const armor = armorObject({
	heavy_jacket: {
		type: 'Body Armor',
		name: 'heavy_jacket',
		icon: '<:heavy_jacket:1062852229821907034>',
		aliases: ['heavy', 'jacket', 'armor', 'level_1_armor'],
		durability: 7,
		level: 1,
		slotsUsed: 2,
		artist: '577727980889964545',
		regions: ['Eastside Suburbs', 'Mulberry Farm']
	},
	wooden_armor: {
		type: 'Body Armor',
		name: 'wooden_armor',
		icon: '<:wooden_armor:1063581139127763024>',
		aliases: ['wood_armor', 'level_2_armor'],
		durability: 9,
		level: 2,
		slotsUsed: 2,
		regions: ['Mulberry Farm', 'Redding Forest']
	},
	light_armor: {
		type: 'Body Armor',
		name: 'light_armor',
		icon: '<:aramid_armor:931433099705860107>',
		aliases: ['lightweight', 'level_3_armor', 'light'],
		durability: 10,
		level: 3,
		slotsUsed: 2,
		artist: '719365897458024558',
		regions: ['Redding Forest', 'Norwood Mall']
	},
	swat_armor: {
		type: 'Body Armor',
		name: 'swat_armor',
		icon: '<:swat_armor:1062852232103604346>',
		description: 'Steel body armor that looks like it can stop a couple of bullets',
		aliases: ['swat', 'level_4_armor', 'steel_armor'],
		durability: 11,
		level: 4,
		slotsUsed: 3,
		artist: '577727980889964545',
		regions: ['Pike Prison', 'Norwood Mall']
	},
	military_armor: {
		type: 'Body Armor',
		name: 'military_armor',
		icon: '<:military_armor:1062852231478657094>',
		aliases: ['mili_armor', 'military', 'level_5_armor'],
		durability: 14,
		level: 5,
		slotsUsed: 4,
		artist: '577727980889964545',
		regions: ['Pike Prison']
	},
	polyethylene_armor: {
		type: 'Body Armor',
		name: 'polyethylene_armor',
		icon: '<:U_shield:601366669474136074>',
		aliases: ['poly_armor', 'polyeth', 'polyethylene', 'level_6_armor'],
		description: 'Polyethylene (UHMWPE) armor is designed to have better stopping power and weigh less than steel armor.',
		durability: 25,
		level: 6,
		slotsUsed: 2,
		regions: []
	}
})
