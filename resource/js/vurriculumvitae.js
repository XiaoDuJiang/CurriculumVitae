require(['jquery', 'jquery.pagepiling', 'star', 'loading'], function($, undefine, Star, Loading) {
	//loading动画绑定
	Loading.init(pageInit);
	//滑动页面绑定
	$('#dowebok').pagepiling();
	
	//页面初始化(loading之后使用 避免卡顿)
	function pageInit() {
		//星星动画
		Star.init($(".star-top"), "lg", 30);
		Star.init($(".star-top"), "md", 40);
		Star.init($(".star-top"), "sm", 80);
	}

});