import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
	input: './src/basic1.js',
	output: {
		file: 'dist/js/basic1.js',
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
