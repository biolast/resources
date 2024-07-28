import { allItems } from '../src/index.js'
import { Food } from '../src/structures/items/Food.js'


const aliases: string[] = []

for (const item of allItems) {
	aliases.push(...item.aliases)
}

test('items have no duplicate names', () => {
	const duplicates = allItems.map(i => i.name).filter((name, i, arr) => name && arr.indexOf(name) !== i)

	expect(duplicates).toEqual([])
})

test('items have no duplicate aliases', () => {
	const duplicates = aliases.filter((alias, i, arr) => alias && arr.indexOf(alias) !== i)

	expect(duplicates).toEqual([])
})


describe.each(allItems)('Item (%s)', item => {
	if ('spreadsDamageToLimbs' in item) {
		test('damage should be divisible by the amount of limbs that damage is spread between', () => {
			expect(item.damage % (item.spreadsDamageToLimbs || 1)).toBe(0)
		})
	}

	if (item instanceof Food) {
		if (item.recipes?.length) {
			describe.each(item.recipes.map((el, index) => ({ recipe: el, index })))('cooking recipe at index $index', ({ index, recipe }) => {
				test('recipe requires 5 or less items', () => {
					expect(recipe.length).toBeLessThanOrEqual(5)
				})

				test('recipe has no duplicate items', () => {
					const duplicates = recipe.map(itm => itm.name).filter((itm, i, arr) => arr.indexOf(itm) !== i)
					expect(duplicates).toEqual([])
				})

				test('there are no other items with a duplicate recipe', () => {
					const itemsWithSameRecipe: string[] = []

					for (const itm of allItems) {
						if (itm.name !== item.name && itm instanceof Food && itm.recipes?.length) {
							for (const otherRecipe of itm.recipes) {
								if (otherRecipe.every(recipeItm => recipe.includes(recipeItm)) && recipe.every(recipeItm => otherRecipe.includes(recipeItm))) {
									itemsWithSameRecipe.push(itm.name)
								}
							}
						}
					}

					expect(itemsWithSameRecipe).toEqual([])
				})
			})
		}
	}
})
