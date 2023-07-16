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

export const Splint = new Medical({ // TODO might wanna remove this item for now since debuffs got removed. item doesnt fix any limbs
	type: 'Medical',
	name: 'splint',
	discordIcon: '<:splint:933851421848256582>',
	description: 'Use this to fix broken limbs.',
	aliases: [],
	healsFor: 20,
	slotsUsed: 1,
	speed: 15
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

export const AntiBiotics = new Medical({ // TODO remove item since debuffs got removed its useless
	type: 'Medical',
	name: 'anti-biotics',
	discordIcon: '<:antibiotics:935748154253525012>',
	description: 'Cures various infections, such as those from walker bites.',
	aliases: ['antibiotics', 'anti'],
	healsFor: 20,
	slotsUsed: 1,
	speed: 20
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
