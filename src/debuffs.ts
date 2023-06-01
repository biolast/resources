import { Debuff } from '../structures/Debuff.js'


export const Burning = new Debuff({
	name: 'Burning',
	discordIcon: '🔥',
	effects: {
		damageBonus: 0,
		accuracyBonus: 0,
		damageTaken: 25
	}
})

export const BrokenArm = new Debuff({
	name: 'Broken Arm',
	discordIcon: '🦴',
	effects: {
		damageBonus: -10,
		accuracyBonus: -35,
		damageTaken: 0
	}
})

export const Bitten = new Debuff({
	name: 'Bitten',
	discordIcon: '<:biohazard_pixel:935772568831549440>',
	effects: {
		damageBonus: -20,
		accuracyBonus: 0,
		damageTaken: 20
	}
})
