import { LEVEL_FORMULA } from './resources/constants.js'


/**
 * @param playerEXP players experience points
 * @param level players current level
 */
export function getPlayerXp (playerEXP: number, level: number): {
	/** how much xp the player has earned towards the next level (this is used to calculate level % progress by doing: relativeLevelXp / levelTotalXpNeeded) */
	relativeLevelXp: number
	/** amount of xp needed to reach the next level account for the players current xp (if this is 0 then the player needs to be leveled up) */
	xpUntilLevelUp: number
	/** the total amount of xp needed to progress from current level to the next (regardless of users current xp) */
	levelTotalXpNeeded: number
} {
	let levelXP = 0
	let totalNeeded = 0

	for (let i = 1; i <= level; i++) {
		totalNeeded += LEVEL_FORMULA(i)

		if (i !== level) {
			levelXP += LEVEL_FORMULA(i)
		}
	}

	return {
		relativeLevelXp: playerEXP - levelXP,
		xpUntilLevelUp: Math.max(0, totalNeeded - playerEXP),
		levelTotalXpNeeded: LEVEL_FORMULA(level)
	}
}
