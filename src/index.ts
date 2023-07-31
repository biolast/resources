import skullImage from '../src/resources/images/skull.png'
import hpBarEmptyImage from '../src/resources/images/hp_bar_empty.png'
import hpBarFullImage from '../src/resources/images/hp_bar_full.png'
import playerHpBarEmptyImage from '../src/resources/images/player_hp_bar_empty.png'
import playerHpBarFullImage from '../src/resources/images/player_hp_bar_full.png'
import textBarBackgroundImage from '../src/resources/images/text_bar.png'
import mobBattleTemplateBackgroundImage from '../src/resources/images/mob_battle_template.png'
import playerBattleTemplateBackgroundImage from '../src/resources/images/player_battle_template.png'
import * as ranged from './resources/items/ranged.js'
import * as melee from './resources/items/melee.js'
import * as armor from './resources/items/armor.js'
import * as helmets from './resources/items/helmets.js'
import * as ammunition from './resources/items/ammunition.js'
import * as medicals from './resources/items/medicals.js'
import * as backpacks from './resources/items/backpacks.js'
import * as throwables from './resources/items/throwables.js'
import * as foods from './resources/items/foods.js'
import * as supplies from './resources/items/supplies.js'


export const images = {
	skull: skullImage,
	hpBarEmpty: hpBarEmptyImage,
	hpBarFull: hpBarFullImage,
	playerHpBarEmpty: playerHpBarEmptyImage,
	playerHpBarFull: playerHpBarFullImage,
	textBarBackground: textBarBackgroundImage,
	mobBattleTemplateBackground: mobBattleTemplateBackgroundImage,
	playerBattleTemplateBackground: playerBattleTemplateBackgroundImage
}

export const items = {
	...ranged,
	...melee,
	...armor,
	...helmets,
	...ammunition,
	...medicals,
	...backpacks,
	...throwables,
	...foods,
	...supplies
}

export const allItems = Object.values(items)

export type ItemName = typeof items[keyof typeof items]['name']
export const isValidItemName = (s: string): s is ItemName => s in allItems.map(i => i.name)

export * as constants from './resources/constants.js'
export * from './utils.js'
export * from './structures/items/Ammunition.js'
export * from './structures/items/Backpack.js'
export * from './structures/items/BodyArmor.js'
export * from './structures/items/Food.js'
export * from './structures/items/Helmet.js'
export * from './structures/items/Item.js'
export * from './structures/items/Medical.js'
export * from './structures/items/MeleeWeapon.js'
export * from './structures/items/RangedWeapon.js'
export * from './structures/items/Supply.js'
export * from './structures/items/ThrowableWeapon.js'
export * from './structures/mobs/GenericMob.js'
export * from './structures/mobs/UniqueMob.js'
