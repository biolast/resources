import { WeaponPool, weapon } from '../index.js'
import { LootPool, generateLootDurability, loot } from '../structures/LootPool.js'
import { Raider } from '../structures/mobs/Raider.js'
import { Walker } from '../structures/mobs/Walker.js'
import { PistolBullet, RifleBullet, Shotgun20GaugeBuckshot } from './items/ammunition.js'
import { HeavyJacket, LightArmor, SwatArmor, WoodenArmor } from './items/armor.js'
import { ClothBackpack, DuffleBag, SmallPouch } from './items/backpacks.js'
import { CyclingHelmet, HardHat, RiotHelmet, SwatHelmet, WoodenHelmet } from './items/helmets.js'
import { Bandage, Medkit } from './items/medicals.js'
import { Crowbar, Knife, MetalBat, MetalPipe, PoliceBaton, Shank, SledgeHammer } from './items/melee.js'
import { DoubleBarrelShotgun, HuntingRifle, Pistol, SubmachineGun } from './items/ranged.js'
import { CannedBeans, CannedCorn, Fabric } from './items/supplies.js'
import { Lighter } from './items/tools.js'


export const mobs = [
	{
		levelRequired: 1,
		mob: new Walker({
			name: 'Walker',
			helmet: {
				chance: 25,
				pool: new LootPool({
					common: [
						loot({ item: CyclingHelmet, durability: generateLootDurability(HardHat.durability, 1) })
					],
					uncommon: null,
					rare: [
						loot({ item: HardHat, durability: generateLootDurability(HardHat.durability, 0.8) })
					],
					rarest: [
						loot({ item: WoodenHelmet, durability: generateLootDurability(WoodenHelmet.durability, 0.75) })
					]
				})
			},
			armor: {
				chance: 40,
				pool: new LootPool({
					common: [
						loot({ item: HeavyJacket, durability: generateLootDurability(HeavyJacket.durability, 0.8) })
					],
					uncommon: null,
					rare: null,
					rarest: [
						loot({ item: WoodenArmor, durability: generateLootDurability(WoodenArmor.durability, 1) })
					]
				})
			},
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
			helmet: {
				chance: 50,
				pool: new LootPool({
					common: [
						loot({ item: CyclingHelmet, durability: generateLootDurability(HardHat.durability, 1) }),
						loot({ item: HardHat, durability: generateLootDurability(HardHat.durability, 1) })
					],
					uncommon: [
						loot({ item: WoodenHelmet, durability: generateLootDurability(WoodenHelmet.durability, 1) })
					],
					rare: null,
					rarest: null
				})
			},
			armor: {
				chance: 100,
				pool: new LootPool({
					common: [
						loot({ item: HeavyJacket, durability: generateLootDurability(HeavyJacket.durability, 1) })
					],
					uncommon: [
						loot({ item: WoodenArmor, durability: generateLootDurability(WoodenArmor.durability, 1) })
					],
					rare: null,
					rarest: null
				})
			},
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
	},
	{
		levelRequired: 3,
		mob: new Raider({
			name: 'Armored Raider',
			weapon: new WeaponPool({
				common: [
					weapon({
						item: Crowbar,
						durability: generateLootDurability(Crowbar.durability, 1)
					})
				],
				uncommon: [
					weapon({
						item: Pistol,
						durability: generateLootDurability(Pistol.durability, 1),
						ammo: [PistolBullet]
					})
				],
				rare: null,
				rarest: [
					weapon({
						item: SubmachineGun,
						durability: generateLootDurability(SubmachineGun.durability, 1),
						ammo: [PistolBullet]
					}),
					weapon({
						item: DoubleBarrelShotgun,
						durability: generateLootDurability(DoubleBarrelShotgun.durability, 1),
						ammo: [Shotgun20GaugeBuckshot]
					})
				]
			}),
			helmet: {
				chance: 100,
				pool: new LootPool({
					common: [
						loot({ item: WoodenHelmet, durability: generateLootDurability(WoodenHelmet.durability, 1) })
					],
					uncommon: [
						loot({ item: RiotHelmet, durability: generateLootDurability(RiotHelmet.durability, 1) })
					],
					rare: null,
					rarest: null
				})
			},
			armor: {
				chance: 100,
				pool: new LootPool({
					common: [
						loot({ item: LightArmor, durability: generateLootDurability(LightArmor.durability, 1) })
					],
					uncommon: null,
					rare: null,
					rarest: null
				})
			},
			loot: {
				rolls: 4,
				pool: new LootPool({
					common: [
						loot({ item: CannedCorn }),
						loot({ item: CannedBeans })
					],
					uncommon: [
						loot({ item: Medkit, durability: generateLootDurability(Medkit.durability, 0.75) }),
						loot({ item: PistolBullet }),
						loot({ item: Shotgun20GaugeBuckshot })
					],
					rare: [
						loot({ item: Fabric }),
						loot({ item: Knife, durability: generateLootDurability(Knife.durability, 1) }),
						loot({ item: Lighter, durability: generateLootDurability(Lighter.durability, 0.75) })
					],
					rarest: [
						loot({ item: ClothBackpack })
					]
				})
			}
		})
	},
	{
		levelRequired: 4,
		mob: new Raider({
			name: 'Armored Raider',
			weapon: new WeaponPool({
				common: [
					weapon({
						item: Pistol,
						durability: generateLootDurability(Pistol.durability, 1),
						ammo: [PistolBullet]
					})
				],
				uncommon: [
					weapon({
						item: DoubleBarrelShotgun,
						durability: generateLootDurability(DoubleBarrelShotgun.durability, 1),
						ammo: [Shotgun20GaugeBuckshot]
					})
				],
				rare: [
					weapon({
						item: SubmachineGun,
						durability: generateLootDurability(SubmachineGun.durability, 0.9),
						ammo: [PistolBullet]
					})
				],
				rarest: [
					weapon({
						item: HuntingRifle,
						durability: generateLootDurability(HuntingRifle.durability, 0.9),
						ammo: [RifleBullet]
					})
				]
			}),
			helmet: {
				chance: 100,
				pool: new LootPool({
					common: [
						loot({ item: RiotHelmet, durability: generateLootDurability(RiotHelmet.durability, 1) })
					],
					uncommon: [
						loot({ item: SwatHelmet, durability: generateLootDurability(SwatHelmet.durability, 1) })
					],
					rare: null,
					rarest: null
				})
			},
			armor: {
				chance: 100,
				pool: new LootPool({
					common: [
						loot({ item: LightArmor, durability: generateLootDurability(LightArmor.durability, 1) })
					],
					uncommon: [
						loot({ item: SwatArmor, durability: generateLootDurability(SwatArmor.durability, 1) })
					],
					rare: null,
					rarest: null
				})
			},
			loot: {
				rolls: 4,
				pool: new LootPool({
					common: [
						loot({ item: CannedCorn }),
						loot({ item: CannedBeans }),
						loot({ item: Bandage })
					],
					uncommon: [
						loot({ item: Medkit, durability: generateLootDurability(Medkit.durability, 0.75) }),
						loot({ item: PistolBullet }),
						loot({ item: Shotgun20GaugeBuckshot })
					],
					rare: [
						loot({ item: RifleBullet }),
						loot({ item: Fabric }),
						loot({ item: SledgeHammer, durability: generateLootDurability(SledgeHammer.durability, 0.75) }),
						loot({ item: Lighter, durability: generateLootDurability(Lighter.durability, 0.75) }),
						loot({ item: ClothBackpack })
					],
					rarest: [
						loot({ item: DuffleBag })
					]
				})
			}
		})
	}
]
