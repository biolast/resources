import { createItem } from '../../../structures/item.js'
import { Antiseptic, Fabric } from '../supplies/lootable.js'


/*

Medical Guidelines:

Speed for all medicals should be maximum 4 (slower than weapons).

*/

export const Bandage = createItem({
	type: 'Medical',
	name: 'bandage',
	discordIcon: '<:bandage:931425265043783700>',
	aliases: ['bandage'],
	healsFor: 12,
	slotsUsed: 0.5,
	speed: 4,
	crafting: {
		levelRequired: 1,
		recipes: [
			{
				possibleTools: [],
				supplies: [
					{
						item: Fabric,
						amount: 3
					}
				],
				yield: 1
			}
		]
	}
})

/* TODO might wanna remove this item for now since debuffs got removed. item doesnt fix any limbs
export const Splint = createItem({
	type: 'Medical',
	name: 'splint',
	discordIcon: '<:splint:933851421848256582>',
	description: 'Use this to fix broken limbs.',
	aliases: [],
	healsFor: 20,
	slotsUsed: 1,
	speed: 1
})
export const AntiBiotics = createItem({
	type: 'Medical',
	name: 'anti-biotics',
	discordIcon: '<:antibiotics:935748154253525012>',
	description: 'Cures various infections, such as those from walker bites.',
	aliases: ['antibiotics', 'anti'],
	healsFor: 20,
	slotsUsed: 1,
	speed: 1
})
*/

export const Medkit = createItem({
	type: 'Medical',
	name: 'medkit',
	discordIcon: '<:ifak_medkit:932191219616981002>',
	aliases: ['medkit'],
	description: 'A first aid kit which contains supplies for immediate minor injuries.',
	healsFor: 22,
	slotsUsed: 2,
	speed: 1,
	durability: 8,
	crafting: {
		levelRequired: 3,
		recipes: [
			{
				possibleTools: [],
				supplies: [
					{
						item: Bandage,
						amount: 2
					},
					{
						item: Antiseptic,
						amount: 2
					}
				],
				yield: 1
			}
		]
	}
})
