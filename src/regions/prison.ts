import { Region as OldRegion } from '../../types/Regions.js'
import { items } from '../items/index.js'
import { melee } from '../items/melee.js'
import { armor } from '../items/armor.js'
import { helmets } from '../items/helmets.js'
import { medical } from '../items/medical.js'
import { DEFAULT_RAIDER_MOB_ROLLS, DEFAULT_SCAVENGE_ROLLS, DEFAULT_ZOMBIE_MOB_ROLLS } from '../constants.js'
import { ranged } from '../items/ranged.js'
import { Region } from '../../structures/Region.js'


export const Prison = new Region({
	name: 'Pike Prison',
	discordIcon: '<:prison:944973999526510642>',
	imageURL: 'https://cdn.discordapp.com/attachments/886559272660533251/999218208575848468/prison.png',
	difficultyLevel: 5,
	distance: 52
})

export const prison2: OldRegion<'Pike Prison'> = {
	name: 'Pike Prison',
	icon: '<:prison:944973999526510642>',
	imageURL: 'https://cdn.discordapp.com/attachments/886559272660533251/999218208575848468/prison.png',
	regionLevel: 5,
	playerLevel: 7,
	distance: 52,
	areas: ['Visiting Room', 'Cafeteria', 'Infirmary', 'Courtyard'],
	scavengeLoot: {
		pool: {
			common: {
				items: [medical.splint, medical['anti-biotics'], medical.medkit],
				categories: ['Food']
			},
			rare: {
				items: [armor.swat_armor, helmets.swat_helmet, melee.fork],
				categories: []
			},
			rarest: {
				items: [medical.trauma_kit],
				categories: []
			}
		},
		rolls: DEFAULT_SCAVENGE_ROLLS
	},
	keyAreas: [
		{
			name: 'Prison Cells',
			loot: {
				pool: {
					common: {
						items: [],
						categories: ['Ammunition', 'Food']
					},
					uncommon: {
						items: [medical.trauma_kit],
						categories: []
					},
					rarest: {
						items: [],
						categories: ['Ranged Weapon']
					}
				},
				rolls: DEFAULT_SCAVENGE_ROLLS
			},
			requiresKey: items.cell_key
		},
		{
			name: 'Armory',
			loot: {
				pool: {
					common: {
						items: [],
						categories: ['Ranged Weapon', 'Ammunition']
					},
					uncommon: {
						items: [armor.military_armor, helmets.military_helmet],
						categories: []
					}
				},
				rolls: DEFAULT_SCAVENGE_ROLLS
			},
			requiresKey: items.armory_key
		}
	],
	mobs: {
		spawnTypes: [
			{
				type: 'raider',
				boss: false,
				spawnWeight: 70,
				name: 'Guardian',
				weaponPool: {
					common: {
						items: [ranged.hunting_rifle, ranged.pump_shotgun],
						categories: []
					},
					uncommon: {
						items: [ranged.assault_rifle],
						categories: []
					},
					rarest: {
						items: [ranged.auto_shotgun],
						categories: []
					}
				},
				helmet: {
					pool: {
						common: {
							items: [helmets.swat_helmet],
							categories: []
						},
						uncommon: {
							items: [helmets.military_helmet],
							categories: []
						}
					},
					chance: 100
				},
				armor: {
					pool: {
						common: {
							items: [armor.swat_armor],
							categories: []
						},
						uncommon: {
							items: [armor.military_armor],
							categories: []
						}
					},
					chance: 100
				},
				loot: {
					generated: {
						pool: {
							common: {
								items: [melee.shank, melee.police_baton, medical.splint, medical['anti-biotics'], medical.medkit, medical.bandage],
								categories: ['Food', 'Ammunition']
							},
							uncommon: {
								items: [],
								categories: ['Stimulant', 'Throwable Weapon']
							},
							rare: {
								items: [],
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
				spawnWeight: 30,
				name: ['Bloated Walker', 'Walker', 'Crawler'],
				helmet: {
					pool: {
						common: {
							items: [helmets.swat_helmet],
							categories: []
						},
						rare: {
							items: [helmets.military_helmet],
							categories: []
						}
					},
					chance: 50
				},
				armor: {
					pool: {
						common: {
							items: [armor.swat_armor],
							categories: []
						},
						rare: {
							items: [armor.military_armor],
							categories: []
						}
					},
					chance: 100
				},
				loot: {
					generated: {
						pool: {
							common: {
								items: [medical.splint, medical['anti-biotics'], medical.medkit],
								categories: ['Food', 'Ammunition']
							},
							uncommon: {
								items: [],
								categories: ['Stimulant']
							},
							rare: {
								items: [],
								categories: ['Ranged Weapon', 'Backpack']
							}
						},
						rolls: DEFAULT_ZOMBIE_MOB_ROLLS
					}
				}
			}
		],
		huntQuotes: [
			'While exploring the cells, a walker starts reaching toward you and banging on the bars. A nearby {mob} was alerted.',
			'You catch a glimpse of a {mob} eating in the cafeteria.',
			'You see a group of {mob}\'s hanging out in the visiting room. You wait for one of them to be alone before striking.'
		]
	}
}
