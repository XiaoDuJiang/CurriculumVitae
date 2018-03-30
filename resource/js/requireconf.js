/*require配置文件*/
require.config({
	paths: {
		'jquery': 'jquery-3.1.1.min',
		'star': 'star',
		'loading': 'loading',
		'pageinit': 'pageinit'
	},
	shim: {
		'jquery.pagepiling': {
			deps: ["jquery"]
		}
	}
});