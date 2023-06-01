import { Medical } from '../../types/Items.js'
import { Bitten, BrokenArm } from '../debuffs.js'


const medicalObject = <T>(et: { [K in keyof T]: Medical & { name: K } }) => et

export const medical = medicalObject({
	'bandage': {
		type: 'Medical',
		name: 'bandage',
		icon: '<:bandage:931425265043783700>',
		aliases: ['bandage'],
		healsFor: 12,
		slotsUsed: 1,
		speed: 25,
		durability: 3,
		curesDebuffs: [],
		artist: '719365897458024558',
		regions: ['Eastside Suburbs', 'Mulberry Farm', 'Redding Forest', 'Norwood Mall', 'Pike Prison']
	},
	'splint': {
		type: 'Medical',
		name: 'splint',
		icon: '<:splint:933851421848256582>',
		description: 'Use this to fix broken limbs.',
		aliases: [],
		healsFor: 20,
		slotsUsed: 1,
		curesDebuffs: [BrokenArm],
		speed: 15,
		artist: '719365897458024558',
		regions: ['Eastside Suburbs', 'Mulberry Farm', 'Redding Forest', 'Norwood Mall', 'Pike Prison']
	},
	'medkit': {
		type: 'Medical',
		name: 'medkit',
		icon: '<:ifak_medkit:932191219616981002>',
		aliases: ['medkit'],
		description: 'A first aid kit which contains supplies for immediate minor injuries.',
		healsFor: 22,
		slotsUsed: 2,
		speed: 6,
		durability: 8,
		curesDebuffs: [],
		artist: '168958344361541633',
		regions: ['Mulberry Farm', 'Redding Forest', 'Norwood Mall', 'Pike Prison']
	},
	'anti-biotics': {
		type: 'Medical',
		name: 'anti-biotics',
		icon: '<:antibiotics:935748154253525012>',
		description: 'Cures various infections, such as those from walker bites.',
		aliases: ['antibiotics', 'anti'],
		healsFor: 20,
		slotsUsed: 1,
		curesDebuffs: [Bitten],
		speed: 20,
		artist: '699166377705078794',
		regions: ['Eastside Suburbs', 'Mulberry Farm', 'Redding Forest', 'Norwood Mall', 'Pike Prison']
	},
	'trauma_kit': {
		type: 'Medical',
		name: 'trauma_kit',
		icon: '<:medical:886561670745452554>',
		aliases: ['trauma'],
		description: 'Large medkit consisting of bandages, splints, chest seals, and anti-biotics. Good for treating multiple people.',
		healsFor: 35,
		slotsUsed: 1,
		durability: 20,
		curesDebuffs: [Bitten, BrokenArm],
		speed: 1,
		regions: ['Pike Prison']
	}
})
