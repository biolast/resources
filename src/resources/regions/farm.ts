import { DEFAULT_RAIDER_MOB_ROLLS, DEFAULT_SCAVENGE_ROLLS, DEFAULT_ZOMBIE_MOB_ROLLS } from '../constants.js'
import { Region } from '../../structures/Region.js'
import * as keys from '../items/keys.js'
import * as armor from '../items/armor.js'
import * as helmets from '../items/helmets.js'
import * as melee from '../items/melee.js'
import * as ranged from '../items/ranged.js'
import * as foods from '../items/foods.js'
import * as backpacks from '../items/backpacks.js'
import * as medicals from '../items/medicals.js'
import * as supplies from '../items/supplies.js'
import * as ammunition from '../items/ammunition.js'
import { GenericMob } from '../../structures/mobs/GenericMob.js'


export const Farm = new Region({
	name: 'Mulberry Farm',
	discordIcon: '<:farm:944973999471992832>',
	imageURL: 'https://cdn.discordapp.com/attachments/886559272660533251/999218207606964274/farm.png',
	difficultyLevel: 2,
	distance: 5,
	scavengeLoot: {
		pool: {
			common: [melee.MetalBat, melee.Scythe, melee.Pitchfork, melee.Knife, helmets.SaucePan, foods.Corn, medicals.Bandage, medicals.Splint, medicals.AntiBiotics],
			rare: [melee.Hammer, helmets.WoodenHelmet, armor.HeavyJacket, melee.Hatchet, medicals.Medkit]
		},
		rolls: DEFAULT_SCAVENGE_ROLLS
	},
	keyAreas: [
		{
			key: keys.GunSafeCode,
			pool: {
				common: [melee.SledgeHammer, ammunition.PistolBullet],
				uncommon: [armor.WoodenArmor, ranged.Pistol]
			},
			rolls: DEFAULT_SCAVENGE_ROLLS
		}
	],
	mobs: [
		{
			weight: 50,
			mob: new GenericMob({
				type: 'raider',
				names: ['Raider'],
				weaponPool: {
					common: [ranged.Pistol]
				},
				helmet: {
					pool: {
						common: [helmets.WoodenHelmet]
					},
					chance: 25
				},
				armor: {
					pool: {
						common: [armor.HeavyJacket],
						uncommon: [armor.WoodenArmor]
					},
					chance: 100
				},
				loot: {
					pool: {
						common: [melee.MetalBat, melee.Scythe, melee.Pitchfork, melee.Knife, foods.Corn],
						uncommon: [medicals.Bandage, medicals.Splint, medicals.AntiBiotics, backpacks.ClothBackpack, supplies.Nails, supplies.Lighter],
						rare: [melee.SledgeHammer, keys.GunSafeCode, keys.DavesDrugKey]
					},
					rolls: DEFAULT_RAIDER_MOB_ROLLS
				}
			})
		},
		{
			weight: 50,
			mob: new GenericMob({
				type: 'walker',
				names: ['Bloated Walker', 'Walker', 'Crawler'],
				helmet: {
					pool: {
						common: [helmets.SaucePan],
						rare: [helmets.WoodenHelmet]
					},
					chance: 50
				},
				armor: {
					pool: {
						common: [armor.HeavyJacket],
						rare: [armor.WoodenArmor]
					},
					chance: 50
				},
				loot: {
					pool: {
						common: [melee.MetalBat, melee.Scythe, melee.Pitchfork, melee.Knife, foods.Corn, medicals.Bandage, medicals.Splint, medicals.AntiBiotics],
						uncommon: [ammunition.PistolBullet, backpacks.ClothBackpack, supplies.Nails, supplies.Lighter]
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
		}
	]
})
