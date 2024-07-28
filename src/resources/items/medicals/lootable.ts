import { Medical } from '../../../structures/items/Medical.js'


/*

Medical Guidelines:

Speed for all medicals should be maximum 4 (slower than weapons).

*/

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
