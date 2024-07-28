import { Ammunition } from '../../../structures/items/Ammunition.js'
import { Shank } from '../melee/craftable.js'
import { Knife } from '../melee/lootable.js'
import { Gunpowder, PistolBulletCasing, RifleBulletCasing, ShotgunShellCasing, Steel, Stone, Wood } from '../supplies/lootable.js'


export const StoneArrow = new Ammunition({
	type: 'Ammunition',
	name: 'stone_arrow',
	discordIcon: '<:pistol_bullet:1063582864588939264>',
	aliases: ['arrow'],
	damage: 15,
	penetration: 1.1,
	slotsUsed: 1,
	crafting: {
		levelRequired: 1,
		recipes: [
			{
				possibleTools: [Shank, Knife],
				supplies: [
					{
						item: Wood,
						amount: 2
					},
					{
						item: Stone,
						amount: 1
					}
				],
				yield: 1
			}
		]
	}
})


export const PistolBullet = new Ammunition({
	type: 'Ammunition',
	name: 'pistol_bullet',
	discordIcon: '<:pistol_bullet:1063582864588939264>',
	aliases: ['9x19', '9mm', 'bullet', 'pistol_ammo'],
	damage: 30,
	penetration: 1.7,
	slotsUsed: 1,
	crafting: {
		levelRequired: 2,
		recipes: [
			{
				possibleTools: [],
				supplies: [
					{
						item: PistolBulletCasing,
						amount: 1
					},
					{
						item: Gunpowder,
						amount: 2
					}
				],
				yield: 1
			}
		]
	}
})

export const Shotgun20GaugeBuckshot = new Ammunition({
	type: 'Ammunition',
	name: '20-gauge_buckshot',
	discordIcon: '<:buckshot:1061096346339254302>',
	aliases: ['buckshot', '20_guage', '20g_buckshot', '20g_shell', '20g_shotgun', '20g', 'buck', '20g_buck'],
	description: 'Fires many small pellets.',
	damage: 38,
	penetration: 2.6,
	slotsUsed: 1,
	spreadsDamageToLimbs: 2,
	crafting: {
		levelRequired: 2,
		recipes: [
			{
				possibleTools: [],
				supplies: [
					{
						item: ShotgunShellCasing,
						amount: 1
					},
					{
						item: Gunpowder,
						amount: 2
					}
				],
				yield: 1
			}
		]
	}
})

export const Shotgun20GaugeSlug = new Ammunition({
	type: 'Ammunition',
	name: '20-gauge_slug',
	discordIcon: '<:slug:1061096376517275658>',
	aliases: ['slug', '20g_slug', 'slug_shell', 'shotgun_slug'],
	description: 'Fires a single, large projectile.',
	damage: 34,
	penetration: 3.0,
	slotsUsed: 1,
	crafting: {
		levelRequired: 3,
		recipes: [
			{
				possibleTools: [],
				supplies: [
					{
						item: ShotgunShellCasing,
						amount: 1
					},
					{
						item: Gunpowder,
						amount: 2
					},
					{
						item: Steel,
						amount: 1
					}
				],
				yield: 1
			}
		]
	}
})

export const RifleBullet = new Ammunition({
	type: 'Ammunition',
	name: 'rifle_bullet',
	discordIcon: '<:bullet:1061283126212567111>',
	aliases: ['rifle_ammo'],
	damage: 42,
	penetration: 3.8,
	slotsUsed: 1,
	crafting: {
		levelRequired: 4,
		recipes: [
			{
				possibleTools: [],
				supplies: [
					{
						item: RifleBulletCasing,
						amount: 1
					},
					{
						item: Gunpowder,
						amount: 4
					}
				],
				yield: 1
			}
		]
	}
})
