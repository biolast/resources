import { Ammunition } from '../../types/Items.js'
import { ranged } from './ranged.js'


const ammoObject = <T>(et: { [K in keyof T]: Ammunition & { name: K } }) => et

export const ammunition = ammoObject({
	'pistol_bullet': {
		type: 'Ammunition',
		name: 'pistol_bullet',
		icon: '<:pistol_bullet:1063582864588939264>',
		aliases: ['9x19', '9mm', 'bullet', 'pistol_ammo'],
		damage: 30,
		penetration: 1.7,
		ammoFor: [ranged.pistol, ranged.submachine_gun],
		slotsUsed: 1,
		regions: ['Mulberry Farm', 'Redding Forest']
	},
	'20-gauge_buckshot': {
		type: 'Ammunition',
		name: '20-gauge_buckshot',
		icon: '<:buckshot:1061096346339254302>',
		aliases: ['buckshot', '20_guage', '20g_buckshot', '20g_shell', '20g_shotgun', '20g', 'buck', '20g_buck'],
		description: '20-gauge buckshot is a shell that is smaller in caliber than a 12-gauge and fires many small pellets at a target.',
		damage: 46,
		penetration: 2.6,
		ammoFor: [ranged['double-barrel_shotgun']],
		slotsUsed: 1,
		spreadsDamageToLimbs: 2,
		artist: '719365897458024558',
		regions: ['Redding Forest', 'Norwood Mall']
	},
	'20-gauge_slug': {
		type: 'Ammunition',
		name: '20-gauge_slug',
		icon: '<:slug:1061096376517275658>',
		aliases: ['slug', '20g_slug', 'slug_shell', 'shotgun_slug'],
		description: 'A 20-gauge slug shell that fires a single, large projectile.',
		damage: 37,
		penetration: 3.0,
		ammoFor: [ranged['double-barrel_shotgun']],
		slotsUsed: 1,
		artist: '719365897458024558',
		regions: ['Norwood Mall']
	},
	'rifle_bullet': {
		type: 'Ammunition',
		name: 'rifle_bullet',
		icon: '<:bullet:1061283126212567111>',
		aliases: ['rifle_ammo'],
		damage: 45,
		penetration: 3.8,
		ammoFor: [ranged.assault_rifle, ranged.hunting_rifle],
		slotsUsed: 1,
		artist: '719365897458024558',
		regions: ['Norwood Mall', 'Pike Prison']
	},
	'12-gauge_buckshot': {
		type: 'Ammunition',
		name: '12-gauge_buckshot',
		icon: '<:buckshot:1061096346339254302>',
		aliases: ['12_guage', '12g_buckshot', '12g_shell', '12g_shotgun', '12g', '12g_buck'],
		damage: 50,
		penetration: 3.5,
		ammoFor: [ranged.pump_shotgun, ranged.auto_shotgun],
		slotsUsed: 1,
		spreadsDamageToLimbs: 2,
		artist: '719365897458024558',
		regions: ['Norwood Mall', 'Pike Prison']
	},
	'12-gauge_slug': {
		type: 'Ammunition',
		name: '12-gauge_slug',
		icon: '<:slug:1061096376517275658>',
		aliases: ['12g_slug'],
		description: 'A 12-gauge slug shell that fires a single, large projectile.',
		damage: 48,
		penetration: 3.8,
		ammoFor: [ranged.pump_shotgun, ranged.auto_shotgun],
		slotsUsed: 1,
		artist: '719365897458024558',
		regions: ['Pike Prison']
	},
	'sniper_bullet': {
		type: 'Ammunition',
		name: 'sniper_bullet',
		icon: '<:bullet:1061283126212567111>',
		aliases: ['sniper_ammo'],
		damage: 75,
		penetration: 4.0,
		ammoFor: [ranged.heavy_sniper],
		slotsUsed: 1,
		artist: '719365897458024558',
		regions: []
	}
})
