const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = function (options) {
	return {
		...options,
		entry: ['./src/main.ts'],
		watch: true,
		plugins: [...options.plugins, new webpack.HotModuleReplacementPlugin()],
	};
}
