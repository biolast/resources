import { DEFAULT_RAIDER_MOB_ROLLS, DEFAULT_SCAVENGE_ROLLS, DEFAULT_ZOMBIE_MOB_ROLLS } from '../constants.js'
import { Region } from '../../structures/Region.js'
import * as keys from '../items/keys.js'
import * as armor from '../items/armor.js'
import * as helmets from '../items/helmets.js'
import * as melee from '../items/melee.js'
import * as ranged from '../items/ranged.js'
import * as foods from '../items/foods.js'


export const Farm = new Region({
	name: 'Mulberry Farm',
	discordIcon: '<:farm:944973999471992832>',
	imageURL: 'https://cdn.discordapp.com/attachments/886559272660533251/999218207606964274/farm.png',
	difficultyLevel: 2,
	distance: 5,
	scavengeLoot: {
		pool: {
			common: {
				items: [melee.MetalBat, melee.Scythe, melee.Pitchfork, melee.Knife, helmets.SaucePan, foods.Corn],
				categories: ['Medical']
			},
			rare: {
				items: [melee.Hammer, helmets.WoodenHelmet, armor.HeavyJacket, melee.Hatchet],
				categories: ['Backpack']
			}
		},
		rolls: DEFAULT_SCAVENGE_ROLLS
	},
	keyAreas: [
		{
			name: 'Bedroom',
			loot: {
				pool: {
					common: {
						items: [melee.SledgeHammer],
						categories: ['Ammunition']
					},
					uncommon: {
						items: [armor.WoodenArmor],
						categories: ['Ranged Weapon']
					}
				},
				rolls: DEFAULT_SCAVENGE_ROLLS
			},
			requiresKey: keys.GunSafeCode
		},
		{
			name: 'Daves Drug Room',
			loot: {
				pool: {
					common: {
						items: [],
						categories: ['Stimulant']
					}
				},
				rolls: {
					min: 2,
					max: 2
				}
			},
			requiresKey: keys.DavesDrugKey
		}
	],
	mobs: {
		spawnTypes: [
			{
				type: 'raider',
				boss: false,
				spawnWeight: 50,
				name: 'Raider',
				weaponPool: {
					common: {
						items: [ranged.Pistol],
						categories: []
					}
				},
				helmet: {
					pool: {
						common: {
							items: [helmets.WoodenHelmet],
							categories: []
						}
					},
					chance: 25
				},
				armor: {
					pool: {
						common: {
							items: [armor.HeavyJacket],
							categories: []
						},
						uncommon: {
							items: [armor.WoodenArmor],
							categories: []
						}
					},
					chance: 100
				},
				loot: {
					generated: {
						pool: {
							common: {
								items: [melee.MetalBat, melee.Scythe, melee.Pitchfork, melee.Knife, foods.Corn],
								categories: []
							},
							uncommon: {
								items: [],
								categories: ['Backpack', 'Supply', 'Medical']
							},
							rare: {
								items: [melee.SledgeHammer],
								categories: ['Key']
							}
						},
						rolls: DEFAULT_RAIDER_MOB_ROLLS
					}
				}
			},
			{
				type: 'walker',
				boss: false,
				spawnWeight: 50,
				name: ['Bloated Walker', 'Walker', 'Crawler'],
				helmet: {
					pool: {
						common: {
							items: [helmets.SaucePan],
							categories: []
						},
						rare: {
							items: [helmets.WoodenHelmet],
							categories: []
						}
					},
					chance: 50
				},
				armor: {
					pool: {
						common: {
							items: [armor.HeavyJacket],
							categories: []
						},
						rare: {
							items: [armor.WoodenArmor],
							categories: []
						}
					},
					chance: 50
				},
				loot: {
					generated: {
						pool: {
							common: {
								items: [melee.MetalBat, melee.Scythe, melee.Pitchfork, melee.Knife, foods.Corn],
								categories: ['Medical']
							},
							uncommon: {
								items: [],
								categories: ['Ammunition', 'Backpack', 'Collectible', 'Supply']
							}
						},
						rolls: DEFAULT_ZOMBIE_MOB_ROLLS
					}
				}
			},
			{
				type: 'passive animal',
				boss: false,
				spawnWeight: 15,
				name: 'Deer',
				loot: {
					generated: {
						pool: {
							common: {
								items: [foods.RawMeat],
								categories: []
							}
						},
						rolls: {
							min: 2,
							max: 3
						}
					}
				}
			}
		],
		huntQuotes: [
			'You spot a {mob} inside an old barn.',
			'You hear a {mob} rustling in the cornfield.'
		]
	}
})
