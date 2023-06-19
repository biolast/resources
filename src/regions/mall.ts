import { DEFAULT_RAIDER_MOB_ROLLS, DEFAULT_SCAVENGE_ROLLS, DEFAULT_ZOMBIE_MOB_ROLLS } from '../constants.js'
import { Region } from '../../structures/Region.js'
import * as keys from '../items/keys.js'
import * as armor from '../items/armor.js'
import * as helmets from '../items/helmets.js'
import * as melee from '../items/melee.js'
import * as ranged from '../items/ranged.js'
import * as foods from '../items/foods.js'
import * as backpacks from '../items/backpacks.js'
import * as medicals from '../items/medicals.js'
import * as ammunition from '../items/ammunition.js'
import * as stimulants from '../items/stimulants.js'
import { GenericMob } from '../../structures/mobs/GenericMob.js'


export const Mall = new Region({
	name: 'Norwood Mall',
	discordIcon: '<:mall:944973999509766164>',
	imageURL: 'https://cdn.discordapp.com/attachments/886559272660533251/999218208265482310/mall.png',
	difficultyLevel: 4,
	distance: 31,
	scavengeLoot: {
		pool: {
			common: [melee.Katana, foods.CannedMeat, medicals.Bandage, medicals.Splint, medicals.AntiBiotics],
			rare: [ammunition.Shotgun20GaugeBuckshot, armor.LightArmor, helmets.RiotHelmet, helmets.PsychoMask, medicals.Medkit],
			rarest: [ammunition.RifleBullet, backpacks.ClothBackpack, ranged.Pistol, ranged.SubmachineGun, ranged.DoubleBarrelShotgun]
		},
		rolls: DEFAULT_SCAVENGE_ROLLS
	},
	keyAreas: [
		{
			key: keys.DereksShopKey,
			pool: {
				common: [ammunition.PistolBullet, ammunition.Shotgun20GaugeBuckshot],
				uncommon: [ranged.Pistol, ranged.SubmachineGun, ranged.DoubleBarrelShotgun],
				rare: [armor.SwatArmor, helmets.SwatHelmet]
			},
			rolls: DEFAULT_SCAVENGE_ROLLS
		},
		{
			key: keys.FlorredsPharmacyKey,
			pool: {
				common: [medicals.AntiBiotics, stimulants.Adrenaline, stimulants.HypoStim, stimulants.Adderall, stimulants.Morphine]
			},
			rolls: {
				min: 2,
				max: 2
			}
		}
	],
	mobs: [
		{
			weight: 70,
			mob: new GenericMob({
				type: 'raider',
				names: ['Raider'],
				weaponPool: {
					common: [ranged.DoubleBarrelShotgun],
					rare: [ranged.HuntingRifle, ranged.PumpShotgun]
				},
				helmet: {
					pool: {
						common: [helmets.RiotHelmet],
						uncommon: [helmets.PsychoMask, helmets.SwatHelmet]
					},
					chance: 100
				},
				armor: {
					pool: {
						common: [armor.LightArmor],
						uncommon: [armor.SwatArmor]
					},
					chance: 100
				},
				loot: {
					pool: {
						common: [melee.Katana, foods.CannedMeat, medicals.Bandage, medicals.Splint, medicals.AntiBiotics],
						uncommon: [melee.FireAxe, medicals.Medkit, stimulants.Adrenaline, stimulants.HypoStim, stimulants.Adderall, stimulants.Morphine],
						rare: [ranged.Pistol, ranged.SubmachineGun, ranged.DoubleBarrelShotgun]
					},
					rolls: DEFAULT_RAIDER_MOB_ROLLS
				}
			})
		},
		{
			weight: 30,
			mob: new GenericMob({
				type: 'walker',
				names: ['Bloated Walker', 'Walker', 'Crawler'],
				helmet: {
					pool: {
						common: [helmets.PsychoMask],
						rare: [helmets.RiotHelmet],
						rarest: [helmets.SwatHelmet]
					},
					chance: 30
				},
				armor: {
					pool: {
						common: [armor.LightArmor],
						rare: [armor.SwatArmor]
					},
					chance: 100
				},
				loot: {
					pool: {
						common: [foods.CannedMeat, ammunition.PistolBullet, ammunition.Shotgun20GaugeBuckshot, melee.Fork, melee.FireAxe, melee.Katana],
						uncommon: [medicals.Bandage, medicals.Splint, medicals.AntiBiotics, backpacks.ClothBackpack],
						rare: [medicals.Medkit, ranged.Pistol, ranged.SubmachineGun, ranged.DoubleBarrelShotgun, stimulants.Adrenaline, stimulants.HypoStim, stimulants.Adderall, stimulants.Morphine, keys.DereksShopKey, keys.FlorredsPharmacyKey]
					},
					rolls: DEFAULT_ZOMBIE_MOB_ROLLS
				}
			})
		}
	]
})
