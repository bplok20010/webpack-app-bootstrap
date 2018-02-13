/**
 * npm install --save-dev file-loader
 */

module.exports = {
	test: /\.(png|jpg|gif)$/,
	use: [
		{
			loader: "file-loader",
			options: {
				 name: 'images/[name].[ext]'
			}
		}
	]
};