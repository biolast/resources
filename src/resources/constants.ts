import skullImage from './images/skull.png'
import hpBarEmptyImage from './images/hp_bar_empty.png'
import hpBarFullImage from './images/hp_bar_full.png'
import playerHpBarEmptyImage from './images/player_hp_bar_empty.png'
import playerHpBarFullImage from './images/player_hp_bar_full.png'
import textBarBackgroundImage from './images/text_bar.png'
import mobBattleTemplateBackgroundImage from './images/mob_battle_template.png'
import playerBattleTemplateBackgroundImage from './images/player_battle_template.png'


export const DUEL_IMAGES = {
	Skull: skullImage,
	HpBarEmpty: hpBarEmptyImage,
	HpBarFull: hpBarFullImage,
	PlayerHpBarEmpty: playerHpBarEmptyImage,
	PlayerHpBarFull: playerHpBarFullImage,
	TextBarBackground: textBarBackgroundImage,
	MobBattleTemplateBackground: mobBattleTemplateBackgroundImage,
	PlayerBattleTemplateBackground: playerBattleTemplateBackgroundImage
}


export * from './names.js'

/** the default storage space for player inventories */
export const DEFAULT_BACKPACK_LIMIT = 15.0

/** how much energy a player can have max */
export const DEFAULT_MAX_ENERGY = 100

/**
 * the percentage of accuracy needed for player to be able to target a limb in battles.
 * this percentage INCLUDES stimulant bonuses as well, so a 30% accuracy weapon with a +25% accuracy stimulant
 * would have 55% total accuracy.
 */
export const LIMB_TARGETING_ACCURACY_REQUIRED = 50

export const EMBED_COLORS = {
	get default () {
		const possibleColors = [9253685]
		return possibleColors[Math.floor(Math.random() * possibleColors.length)]
	},
	get success () {
		const possibleColors = [9043800]
		return possibleColors[Math.floor(Math.random() * possibleColors.length)]
	},
	get failure () {
		const possibleColors = [16734296]
		return possibleColors[Math.floor(Math.random() * possibleColors.length)]
	}
}

/** how much will damage be multiplied by when hitting specific limb */
export const LIMB_DAMAGE_MULTIPLIERS = {
	head: 1.5,
	chest: 1.0,
	arms: 0.5,
	legs: 0.5
} as const

/** how many items will scavenging produce */
export const DEFAULT_SCAVENGE_ROLLS = {
	min: 2,
	max: 3
} as const

/** how many items will a raider mob have in their inventory, increasing beyond 4 max overflows the battle image inventory */
export const DEFAULT_RAIDER_MOB_ROLLS = {
	min: 3,
	max: 4
} as const
/** how many items will a zombie mob have in their inventory, increasing beyond 5 max overflows the battle image inventory */
export const DEFAULT_ZOMBIE_MOB_ROLLS = {
	min: 3,
	max: 5
} as const


/** how many rooms does base start with */
export const BASE_STARTING_ROOMS = 1
/** how many shelves does a new base start with */
export const BASE_STARTING_SHELVES = 1
/** how many beds does a new base start with */
export const BASE_STARTING_BEDS = 1

/** how many rooms can a user build */
export const BASE_MAX_ROOMS = 10
/** how many shelves can be crafted for each room player has in their base */
export const BASE_MAX_SHELVES_PER_ROOM = 4
/** how many beds can be crafted for each room player has in their base */
export const BASE_MAX_BEDS_PER_ROOM = 2

/** how much space can base storage hold with each shelf */
export const BASE_STORAGE_SPACE_PER_SHELF = 5.0
/** how many zombies does 1 wood spike trap kill when base is raided by horde */
export const BASE_WOOD_SPIKE_PROTECTION = 10

/** aliases for commands when user is sending commands using messages instead of slash commands */
export const TEXT_COMMAND_ALIASES: {
	/** slash command the aliases will resolve to, can be a sub command as well */
	command: string
	/** possible aliases */
	aliases: string[]
}[] = [
	// info command aliases
	{
		command: 'inventory',
		aliases: ['i', 'inv']
	},
	{
		command: 'profile',
		aliases: ['p', 'stats', 'statistics']
	},
	{
		command: 'level',
		aliases: ['xp', 'exp', 'lvl']
	},
	{
		command: 'item',
		aliases: ['items', 'info', 'itemlist']
	},
	{
		command: 'cooldowns',
		aliases: ['cd', 'cds']
	},
	{
		command: 'health',
		aliases: ['hp', 'status']
	},
	{
		command: 'notifications',
		aliases: ['notifs']
	},
	{
		command: 'base',
		aliases: ['b']
	},
	{
		command: 'base storage',
		aliases: ['b s']
	},
	{
		command: 'stamina',
		aliases: ['stam', 'energy']
	},

	// scavenging command aliases
	{
		command: 'scavenge',
		aliases: ['scav', 'loot']
	},
	{
		command: 'cook',
		aliases: ['campfire', 'fire']
	},

	// equipment command aliases
	{
		command: 'consume',
		aliases: ['eat']
	},
	{
		command: 'trash',
		aliases: ['junk', 'drop']
	},
	{
		command: 'craft',
		aliases: ['crafting']
	}
]
