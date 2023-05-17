import image from '@rollup/plugin-image'
import typescript from '@rollup/plugin-typescript'


/** @type {import('rollup').RollupOptions} */
export default {
	input: 'src/index.ts',
	output: {
		dir: 'dist',
		format: 'esm',
		sourcemap: 'inline'
	},
	plugins: [typescript(), image()]
}
