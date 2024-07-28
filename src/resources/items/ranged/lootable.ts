import { RangedWeapon } from '../../../structures/items/RangedWeapon.js'
import { PistolBullet, RifleBullet } from '../ammunition/craftable.js'
import { Shotgun12GaugeBuckshot, Shotgun12GaugeSlug, SniperBullet } from '../ammunition/lootable.js'

/*

Ranged Guidelines:

Durability for all ranged weapons should be higher than melee weapons.

Speed for ranged weapons should be minimum 21 (faster than medicals & melee weapons).
 - Handguns should have higher speed than rifles.

Accuracy for most ranged weapons should be above 50% to allow limb targeting.

Slots used should be high to prevent hoarding.

*/

export const SubmachineGun = new RangedWeapon({
	type: 'Ranged Weapon',
	name: 'submachine_gun',
	discordIcon: '<:submachine_gun:1063592662613114923>',
	aliases: ['submachine', 'smg'],
	durability: 20,
	slotsUsed: 4,
	accuracy: 85,
	speed: 25,
	ammo: [PistolBullet]
})

export const PumpShotgun = new RangedWeapon({
	type: 'Ranged Weapon',
	name: 'pump_shotgun',
	discordIcon: '<:U_rifle:869647344344387624>',
	aliases: ['pump_shotty', 'shotty', 'pumpy', 'shotgun'],
	durability: 14,
	slotsUsed: 4,
	accuracy: 70,
	speed: 24,
	ammo: [Shotgun12GaugeBuckshot, Shotgun12GaugeSlug]
})

export const AssaultRifle = new RangedWeapon({
	type: 'Ranged Weapon',
	name: 'assault_rifle',
	discordIcon: '<:ak47:933852988416618496>',
	aliases: ['ak', 'ak47'],
	durability: 24,
	slotsUsed: 4,
	accuracy: 62,
	speed: 25,
	ammo: [RifleBullet]
})

export const AutoShotgun = new RangedWeapon({
	type: 'Ranged Weapon',
	name: 'auto_shotgun',
	discordIcon: '<:U_rifle:869647344344387624>',
	aliases: ['auto_shotty'],
	durability: 20,
	slotsUsed: 5,
	accuracy: 80,
	speed: 24,
	ammo: [Shotgun12GaugeBuckshot, Shotgun12GaugeSlug]
})

export const HeavySniper = new RangedWeapon({
	type: 'Ranged Weapon',
	name: 'heavy_sniper',
	discordIcon: '<:awm:944974499579846718>',
	aliases: ['awp', 'sniper'],
	durability: 30,
	slotsUsed: 5,
	accuracy: 90,
	speed: 21,
	ammo: [SniperBullet]
})
