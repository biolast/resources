import { Medical } from '../../structures/items/Medical.js'


export const Bandage = new Medical({
	type: 'Medical',
	name: 'bandage',
	discordIcon: '<:bandage:931425265043783700>',
	aliases: ['bandage'],
	healsFor: 12,
	slotsUsed: 1,
	speed: 25,
	durability: 3
})

export const Medkit = new Medical({
	type: 'Medical',
	name: 'medkit',
	discordIcon: '<:ifak_medkit:932191219616981002>',
	aliases: ['medkit'],
	description: 'A first aid kit which contains supplies for immediate minor injuries.',
	healsFor: 22,
	slotsUsed: 2,
	speed: 6,
	durability: 8
})

export const TraumaKit = new Medical({
	type: 'Medical',
	name: 'trauma_kit',
	discordIcon: '<:medical:886561670745452554>',
	aliases: ['trauma'],
	description: 'Large medkit consisting of bandages, splints, chest seals, and anti-biotics. Good for treating multiple people.',
	healsFor: 35,
	slotsUsed: 1,
	durability: 20,
	speed: 1
})
