import { ThrowableWeapon } from '../../structures/items/ThrowableWeapon.js'


export const ExplosiveGrenade = new ThrowableWeapon({
	type: 'Fragmentation Grenade',
	name: 'explosive_grenade',
	discordIcon: '<:m67_grenade:933857769990287380>',
	aliases: ['grenade'],
	slotsUsed: 1,
	accuracy: 20,
	damage: 63,
	penetration: 1.7,
	spreadsDamageToLimbs: 3,
	speed: 6
})

// TODO make molotov have special effect
export const MolotovCocktail = new ThrowableWeapon({
	type: 'Incendiary Grenade',
	name: 'molotov_cocktail',
	discordIcon: '<:molotov_cocktail:933852261782782002>',
	description: 'Improvised incendiary grenade.',
	aliases: ['molotov', 'cocktail', 'molly'],
	slotsUsed: 1,
	accuracy: 35,
	damage: 34,
	penetration: 2.5,
	spreadsDamageToLimbs: 2,
	speed: 4
})
