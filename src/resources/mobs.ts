import { LootPool, generateLootDurability, loot } from '../structures/LootPool.js'
import { Raider } from '../structures/mobs/Raider.js'
import { Walker } from '../structures/mobs/Walker.js'
import { HeavyJacket, WoodenArmor } from './items/armor.js'
import { ClothBackpack, SmallPouch } from './items/backpacks.js'
import { CyclingHelmet, HardHat, WoodenHelmet } from './items/helmets.js'
import { Bandage, Medkit } from './items/medicals.js'
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
				rolls: {
					min: 2,
					max: 3
				},
				pool: new LootPool({
					common: [
						loot({ item: Bandage }),
						loot({ item: CannedCorn }),
						loot({ item: CannedBeans })
					],
					uncommon: [
						loot({ item: Fabric })
					],
					rare: [
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
	}
]
