import { Stimulant } from '../../types/Items.js'


const stimulantsObject = <T>(et: { [K in keyof T]: Stimulant & { name: K } }) => et

export const stimulants = stimulantsObject({
	adrenaline: {
		type: 'Stimulant',
		name: 'adrenaline',
		icon: '<:adrenaline:933851495118540901>',
		aliases: ['adrena_stim', 'adrena'],
		slotsUsed: 1,
		effects: {
			damageBonus: 25,
			accuracyBonus: 0,
			damageTaken: -15
		},
		speed: 30,
		artist: '719365897458024558',
		regions: ['Norwood Mall', 'Pike Prison']
	},
	hypo_stim: {
		type: 'Stimulant',
		name: 'hypo_stim',
		icon: '<:hypo_stim:1063581137676546170>',
		aliases: ['hypo'],
		slotsUsed: 1,
		effects: {
			damageBonus: 0,
			accuracyBonus: -25,
			damageTaken: -30
		},
		speed: 30,
		regions: ['Mulberry Farm', 'Norwood Mall', 'Pike Prison']
	},
	adderall: {
		type: 'Stimulant',
		name: 'adderall',
		icon: '<:adderall:1063581136481161256>',
		aliases: ['addy'],
		slotsUsed: 1,
		effects: {
			damageBonus: 0,
			accuracyBonus: 35,
			damageTaken: 10
		},
		speed: 30,
		regions: ['Mulberry Farm', 'Norwood Mall', 'Pike Prison']
	},
	morphine: {
		type: 'Stimulant',
		name: 'morphine',
		icon: '<:morphine:933851495940620330>',
		aliases: [],
		slotsUsed: 1,
		effects: {
			damageBonus: -10,
			accuracyBonus: 0,
			damageTaken: -30
		},
		speed: 30,
		artist: '719365897458024558',
		regions: ['Mulberry Farm', 'Norwood Mall', 'Pike Prison']
	},
	daves_mixture: {
		type: 'Stimulant',
		name: 'daves_mixture',
		icon: '<:daves_concoction:931797015350882344>',
		description: 'Dave must have made this stimulant himself, who knows what chemicals it contains.',
		aliases: ['concoction', 'mixture', 'daves_mix'],
		slotsUsed: 1,
		effects: {
			damageBonus: 30,
			accuracyBonus: 90,
			damageTaken: 0
		},
		speed: 30,
		artist: '719365897458024558',
		regions: ['Mulberry Farm']
	}
})
