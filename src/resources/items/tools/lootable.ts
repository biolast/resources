import { createItem } from '../../../structures/item.js'


export const Hammer = createItem({
	type: 'Tool',
	name: 'hammer',
	discordIcon: '<:hammer_tool:1006841288403988560>',
	description: 'Useful for crafting.',
	aliases: [],
	durability: 5,
	slotsUsed: 1
})

export const Welder = createItem({
	type: 'Tool',
	name: 'welder',
	discordIcon: '<:hammer_tool:1006841288403988560>',
	description: 'Used to fuse metals.',
	aliases: [],
	durability: 5,
	slotsUsed: 1
})

export const SewingKit = createItem({
	type: 'Tool',
	name: 'sewing_kit',
	discordIcon: '<:hammer_tool:1006841288403988560>',
	description: 'Used to stitch fabrics together.',
	aliases: [],
	durability: 5,
	slotsUsed: 1
})
