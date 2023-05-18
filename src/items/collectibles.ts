import { Collectible } from '../../types/Items.js'


const collectibleObject = <T>(et: { [K in keyof T]: Collectible & { name: K } }) => et

export const collectibles = collectibleObject({
	walker_goop: {
		type: 'Collectible',
		name: 'walker_goop',
		aliases: ['goop'],
		icon: '<:walker_goop:931425196466905088>',
		slotsUsed: 1,
		artist: '719365897458024558',
		regions: ['Eastside Suburbs', 'Mulberry Farm']
	},
	walker_sludge: {
		type: 'Collectible',
		name: 'walker_sludge',
		aliases: ['sludge'],
		icon: '<:walker_sludge:931797105448714282>',
		slotsUsed: 1,
		artist: '719365897458024558',
		regions: ['Redding Forest', 'Norwood Mall']
	},
	farming_guide: {
		type: 'Collectible',
		name: 'farming_guide',
		aliases: ['farming_guide', 'guide', 'farm_guide'],
		description: 'Some helpful tips for growing crops. Drop from The Farm.',
		icon: '<:farming_guide:933857770061578260>',
		slotsUsed: 1,
		artist: '719365897458024558',
		regions: []
	},
	antique_vase: {
		type: 'Collectible',
		name: 'antique_vase',
		aliases: ['vase'],
		description: 'An old vase.',
		icon: '<:antique_vase:931797015346683934>',
		slotsUsed: 2,
		artist: '719365897458024558',
		regions: []
	},
	tech_trash: {
		type: 'Collectible',
		name: 'tech_trash',
		aliases: ['tech', 'trash'],
		description: 'Various bits and gadgets salvaged from computers.',
		icon: '<:tech_trash:933851376981790820>',
		slotsUsed: 2,
		artist: '719365897458024558',
		regions: []
	},
	escape_from_fristoe: {
		type: 'Collectible',
		name: 'escape_from_fristoe',
		aliases: ['fristoe'],
		description: 'The most popular first-person shooter game of the pre-apocalyptic world!',
		icon: '<:xp_star_pixel:935658011379257375>',
		slotsUsed: 2,
		regions: []
	},
	gold_watch: {
		type: 'Collectible',
		name: 'gold_watch',
		aliases: ['watch'],
		description: 'Must have cost a fortune before the outbreak started.',
		icon: '<:gold_watch:938503665306697739>',
		slotsUsed: 1,
		artist: '168958344361541633',
		regions: []
	},
	dog_tags: {
		type: 'Collectible',
		name: 'dog_tags',
		aliases: ['tags'],
		description: 'Identification tags worn by scavengers.',
		icon: '<:dog_tags:930978901788864523>',
		slotsUsed: 0.1,
		artist: '168958344361541633',
		regions: undefined
	}
})
