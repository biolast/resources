import { Region as OldRegion } from '../../types/Regions.js'
import { items } from '../items/index.js'
import { armor } from '../items/armor.js'
import { food } from '../items/food.js'
import { helmets } from '../items/helmets.js'
import { melee } from '../items/melee.js'
import { DEFAULT_RAIDER_MOB_ROLLS, DEFAULT_SCAVENGE_ROLLS, DEFAULT_ZOMBIE_MOB_ROLLS } from '../constants.js'
import { ranged } from '../items/ranged.js'
import { Region } from '../../structures/Region.js'


export const Farm = new Region({
	name: 'Mulberry Farm',
	discordIcon: '<:farm:944973999471992832>',
	imageURL: 'https://cdn.discordapp.com/attachments/886559272660533251/999218207606964274/farm.png',
	difficultyLevel: 2,
	distance: 5
})

export const farm2: OldRegion<'Mulberry Farm'> = {
	name: 'Mulberry Farm',
	icon: '<:farm:944973999471992832>',
	imageURL: 'https://cdn.discordapp.com/attachments/886559272660533251/999218207606964274/farm.png',
	regionLevel: 2,
	playerLevel: 2,
	distance: 5,
	areas: ['Cornfields', 'Barn', 'Cellar'],
	scavengeLoot: {
		pool: {
			common: {
				items: [melee.metal_bat, melee.scythe, melee.pitchfork, melee.knife, helmets.sauce_pan, food.corn],
				categories: ['Medical']
			},
			rare: {
				items: [melee.hammer, helmets.wooden_helmet, armor.heavy_jacket, melee.hatchet],
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
						items: [melee.sledgehammer],
						categories: ['Ammunition']
					},
					uncommon: {
						items: [armor.wooden_armor],
						categories: ['Ranged Weapon']
					}
				},
				rolls: DEFAULT_SCAVENGE_ROLLS
			},
			requiresKey: items.gunsafe_code
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
			requiresKey: items.daves_drug_key
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
						items: [ranged.pistol],
						categories: []
					}
				},
				helmet: {
					pool: {
						common: {
							items: [helmets.wooden_helmet],
							categories: []
						}
					},
					chance: 25
				},
				armor: {
					pool: {
						common: {
							items: [armor.heavy_jacket],
							categories: []
						},
						uncommon: {
							items: [armor.wooden_armor],
							categories: []
						}
					},
					chance: 100
				},
				loot: {
					generated: {
						pool: {
							common: {
								items: [melee.metal_bat, melee.scythe, melee.pitchfork, melee.knife, food.corn],
								categories: []
							},
							uncommon: {
								items: [],
								categories: ['Backpack', 'Supply', 'Medical']
							},
							rare: {
								items: [melee.sledgehammer],
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
							items: [helmets.sauce_pan],
							categories: []
						},
						rare: {
							items: [helmets.wooden_helmet],
							categories: []
						}
					},
					chance: 50
				},
				armor: {
					pool: {
						common: {
							items: [armor.heavy_jacket],
							categories: []
						},
						rare: {
							items: [armor.wooden_armor],
							categories: []
						}
					},
					chance: 50
				},
				loot: {
					generated: {
						pool: {
							common: {
								items: [melee.metal_bat, melee.scythe, melee.pitchfork, melee.knife, food.corn],
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
								items: [food.raw_meat],
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
}
