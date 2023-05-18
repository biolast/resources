import { Food } from '../../types/Items.js'


const foodObject = <T>(et: { [K in keyof T]: Food & { name: K } }) => et

export const food = foodObject({
	apple: {
		type: 'Food',
		name: 'apple',
		icon: '<:apple_food:931425255761793054>',
		aliases: [],
		slotsUsed: 1,
		energy: 3,
		artist: '719365897458024558',
		regions: ['Eastside Suburbs']
	},
	pizza_slice: {
		type: 'Food',
		name: 'pizza_slice',
		description: 'A rotting slice of pizza. Maybe it still tastes good.',
		icon: '<:pizza_food:931430476940472330>',
		aliases: ['pizza'],
		slotsUsed: 1,
		energy: 4,
		artist: '719365897458024558',
		regions: ['Eastside Suburbs', 'Norwood Mall']
	},
	corn: {
		type: 'Food',
		name: 'corn',
		icon: '<:corn_food:931425274720051231>',
		aliases: [],
		slotsUsed: 1,
		energy: 3,
		artist: '719365897458024558',
		regions: ['Mulberry Farm']
	},
	pretzel: {
		type: 'Food',
		name: 'pretzel',
		description: 'A delicious pretzel.',
		icon: '<:pretzel_food:931430476843999262>',
		aliases: [],
		slotsUsed: 1,
		energy: 4,
		artist: '719365897458024558',
		regions: ['Norwood Mall']
	},
	donut: {
		type: 'Food',
		name: 'donut',
		icon: '<:donut:931797015371874345>',
		aliases: [],
		slotsUsed: 1,
		energy: 5,
		artist: '719365897458024558',
		regions: ['Norwood Mall', 'Pike Prison']
	},
	canned_meat: {
		type: 'Food',
		name: 'canned_meat',
		icon: '<:canned_meat:1061630553834651741>',
		artist: '577727980889964545',
		aliases: ['canned_food'],
		slotsUsed: 1,
		energy: 5,
		regions: ['Redding Forest']
	},
	get raw_meat (): Food & { name: 'raw_meat' } {
		return {
			type: 'Food',
			name: 'raw_meat',
			description: 'Looks like it could be cooked.',
			icon: '<:raw_meat:1062014895341715456>',
			artist: '577727980889964545',
			aliases: ['meat'],
			slotsUsed: 1,
			energy: 1,
			regions: ['Mulberry Farm', 'Redding Forest'],
			cooksInto: this.cooked_meat
		}
	},
	cooked_meat: {
		type: 'Food',
		name: 'cooked_meat',
		icon: '<:cooked_meat:1062014892456026144>',
		artist: '577727980889964545',
		aliases: ['steak', 'beef'],
		slotsUsed: 1,
		energy: 10,
		regions: []
	}
})
