import { Ammunition } from '../../structures/items/Ammunition.js'
import * as ranged from './ranged.js'


export const PistolBullet = new Ammunition({
	type: 'Ammunition',
	name: 'pistol_bullet',
	discordIcon: '<:pistol_bullet:1063582864588939264>',
	aliases: ['9x19', '9mm', 'bullet', 'pistol_ammo'],
	damage: 30,
	penetration: 1.7,
	ammoFor: [ranged.Pistol, ranged.SubmachineGun],
	slotsUsed: 1
})

export const Shotgun20GaugeBuckshot = new Ammunition({
	type: 'Ammunition',
	name: '20-gauge_buckshot',
	discordIcon: '<:buckshot:1061096346339254302>',
	aliases: ['buckshot', '20_guage', '20g_buckshot', '20g_shell', '20g_shotgun', '20g', 'buck', '20g_buck'],
	description: 'Fires many small pellets at a target.',
	damage: 46,
	penetration: 2.6,
	ammoFor: [ranged.DoubleBarrelShotgun],
	slotsUsed: 1,
	spreadsDamageToLimbs: 2
})

export const Shotgun20GaugeSlug = new Ammunition({
	type: 'Ammunition',
	name: '20-gauge_slug',
	discordIcon: '<:slug:1061096376517275658>',
	aliases: ['slug', '20g_slug', 'slug_shell', 'shotgun_slug'],
	description: 'Fires a single, large projectile.',
	damage: 37,
	penetration: 3.0,
	ammoFor: [ranged.DoubleBarrelShotgun],
	slotsUsed: 1
})

export const RifleBullet = new Ammunition({
	type: 'Ammunition',
	name: 'rifle_bullet',
	discordIcon: '<:bullet:1061283126212567111>',
	aliases: ['rifle_ammo'],
	damage: 45,
	penetration: 3.8,
	ammoFor: [ranged.AssaultRifle, ranged.HuntingRifle],
	slotsUsed: 1
})

export const Shotgun12GaugeBuckshot = new Ammunition({
	type: 'Ammunition',
	name: '12-gauge_buckshot',
	discordIcon: '<:buckshot:1061096346339254302>',
	aliases: ['12_guage', '12g_buckshot', '12g_shell', '12g_shotgun', '12g', '12g_buck'],
	damage: 50,
	penetration: 3.5,
	ammoFor: [ranged.PumpShotgun, ranged.AutoShotgun],
	slotsUsed: 1,
	spreadsDamageToLimbs: 2
})

export const Shotgun12GaugeSlug = new Ammunition({
	type: 'Ammunition',
	name: '12-gauge_slug',
	discordIcon: '<:slug:1061096376517275658>',
	aliases: ['12g_slug'],
	description: 'A 12-gauge slug shell that fires a single, large projectile.',
	damage: 48,
	penetration: 3.8,
	ammoFor: [ranged.PumpShotgun, ranged.AutoShotgun],
	slotsUsed: 1
})

export const SniperBullet = new Ammunition({
	type: 'Ammunition',
	name: 'sniper_bullet',
	discordIcon: '<:bullet:1061283126212567111>',
	aliases: ['sniper_ammo'],
	damage: 75,
	penetration: 4.0,
	ammoFor: [ranged.HeavySniper],
	slotsUsed: 1
})
