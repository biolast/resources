import { BodyArmor } from '../../structures/items/BodyArmor.js'


export const HeavyJacket = new BodyArmor({
	name: 'heavy_jacket',
	discordIcon: '<:heavy_jacket:1062852229821907034>',
	aliases: ['heavy', 'jacket', 'armor', 'level_1_armor'],
	durability: 7,
	protectionLevel: 1,
	slotsUsed: 2,
	scavengeLevel: 1
})

export const WoodenArmor = new BodyArmor({
	name: 'wooden_armor',
	discordIcon: '<:wooden_armor:1063581139127763024>',
	aliases: ['wood_armor', 'level_2_armor'],
	durability: 9,
	protectionLevel: 2,
	slotsUsed: 3,
	scavengeLevel: 2
})

export const LightArmor = new BodyArmor({
	name: 'light_armor',
	discordIcon: '<:aramid_armor:931433099705860107>',
	aliases: ['lightweight', 'level_3_armor', 'light'],
	durability: 10,
	protectionLevel: 3,
	slotsUsed: 2,
	scavengeLevel: 3
})

export const SwatArmor = new BodyArmor({
	name: 'swat_armor',
	discordIcon: '<:swat_armor:1062852232103604346>',
	description: 'Steel body armor that looks like it can stop a couple of bullets',
	aliases: ['swat', 'level_4_armor', 'steel_armor'],
	durability: 11,
	protectionLevel: 4,
	slotsUsed: 3,
	scavengeLevel: 4
})

export const MilitaryArmor = new BodyArmor({
	name: 'military_armor',
	discordIcon: '<:military_armor:1062852231478657094>',
	aliases: ['mili_armor', 'military', 'level_5_armor'],
	durability: 14,
	protectionLevel: 5,
	slotsUsed: 4,
	scavengeLevel: 5
})

export const PolyethyleneArmor = new BodyArmor({
	name: 'polyethylene_armor',
	discordIcon: undefined,
	aliases: ['poly_armor', 'polyeth', 'polyethylene', 'level_6_armor'],
	description: 'Polyethylene (UHMWPE) is designed to have better stopping power and weigh less than steel.',
	durability: 25,
	protectionLevel: 6,
	slotsUsed: 2,
	scavengeLevel: undefined
})
