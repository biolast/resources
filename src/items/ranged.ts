import { RangedWeapon } from '../../types/Items.js'


const rangedObject = <T>(et: { [K in keyof T]: RangedWeapon & { name: K } }) => et

export const ranged = rangedObject({
	'pistol': {
		type: 'Ranged Weapon',
		name: 'pistol',
		icon: '<:glock17:931424425851621417>',
		aliases: ['glock'],
		durability: 12,
		slotsUsed: 2,
		accuracy: 45,
		speed: 20,
		artist: '600383557038374913',
		regions: ['Mulberry Farm', 'Redding Forest']
	},
	'submachine_gun': {
		type: 'Ranged Weapon',
		name: 'submachine_gun',
		icon: '<:submachine_gun:1063592662613114923>',
		aliases: ['submachine', 'smg'],
		durability: 20,
		slotsUsed: 3,
		accuracy: 85,
		speed: 28,
		regions: ['Redding Forest']
	},
	'double-barrel_shotgun': {
		type: 'Ranged Weapon',
		name: 'double-barrel_shotgun',
		icon: '<:U_rifle:869647344344387624>',
		aliases: ['double_barrel_shotgun', 'double_barrel', 'double_shotgun', 'double_shotty', 'db_shotgun', 'db_shotty', 'db'],
		durability: 8,
		slotsUsed: 3,
		accuracy: 68,
		speed: 14,
		regions: ['Redding Forest', 'Norwood Mall']
	},
	'hunting_rifle': {
		type: 'Ranged Weapon',
		name: 'hunting_rifle',
		icon: '<:U_rifle:869647344344387624>',
		aliases: ['hunting'],
		durability: 15,
		slotsUsed: 4,
		accuracy: 95,
		speed: 3,
		regions: ['Norwood Mall', 'Pike Prison']
	},
	'pump_shotgun': {
		type: 'Ranged Weapon',
		name: 'pump_shotgun',
		icon: '<:U_rifle:869647344344387624>',
		aliases: ['pump_shotty', 'shotty', 'pumpy'],
		durability: 14,
		slotsUsed: 4,
		accuracy: 30,
		speed: 10,
		regions: ['Norwood Mall', 'Pike Prison']
	},
	'assault_rifle': {
		type: 'Ranged Weapon',
		name: 'assault_rifle',
		icon: '<:ak47:933852988416618496>',
		aliases: ['ak', 'ak47', 'rifle'],
		durability: 26,
		slotsUsed: 4,
		accuracy: 63,
		speed: 29,
		artist: '699166377705078794',
		regions: ['Pike Prison']
	},
	'auto_shotgun': {
		type: 'Ranged Weapon',
		name: 'auto_shotgun',
		icon: '<:U_rifle:869647344344387624>',
		aliases: ['auto_shotty'],
		durability: 20,
		slotsUsed: 4,
		accuracy: 91,
		speed: 13,
		regions: ['Pike Prison']
	},
	'heavy_sniper': {
		type: 'Ranged Weapon',
		name: 'heavy_sniper',
		icon: '<:awm:944974499579846718>',
		aliases: ['awp', 'sniper'],
		durability: 30,
		slotsUsed: 5,
		accuracy: 98,
		speed: 2,
		artist: '699166377705078794',
		regions: []
	}
})
