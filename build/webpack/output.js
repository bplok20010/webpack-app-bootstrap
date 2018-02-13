const path = require('path');

module.exports = function(env){
	return {
		path: path.resolve('./dist'),
		filename: '[name].[chunkhash].js'
	}	
}