import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
	input: './src/basic2-core.js',
	output: {
		file: 'dist/js/basic2-core.js',
		format: 'iife',
		name: 'pm',
		sourcemap: false
	},
	//external(id) { return !/^[\.\/]/.test(id) },
	plugins: [
		commonjs(),
		require("rollup-plugin-buble")(),
		nodeResolve({
			// pass custom options to the resolve plugin
			customResolveOptions: {
			moduleDirectory: 'node_modules'
			},
			jsnext: true,
			main: true,
			browser: true
		})
	]
};
