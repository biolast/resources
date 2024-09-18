import { BodyArmor } from '../../../structures/items/BodyArmor.js'
import { DuctTape, WoodPlank } from '../supplies/craftable.js'
import { Fabric, Leather, Metal, Nails, Steel, WeldingWire } from '../supplies/lootable.js'
import { Hammer, SewingKit, Welder } from '../tools/lootable.js'


export const Hoodie = new BodyArmor({
	type: 'Body Armor',
	name: 'hoodie',
	discordIcon: '<:heavy_jacket:1062852229821907034>',
	aliases: ['shirt', 'hooded_shirt', 'level_1_armor'],
	durability: 7,
	level: 1,
	protectsArms: true,
	slotsUsed: 2,
	crafting: {
		levelRequired: 1,
		recipes: [
			{
				possibleTools: [SewingKit],
				supplies: [
					{
						item: Fabric,
						amount: 4
					}
				],
				yield: 1
			}
		]
	}
})

export const LeatherJacket = new BodyArmor({
	type: 'Body Armor',
	name: 'leather_jacket',
	discordIcon: '<:heavy_jacket:1062852229821907034>',
	aliases: ['jacket', 'armor', 'leather_armor', 'leather_chest'],
	durability: 5,
	level: 2,
	protectsArms: true,
	slotsUsed: 2,
	crafting: {
		levelRequired: 2,
		recipes: [
			{
				possibleTools: [SewingKit],
				supplies: [
					{
						item: Leather,
						amount: 4
					}
				],
				yield: 1
			}
		]
	}
})

export const WoodenArmor = new BodyArmor({
	type: 'Body Armor',
	name: 'wooden_armor',
	discordIcon: '<:wooden_armor:1063581139127763024>',
	aliases: ['wood_armor', 'level_2_armor'],
	durability: 9,
	level: 2,
	protectsArms: true,
	slotsUsed: 2,
	crafting: {
		levelRequired: 2,
		recipes: [
			{
				possibleTools: [Hammer],
				supplies: [
					{
						item: WoodPlank,
						amount: 3
					},
					{
						item: Nails,
						amount: 1
					},
					{
						item: DuctTape,
						amount: 1
					}
				],
				yield: 1
			}
		]
	}
})

export const LightArmor = new BodyArmor({
	type: 'Body Armor',
	name: 'light_armor',
	discordIcon: '<:aramid_armor:931433099705860107>',
	aliases: ['lightweight', 'level_3_armor', 'light'],
	durability: 10,
	level: 3,
	protectsArms: false,
	slotsUsed: 2,
	crafting: {
		levelRequired: 3,
		recipes: [
			{
				possibleTools: [Hammer],
				supplies: [
					{
						item: Metal,
						amount: 4
					},
					{
						item: DuctTape,
						amount: 2
					}
				],
				yield: 1
			}
		]
	}
})

export const SteelArmor = new BodyArmor({
	type: 'Body Armor',
	name: 'steel_armor',
	discordIcon: '<:swat_armor:1062852232103604346>',
	aliases: ['swat', 'level_4_armor', 'steel_armor'],
	durability: 11,
	level: 4,
	protectsArms: false,
	slotsUsed: 4,
	crafting: {
		levelRequired: 4,
		recipes: [
			{
				possibleTools: [Welder],
				supplies: [
					{
						item: Steel,
						amount: 5
					},
					{
						item: WeldingWire,
						amount: 1
					}
				],
				yield: 1
			}
		]
	}
})
