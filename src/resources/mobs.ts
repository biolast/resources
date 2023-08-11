import { WeaponPool, weapon } from '../index.js'
import { LootPool, generateLootDurability, loot } from '../structures/LootPool.js'
import { Raider } from '../structures/mobs/Raider.js'
import { Walker } from '../structures/mobs/Walker.js'
import { PistolBullet } from './items/ammunition.js'
import { HeavyJacket, WoodenArmor } from './items/armor.js'
import { ClothBackpack, SmallPouch } from './items/backpacks.js'
import { CyclingHelmet, HardHat, WoodenHelmet } from './items/helmets.js'
import { Bandage, Medkit } from './items/medicals.js'
import { Crowbar, Knife, MetalBat, MetalPipe, PoliceBaton, Shank } from './items/melee.js'
import { Pistol } from './items/ranged.js'
import { CannedBeans, CannedCorn, Fabric } from './items/supplies.js'
import { Lighter } from './items/tools.js'


export const mobs = [
	{
		levelRequired: 1,
		mob: new Walker({
			name: 'Walker',
			helmet: new LootPool({
				common: [
					loot({ item: CyclingHelmet, durability: generateLootDurability(HardHat.durability, 1) })
				],
				uncommon: [], // empty array = chance mob isn't wearing armor
				rare: [
					loot({ item: HardHat, durability: generateLootDurability(HardHat.durability, 0.8) })
				],
				rarest: [
					loot({ item: WoodenHelmet, durability: generateLootDurability(WoodenHelmet.durability, 0.75) })
				]
			}),
			armor: new LootPool({
				common: [],
				uncommon: [
					loot({ item: HeavyJacket, durability: generateLootDurability(HeavyJacket.durability, 0.8) })
				],
				rare: [],
				rarest: [
					loot({ item: WoodenArmor, durability: generateLootDurability(WoodenArmor.durability, 1) })
				]
			}),
			loot: {
				rolls: 3,
				pool: new LootPool({
					common: [
						loot({ item: Bandage }),
						loot({ item: CannedCorn }),
						loot({ item: CannedBeans })
					],
					uncommon: [],
					rare: [
						loot({ item: Fabric }),
						loot({ item: SmallPouch }),
						loot({ item: Lighter, durability: generateLootDurability(Lighter.durability, 0.75) }),
						loot({ item: Medkit, durability: generateLootDurability(Medkit.durability, 0.75) })
					],
					rarest: [
						loot({ item: ClothBackpack })
					]
				})
			}
		})
	},


	{
		levelRequired: 2,
		mob: new Raider({
			name: 'Raider Grunt',
			weapon: new WeaponPool({
				common: [
					weapon({ item: MetalBat, durability: generateLootDurability(MetalBat.durability, 1) }),
					weapon({ item: MetalPipe, durability: generateLootDurability(MetalPipe.durability, 1) })
				],
				uncommon: [
					weapon({ item: Crowbar, durability: generateLootDurability(Crowbar.durability, 1) })
				],
				rare: [
					weapon({ item: PoliceBaton, durability: generateLootDurability(PoliceBaton.durability, 1) })
				],
				rarest: [
					weapon({
						item: Pistol,
						durability: generateLootDurability(Pistol.durability, 0.8),
						ammo: [PistolBullet]
					})
				]
			}),
			helmet: new LootPool({
				common: [
					loot({ item: CyclingHelmet, durability: generateLootDurability(HardHat.durability, 1) }),
					loot({ item: HardHat, durability: generateLootDurability(HardHat.durability, 1) })
				],
				uncommon: [
					loot({ item: WoodenHelmet, durability: generateLootDurability(WoodenHelmet.durability, 1) })
				],
				rare: [],
				rarest: []
			}),
			armor: new LootPool({
				common: [
					loot({ item: HeavyJacket, durability: generateLootDurability(HeavyJacket.durability, 1) })
				],
				uncommon: [
					loot({ item: WoodenArmor, durability: generateLootDurability(WoodenArmor.durability, 1) })
				],
				rare: [],
				rarest: []
			}),
			loot: {
				rolls: 3,
				pool: new LootPool({
					common: [
						loot({ item: CannedCorn }),
						loot({ item: CannedBeans })
					],
					uncommon: [
						loot({ item: Shank, durability: generateLootDurability(Shank.durability, 1) }),
						loot({ item: Bandage })
					],
					rare: [
						loot({ item: Fabric }),
						loot({ item: SmallPouch }),
						loot({ item: PistolBullet }),
						loot({ item: Knife, durability: generateLootDurability(Knife.durability, 1) }),
						loot({ item: Lighter, durability: generateLootDurability(Lighter.durability, 0.75) }),
						loot({ item: Medkit, durability: generateLootDurability(Medkit.durability, 0.75) })
					],
					rarest: [
						loot({ item: ClothBackpack })
					]
				})
			}
		})
	}
]
