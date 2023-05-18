import { Supply } from '../../types/Items.js'
import { melee } from './melee.js'


const supplyObject = <T>(et: { [K in keyof T]: Supply & { name: K } }) => et

export const supplies = supplyObject({
	wood_log: {
		type: 'Supply',
		name: 'wood_log',
		aliases: ['wood'],
		icon: '<:wood_log:1005187227535560815>',
		slotsUsed: 0.5,
		regions: undefined
	},
	wood_twig: {
		type: 'Supply',
		name: 'wood_twig',
		aliases: ['twig'],
		icon: '<:wood_twig:1007113351006003210>',
		slotsUsed: 0.2,
		regions: undefined
	},
	get wood_plank (): Supply & { name: 'wood_plank' } {
		return {
			type: 'Supply',
			name: 'wood_plank',
			aliases: ['plank'],
			icon: '<:wood_plank:1009832931805630504>',
			slotsUsed: 0.3,
			regions: undefined,
			craftingRecipes: [
				{
					possibleTools: [melee.fire_axe, melee.chainsaw],
					supplies: [
						{
							item: this.wood_log,
							amount: 1
						}
					],
					yield: 1
				}
			]
		}
	},
	nails: {
		type: 'Supply',
		name: 'nails',
		aliases: ['nail'],
		icon: '<:nails:1006847745388191835>',
		slotsUsed: 0.1,
		regions: ['Eastside Suburbs', 'Mulberry Farm']
	},
	lighter: {
		type: 'Supply',
		name: 'lighter',
		aliases: [],
		icon: '<:lighter:1006890846622335006>',
		slotsUsed: 0.1,
		regions: ['Eastside Suburbs', 'Mulberry Farm']
	}
})
