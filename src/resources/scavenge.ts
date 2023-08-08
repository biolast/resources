import { LootPool, generateLootDurability, loot } from '../structures/LootPool.js'
import { PistolBullet } from './items/ammunition.js'
import { HeavyJacket, WoodenArmor } from './items/armor.js'
import { ClothBackpack, SmallPouch } from './items/backpacks.js'
import { CyclingHelmet, HardHat, WoodenHelmet } from './items/helmets.js'
import { Bandage, Medkit } from './items/medicals.js'
import { Crowbar, Hatchet, Knife, MetalBat, MetalPipe, Shank, SledgeHammer, WoodenBat } from './items/melee.js'
import { Pistol } from './items/ranged.js'
import { CannedBeans, CannedCorn, Fabric, Metal, Nails } from './items/supplies.js'
import { CanOpener, Hammer, Lighter } from './items/tools.js'


/** this loot is always rare regardless of the players level */
const alwaysRare = [
	loot({ item: Nails }),
	loot({ item: Metal }),
	loot({ item: CanOpener, durability: generateLootDurability(CanOpener.durability, 0.75) }),
	loot({ item: Lighter, durability: generateLootDurability(Lighter.durability, 0.75) }),
	loot({ item: Hammer, durability: generateLootDurability(Hammer.durability, 0.75) })
] as const

const level1 = new LootPool({
	common: [
		loot({ item: CannedCorn }),
		loot({ item: Fabric }),
		loot({ item: Bandage }),
		loot({ item: WoodenBat, durability: generateLootDurability(WoodenBat.durability, 0.75) })
	],
	uncommon: [
		loot({ item: CannedBeans }),
		loot({ item: HeavyJacket, durability: generateLootDurability(HeavyJacket.durability, 0.75) }),
		loot({ item: CyclingHelmet, durability: generateLootDurability(CyclingHelmet.durability, 1) })
	],
	rare: [
		...alwaysRare,
		loot({ item: SmallPouch }),
		loot({ item: Shank, durability: generateLootDurability(Shank.durability, 0.6) }),
		loot({ item: HardHat, durability: generateLootDurability(HardHat.durability, 1) })
	],
	rarest: [
		loot({ item: Medkit }),
		loot({ item: WoodenArmor, durability: generateLootDurability(WoodenArmor.durability, 0.75) }),
		loot({ item: MetalPipe, durability: generateLootDurability(MetalPipe.durability, 0.8) }),
		loot({ item: MetalBat, durability: generateLootDurability(MetalBat.durability, 0.75) })
	]
})

const level2 = new LootPool({
	common: [
		...level1.common,
		...level1.uncommon,
		loot({ item: HardHat, durability: generateLootDurability(HardHat.durability, 1) })
	],
	uncommon: [
		loot({ item: PistolBullet }),
		loot({ item: SmallPouch }),
		loot({ item: Shank, durability: generateLootDurability(Shank.durability, 0.6) }),
		loot({ item: MetalPipe, durability: generateLootDurability(MetalPipe.durability, 0.8) }),
		loot({ item: MetalBat, durability: generateLootDurability(MetalBat.durability, 0.75) })
	],
	rare: [
		...alwaysRare,
		loot({ item: Medkit }),
		loot({ item: ClothBackpack }),
		loot({ item: Hatchet, durability: generateLootDurability(Hatchet.durability, 0.8) }),
		loot({ item: Crowbar, durability: generateLootDurability(Crowbar.durability, 0.75) }),
		loot({ item: Knife, durability: generateLootDurability(Knife.durability, 0.8) }),
		loot({ item: WoodenHelmet, durability: generateLootDurability(WoodenHelmet.durability, 0.75) }),
		loot({ item: WoodenArmor, durability: generateLootDurability(WoodenArmor.durability, 0.75) })
	],
	rarest: [
		loot({ item: SledgeHammer, durability: generateLootDurability(SledgeHammer.durability, 0.7) }),
		loot({ item: Pistol, durability: generateLootDurability(Pistol.durability, 0.75) })
	]
})


export const scavengePools = [
	{
		level: 1,
		pool: level1
	},
	{
		level: 2,
		pool: level2
	}
]
