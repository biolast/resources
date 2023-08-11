export * from './names.js'

/** The default storage space for player inventories */
export const DEFAULT_BACKPACK_LIMIT = 15.0

/** How much energy a player can have max */
export const DEFAULT_MAX_ENERGY = 30

/**
 * The percentage of accuracy needed for player to be able to target a limb in battles.
 * This percentage INCLUDES bonuses as well, so a 30% accuracy weapon with a +25% accuracy bonus
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

/** How much will damage be multiplied by when hitting specific limb */
export const LIMB_DAMAGE_MULTIPLIERS = {
	head: 1.5,
	chest: 1.0,
	arms: 0.5,
	legs: 0.5
} as const

/** How many items will scavenging produce */
export const DEFAULT_SCAVENGE_ROLLS = {
	min: 2,
	max: 3
} as const


/** How many shelves does a new base start with */
export const BASE_STARTING_SHELVES = 1
/** How many beds does a new base start with */
export const BASE_STARTING_BEDS = 1

/** How many shelves can a user build max */
export const BASE_STARTING_MAX_SHELVES = 10
/** How many beds can a user build max */
export const BASE_STARTING_MAX_BEDS = 5

/** How much space can base storage hold with each shelf */
export const BASE_STORAGE_SPACE_PER_SHELF = 10.0
/** How many zombies does 1 wood spike trap kill when base is raided by horde */
export const BASE_WOOD_SPIKE_PROTECTION = 10

/**
 * Calculates the XP required to level up given a level.
 * @param level The level to get XP required for
 * @returns The XP required for specified level
 */
export const LEVEL_FORMULA = (level: number) => Math.floor(200 * (level ** 1.7))

/** Aliases for commands when user is sending commands using messages instead of slash commands */
export const TEXT_COMMAND_ALIASES: {
	/** Slash command the aliases will resolve to, can be a sub command as well */
	command: string
	/** Possible aliases */
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
		aliases: ['xp', 'lvl']
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
		command: 'energy',
		aliases: ['e']
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
