import { ThrowableWeapon } from '../../../structures/items/ThrowableWeapon.js'
import { Fabric, Gasoline, Glass, Gunpowder, Metal, WeldingWire } from '../supplies/lootable.js'
import { Welder } from '../tools/lootable.js'


export const PipeBomb = new ThrowableWeapon({
	type: 'Throwable Weapon',
	subtype: 'Fragmentation Grenade',
	name: 'pipe_bomb',
	discordIcon: '<:m67_grenade:933857769990287380>',
	aliases: ['bomb'],
	durability: 1,
	slotsUsed: 1,
	accuracy: 20,
	damage: 45,
	penetration: 1.5,
	spreadsDamageToLimbs: 3,
	speed: 6,
	crafting: {
		levelRequired: 4,
		recipes: [
			{
				possibleTools: [Welder],
				supplies: [
					{
						item: Gunpowder,
						amount: 4
					},
					{
						item: Metal,
						amount: 2
					},
					{
						item: WeldingWire,
						amount: 1
					}
				],
				yield: 1
			}
		]
	}
})

export const MolotovCocktail = new ThrowableWeapon({
	type: 'Throwable Weapon',
	subtype: 'Incendiary Grenade',
	name: 'molotov_cocktail',
	discordIcon: '<:molotov_cocktail:933852261782782002>',
	description: 'Improvised incendiary grenade.',
	aliases: ['molotov', 'cocktail', 'molly'],
	durability: 1,
	slotsUsed: 1,
	accuracy: 20,
	damage: 34,
	penetration: 2.5,
	spreadsDamageToLimbs: 2,
	speed: 5,
	crafting: {
		levelRequired: 3,
		recipes: [
			{
				possibleTools: [],
				supplies: [
					{
						item: Fabric,
						amount: 1
					},
					{
						item: Gasoline,
						amount: 1
					},
					{
						item: Glass,
						amount: 3
					}
				],
				yield: 1
			}
		]
	}
})
