require.config({
	paths: {
		'jquery': 'jquery-3.1.1.min',
		'star': 'star',
		'loading': 'loading'
	},
	shim: {
		/*'star': {
			deps: ['jquery'],
			exports: 'Star'
		},*/
		'jquery.pagepiling': {
			deps: ["jquery"]
		}
	}
});