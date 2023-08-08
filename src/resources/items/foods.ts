import { Food } from '../../structures/items/Food.js'
import { Knife, Shank } from './melee.js'
import { CannedBeans, CannedCorn } from './supplies.js'
import { CanOpener } from './tools.js'


export const Apple = new Food({
	name: 'apple',
	discordIcon: '<:apple_food:931425255761793054>',
	aliases: [],
	slotsUsed: 1,
	energy: 3,
	scavengeLevel: 1
})

export const RoastedCorn = new Food({
	name: 'roasted_corn',
	discordIcon: undefined,
	aliases: [],
	slotsUsed: 1,
	energy: 13,
	scavengeLevel: 1
})

export const BakedBeans = new Food({
	name: 'baked_beans',
	discordIcon: undefined,
	aliases: [],
	slotsUsed: 1,
	energy: 15,
	scavengeLevel: 1
})

export const CookedAnimalMeat = new Food({
	name: 'cooked_animal_meat',
	discordIcon: '<:cooked_meat:1062014892456026144>',
	aliases: ['steak', 'beef'],
	slotsUsed: 1,
	energy: 15,
	scavengeLevel: 1
})


// cookable foods
export const Corn = new Food({
	name: 'corn',
	discordIcon: '<:corn_food:931425274720051231>',
	aliases: [],
	slotsUsed: 1,
	energy: 8,
	scavengeLevel: 1,
	cooksInto: RoastedCorn,
	craftingRecipes: [
		{
			levelRequired: 1,
			possibleTools: [CanOpener, Shank, Knife],
			supplies: [
				{
					item: CannedCorn,
					amount: 1
				}
			],
			yield: 1
		}
	]
})

export const Beans = new Food({
	name: 'beans',
	discordIcon: undefined,
	aliases: [],
	slotsUsed: 1,
	energy: 10,
	scavengeLevel: 1,
	cooksInto: BakedBeans,
	craftingRecipes: [
		{
			levelRequired: 1,
			possibleTools: [CanOpener, Shank, Knife],
			supplies: [
				{
					item: CannedBeans,
					amount: 1
				}
			],
			yield: 1
		}
	]
})

export const RawAnimalMeat = new Food({
	name: 'raw_animal_meat',
	description: 'Probably best not to eat raw food.',
	discordIcon: '<:raw_meat:1062014895341715456>',
	aliases: ['meat'],
	slotsUsed: 1,
	energy: 1,
	cooksInto: CookedAnimalMeat,
	scavengeLevel: 1
})
