import { LootPool, generateLootDurability, loot } from '../structures/LootPool.js'
import { PistolBullet, RifleBullet, Shotgun12GaugeBuckshot, Shotgun12GaugeSlug, Shotgun20GaugeBuckshot, Shotgun20GaugeSlug } from './items/ammunition.js'
import { HeavyJacket, LightArmor, MilitaryArmor, SwatArmor, WoodenArmor } from './items/armor.js'
import { ClothBackpack, DuffleBag, SmallPouch } from './items/backpacks.js'
import { CyclingHelmet, HardHat, MilitaryHelmet, RiotHelmet, SwatHelmet, WoodenHelmet } from './items/helmets.js'
import { Bandage, Medkit, TraumaKit } from './items/medicals.js'
import { Chainsaw, Crowbar, FireAxe, Hatchet, Katana, Knife, MetalBat, MetalPipe, PoliceBaton, Shank, SledgeHammer, WoodenBat } from './items/melee.js'
import { AssaultRifle, AutoShotgun, DoubleBarrelShotgun, HuntingRifle, Pistol, PumpShotgun, SubmachineGun } from './items/ranged.js'
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
		loot({ item: Bandage }),
		loot({ item: WoodenBat, durability: generateLootDurability(WoodenBat.durability, 0.75) })
	],
	uncommon: [
		loot({ item: CannedBeans }),
		loot({ item: Fabric }),
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
		loot({ item: Medkit, durability: generateLootDurability(Medkit.durability, 0.75) }),
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
		loot({ item: Shank, durability: generateLootDurability(Shank.durability, 0.6) }),
		loot({ item: MetalPipe, durability: generateLootDurability(MetalPipe.durability, 0.8) }),
		loot({ item: MetalBat, durability: generateLootDurability(MetalBat.durability, 0.75) })
	],
	rare: [
		...alwaysRare,
		loot({ item: Medkit, durability: generateLootDurability(Medkit.durability, 0.75) }),
		loot({ item: SmallPouch }),
		loot({ item: Hatchet, durability: generateLootDurability(Hatchet.durability, 0.8) }),
		loot({ item: Crowbar, durability: generateLootDurability(Crowbar.durability, 0.75) }),
		loot({ item: Knife, durability: generateLootDurability(Knife.durability, 0.8) }),
		loot({ item: WoodenHelmet, durability: generateLootDurability(WoodenHelmet.durability, 0.75) }),
		loot({ item: WoodenArmor, durability: generateLootDurability(WoodenArmor.durability, 0.75) })
	],
	rarest: [
		loot({ item: ClothBackpack }),
		loot({ item: PoliceBaton, durability: generateLootDurability(PoliceBaton.durability, 0.75) }),
		loot({ item: Pistol, durability: generateLootDurability(Pistol.durability, 0.75) })
	]
})

const level3 = new LootPool({
	common: [
		...level2.common,
		loot({ item: MetalPipe, durability: generateLootDurability(MetalPipe.durability, 0.8) }),
		loot({ item: MetalBat, durability: generateLootDurability(MetalBat.durability, 0.75) })
	],
	uncommon: [
		loot({ item: Medkit, durability: generateLootDurability(Medkit.durability, 0.75) }),
		loot({ item: Shotgun20GaugeBuckshot }),
		loot({ item: PistolBullet }),
		loot({ item: Shank, durability: generateLootDurability(Shank.durability, 0.6) }),
		loot({ item: Hatchet, durability: generateLootDurability(Hatchet.durability, 0.8) }),
		loot({ item: Crowbar, durability: generateLootDurability(Crowbar.durability, 0.75) }),
		loot({ item: Knife, durability: generateLootDurability(Knife.durability, 0.8) }),
		loot({ item: WoodenHelmet, durability: generateLootDurability(WoodenHelmet.durability, 0.75) }),
		loot({ item: WoodenArmor, durability: generateLootDurability(WoodenArmor.durability, 0.75) })
	],
	rare: [
		...alwaysRare,
		loot({ item: ClothBackpack }),
		loot({ item: RiotHelmet, durability: generateLootDurability(RiotHelmet.durability, 0.75) }),
		loot({ item: LightArmor, durability: generateLootDurability(LightArmor.durability, 0.75) }),
		loot({ item: PoliceBaton, durability: generateLootDurability(PoliceBaton.durability, 0.75) }),
		loot({ item: SledgeHammer, durability: generateLootDurability(SledgeHammer.durability, 0.7) }),
		loot({ item: Pistol, durability: generateLootDurability(Pistol.durability, 0.75) })
	],
	rarest: [
		loot({ item: DuffleBag }),
		loot({ item: SubmachineGun, durability: generateLootDurability(SubmachineGun.durability, 0.5) }),
		loot({ item: DoubleBarrelShotgun, durability: generateLootDurability(DoubleBarrelShotgun.durability, 0.75) })
	]
})

const level4 = new LootPool({
	common: [
		...level3.common,
		...level3.uncommon
	],
	uncommon: [
		loot({ item: Shotgun20GaugeSlug }),
		loot({ item: Katana, durability: generateLootDurability(Katana.durability, 0.75) }),
		loot({ item: PoliceBaton, durability: generateLootDurability(PoliceBaton.durability, 0.75) }),
		loot({ item: SledgeHammer, durability: generateLootDurability(SledgeHammer.durability, 0.7) }),
		loot({ item: RiotHelmet, durability: generateLootDurability(RiotHelmet.durability, 0.75) }),
		loot({ item: LightArmor, durability: generateLootDurability(LightArmor.durability, 0.75) })
	],
	rare: [
		...alwaysRare,
		loot({ item: ClothBackpack }),
		loot({ item: Shotgun12GaugeBuckshot }),
		loot({ item: SwatHelmet, durability: generateLootDurability(SwatHelmet.durability, 0.75) }),
		loot({ item: SwatArmor, durability: generateLootDurability(SwatArmor.durability, 0.75) }),
		loot({ item: FireAxe, durability: generateLootDurability(FireAxe.durability, 0.75) }),
		loot({ item: Pistol, durability: generateLootDurability(Pistol.durability, 0.75) }),
		loot({ item: DoubleBarrelShotgun, durability: generateLootDurability(DoubleBarrelShotgun.durability, 0.75) })
	],
	rarest: [
		loot({ item: DuffleBag }),
		loot({ item: Chainsaw, durability: generateLootDurability(Chainsaw.durability, 0.75) }),
		loot({ item: HuntingRifle, durability: generateLootDurability(HuntingRifle.durability, 0.5) }),
		loot({ item: PumpShotgun, durability: generateLootDurability(PumpShotgun.durability, 0.6) }),
		loot({ item: SubmachineGun, durability: generateLootDurability(SubmachineGun.durability, 0.5) })
	]
})

const level5 = new LootPool({
	common: [
		...level4.common,
		...level4.uncommon,
		loot({ item: Shotgun20GaugeSlug }),
		loot({ item: Katana, durability: generateLootDurability(Katana.durability, 0.75) }),
		loot({ item: PoliceBaton, durability: generateLootDurability(PoliceBaton.durability, 0.75) }),
		loot({ item: SledgeHammer, durability: generateLootDurability(SledgeHammer.durability, 0.7) }),
		loot({ item: RiotHelmet, durability: generateLootDurability(RiotHelmet.durability, 0.75) }),
		loot({ item: LightArmor, durability: generateLootDurability(LightArmor.durability, 0.75) })
	],
	uncommon: [
		loot({ item: Shotgun12GaugeBuckshot }),
		loot({ item: SwatHelmet, durability: generateLootDurability(SwatHelmet.durability, 0.75) }),
		loot({ item: SwatArmor, durability: generateLootDurability(SwatArmor.durability, 0.75) }),
		loot({ item: Pistol, durability: generateLootDurability(Pistol.durability, 0.75) }),
		loot({ item: DoubleBarrelShotgun, durability: generateLootDurability(DoubleBarrelShotgun.durability, 0.75) })
	],
	rare: [
		...alwaysRare,
		loot({ item: RifleBullet }),
		loot({ item: Shotgun12GaugeSlug }),
		loot({ item: Chainsaw, durability: generateLootDurability(Chainsaw.durability, 0.75) }),
		loot({ item: MilitaryHelmet, durability: generateLootDurability(MilitaryHelmet.durability, 0.5) }),
		loot({ item: MilitaryArmor, durability: generateLootDurability(MilitaryArmor.durability, 0.5) }),
		loot({ item: TraumaKit, durability: generateLootDurability(TraumaKit.durability, 0.75) }),
		loot({ item: FireAxe, durability: generateLootDurability(FireAxe.durability, 0.75) }),
		loot({ item: SubmachineGun, durability: generateLootDurability(SubmachineGun.durability, 0.5) })
	],
	rarest: [
		loot({ item: DuffleBag }),
		loot({ item: HuntingRifle, durability: generateLootDurability(HuntingRifle.durability, 0.5) }),
		loot({ item: PumpShotgun, durability: generateLootDurability(PumpShotgun.durability, 0.6) }),
		loot({ item: AssaultRifle, durability: generateLootDurability(AssaultRifle.durability, 0.5) }),
		loot({ item: AutoShotgun, durability: generateLootDurability(AutoShotgun.durability, 0.6) })
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
	},
	{
		level: 3,
		pool: level3
	},
	{
		level: 4,
		pool: level4
	},
	{
		level: 5,
		pool: level5
	}
]
