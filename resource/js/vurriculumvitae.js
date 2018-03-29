require(['jquery', 'jquery.pagepiling', 'pageinit', 'loading'], function($, undefine, PageInit, Loading) {
	
	//loading动画绑定
	Loading.init(PageInit.pageInit);
	
	//滑动页面绑定
	$('#dowebok').pagepiling({
		onLeave: function(anchorLink, index) {
			//moonsky动画
			if(index == 2) {
				PageInit.page2Iint();
			}
			if(index == 3) {
				PageInit.page3Init();
			}
		}
	});

});