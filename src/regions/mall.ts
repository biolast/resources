import { Region } from '../../types/Regions.js'
import { items } from '../items/index.js'
import { melee } from '../items/melee.js'
import { ammunition } from '../items/ammunition.js'
import { armor } from '../items/armor.js'
import { helmets } from '../items/helmets.js'
import { medical } from '../items/medical.js'
import { DEFAULT_RAIDER_MOB_ROLLS, DEFAULT_SCAVENGE_ROLLS, DEFAULT_ZOMBIE_MOB_ROLLS } from '../constants.js'
import { ranged } from '../items/ranged.js'


export const mall: Region<'Norwood Mall'> = {
	name: 'Norwood Mall',
	icon: '<:mall:944973999509766164>',
	imageURL: 'https://cdn.discordapp.com/attachments/886559272660533251/999218208265482310/mall.png',
	regionLevel: 4,
	playerLevel: 5,
	distance: 31,
	areas: ['Antique Store', 'Food Court', 'Staff Break Room'],
	scavengeLoot: {
		pool: {
			common: {
				items: [melee.katana],
				categories: ['Food', 'Medical']
			},
			rare: {
				items: [ammunition['20-gauge_buckshot'], armor.light_armor, helmets.riot_helmet, helmets.psycho_mask],
				categories: []
			},
			rarest: {
				items: [ammunition.rifle_bullet],
				categories: ['Backpack', 'Ranged Weapon']
			}
		},
		rolls: DEFAULT_SCAVENGE_ROLLS
	},
	keyAreas: [
		{
			name: 'Dereks Hunting Shop',
			loot: {
				pool: {
					common: {
						items: [],
						categories: ['Ammunition']
					},
					uncommon: {
						items: [],
						categories: ['Ranged Weapon', 'Throwable Weapon']
					},
					rare: {
						items: [armor.swat_armor, helmets.swat_helmet],
						categories: []
					}
				},
				rolls: DEFAULT_SCAVENGE_ROLLS
			},
			requiresKey: items.dereks_shop_key
		},
		{
			name: 'Florreds Pharmacy',
			loot: {
				pool: {
					common: {
						items: [medical['anti-biotics']],
						categories: ['Stimulant']
					}
				},
				rolls: {
					min: 2,
					max: 2
				}
			},
			requiresKey: items.florreds_pharmacy_key
		}
	],
	mobs: {
		spawnTypes: [
			{
				type: 'raider',
				boss: false,
				spawnWeight: 70,
				name: 'Raider',
				weaponPool: {
					common: {
						items: [ranged['double-barrel_shotgun']],
						categories: []
					},
					rare: {
						items: [ranged.hunting_rifle, ranged.pump_shotgun],
						categories: []
					}
				},
				helmet: {
					pool: {
						common: {
							items: [helmets.riot_helmet],
							categories: []
						},
						uncommon: {
							items: [helmets.psycho_mask, helmets.swat_helmet],
							categories: []
						}
					},
					chance: 100
				},
				armor: {
					pool: {
						common: {
							items: [armor.light_armor],
							categories: []
						},
						uncommon: {
							items: [armor.swat_armor],
							categories: []
						}
					},
					chance: 100
				},
				loot: {
					generated: {
						pool: {
							common: {
								items: [melee.katana],
								categories: ['Food', 'Medical']
							},
							uncommon: {
								items: [melee.fire_axe],
								categories: ['Stimulant']
							},
							rare: {
								items: [],
								categories: ['Ranged Weapon', 'Throwable Weapon']
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
							items: [helmets.psycho_mask],
							categories: []
						},
						rare: {
							items: [helmets.riot_helmet],
							categories: []
						},
						rarest: {
							items: [helmets.swat_helmet],
							categories: []
						}
					},
					chance: 30
				},
				armor: {
					pool: {
						common: {
							items: [armor.light_armor],
							categories: []
						},
						rare: {
							items: [armor.swat_armor],
							categories: []
						}
					},
					chance: 100
				},
				loot: {
					generated: {
						pool: {
							common: {
								items: [],
								categories: ['Melee Weapon', 'Food', 'Ammunition']
							},
							uncommon: {
								items: [],
								categories: ['Backpack', 'Collectible', 'Medical']
							},
							rare: {
								items: [],
								categories: ['Key', 'Ranged Weapon', 'Stimulant']
							}
						},
						rolls: DEFAULT_ZOMBIE_MOB_ROLLS
					}
				}
			}
		],
		huntQuotes: [
			'You find a {mob} hanging around the food court.',
			'You were spotted by a {mob} inside the antique store.'
		]
	}
}
