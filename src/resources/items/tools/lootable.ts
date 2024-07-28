import { Tool } from '../../../structures/items/Tool.js'


export const Hammer = new Tool({
	type: 'Tool',
	name: 'hammer',
	discordIcon: '<:hammer_tool:1006841288403988560>',
	description: 'Useful for crafting.',
	aliases: [],
	durability: 5,
	slotsUsed: 1
})

export const Welder = new Tool({
	type: 'Tool',
	name: 'welder',
	discordIcon: '<:hammer_tool:1006841288403988560>',
	description: 'Used to fuse metals.',
	aliases: [],
	durability: 5,
	slotsUsed: 1
})

export const SewingKit = new Tool({
	type: 'Tool',
	name: 'sewing_kit',
	discordIcon: '<:hammer_tool:1006841288403988560>',
	description: 'Used to stitch fabrics together.',
	aliases: [],
	durability: 5,
	slotsUsed: 1
})
