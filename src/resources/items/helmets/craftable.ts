import { Helmet } from '../../../structures/items/Helmet.js'
import { DuctTape, WoodPlank } from '../supplies/craftable.js'
import { Glass, Metal, Nails, Steel, WeldingWire } from '../supplies/lootable.js'
import { Hammer, Welder } from '../tools/lootable.js'


export const WoodenHelmet = new Helmet({
	type: 'Helmet',
	name: 'wooden_helmet',
	discordIcon: '<:U_helmet:874671013181415434>',
	aliases: ['wood_helmet', 'helmet', 'level_2_helm'],
	durability: 9,
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

export const RiotHelmet = new Helmet({
	type: 'Helmet',
	name: 'riot_helmet',
	discordIcon: '<:U_helmet:874671013181415434>',
	aliases: ['riot', 'level_3_helm'],
	durability: 10,
	level: 3,
	slotsUsed: 2,
	crafting: {
		levelRequired: 3,
		recipes: [
			{
				possibleTools: [Hammer],
				supplies: [
					{
						item: Metal,
						amount: 3
					},
					{
						item: DuctTape,
						amount: 1
					},
					{
						item: Glass,
						amount: 1
					},
					{
						item: Nails,
						amount: 1
					}
				],
				yield: 1
			}
		]
	}
})

export const SteelHelmet = new Helmet({
	type: 'Helmet',
	name: 'steel_helmet',
	discordIcon: '<:aramid_helmet:931797015376068618>',
	aliases: ['level_4_helm', 'steel_helm'],
	durability: 11,
	level: 4,
	slotsUsed: 3,
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
