import { MeleeWeapon } from '../../structures/items/MeleeWeapon.js'
import { Fabric, Metal, Nails } from './supplies.js'
import { Hammer } from './tools.js'


export const WoodenBat = new MeleeWeapon({
	name: 'wooden_bat',
	discordIcon: '<:wooden_bat:933850956481826968>',
	aliases: ['bat'],
	durability: 8,
	slotsUsed: 3,
	accuracy: 45,
	damage: 10,
	penetration: 0.5,
	speed: 9,
	scavengeLevel: 1
})

export const Shank = new MeleeWeapon({
	name: 'shank',
	discordIcon: '<:metal_shank:931835720908296212>',
	aliases: ['metal_shank'],
	durability: 3,
	slotsUsed: 1,
	accuracy: 20,
	damage: 15,
	penetration: 0.8,
	speed: 30,
	craftingRecipes: [
		{
			levelRequired: 1,
			supplies: [
				{
					item: Metal,
					amount: 1
				},
				{
					item: Fabric,
					amount: 2
				}
			],
			yield: 1
		}
	]
})

export const MetalPipe = new MeleeWeapon({
	name: 'metal_pipe',
	discordIcon: undefined,
	aliases: ['pipe'],
	durability: 10,
	slotsUsed: 3,
	accuracy: 40,
	damage: 15,
	penetration: 0.8,
	speed: 4,
	scavengeLevel: 2
})

export const MetalBat = new MeleeWeapon({
	name: 'metal_bat',
	discordIcon: '<:metal_bat:933850956796420096>',
	aliases: [],
	durability: 9,
	slotsUsed: 3,
	accuracy: 70,
	damage: 15,
	penetration: 0.8,
	speed: 9,
	scavengeLevel: 2
})

export const Hatchet = new MeleeWeapon({
	name: 'hatchet',
	discordIcon: '<:hatchet:1062080142748426250>',
	aliases: [],
	description: 'Good for chopping trees and zombies!',
	durability: 5,
	slotsUsed: 1,
	accuracy: 70,
	damage: 14,
	penetration: 1.0,
	speed: 14,
	scavengeLevel: 2
})

export const Crowbar = new MeleeWeapon({
	name: 'crowbar',
	discordIcon: undefined,
	aliases: ['prybar', 'crow', 'bar'],
	durability: 8,
	slotsUsed: 3,
	accuracy: 65,
	damage: 15,
	penetration: 1.0,
	speed: 4,
	scavengeLevel: 2
})

export const Knife = new MeleeWeapon({
	name: 'knife',
	discordIcon: '<:knife_weapon:933851171481874483>',
	aliases: [],
	durability: 6,
	slotsUsed: 1,
	accuracy: 80,
	damage: 10,
	penetration: 1.5,
	speed: 22,
	scavengeLevel: 2
})

export const PoliceBaton = new MeleeWeapon({
	name: 'police_baton',
	discordIcon: '<:police_baton:931835720904081418>',
	aliases: ['baton'],
	durability: 8,
	slotsUsed: 2,
	accuracy: 85,
	damage: 20,
	penetration: 1.25,
	speed: 8
})

export const SledgeHammer = new MeleeWeapon({
	name: 'sledgehammer',
	discordIcon: '<:sledge_hammer:931833719596134450>',
	aliases: ['sledge'],
	durability: 10,
	slotsUsed: 5,
	accuracy: 65,
	damage: 24,
	penetration: 1.8,
	speed: 3,
	scavengeLevel: 2
})

export const Katana = new MeleeWeapon({
	name: 'katana',
	discordIcon: '<:replica_katana:931826279278321664>',
	aliases: [],
	durability: 8,
	slotsUsed: 2,
	accuracy: 70,
	damage: 20,
	penetration: 2.3,
	speed: 8
})

export const FireAxe = new MeleeWeapon({
	name: 'fire_axe',
	discordIcon: '<:fire_axe:930978902057287700>',
	aliases: ['axe'],
	description: 'Good for chopping trees and zombies!',
	durability: 8,
	slotsUsed: 3,
	accuracy: 75,
	damage: 20,
	penetration: 2.5,
	speed: 6,
	scavengeLevel: 4
})

export const Chainsaw = new MeleeWeapon({
	name: 'chainsaw',
	discordIcon: '<:chainsaw:931797015329906699>',
	aliases: ['saw', 'chain'],
	durability: 8,
	slotsUsed: 5,
	accuracy: 70,
	damage: 25,
	penetration: 2.3,
	speed: 4,
	scavengeLevel: 4
})


// craftable weapons
export const SpikedWoodenBat = new MeleeWeapon({
	name: 'spiked_wooden_bat',
	discordIcon: undefined,
	aliases: ['spiked_bat', 'nail_bat', 'spiky_bat'],
	durability: 10,
	slotsUsed: 3,
	accuracy: 45,
	damage: 18,
	penetration: 1.0,
	speed: 9,
	craftingRecipes: [
		{
			levelRequired: 2,
			possibleTools: [Hammer],
			supplies: [
				{
					item: WoodenBat,
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
})
