import { LootPool, loot } from '../structures/LootPool.js'
import { HeavyJacket, WoodenArmor } from './items/armor.js'
import { SmallPouch } from './items/backpacks.js'
import { CyclingHelmet, HardHat } from './items/helmets.js'
import { Bandage, Medkit } from './items/medicals.js'
import { MetalBat, MetalPipe, Shank, WoodenBat } from './items/melee.js'
import { CannedCorn, Fabric, Nails } from './items/supplies.js'
import { CanOpener, Lighter } from './items/tools.js'


export const scavengePools = [
	{
		level: 1,
		pool: new LootPool({
			common: [
				loot({ item: CannedCorn }),
				loot({ item: Fabric }),
				loot({ item: Bandage }),
				loot({ item: WoodenBat, durability: { min: 5, max: WoodenBat.durability } })
			],
			uncommon: [
				loot({ item: Shank, durability: { min: 5, max: Shank.durability } }),
				loot({ item: HeavyJacket, durability: { min: 5, max: 7 } }),
				loot({ item: CyclingHelmet, durability: { min: 2, max: 2 } })
			],
			rare: [
				loot({ item: SmallPouch }),
				loot({ item: Nails }),
				loot({ item: CanOpener, durability: { min: 3, max: 4 } }),
				loot({ item: Lighter, durability: { min: 3, max: 4 } }),
				loot({ item: HardHat, durability: { min: 5, max: 5 } }),
				loot({ item: MetalPipe, durability: { min: 8, max: MetalPipe.durability } })
			],
			rarest: [
				loot({ item: Medkit }),
				loot({ item: WoodenArmor, durability: { min: 7, max: WoodenArmor.durability } }),
				loot({ item: MetalBat, durability: { min: 8, max: MetalBat.durability } })
			]
		})
	}
]
