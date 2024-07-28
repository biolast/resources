import { Backpack } from '../../../structures/items/Backpack.js'


export const DuffleBag = new Backpack({
	type: 'Backpack',
	name: 'duffle_bag',
	discordIcon: '<:duffle_bag:933852647394537573>',
	aliases: ['duffle', 'bag'],
	slots: 17,
	slotsUsed: 2
})

export const Suitcase = new Backpack({
	type: 'Backpack',
	name: 'suitcase',
	discordIcon: '<:suitcase:938466039266685018>',
	aliases: ['suit', 'case'],
	slots: 25,
	slotsUsed: 2
})
