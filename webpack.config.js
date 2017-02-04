module.exports = {
	entry: './src/index.js',
	output: {
		path: 'build',
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		contentBase: 'www',
		port: 3000
	}
};