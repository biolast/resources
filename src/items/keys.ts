import { Key } from '../../types/Items.js'


const keysObject = <T>(et: { [K in keyof T]: Key & { name: K } }) => et

export const keys = keysObject({
	shed_key: {
		type: 'Key',
		name: 'shed_key',
		aliases: [],
		icon: '<:basic_key:938894742022934600>',
		slotsUsed: 2,
		artist: '719365897458024558',
		regions: ['Eastside Suburbs']
	},
	gunsafe_code: {
		type: 'Key',
		name: 'gunsafe_code',
		aliases: ['gunsafe'],
		icon: '<:basic_key:938894742022934600>',
		slotsUsed: 1,
		regions: ['Mulberry Farm']
	},
	daves_drug_key: {
		type: 'Key',
		name: 'daves_drug_key',
		aliases: ['drug_key', 'daves_key', 'dave'],
		icon: '<:basic_key:938894742022934600>',
		slotsUsed: 1,
		artist: '719365897458024558',
		regions: ['Mulberry Farm']
	},
	dereks_shop_key: {
		type: 'Key',
		name: 'dereks_shop_key',
		aliases: ['dereks_key', 'derek'],
		icon: '<:basic_key:938894742022934600>',
		slotsUsed: 2,
		artist: '719365897458024558',
		regions: ['Norwood Mall']
	},
	florreds_pharmacy_key: {
		type: 'Key',
		name: 'florreds_pharmacy_key',
		aliases: ['florreds_key', 'pharmacy_key', 'florred'],
		icon: '<:basic_key:938894742022934600>',
		slotsUsed: 2,
		artist: '719365897458024558',
		regions: ['Norwood Mall']
	},
	cell_key: {
		type: 'Key',
		name: 'cell_key',
		aliases: ['cellkey'],
		icon: '<:cell_key:938879124058046485>',
		slotsUsed: 1,
		regions: ['Pike Prison']
	},
	armory_key: {
		type: 'Key',
		name: 'armory_key',
		aliases: ['armory'],
		icon: '<:basic_key:938894742022934600>',
		slotsUsed: 1,
		regions: ['Pike Prison']
	},
	sacred_pendant: {
		type: 'Key',
		name: 'sacred_pendant',
		aliases: ['sacred', 'pendant'],
		icon: '<:sacred_pendant:950183471786102824>',
		slotsUsed: 1,
		artist: '719365897458024558',
		regions: ['Redding Forest']
	}
})
