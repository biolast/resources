import { MeleeWeapon } from '../../../structures/items/MeleeWeapon.js'


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

// Low-tier
export const Fork = new MeleeWeapon({
	type: 'Melee Weapon',
	name: 'fork',
	discordIcon: '<:fork:931424880417726465>',
	aliases: [],
	durability: 1,
	slotsUsed: 1,
	accuracy: 40,
	damage: 8,
	penetration: 0.5,
	speed: 5
})

export const WoodenBat = new MeleeWeapon({
	type: 'Melee Weapon',
	name: 'wooden_bat',
	discordIcon: '<:wooden_bat:933850956481826968>',
	aliases: ['bat'],
	durability: 7,
	slotsUsed: 2,
	accuracy: 40,
	damage: 10,
	penetration: 0.5,
	speed: 9
})

export const MetalBat = new MeleeWeapon({
	type: 'Melee Weapon',
	name: 'metal_bat',
	discordIcon: '<:metal_bat:933850956796420096>',
	aliases: [],
	durability: 10,
	slotsUsed: 1,
	accuracy: 40,
	damage: 14,
	penetration: 0.8,
	speed: 9
})

export const PoliceBaton = new MeleeWeapon({
	type: 'Melee Weapon',
	name: 'police_baton',
	discordIcon: '<:police_baton:931835720904081418>',
	aliases: ['baton'],
	durability: 8,
	slotsUsed: 1,
	accuracy: 40,
	damage: 15,
	penetration: 0.8,
	speed: 10
})

export const Hatchet = new MeleeWeapon({
	type: 'Melee Weapon',
	name: 'hatchet',
	discordIcon: '<:hatchet:1062080142748426250>',
	aliases: [],
	description: 'Good for chopping small trees and zombies!',
	durability: 3,
	slotsUsed: 1,
	accuracy: 40,
	damage: 14,
	penetration: 1.2,
	speed: 12
})

// Mid-tier
export const Knife = new MeleeWeapon({
	type: 'Melee Weapon',
	name: 'knife',
	discordIcon: '<:knife_weapon:933851171481874483>',
	aliases: [],
	durability: 8,
	slotsUsed: 1,
	accuracy: 80,
	damage: 22,
	penetration: 1.5,
	speed: 15
})

export const SledgeHammer = new MeleeWeapon({
	type: 'Melee Weapon',
	name: 'sledgehammer',
	discordIcon: '<:sledge_hammer:931833719596134450>',
	aliases: ['sledge'],
	durability: 8,
	slotsUsed: 3,
	accuracy: 40,
	damage: 24,
	penetration: 1.8,
	speed: 7
})

export const FireAxe = new MeleeWeapon({
	type: 'Melee Weapon',
	name: 'fire_axe',
	discordIcon: '<:fire_axe:930978902057287700>',
	aliases: ['axe'],
	description: 'Good for chopping trees and zombies!',
	durability: 8,
	slotsUsed: 2,
	accuracy: 40,
	damage: 20,
	penetration: 1.9,
	speed: 8
})

// High-tier
export const Katana = new MeleeWeapon({
	type: 'Melee Weapon',
	name: 'katana',
	discordIcon: '<:replica_katana:931826279278321664>',
	aliases: [],
	durability: 8,
	slotsUsed: 1,
	accuracy: 70,
	damage: 20,
	penetration: 2.5,
	speed: 16
})

export const Chainsaw = new MeleeWeapon({
	type: 'Melee Weapon',
	name: 'chainsaw',
	discordIcon: '<:chainsaw:931797015329906699>',
	aliases: ['saw', 'chain'],
	durability: 8,
	slotsUsed: 3,
	accuracy: 40,
	damage: 25,
	penetration: 2.7,
	speed: 6
})
