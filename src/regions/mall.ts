import { DEFAULT_RAIDER_MOB_ROLLS, DEFAULT_SCAVENGE_ROLLS, DEFAULT_ZOMBIE_MOB_ROLLS } from '../constants.js'
import { Region } from '../../structures/Region.js'
import * as keys from '../items/keys.js'
import * as armor from '../items/armor.js'
import * as helmets from '../items/helmets.js'
import * as melee from '../items/melee.js'
import * as ranged from '../items/ranged.js'
import * as ammunition from '../items/ammunition.js'
import * as medicals from '../items/medicals.js'


export const Mall = new Region({
	name: 'Norwood Mall',
	discordIcon: '<:mall:944973999509766164>',
	imageURL: 'https://cdn.discordapp.com/attachments/886559272660533251/999218208265482310/mall.png',
	difficultyLevel: 4,
	distance: 31,
	scavengeLoot: {
		pool: {
			common: {
				items: [melee.Katana],
				categories: ['Food', 'Medical']
			},
			rare: {
				items: [ammunition.Shotgun20GaugeBuckshot, armor.LightArmor, helmets.RiotHelmet, helmets.PsychoMask],
				categories: []
			},
			rarest: {
				items: [ammunition.RifleBullet],
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
						items: [armor.SwatArmor, helmets.SwatHelmet],
						categories: []
					}
				},
				rolls: DEFAULT_SCAVENGE_ROLLS
			},
			requiresKey: keys.DereksShopKey
		},
		{
			name: 'Florreds Pharmacy',
			loot: {
				pool: {
					common: {
						items: [medicals.AntiBiotics],
						categories: ['Stimulant']
					}
				},
				rolls: {
					min: 2,
					max: 2
				}
			},
			requiresKey: keys.FlorredsPharmacyKey
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
						items: [ranged.DoubleBarrelShotgun],
						categories: []
					},
					rare: {
						items: [ranged.HuntingRifle, ranged.PumpShotgun],
						categories: []
					}
				},
				helmet: {
					pool: {
						common: {
							items: [helmets.RiotHelmet],
							categories: []
						},
						uncommon: {
							items: [helmets.PsychoMask, helmets.SwatHelmet],
							categories: []
						}
					},
					chance: 100
				},
				armor: {
					pool: {
						common: {
							items: [armor.LightArmor],
							categories: []
						},
						uncommon: {
							items: [armor.SwatArmor],
							categories: []
						}
					},
					chance: 100
				},
				loot: {
					generated: {
						pool: {
							common: {
								items: [melee.Katana],
								categories: ['Food', 'Medical']
							},
							uncommon: {
								items: [melee.FireAxe],
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
							items: [helmets.PsychoMask],
							categories: []
						},
						rare: {
							items: [helmets.RiotHelmet],
							categories: []
						},
						rarest: {
							items: [helmets.SwatHelmet],
							categories: []
						}
					},
					chance: 30
				},
				armor: {
					pool: {
						common: {
							items: [armor.LightArmor],
							categories: []
						},
						rare: {
							items: [armor.SwatArmor],
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
})
