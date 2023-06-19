import image from '@rollup/plugin-image'
import typescript from '@rollup/plugin-typescript'
import dynamicImportVariables from '@rollup/plugin-dynamic-import-vars'
import copy from 'rollup-plugin-copy'


/** @type {import('rollup').RollupOptions} */
export default {
	input: 'src/index.ts',
	output: {
		dir: 'dist',
		format: 'esm',
		sourcemap: 'inline',
		exports: 'named'
	},
	plugins: [
		typescript(),
		image(),
		dynamicImportVariables(),
		copy({
			targets: [
				{ src: 'src/resources/fonts', dest: 'dist/resources/fonts' }
			]
		})
	]
}
