import { Backpack } from '../../../structures/items/Backpack.js'
import { DuctTape } from '../supplies/craftable.js'
import { Fabric } from '../supplies/lootable.js'
import { SewingKit } from '../tools/lootable.js'


export const SmallPouch = new Backpack({
	type: 'Backpack',
	name: 'small_pouch',
	discordIcon: '<:small_pouch:931797105369042955>',
	aliases: ['pouch'],
	slots: 5,
	slotsUsed: 1,
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

export const ClothBackpack = new Backpack({
	type: 'Backpack',
	name: 'cloth_backpack',
	discordIcon: '<:cloth_backpack:933852769364877322>',
	aliases: ['backpack'],
	slots: 10,
	slotsUsed: 1,
	crafting: {
		levelRequired: 3,
		recipes: [
			{
				possibleTools: [SewingKit],
				supplies: [
					{
						item: Fabric,
						amount: 5
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
