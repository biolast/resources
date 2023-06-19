import { DEFAULT_SCAVENGE_ROLLS, DEFAULT_ZOMBIE_MOB_ROLLS } from '../constants.js'
import { Region } from '../../structures/Region.js'
import * as keys from '../items/keys.js'
import * as armor from '../items/armor.js'
import * as helmets from '../items/helmets.js'
import * as melee from '../items/melee.js'
import * as backpacks from '../items/backpacks.js'
import * as medicals from '../items/medicals.js'
import * as foods from '../items/foods.js'
import * as supplies from '../items/supplies.js'
import { GenericMob } from '../../structures/mobs/GenericMob.js'


export const Suburbs = new Region({
	name: 'Eastside Suburbs',
	discordIcon: '<:suburbs:939647476674220112>',
	imageURL: 'https://cdn.discordapp.com/attachments/886559272660533251/999218209037238333/suburbs.png',
	difficultyLevel: 1,
	distance: 0,
	scavengeLoot: {
		pool: {
			common: [foods.Apple, melee.Fork, melee.WoodenBat],
			uncommon: [melee.MetalBat, melee.Hammer, medicals.Bandage],
			rare: [medicals.Splint, medicals.AntiBiotics, supplies.Nails, supplies.Lighter]
		},
		rolls: DEFAULT_SCAVENGE_ROLLS
	},
	keyAreas: [
		{
			key: keys.ShedKey,
			pool: {
				common: [helmets.HardHat, helmets.CyclingHelmet, armor.HeavyJacket]
			},
			rolls: {
				min: 3,
				max: 3
			}
		}
	],
	mobs: [
		{
			weight: 100,
			mob: new GenericMob({
				type: 'walker',
				names: ['Walker', 'Crawler'],
				helmet: {
					pool: {
						common: [helmets.HardHat, helmets.CyclingHelmet]
					},
					chance: 40
				},
				armor: {
					pool: {
						common: [armor.HeavyJacket]
					},
					chance: 25
				},
				loot: {
					pool: {
						common: [melee.Fork, melee.WoodenBat, medicals.Bandage],
						uncommon: [melee.MetalBat, melee.Hammer, medicals.Splint, medicals.AntiBiotics, supplies.Nails, supplies.Lighter],
						rare: [keys.ShedKey, backpacks.SmallPouch]
					},
					rolls: DEFAULT_ZOMBIE_MOB_ROLLS
				}
			})
		}
	]
})
