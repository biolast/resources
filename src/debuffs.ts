import { StatusEffects } from '../types/Items.js'


export interface Debuff {
	name: string
	icon: string
	imagePath: string
	effects: StatusEffects
}

const debuffsObject = <T>(et: { [K in keyof T]: Debuff & { name: K } }) => et

export const debuffs = debuffsObject({
	'Burning': {
		name: 'Burning',
		icon: '🔥',
		imagePath: 'src/resources/images/burning_debuff.png',
		effects: {
			damageBonus: 0,
			accuracyBonus: 0,
			damageTaken: 25
		}
	},
	'Broken Arm': {
		name: 'Broken Arm',
		icon: '🦴',
		imagePath: 'src/resources/images/broken_arm_debuff.png',
		effects: {
			damageBonus: -10,
			accuracyBonus: -35,
			damageTaken: 0
		}
	},
	'Bitten': {
		name: 'Bitten',
		icon: '<:biohazard_pixel:935772568831549440>',
		imagePath: 'src/resources/images/bitten_debuff.png',
		effects: {
			damageBonus: -20,
			accuracyBonus: 0,
			damageTaken: 20
		}
	}
})

export type DebuffType = keyof typeof debuffs

export const allDebuffs = Object.values(debuffs)
