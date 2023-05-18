import { ThrowableWeapon } from '../../types/Items.js'


const throwablesObject = <T>(et: { [K in keyof T]: ThrowableWeapon & { name: K } }) => et

export const throwables = throwablesObject({
	explosive_grenade: {
		type: 'Throwable Weapon',
		subtype: 'Fragmentation Grenade',
		name: 'explosive_grenade',
		icon: '<:m67_grenade:933857769990287380>',
		aliases: ['grenade'],
		durability: 1,
		slotsUsed: 1,
		accuracy: 20,
		damage: 63,
		penetration: 1.7,
		spreadsDamageToLimbs: 3,
		speed: 6,
		artist: '719365897458024558',
		regions: ['Norwood Mall', 'Pike Prison']
	},
	molotov_cocktail: {
		type: 'Throwable Weapon',
		subtype: 'Incendiary Grenade',
		name: 'molotov_cocktail',
		icon: '<:molotov_cocktail:933852261782782002>',
		description: 'Improvised incendiary grenade.',
		aliases: ['molotov', 'cocktail', 'molly'],
		durability: 1,
		slotsUsed: 1,
		accuracy: 35,
		damage: 34,
		penetration: 2.5,
		spreadsDamageToLimbs: 2,
		speed: 4,
		artist: '699166377705078794',
		regions: ['Pike Prison']
	}
})
