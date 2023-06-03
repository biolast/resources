import { Backpack } from '../../structures/items/Backpack.js'


export const SmallPouch = new Backpack({
	type: 'Backpack',
	name: 'small_pouch',
	discordIcon: '<:small_pouch:931797105369042955>',
	aliases: ['pouch'],
	slots: 4,
	slotsUsed: 1
})

export const ClothBackpack = new Backpack({
	type: 'Backpack',
	name: 'cloth_backpack',
	discordIcon: '<:cloth_backpack:933852769364877322>',
	aliases: ['backpack'],
	slots: 8,
	slotsUsed: 1
})

export const DuffleBag = new Backpack({
	type: 'Backpack',
	name: 'duffle_bag',
	discordIcon: '<:duffle_bag:933852647394537573>',
	aliases: ['duffle', 'bag'],
	slots: 14,
	slotsUsed: 2
})

export const Suitcase = new Backpack({
	type: 'Backpack',
	name: 'suitcase',
	discordIcon: '<:suitcase:938466039266685018>',
	aliases: ['suit', 'case'],
	slots: 28,
	slotsUsed: 2
})
