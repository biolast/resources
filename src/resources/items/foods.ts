import { Food } from '../../structures/items/Food.js'


export const Apple = new Food({
	name: 'apple',
	discordIcon: '<:apple_food:931425255761793054>',
	aliases: [],
	slotsUsed: 1,
	energy: 3,
	scavengeLevel: 1
})

export const Corn = new Food({
	name: 'corn',
	discordIcon: '<:corn_food:931425274720051231>',
	aliases: [],
	slotsUsed: 1,
	energy: 3,
	scavengeLevel: 1
})

export const CannedMeat = new Food({
	name: 'canned_meat',
	discordIcon: '<:canned_meat:1061630553834651741>',
	aliases: ['canned_food', 'can_meat'],
	slotsUsed: 1,
	energy: 5,
	scavengeLevel: 1
})

export const CookedAnimalMeat = new Food({
	name: 'cooked_animal_meat',
	discordIcon: '<:cooked_meat:1062014892456026144>',
	aliases: ['steak', 'beef'],
	slotsUsed: 1,
	energy: 10,
	scavengeLevel: 1
})


// cookable foods
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
