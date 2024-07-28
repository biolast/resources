import { Bandit, mobPool } from '../src/index.js'


describe.each(mobPool.allDrops)('Mob (Level $level $mob.names)', ({ level, mob }) => {
	if (mob instanceof Bandit) {
		describe.each(mob.weapon.allDrops)('possible weapon loadout', mobWeapon => {
			if ('ammo' in mobWeapon) {
				test(`${mobWeapon.weapon.name} uses compatible ammo`, () => {
					expect(mobWeapon.weapon.ammo.map(a => a.name)).toContain(mobWeapon.ammo.name)
				})
			}
		})
	}
})
