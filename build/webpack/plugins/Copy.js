///npm install --save-dev copy-webpack-plugin
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(){
	return new CopyWebpackPlugin([
		/* { from: 'from/file.txt', to: 'to/file.txt' },*/
	]);
}