import { DEFAULT_RAIDER_MOB_ROLLS, DEFAULT_SCAVENGE_ROLLS, DEFAULT_ZOMBIE_MOB_ROLLS } from '../constants.js'
import { Region } from '../../structures/Region.js'
import * as keys from '../items/keys.js'
import * as armor from '../items/armor.js'
import * as helmets from '../items/helmets.js'
import * as melee from '../items/melee.js'
import * as ranged from '../items/ranged.js'
import * as medicals from '../items/medicals.js'


export const Prison = new Region({
	name: 'Pike Prison',
	discordIcon: '<:prison:944973999526510642>',
	imageURL: 'https://cdn.discordapp.com/attachments/886559272660533251/999218208575848468/prison.png',
	difficultyLevel: 5,
	distance: 52,
	scavengeLoot: {
		pool: {
			common: {
				items: [medicals.Splint, medicals.AntiBiotics, medicals.Medkit],
				categories: ['Food']
			},
			rare: {
				items: [armor.SwatArmor, helmets.SwatHelmet, melee.Fork],
				categories: []
			},
			rarest: {
				items: [medicals.TraumaKit],
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
						items: [medicals.TraumaKit],
						categories: []
					},
					rarest: {
						items: [],
						categories: ['Ranged Weapon']
					}
				},
				rolls: DEFAULT_SCAVENGE_ROLLS
			},
			requiresKey: keys.CellKey
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
						items: [armor.MilitaryArmor, helmets.MilitaryHelmet],
						categories: []
					}
				},
				rolls: DEFAULT_SCAVENGE_ROLLS
			},
			requiresKey: keys.ArmoryKey
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
						items: [ranged.HuntingRifle, ranged.PumpShotgun],
						categories: []
					},
					uncommon: {
						items: [ranged.AssaultRifle],
						categories: []
					},
					rarest: {
						items: [ranged.AutoShotgun],
						categories: []
					}
				},
				helmet: {
					pool: {
						common: {
							items: [helmets.SwatHelmet],
							categories: []
						},
						uncommon: {
							items: [helmets.MilitaryHelmet],
							categories: []
						}
					},
					chance: 100
				},
				armor: {
					pool: {
						common: {
							items: [armor.SwatArmor],
							categories: []
						},
						uncommon: {
							items: [armor.MilitaryArmor],
							categories: []
						}
					},
					chance: 100
				},
				loot: {
					generated: {
						pool: {
							common: {
								items: [melee.Shank, melee.PoliceBaton, medicals.Splint, medicals.AntiBiotics, medicals.Medkit, medicals.Bandage],
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
							items: [helmets.SwatHelmet],
							categories: []
						},
						rare: {
							items: [helmets.MilitaryHelmet],
							categories: []
						}
					},
					chance: 50
				},
				armor: {
					pool: {
						common: {
							items: [armor.SwatArmor],
							categories: []
						},
						rare: {
							items: [armor.MilitaryArmor],
							categories: []
						}
					},
					chance: 100
				},
				loot: {
					generated: {
						pool: {
							common: {
								items: [medicals.Splint, medicals.AntiBiotics, medicals.Medkit],
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
})
