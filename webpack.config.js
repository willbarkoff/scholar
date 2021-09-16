const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
	entry: [
		'react-hot-loader/patch',
		'./src/index.tsx'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devServer: {
		liveReload: true
	},
	plugins: [
		new CopyPlugin({
			patterns: [{ from: 'src/index.html' }],
		}),
		new MiniCssExtractPlugin()
	],
	module: {
		rules: [
			{
				test: /\.ts(x)?$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	resolve: {
		extensions: [
			'.tsx',
			'.ts',
			'.js'
		],
		alias: {
			'react-dom': '@hot-loader/react-dom'
		}
	}
};

module.exports = config;