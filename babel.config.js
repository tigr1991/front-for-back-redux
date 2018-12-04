module.exports = function(api) {
	api.cache(true)
	const presets = [
		[
			'@babel/preset-env',
			{
				modules: false,
			},
		],
		'@babel/preset-react',
	]
	const plugins = [
		[
			'@babel/plugin-proposal-decorators',
			{
				legacy: true,
			},
		],
		[
			'@babel/plugin-proposal-class-properties',
			{
				loose: true,
			},
		],
		'@babel/plugin-proposal-export-default-from',
		'@babel/plugin-proposal-export-namespace-from',
		'@babel/plugin-proposal-object-rest-spread',
		'@babel/plugin-transform-runtime',
	]

	return {
		presets,
		plugins,
	}
}
