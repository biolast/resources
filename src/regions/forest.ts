import { DEFAULT_RAIDER_MOB_ROLLS, DEFAULT_SCAVENGE_ROLLS, DEFAULT_ZOMBIE_MOB_ROLLS } from '../constants.js'
import { Region } from '../../structures/Region.js'
import * as keys from '../items/keys.js'
import * as armor from '../items/armor.js'
import * as helmets from '../items/helmets.js'
import * as melee from '../items/melee.js'
import * as ranged from '../items/ranged.js'
import * as foods from '../items/foods.js'


export const Forest = new Region({
	name: 'Redding Forest',
	discordIcon: '<:forest:944973999492984842>',
	imageURL: 'https://cdn.discordapp.com/attachments/886559272660533251/999218207950913546/forest.png',
	difficultyLevel: 3,
	distance: 11,
	scavengeLoot: {
		pool: {
			common: {
				items: [melee.Knife, melee.Pitchfork],
				categories: ['Medical']
			},
			uncommon: {
				items: [melee.SledgeHammer, melee.FireAxe],
				categories: []
			},
			rare: {
				items: [foods.CannedMeat],
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
						items: [melee.Chainsaw, armor.LightArmor, helmets.CultistMask],
						categories: ['Ranged Weapon']
					}
				},
				rolls: DEFAULT_SCAVENGE_ROLLS
			},
			requiresKey: keys.CultistKey
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
						items: [ranged.Pistol],
						categories: []
					},
					rare: {
						items: [ranged.SubmachineGun, ranged.DoubleBarrelShotgun],
						categories: []
					}
				},
				helmet: {
					pool: {
						common: {
							items: [helmets.WoodenHelmet],
							categories: []
						},
						uncommon: {
							items: [helmets.CultistMask],
							categories: []
						}
					},
					chance: 50
				},
				armor: {
					pool: {
						common: {
							items: [armor.WoodenArmor],
							categories: []
						},
						uncommon: {
							items: [armor.LightArmor],
							categories: []
						}
					},
					chance: 100
				},
				loot: {
					generated: {
						pool: {
							common: {
								items: [melee.Knife],
								categories: ['Medical']
							},
							uncommon: {
								items: [foods.CannedMeat],
								categories: ['Backpack']
							},
							rare: {
								items: [melee.FireAxe],
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
							items: [helmets.WoodenHelmet],
							categories: []
						},
						rare: {
							items: [helmets.CultistMask],
							categories: []
						}
					},
					chance: 30
				},
				armor: {
					pool: {
						common: {
							items: [armor.WoodenArmor],
							categories: []
						},
						rare: {
							items: [armor.LightArmor],
							categories: []
						}
					},
					chance: 60
				},
				loot: {
					generated: {
						pool: {
							common: {
								items: [melee.Knife],
								categories: ['Medical']
							},
							uncommon: {
								items: [melee.FireAxe],
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
								items: [foods.RawMeat],
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
})
