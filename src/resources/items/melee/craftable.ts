import { MeleeWeapon } from '../../../structures/items/MeleeWeapon.js'
import { DuctTape } from '../supplies/craftable.js'
import { Glass, Metal, Nails, Wood } from '../supplies/lootable.js'
import { Hammer } from '../tools/lootable.js'
import { FireAxe, Hatchet, Knife } from './lootable.js'


/*

Melee Guidelines:

Low tier:
 - less than 1.5 armor penetration.
 - less than or equal to 15 damage.

Mid tier:
 - higher than or equal to 1.5 armor penetration, less than 2.5.
 - higher than 15 damage, less than 25.

High tier:
 - higher than or equal to 2.5 armor penetration.
 - higher than or equal to 25 damage.

Speed for all melee weapons should be minimum 5, maximum 20 (faster than medicals but slower than ranged weapons).
 - One-handed weapons should have higher speed than two-handed weapons.

Accuracy for most melee weapons should be below 50% to prevent limb targeting.

*/

export const WoodenClub = new MeleeWeapon({
	type: 'Melee Weapon',
	name: 'wooden_club',
	discordIcon: '<:wooden_bat:933850956481826968>',
	aliases: ['club'],
	durability: 8,
	slotsUsed: 2,
	accuracy: 40,
	damage: 10,
	penetration: 0.7,
	speed: 9,
	crafting: {
		levelRequired: 1,
		recipes: [
			{
				possibleTools: [Hatchet, FireAxe],
				supplies: [
					{
						item: Wood,
						amount: 3
					}
				],
				yield: 1
			}
		]
	}
})

export const Shank = new MeleeWeapon({
	type: 'Melee Weapon',
	name: 'shank',
	discordIcon: '<:metal_shank:931835720908296212>',
	aliases: ['metal_shank', 'shiv'],
	durability: 5,
	slotsUsed: 1,
	accuracy: 80,
	damage: 20,
	penetration: 1.3,
	speed: 14,
	crafting: {
		levelRequired: 1,
		recipes: [
			{
				possibleTools: [],
				supplies: [
					{
						item: DuctTape,
						amount: 1
					},
					{
						item: Metal,
						amount: 1
					}
				],
				yield: 1
			},
			{
				possibleTools: [],
				supplies: [
					{
						item: DuctTape,
						amount: 1
					},
					{
						item: Glass,
						amount: 1
					}
				],
				yield: 1
			}
		]
	}
})

export const WoodenSpear = new MeleeWeapon({
	type: 'Melee Weapon',
	name: 'wooden_spear',
	discordIcon: '<:police_baton:931835720904081418>',
	aliases: ['spear', 'wood_spear'],
	durability: 6,
	slotsUsed: 2,
	accuracy: 40,
	damage: 10,
	penetration: 0.8,
	speed: 7,
	crafting: {
		levelRequired: 1,
		recipes: [
			{
				possibleTools: [Shank, Knife],
				supplies: [
					{
						item: Wood,
						amount: 3
					}
				],
				yield: 1
			}
		]
	}
})

export const SpikedClub = new MeleeWeapon({
	type: 'Melee Weapon',
	name: 'spiked_bat',
	discordIcon: '<:wooden_bat:933850956481826968>',
	aliases: ['spiked'],
	durability: 8,
	slotsUsed: 1,
	accuracy: 40,
	damage: 20,
	penetration: 1.5,
	speed: 9,
	crafting: {
		levelRequired: 2,
		recipes: [
			{
				possibleTools: [Hammer],
				supplies: [
					{
						item: WoodenClub,
						amount: 1
					},
					{
						item: Nails,
						amount: 2
					}
				],
				yield: 1
			}
		]
	}
})
