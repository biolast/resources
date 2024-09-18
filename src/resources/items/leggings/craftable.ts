import { Leggings } from '../../../structures/items/Leggings.js'
import { DuctTape, WoodPlank } from '../supplies/craftable.js'
import { Leather, Steel, WeldingWire } from '../supplies/lootable.js'
import { Hammer, SewingKit, Welder } from '../tools/lootable.js'


export const LeatherJeans = new Leggings({
	type: 'Leggings',
	name: 'leather_jeans',
	discordIcon: '<:heavy_jacket:1062852229821907034>',
	aliases: ['leggings', 'pants', 'leather_pants', 'jeans', 'leather_legs'],
	durability: 5,
	level: 1,
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

export const WoodenLeggings = new Leggings({
	type: 'Leggings',
	name: 'wooden_leggings',
	discordIcon: '<:wooden_armor:1063581139127763024>',
	aliases: ['wood_pants', 'wooden_pants', 'wood_legs', 'wooden_legs'],
	durability: 5,
	level: 2,
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
						item: DuctTape,
						amount: 1
					}
				],
				yield: 1
			}
		]
	}
})

export const SteelLeggings = new Leggings({
	type: 'Leggings',
	name: 'steel_leggings',
	discordIcon: '<:swat_armor:1062852232103604346>',
	aliases: ['steel_pants', 'steel_legs', 'steel_legging'],
	durability: 9,
	level: 3,
	slotsUsed: 4,
	crafting: {
		levelRequired: 4,
		recipes: [
			{
				possibleTools: [Welder],
				supplies: [
					{
						item: Steel,
						amount: 4
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
