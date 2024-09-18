import { LootPool, MobPool } from '../structures/LootPool.js'
import { Bandit } from '../structures/mobs/Bandit.js'
import { Zombie } from '../structures/mobs/Zombie.js'
import { DEFAULT_RAIDER_MOB_ROLLS, DEFAULT_ZOMBIE_MOB_ROLLS } from './constants.js'
import { PistolBullet, Shotgun20GaugeBuckshot } from './items/ammunition/craftable.js'
import { Hoodie, WoodenArmor, LightArmor } from './items/body armor/craftable.js'
import { CannedMeat, Corn, Apple } from './items/foods/lootable.js'
import { WoodenHelmet, RiotHelmet } from './items/helmets/craftable.js'
import { CyclingHelmet } from './items/helmets/lootable.js'
import { Bandage, Medkit } from './items/medicals/craftable.js'
import { Fork, MetalBat, PoliceBaton, Knife, SledgeHammer, FireAxe } from './items/melee/lootable.js'
import { Pistol, DoubleBarrelShotgun } from './items/ranged/craftable.js'
import { PistolReceiver, Steel } from './items/supplies/lootable.js'
import { Lighter } from './items/tools/craftable.js'
import { SewingKit, Hammer } from './items/tools/lootable.js'


export const mobPool = new MobPool({
	common: [
		{
			level: 1,
			mob: new Zombie({ // You encounter a **Lvl *1*. Zombie**! Would you like to engage?
				names: ['Walker'],
				health: 30,
				xp: 10,
				armor: {
					chance: 50,
					pool: new LootPool({
						common: [
							{ helmet: CyclingHelmet, armor: Hoodie },
							{ armor: Hoodie }
						],
						uncommon: [
							{ armor: WoodenArmor }
						],
						rare: [
							{ helmet: CyclingHelmet, armor: WoodenArmor }
						]
					})
				},
				randomDrops: {
					pool: new LootPool({
						common: [
							// medical
							Bandage,
							// melee weapons
							Fork,
							// food
							CannedMeat,
							Corn,
							Apple
						],
						rare: [
							PistolReceiver,
							Steel,
							SewingKit,
							Hammer,
							Lighter
						]
					}),
					rolls: DEFAULT_ZOMBIE_MOB_ROLLS
				},
				damage: 12,
				armorPenetration: 0.5
			})
		},
		{
			level: 2,
			mob: new Bandit({
				names: ['Bandit'],
				health: 50,
				xp: 20,
				weapon: new LootPool({
					common: [
						{ weapon: MetalBat },
						{ weapon: PoliceBaton }
					],
					uncommon: [
						{ weapon: Knife },
						{ weapon: SledgeHammer },
						{ weapon: FireAxe }
					],
					rare: [
						{ weapon: Pistol, ammo: PistolBullet }
					]
				}),
				armor: {
					chance: 75,
					pool: new LootPool({
						common: [
							{ helmet: CyclingHelmet, armor: Hoodie }
						],
						uncommon: [
							{ helmet: CyclingHelmet, armor: WoodenArmor }
						],
						rare: [
							{ helmet: WoodenHelmet, armor: WoodenArmor }
						]
					})
				},
				randomDrops: {
					pool: new LootPool({
						common: [
							// medical
							Bandage,
							// food
							CannedMeat
						],
						rare: [
							PistolReceiver,
							Steel,
							SewingKit,
							Hammer,
							Lighter
						]
					}),
					rolls: DEFAULT_RAIDER_MOB_ROLLS
				}
			})
		}
	],
	uncommon: [
		{
			level: 3,
			mob: new Bandit({
				names: ['Bandit'],
				health: 50,
				xp: 20,
				weapon: new LootPool({
					common: [
						{ weapon: Pistol, ammo: PistolBullet }
					],
					uncommon: [
						{ weapon: DoubleBarrelShotgun, ammo: Shotgun20GaugeBuckshot }
					]
				}),
				armor: {
					chance: 100,
					pool: new LootPool({
						common: [
							{ helmet: WoodenHelmet, armor: WoodenArmor }
						],
						uncommon: [
							{ helmet: WoodenHelmet, armor: LightArmor }
						],
						rare: [
							{ helmet: RiotHelmet, armor: LightArmor }
						]
					})
				},
				randomDrops: {
					pool: new LootPool({
						common: [
							// medical
							Bandage,
							// food
							CannedMeat
						],
						uncommon: [
							Medkit,
							PistolReceiver
						],
						rare: [
							Steel,
							SewingKit,
							Hammer,
							Lighter
						]
					}),
					rolls: DEFAULT_RAIDER_MOB_ROLLS
				}
			})
		}
	]
})
