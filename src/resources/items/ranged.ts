import { RangedWeapon } from '../../structures/items/RangedWeapon.js'
import * as ammunition from './ammunition.js'


export const Pistol = new RangedWeapon({
	name: 'pistol',
	discordIcon: '<:glock17:931424425851621417>',
	aliases: ['glock'],
	durability: 15,
	slotsUsed: 2,
	accuracy: 45,
	speed: 20,
	ammo: [ammunition.PistolBullet],
	scavengeLevel: 2
})

export const SubmachineGun = new RangedWeapon({
	name: 'submachine_gun',
	discordIcon: '<:submachine_gun:1063592662613114923>',
	aliases: ['submachine', 'smg'],
	durability: 20,
	slotsUsed: 4,
	accuracy: 85,
	speed: 28,
	ammo: [ammunition.PistolBullet],
	scavengeLevel: 4
})

export const DoubleBarrelShotgun = new RangedWeapon({
	name: 'double-barrel_shotgun',
	discordIcon: undefined,
	aliases: ['double_barrel_shotgun', 'double_barrel', 'double_shotgun', 'double_shotty', 'db_shotgun', 'db_shotty', 'db'],
	durability: 15,
	slotsUsed: 4,
	accuracy: 68,
	speed: 14,
	ammo: [ammunition.Shotgun20GaugeBuckshot, ammunition.Shotgun20GaugeSlug]
})

export const HuntingRifle = new RangedWeapon({
	name: 'hunting_rifle',
	discordIcon: undefined,
	aliases: ['hunting'],
	durability: 24,
	slotsUsed: 4,
	accuracy: 95,
	speed: 3,
	ammo: [ammunition.RifleBullet]
})

export const PumpShotgun = new RangedWeapon({
	name: 'pump_shotgun',
	discordIcon: undefined,
	aliases: ['pump_shotty', 'shotty', 'pumpy'],
	durability: 20,
	slotsUsed: 5,
	accuracy: 30,
	speed: 10,
	ammo: [ammunition.Shotgun12GaugeBuckshot, ammunition.Shotgun12GaugeSlug]
})

export const AssaultRifle = new RangedWeapon({
	name: 'assault_rifle',
	discordIcon: '<:ak47:933852988416618496>',
	aliases: ['ak', 'ak47', 'rifle'],
	durability: 26,
	slotsUsed: 5,
	accuracy: 63,
	speed: 29,
	ammo: [ammunition.RifleBullet]
})

export const AutoShotgun = new RangedWeapon({
	name: 'auto_shotgun',
	discordIcon: undefined,
	aliases: ['auto_shotty'],
	durability: 20,
	slotsUsed: 5,
	accuracy: 91,
	speed: 13,
	ammo: [ammunition.Shotgun12GaugeBuckshot, ammunition.Shotgun12GaugeSlug]
})

export const HeavySniper = new RangedWeapon({
	name: 'heavy_sniper',
	discordIcon: '<:awm:944974499579846718>',
	aliases: ['awp', 'sniper'],
	durability: 30,
	slotsUsed: 7,
	accuracy: 98,
	speed: 2,
	ammo: [ammunition.SniperBullet]
})
