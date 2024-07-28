import { ThrowableWeapon } from '../../../structures/items/ThrowableWeapon.js'


export const ExplosiveGrenade = new ThrowableWeapon({
	type: 'Throwable Weapon',
	subtype: 'Fragmentation Grenade',
	name: 'explosive_grenade',
	discordIcon: '<:m67_grenade:933857769990287380>',
	aliases: ['grenade'],
	durability: 1,
	slotsUsed: 1,
	accuracy: 20,
	damage: 63,
	penetration: 1.7,
	spreadsDamageToLimbs: 3,
	speed: 7
})
