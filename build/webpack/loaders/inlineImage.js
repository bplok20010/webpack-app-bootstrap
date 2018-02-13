/**
 * npm install --save-dev url-loader
 */

module.exports = {
	test: /\.(png|jpg|gif)$/,
	use: [
		{
			loader: 'url-loader',
			options: {
				limit: 8192
			}
		}
	]
};