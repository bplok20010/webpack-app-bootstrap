import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
//https://github.com/rollup/rollup/blob/a9f342cb26d14ae8ee93a8f8f39f35dc968e3461/src/finalisers/umd.js#L83
export default {
    input: 'src/index.js',
	output: {
		file: 'dist/index.js',
		format: 'umd',
		name: 'simplePivot',
		///legacy: true,
		sourcemap: true	
	},
    plugins: [
        resolve(),
        commonjs(),
        json(),
        babel({
			babelrc: false,
			"presets": [
				["env", {
				"modules": false,
				  "targets": {
					"browsers": ["ie 11"]
				  }
				}]
			],
			exclude: 'node_modules/**',
			runtimeHelpers: true,
			"plugins": [
				"external-helpers",
				//"transform-runtime",
				"transform-object-rest-spread"
			  ]
		}),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};