import { Ammunition } from "./items/Ammunition.js";
import { Backpack } from "./items/Backpack.js";
import { BodyArmor } from "./items/BodyArmor.js";
import { Food } from "./items/Food.js";
import { Helmet } from "./items/Helmet.js";
import { Leggings } from "./items/Leggings.js";
import { Medical } from "./items/Medical.js";
import { MeleeWeapon } from "./items/Melee.js";
import { RangedWeapon } from "./items/Ranged.js";
import { Supply } from "./items/Supply.js";
import { ThrowableWeapon } from "./items/Throwable.js";
import { Tool } from "./items/Tool.js";


type Item<T extends string = string> = Ammunition<T> | Backpack<T> | BodyArmor<T> | Food<T> | Helmet<T> | Leggings<T> | Medical<T> | MeleeWeapon<T> | RangedWeapon<T> | Supply<T> | ThrowableWeapon<T> | Tool<T>

export {
	Item,
	Ammunition,
	Backpack,
	BodyArmor,
	Food,
	Helmet,
	Leggings,
	Medical,
	MeleeWeapon,
	RangedWeapon,
	Supply,
	ThrowableWeapon,
	Tool
}
