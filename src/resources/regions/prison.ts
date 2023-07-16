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
import * as throwables from '../items/throwables.js'
import { GenericMob } from '../../structures/mobs/GenericMob.js'


export const Prison = new Region({
	name: 'Pike Prison',
	discordIcon: '<:prison:944973999526510642>',
	imageURL: 'https://cdn.discordapp.com/attachments/886559272660533251/999218208575848468/prison.png',
	difficultyLevel: 5,
	distance: 52,
	scavengeLoot: {
		pool: {
			common: [medicals.Medkit, foods.CannedMeat],
			rare: [armor.SwatArmor, helmets.SwatHelmet, melee.Fork],
			rarest: [medicals.TraumaKit]
		},
		rolls: DEFAULT_SCAVENGE_ROLLS
	},
	keyAreas: [
	],
	mobs: [
		{
			weight: 70,
			mob: new GenericMob({
				type: 'raider',
				names: ['Guardian'],
				weaponPool: {
					common: [ranged.HuntingRifle, ranged.PumpShotgun],
					uncommon: [ranged.AssaultRifle],
					rarest: [ranged.AutoShotgun]
				},
				helmet: {
					pool: {
						common: [helmets.SwatHelmet],
						uncommon: [helmets.MilitaryHelmet]
					},
					chance: 100
				},
				armor: {
					pool: {
						common: [armor.SwatArmor],
						uncommon: [armor.MilitaryArmor]
					},
					chance: 100
				},
				loot: {
					pool: {
						common: [melee.Shank, melee.PoliceBaton, medicals.Medkit, medicals.Bandage, foods.CannedMeat, ammunition.RifleBullet, ammunition.Shotgun12GaugeBuckshot, ammunition.Shotgun12GaugeSlug],
						uncommon: [throwables.ExplosiveGrenade, throwables.MolotovCocktail],
						rare: [ranged.HuntingRifle, ranged.PumpShotgun, ranged.AssaultRifle, ranged.AutoShotgun]
					},
					rolls: DEFAULT_RAIDER_MOB_ROLLS
				}
			})
		},
		{
			weight: 30,
			mob: new GenericMob({
				type: 'walker',
				names: ['Bloated Walker', 'Walker', 'Crawler'],
				helmet: {
					pool: {
						common: [helmets.SwatHelmet],
						rare: [helmets.MilitaryHelmet]
					},
					chance: 50
				},
				armor: {
					pool: {
						common: [armor.SwatArmor],
						rare: [armor.MilitaryArmor]
					},
					chance: 100
				},
				loot: {
					pool: {
						common: [medicals.Medkit, foods.CannedMeat, ammunition.RifleBullet, ammunition.Shotgun12GaugeBuckshot, ammunition.Shotgun12GaugeSlug],
						rare: [ranged.HuntingRifle, ranged.PumpShotgun, ranged.AssaultRifle, ranged.AutoShotgun, backpacks.Suitcase]
					},
					rolls: DEFAULT_ZOMBIE_MOB_ROLLS
				}
			})
		}
	]
})
