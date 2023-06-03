import { DEFAULT_SCAVENGE_ROLLS, DEFAULT_ZOMBIE_MOB_ROLLS } from '../constants.js'
import { Region } from '../../structures/Region.js'
import * as keys from '../items/keys.js'
import * as armor from '../items/armor.js'
import * as helmets from '../items/helmets.js'


export const Suburbs = new Region({
	name: 'Eastside Suburbs',
	discordIcon: '<:suburbs:939647476674220112>',
	imageURL: 'https://cdn.discordapp.com/attachments/886559272660533251/999218209037238333/suburbs.png',
	difficultyLevel: 1,
	distance: 0,
	scavengeLoot: {
		pool: {
			common: {
				items: [],
				categories: ['Food', 'Melee Weapon']
			},
			uncommon: {
				items: [],
				categories: ['Medical']
			},
			rare: {
				items: [],
				categories: ['Supply']
			}
		},
		rolls: DEFAULT_SCAVENGE_ROLLS
	},
	keyAreas: [
		{
			name: 'Backyard Shed',
			loot: {
				pool: {
					common: {
						items: [],
						categories: ['Body Armor', 'Helmet']
					}
				},
				rolls: {
					min: 3,
					max: 3
				}
			},
			requiresKey: keys.ShedKey
		}
	],
	mobs: {
		spawnTypes: [
			{
				type: 'walker',
				boss: false,
				spawnWeight: 100,
				name: ['Walker', 'Crawler'],
				helmet: {
					pool: {
						common: {
							items: [helmets.HardHat, helmets.CyclingHelmet],
							categories: []
						}
					},
					chance: 40
				},
				armor: {
					pool: {
						common: {
							items: [armor.HeavyJacket],
							categories: []
						}
					},
					chance: 25
				},
				loot: {
					generated: {
						pool: {
							common: {
								items: [],
								categories: ['Medical', 'Melee Weapon']
							},
							uncommon: {
								items: [],
								categories: ['Backpack', 'Supply']
							},
							rare: {
								items: [],
								categories: ['Key', 'Collectible']
							}
						},
						rolls: DEFAULT_ZOMBIE_MOB_ROLLS
					}
				}
			}
		],
		huntQuotes: [
			'While exploring an abandoned house you stumble upon a {mob}.',
			'You see a {mob} wandering the quiet streets.'
		]
	}
})
