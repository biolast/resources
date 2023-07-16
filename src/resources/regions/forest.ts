import { DEFAULT_RAIDER_MOB_ROLLS, DEFAULT_SCAVENGE_ROLLS, DEFAULT_ZOMBIE_MOB_ROLLS } from '../constants.js'
import { Region } from '../../structures/Region.js'
import * as armor from '../items/armor.js'
import * as helmets from '../items/helmets.js'
import * as melee from '../items/melee.js'
import * as ranged from '../items/ranged.js'
import * as foods from '../items/foods.js'
import * as backpacks from '../items/backpacks.js'
import * as medicals from '../items/medicals.js'
import * as ammunition from '../items/ammunition.js'
import { GenericMob } from '../../structures/mobs/GenericMob.js'


export const Forest = new Region({
	name: 'Redding Forest',
	discordIcon: '<:forest:944973999492984842>',
	imageURL: 'https://cdn.discordapp.com/attachments/886559272660533251/999218207950913546/forest.png',
	difficultyLevel: 3,
	distance: 11,
	scavengeLoot: {
		pool: {
			common: [melee.Knife, melee.Pitchfork, medicals.Bandage],
			uncommon: [melee.SledgeHammer, melee.FireAxe, medicals.Medkit],
			rare: [foods.CannedMeat]
		},
		rolls: DEFAULT_SCAVENGE_ROLLS
	},
	keyAreas: [
	],
	mobs: [
		{
			weight: 60,
			mob: new GenericMob({
				type: 'raider',
				names: ['Cultist'],
				weaponPool: {
					common: [ranged.Pistol],
					rare: [ranged.SubmachineGun, ranged.DoubleBarrelShotgun]
				},
				helmet: {
					pool: {
						common: [helmets.WoodenHelmet],
						uncommon: [helmets.CultistMask]
					},
					chance: 50
				},
				armor: {
					pool: {
						common: [armor.WoodenArmor],
						uncommon: [armor.LightArmor]
					},
					chance: 100
				},
				loot: {
					pool: {
						common: [melee.Knife, medicals.Bandage],
						uncommon: [foods.CannedMeat, backpacks.ClothBackpack],
						rare: [melee.FireAxe, ranged.Pistol, ranged.SubmachineGun, ranged.DoubleBarrelShotgun]
					},
					rolls: DEFAULT_RAIDER_MOB_ROLLS
				}
			})
		},
		{
			weight: 40,
			mob: new GenericMob({
				type: 'walker',
				names: ['Bloated Walker', 'Walker', 'Crawler'],
				helmet: {
					pool: {
						common: [helmets.WoodenHelmet],
						rare: [helmets.CultistMask]
					},
					chance: 30
				},
				armor: {
					pool: {
						common: [armor.WoodenArmor],
						rare: [armor.LightArmor]
					},
					chance: 60
				},
				loot: {
					pool: {
						common: [melee.Knife, medicals.Bandage],
						uncommon: [melee.FireAxe, medicals.Medkit, ammunition.PistolBullet, ammunition.Shotgun20GaugeBuckshot, backpacks.ClothBackpack],
						rare: [ranged.Pistol, ranged.SubmachineGun, ranged.DoubleBarrelShotgun]
					},
					rolls: DEFAULT_ZOMBIE_MOB_ROLLS
				}
			})
		},
		{
			weight: 15,
			mob: new GenericMob({
				type: 'passive animal',
				names: ['Deer'],
				loot: {
					pool: {
						common: [foods.RawMeat]
					},
					rolls: {
						min: 3,
						max: 3
					}
				}
			})
		},
		{
			weight: 10,
			mob: new GenericMob({
				type: 'aggressive animal',
				names: ['Bear'],
				loot: {
					pool: {
						common: [foods.RawMeat]
					},
					rolls: {
						min: 5,
						max: 5
					}
				}
			})
		}
	]
})
