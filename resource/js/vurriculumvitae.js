/*页面初始化主函数*/
require(['jquery', 'jquery.pagepiling', 'pageinit', 'loading'], function($, undefine, PageInit, Loading) {

	//loading动画绑定
	Loading.init(PageInit.page1Init);

	//滑动页面绑定
	$('#dowebok').pagepiling({
		onLeave: function(index, nextIndex, direction) {
			if(index == 1 && direction == "down") {
				PageInit.page1Stop();
			}
			if(nextIndex == 1) {
				PageInit.page1Init();
			}
			if(nextIndex == 2) {
				PageInit.page2Init();
			}
			if(nextIndex == 3) {
				PageInit.page3Init();
			}
			if(nextIndex == 4) {
				PageInit.page4Init();
			}
		}
		
	});

});