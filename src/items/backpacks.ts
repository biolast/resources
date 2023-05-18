import { Backpack } from '../../types/Items.js'


const backpackObject = <T>(et: { [K in keyof T]: Backpack & { name: K } }) => et

export const backpacks = backpackObject({
	small_pouch: {
		type: 'Backpack',
		name: 'small_pouch',
		icon: '<:small_pouch:931797105369042955>',
		aliases: ['pouch'],
		slots: 4,
		slotsUsed: 1,
		artist: '719365897458024558',
		regions: ['Eastside Suburbs']
	},
	cloth_backpack: {
		type: 'Backpack',
		name: 'cloth_backpack',
		icon: '<:cloth_backpack:933852769364877322>',
		aliases: ['backpack'],
		slots: 8,
		slotsUsed: 1,
		artist: '719365897458024558',
		regions: ['Mulberry Farm', 'Redding Forest']
	},
	duffle_bag: {
		type: 'Backpack',
		name: 'duffle_bag',
		icon: '<:duffle_bag:933852647394537573>',
		aliases: ['duffle', 'bag'],
		slots: 14,
		slotsUsed: 2,
		artist: '719365897458024558',
		regions: ['Norwood Mall']
	},
	suitcase: {
		type: 'Backpack',
		name: 'suitcase',
		icon: '<:suitcase:938466039266685018>',
		aliases: ['suit', 'case'],
		slots: 28,
		slotsUsed: 2,
		artist: '168958344361541633',
		regions: ['Pike Prison']
	}
})
