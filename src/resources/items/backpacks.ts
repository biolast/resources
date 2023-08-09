import { Backpack } from '../../structures/items/Backpack.js'
import { Fabric, Metal } from './supplies.js'


export const SmallPouch = new Backpack({
	name: 'small_pouch',
	discordIcon: '<:small_pouch:931797105369042955>',
	aliases: ['pouch'],
	slots: 5,
	slotsUsed: 1,
	scavengeLevel: 1,
	craftingRecipes: [
		{
			levelRequired: 1,
			supplies: [
				{
					item: Fabric,
					amount: 2
				}
			],
			yield: 1
		}
	]
})

export const ClothBackpack = new Backpack({
	name: 'cloth_backpack',
	discordIcon: '<:cloth_backpack:933852769364877322>',
	aliases: ['backpack'],
	slots: 10,
	slotsUsed: 1,
	scavengeLevel: 2,
	craftingRecipes: [
		{
			levelRequired: 2,
			supplies: [
				{
					item: Fabric,
					amount: 4
				}
			],
			yield: 1
		}
	]
})

export const DuffleBag = new Backpack({
	name: 'duffle_bag',
	discordIcon: '<:duffle_bag:933852647394537573>',
	aliases: ['duffle', 'bag'],
	slots: 20,
	slotsUsed: 3,
	scavengeLevel: 3,
	craftingRecipes: [
		{
			levelRequired: 3,
			supplies: [
				{
					item: Fabric,
					amount: 8
				}
			],
			yield: 1
		}
	]
})

export const Suitcase = new Backpack({
	name: 'suitcase',
	discordIcon: '<:suitcase:938466039266685018>',
	aliases: ['suit', 'case'],
	slots: 30,
	slotsUsed: 5,
	scavengeLevel: 4,
	craftingRecipes: [
		{
			levelRequired: 5,
			supplies: [
				{
					item: Fabric,
					amount: 5
				},
				{
					item: Metal,
					amount: 5
				}
			],
			yield: 1
		}
	]
})
