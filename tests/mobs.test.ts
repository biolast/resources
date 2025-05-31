import { Bandit, mobPool } from '../src/index.js'


describe.each(mobPool.allDrops)('Mob (Level $level $mob.name)', ({ level, mob }) => {
	if (mob instanceof Bandit) {
		describe.each(mob.weapon.allDrops)('possible weapon loadout', mobWeapon => {
			if ('ammo' in mobWeapon) {
				test(`${mobWeapon.weapon.name} uses compatible ammo`, () => {
					expect(Array.from(mobWeapon.weapon.ammo.keys())).toContain(mobWeapon.ammo.name)
				})
			}
		})
	}
})
