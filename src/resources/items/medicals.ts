import { Medical } from '../../structures/items/Medical.js'


export const Bandage = new Medical({
	name: 'bandage',
	discordIcon: '<:bandage:931425265043783700>',
	aliases: ['bandage'],
	healsFor: 12,
	slotsUsed: 1,
	speed: 25,
	durability: undefined, // single-use
	scavengeLevel: 1
})

export const Medkit = new Medical({
	name: 'medkit',
	discordIcon: '<:ifak_medkit:932191219616981002>',
	aliases: [],
	description: 'A first aid kit which contains supplies for immediate minor injuries.',
	healsFor: 22,
	slotsUsed: 2,
	speed: 6,
	durability: 8,
	scavengeLevel: 3
})

export const TraumaKit = new Medical({
	name: 'trauma_kit',
	discordIcon: undefined,
	aliases: ['trauma', 'large_medkit'],
	healsFor: 35,
	slotsUsed: 7,
	durability: 20,
	speed: 1,
	scavengeLevel: 4
})
