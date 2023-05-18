import image from '@rollup/plugin-image'
import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'


/** @type {import('rollup').RollupOptions} */
export default {
	input: 'src/index.ts',
	output: {
		dir: 'dist',
		format: 'esm',
		sourcemap: 'inline'
	},
	plugins: [
		typescript(),
		image(),
		copy({
			targets: [
				{ src: 'src/fonts', dest: 'dist/fonts' }
			]
		})
	]
}
