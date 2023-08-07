import { Tool } from '../../structures/items/Tool.js'


export const Hammer = new Tool({
	name: 'hammer',
	discordIcon: '<:hammer_tool:1006841288403988560>',
	description: 'Useful for crafting.',
	aliases: [],
	slotsUsed: 1,
	durability: 7
})

export const Lighter = new Tool({
	name: 'lighter',
	description: 'Use this to start a fire for cooking food.',
	aliases: ['fire_starter'],
	discordIcon: '<:lighter:1006890846622335006>',
	slotsUsed: 1,
	durability: 4
})

export const CanOpener = new Tool({
	name: 'can_opener',
	description: 'Use this to open canned foods.',
	aliases: ['canned_food_opener', 'canned_opener'],
	discordIcon: undefined,
	slotsUsed: 1,
	durability: 4
})
