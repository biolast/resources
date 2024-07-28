import { ScavengePool } from '../structures/LootPool.js'
import { RifleBullet } from './items/ammunition/craftable.js'
import { Shotgun12GaugeBuckshot, Shotgun12GaugeSlug, SniperBullet } from './items/ammunition/lootable.js'
import { CannedMeat, Corn, Apple } from './items/foods/lootable.js'
import { HardHat, CyclingHelmet } from './items/helmets/lootable.js'
import { Bandage, Medkit } from './items/medicals/craftable.js'
import { TraumaKit } from './items/medicals/lootable.js'
import { WoodenSpear } from './items/melee/craftable.js'
import { Fork, WoodenBat, MetalBat, PoliceBaton, Hatchet, Knife, SledgeHammer, FireAxe, Katana, Chainsaw } from './items/melee/lootable.js'
import { SubmachineGun, PumpShotgun } from './items/ranged/lootable.js'
import { Fabric, Plastic, Adhesive, Nails, Glass, Antiseptic, Leather, WeldingWire, Gunpowder, PistolBulletCasing, PistolReceiver, ShotgunReceiver, Gasoline, Steel, ShotgunShellCasing, RifleBulletCasing, RifleReceiver } from './items/supplies/lootable.js'
import { ExplosiveGrenade } from './items/throwables/lootable.js'
import { Lighter } from './items/tools/craftable.js'
import { SewingKit, Hammer, Welder } from './items/tools/lootable.js'


export const scavengePool = new ScavengePool({
	common: [
		{
			levelRequired: 1,
			items: [
				// supplies
				Fabric,
				Plastic,
				Adhesive,
				Nails,
				Glass,
				// medical
				Bandage,
				// melee weapons
				Fork,
				WoodenBat,
				// food
				CannedMeat,
				Corn,
				Apple
			]
		}
	],
	uncommon: [
		{
			levelRequired: 1,
			items: [
				// helmets/armor
				HardHat,
				CyclingHelmet,
				// weapons
				MetalBat,
				WoodenSpear,
				// supplies
				Antiseptic,
				Leather,
				WeldingWire,
				Gunpowder,
				PistolBulletCasing
			]
		}
	],
	rare: [
		{
			levelRequired: 1,
			items: [
				// weapons
				PoliceBaton,
				Hatchet,
				// supplies
				PistolReceiver,
				ShotgunReceiver,
				Gasoline,
				Steel,
				// tools
				SewingKit,
				Hammer,
				Lighter,
				// medicals
				Medkit
			]
		},
		{
			levelRequired: 2,
			items: [
				// supplies
				ShotgunShellCasing,
				RifleBulletCasing,
				// weapons
				Knife,
				SledgeHammer
			]
		},
		{
			levelRequired: 3,
			items: [
				// weapons
				FireAxe,
				Katana
			]
		},
		{
			levelRequired: 4,
			items: [
				// ammunition
				RifleBullet
			]
		}
	],
	rarest: [
		{
			levelRequired: 1,
			items: [
				// tools
				Welder,
				// medicals
				TraumaKit,
				// supplies
				RifleReceiver
			]
		},
		{
			levelRequired: 3,
			items: [
				// ammunition
				Shotgun12GaugeBuckshot,
				Shotgun12GaugeSlug,
				// weapons
				Chainsaw,
				ExplosiveGrenade
			]
		},
		{
			levelRequired: 4,
			items: [
				// ammunition
				SniperBullet,
				// weapons
				SubmachineGun,
				PumpShotgun
			]
		}
	]
})
