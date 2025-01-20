import { createItem } from '../../../structures/item.js'


export const Shotgun12GaugeBuckshot = createItem({
	type: 'Ammunition',
	name: '12-gauge_buckshot',
	discordIcon: '<:buckshot:1061096346339254302>',
	aliases: ['12_guage', '12g_buckshot', '12g_shell', '12g_shotgun', '12g', '12g_buck'],
	damage: 50,
	penetration: 3.5,
	slotsUsed: 1,
	spreadsDamageToLimbs: 2
})

export const Shotgun12GaugeSlug = createItem({
	type: 'Ammunition',
	name: '12-gauge_slug',
	discordIcon: '<:slug:1061096376517275658>',
	aliases: ['12g_slug'],
	description: 'A 12-gauge slug shell that fires a single, large projectile.',
	damage: 45,
	penetration: 3.8,
	slotsUsed: 1
})

export const SniperBullet = createItem({
	type: 'Ammunition',
	name: 'sniper_bullet',
	discordIcon: '<:bullet:1061283126212567111>',
	aliases: ['sniper_ammo'],
	damage: 75,
	penetration: 4.0,
	slotsUsed: 1
})
