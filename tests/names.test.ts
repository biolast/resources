import { constants } from '../src/index'


test('there are no duplicate first names', () => {
	const duplicates = constants.FIRST_NAMES.filter((name, i, arr) => name && arr.indexOf(name) !== i)

	expect(duplicates).toEqual([])
})

test('there are no duplicate last names', () => {
	const duplicates = constants.LAST_NAMES.filter((name, i, arr) => name && arr.indexOf(name) !== i)

	expect(duplicates).toEqual([])
})

test('first names are sorted alphabetically', () => {
	expect(constants.FIRST_NAMES).toStrictEqual([...constants.FIRST_NAMES].sort())
})

test('last names are sorted alphabetically', () => {
	expect(constants.LAST_NAMES).toStrictEqual([...constants.LAST_NAMES].sort())
})
