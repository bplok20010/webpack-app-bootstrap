
const webpack = require("webpack");
const path = require('path');

const entry = require('./webpack/entry');
const output = require('./webpack/output');
const plugins = require('./webpack/plugins');
const rules = require('./webpack/rules');

function config(env = 'development'){
	
	return {
		entry: entry(env),
		output: output(env),
		module: {
			rules: rules(env)
		},
		plugins: plugins(env)
	}
}
module.exports = config;