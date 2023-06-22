import { allRegions } from '../src/index.js'
import { RangedWeapon } from '../src/structures/items/RangedWeapon.js'


describe.each(allRegions)('Region (%s)', region => {
	const regionItems = region.getObtainableItems()

	test('has no more than 4 key areas', () => {
		expect(region.data.keyAreas.length).toBeLessThanOrEqual(4)
	})

	describe.each(region.data.mobs)('Mob ($mob.data.type)', ({ mob }) => {
		if ('weaponPool' in mob.data) {
			const possibleWeapons = [
				...mob.data.weaponPool.common || [],
				...mob.data.weaponPool.uncommon || [],
				...mob.data.weaponPool.rare || [],
				...mob.data.weaponPool.rarest || []
			]
			const possibleRanged = possibleWeapons.filter(weap => weap instanceof RangedWeapon) as RangedWeapon[]

			if (possibleRanged.length) {
				test.each(possibleRanged)('weapon ($name) has ammo that drops at this location', ({ name, data }) => {
					const possibleAmmo = data.ammo.filter(weapAmmo => regionItems.some(itm => itm.name === weapAmmo.name))

					expect(possibleAmmo).not.toEqual([])
				})
			}
		}
	})
})
