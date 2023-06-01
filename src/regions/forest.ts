import { Region as OldRegion } from '../../types/Regions.js'
import { items } from '../items/index.js'
import { armor } from '../items/armor.js'
import { food } from '../items/food.js'
import { helmets } from '../items/helmets.js'
import { melee } from '../items/melee.js'
import { DEFAULT_RAIDER_MOB_ROLLS, DEFAULT_SCAVENGE_ROLLS, DEFAULT_ZOMBIE_MOB_ROLLS } from '../constants.js'
import { ranged } from '../items/ranged.js'
import { Region } from '../../structures/Region.js'


export const Forest = new Region({
	name: 'Redding Forest',
	discordIcon: '<:forest:944973999492984842>',
	imageURL: 'https://cdn.discordapp.com/attachments/886559272660533251/999218207950913546/forest.png',
	difficultyLevel: 3,
	distance: 11
})

export const forest2: OldRegion<'Redding Forest'> = {
	name: 'Redding Forest',
	icon: '<:forest:944973999492984842>',
	imageURL: 'https://cdn.discordapp.com/attachments/886559272660533251/999218207950913546/forest.png',
	regionLevel: 3,
	playerLevel: 4,
	distance: 11,
	areas: ['Clearing', 'Treehouse', 'Cave', 'Campsite'],
	scavengeLoot: {
		pool: {
			common: {
				items: [melee.knife, melee.pitchfork],
				categories: ['Medical']
			},
			uncommon: {
				items: [melee.sledgehammer, melee.fire_axe],
				categories: []
			},
			rare: {
				items: [food.canned_meat],
				categories: []
			}
		},
		rolls: DEFAULT_SCAVENGE_ROLLS
	},
	keyAreas: [
		{
			name: 'Abandoned Cabin',
			loot: {
				pool: {
					common: {
						items: [],
						categories: ['Ammunition']
					},
					uncommon: {
						items: [melee.chainsaw, armor.light_armor, helmets.cultist_mask],
						categories: ['Ranged Weapon']
					}
				},
				rolls: DEFAULT_SCAVENGE_ROLLS
			},
			requiresKey: items.sacred_pendant
		}
	],
	mobs: {
		spawnTypes: [
			{
				type: 'raider',
				boss: false,
				spawnWeight: 60,
				name: 'Cultist',
				weaponPool: {
					common: {
						items: [ranged.pistol],
						categories: []
					},
					rare: {
						items: [ranged.submachine_gun, ranged['double-barrel_shotgun']],
						categories: []
					}
				},
				helmet: {
					pool: {
						common: {
							items: [helmets.wooden_helmet],
							categories: []
						},
						uncommon: {
							items: [helmets.cultist_mask],
							categories: []
						}
					},
					chance: 50
				},
				armor: {
					pool: {
						common: {
							items: [armor.wooden_armor],
							categories: []
						},
						uncommon: {
							items: [armor.light_armor],
							categories: []
						}
					},
					chance: 100
				},
				loot: {
					generated: {
						pool: {
							common: {
								items: [melee.knife],
								categories: ['Medical']
							},
							uncommon: {
								items: [food.canned_meat],
								categories: ['Backpack']
							},
							rare: {
								items: [melee.fire_axe],
								categories: ['Key', 'Ranged Weapon']
							}
						},
						rolls: DEFAULT_RAIDER_MOB_ROLLS
					}
				}
			},
			{
				type: 'walker',
				boss: false,
				spawnWeight: 40,
				name: ['Bloated Walker', 'Walker', 'Crawler'],
				helmet: {
					pool: {
						common: {
							items: [helmets.wooden_helmet],
							categories: []
						},
						rare: {
							items: [helmets.cultist_mask],
							categories: []
						}
					},
					chance: 30
				},
				armor: {
					pool: {
						common: {
							items: [armor.wooden_armor],
							categories: []
						},
						rare: {
							items: [armor.light_armor],
							categories: []
						}
					},
					chance: 60
				},
				loot: {
					generated: {
						pool: {
							common: {
								items: [melee.knife],
								categories: ['Medical']
							},
							uncommon: {
								items: [melee.fire_axe],
								categories: ['Ammunition', 'Backpack', 'Collectible']
							},
							rare: {
								items: [],
								categories: ['Ranged Weapon']
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
			},
			{
				type: 'aggressive animal',
				boss: false,
				spawnWeight: 10,
				name: 'Bear',
				loot: {
					generated: {
						pool: {
							common: {
								items: [food.raw_meat],
								categories: []
							}
						},
						rolls: {
							min: 4,
							max: 4
						}
					}
				}
			}
		],
		huntQuotes: [
			'While traversing the woods, you step on a branch and alert a nearby {mob}.',
			'You stumble upon some kind of cursed altar and see a {mob} beside it.',
			'After navigating through the trees for what felt like forever, you spot a {mob}.'
		]
	}
}
