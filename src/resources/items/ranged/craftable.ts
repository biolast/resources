import { RangedWeapon } from '../../../structures/items/RangedWeapon.js'
import { PistolBullet, RifleBullet, Shotgun20GaugeBuckshot, Shotgun20GaugeSlug, StoneArrow } from '../ammunition/craftable.js'
import { Fabric, PistolReceiver, RifleReceiver, ShotgunReceiver, Steel, Wood } from '../supplies/lootable.js'

/*

Ranged Guidelines:

Durability for all ranged weapons should be higher than melee weapons.

Speed for ranged weapons should be minimum 21 (faster than medicals & melee weapons).
 - Handguns should have higher speed than rifles.

Accuracy for most ranged weapons should be above 50% to allow limb targeting.

Slots used should be high to prevent hoarding.

*/

export const Bow = new RangedWeapon({
	type: 'Ranged Weapon',
	name: 'bow',
	discordIcon: '<:glock17:931424425851621417>',
	aliases: [],
	durability: 8,
	slotsUsed: 2,
	accuracy: 40,
	speed: 21,
	ammo: [StoneArrow],
	crafting: {
		levelRequired: 1,
		recipes: [
			{
				possibleTools: [],
				supplies: [
					{
						item: Fabric,
						amount: 1
					},
					{
						item: Wood,
						amount: 3
					}
				],
				yield: 1
			}
		]
	}
})

export const Pistol = new RangedWeapon({
	type: 'Ranged Weapon',
	name: 'pistol',
	discordIcon: '<:glock17:931424425851621417>',
	aliases: ['glock'],
	durability: 12,
	slotsUsed: 2,
	accuracy: 45,
	speed: 30,
	ammo: [PistolBullet],
	crafting: {
		levelRequired: 2,
		recipes: [
			{
				possibleTools: [],
				supplies: [
					{
						item: Steel,
						amount: 2
					},
					{
						item: PistolReceiver,
						amount: 1
					}
				],
				yield: 1
			}
		]
	}
})

export const DoubleBarrelShotgun = new RangedWeapon({
	type: 'Ranged Weapon',
	name: 'double-barrel_shotgun',
	discordIcon: '<:U_rifle:869647344344387624>',
	aliases: ['double_barrel_shotgun', 'double_barrel', 'double_shotgun', 'double_shotty', 'db_shotgun', 'db_shotty', 'db'],
	durability: 10,
	slotsUsed: 4,
	accuracy: 40,
	speed: 23,
	ammo: [Shotgun20GaugeBuckshot, Shotgun20GaugeSlug],
	crafting: {
		levelRequired: 4,
		recipes: [
			{
				possibleTools: [],
				supplies: [
					{
						item: ShotgunReceiver,
						amount: 1
					},
					{
						item: Steel,
						amount: 2
					},
					{
						item: Wood,
						amount: 2
					}
				],
				yield: 1
			}
		]
	}
})

export const HuntingRifle = new RangedWeapon({
	type: 'Ranged Weapon',
	name: 'hunting_rifle',
	discordIcon: '<:U_rifle:869647344344387624>',
	aliases: ['hunting', 'rifle'],
	durability: 16,
	slotsUsed: 4,
	accuracy: 95,
	speed: 22,
	ammo: [RifleBullet],
	crafting: {
		levelRequired: 5,
		recipes: [
			{
				possibleTools: [],
				supplies: [
					{
						item: RifleReceiver,
						amount: 1
					},
					{
						item: Steel,
						amount: 3
					},
					{
						item: Wood,
						amount: 2
					}
				],
				yield: 1
			}
		]
	}
})
