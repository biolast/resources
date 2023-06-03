import { Food } from '../../structures/items/Food.js'


export const Apple = new Food({
	type: 'Food',
	name: 'apple',
	discordIcon: '<:apple_food:931425255761793054>',
	aliases: [],
	slotsUsed: 1,
	energy: 3
})

export const Corn = new Food({
	type: 'Food',
	name: 'corn',
	discordIcon: '<:corn_food:931425274720051231>',
	aliases: [],
	slotsUsed: 1,
	energy: 3
})

export const CannedMeat = new Food({
	type: 'Food',
	name: 'canned_meat',
	discordIcon: '<:canned_meat:1061630553834651741>',
	aliases: ['canned_food'],
	slotsUsed: 1,
	energy: 5
})

export const CookedMeat = new Food({
	type: 'Food',
	name: 'cooked_meat',
	discordIcon: '<:cooked_meat:1062014892456026144>',
	aliases: ['steak', 'beef'],
	slotsUsed: 1,
	energy: 10
})


// cookable foods
export const RawMeat = new Food({
	type: 'Food',
	name: 'raw_meat',
	description: 'Probably best not to eat raw food.',
	discordIcon: '<:raw_meat:1062014895341715456>',
	aliases: ['meat'],
	slotsUsed: 1,
	energy: 1,
	cooksInto: CookedMeat
})
