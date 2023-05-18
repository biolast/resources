interface Alias {
	/**
	 * Slash command the aliases will resolve to, can be a sub command as well
	 */
	command: string
	/**
	 * Possible aliases
	 */
	aliases: string[]
}

export const textCommandAliases: Alias[] = [
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
