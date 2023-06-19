import { Stimulant } from '../../structures/items/Stimulant.js'


export const Adrenaline = new Stimulant({
	type: 'Stimulant',
	name: 'adrenaline',
	discordIcon: '<:adrenaline:933851495118540901>',
	aliases: ['adrena_stim', 'adrena'],
	slotsUsed: 1,
	effects: {
		damageBonus: 25,
		accuracyBonus: 0,
		damageTaken: -15
	},
	speed: 30
})

export const HypoStim = new Stimulant({
	type: 'Stimulant',
	name: 'hypo_stim',
	discordIcon: '<:hypo_stim:1063581137676546170>',
	aliases: ['hypo'],
	slotsUsed: 1,
	effects: {
		damageBonus: 0,
		accuracyBonus: -25,
		damageTaken: -30
	},
	speed: 30
})

export const Adderall = new Stimulant({
	type: 'Stimulant',
	name: 'adderall',
	discordIcon: '<:adderall:1063581136481161256>',
	aliases: ['addy'],
	slotsUsed: 1,
	effects: {
		damageBonus: 0,
		accuracyBonus: 35,
		damageTaken: 10
	},
	speed: 30
})

export const Morphine = new Stimulant({
	type: 'Stimulant',
	name: 'morphine',
	discordIcon: '<:morphine:933851495940620330>',
	aliases: [],
	slotsUsed: 1,
	effects: {
		damageBonus: -10,
		accuracyBonus: 0,
		damageTaken: -30
	},
	speed: 30
})

export const DavesMixture = new Stimulant({
	type: 'Stimulant',
	name: 'daves_mixture',
	discordIcon: '<:daves_concoction:931797015350882344>',
	description: 'Dave must have made this stimulant himself, who knows what chemicals it contains.',
	aliases: ['concoction', 'mixture', 'daves_mix'],
	slotsUsed: 1,
	effects: {
		damageBonus: 30,
		accuracyBonus: 90,
		damageTaken: 0
	},
	speed: 30
})
