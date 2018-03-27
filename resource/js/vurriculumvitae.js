require(['jquery', 'jquery.pagepiling', 'star'], function($, undefine, Star) {
	//滑动
	$('#dowebok').pagepiling();
	//星星动画
	Star.init($(".star-top"), "lg", 30);
	Star.init($(".star-top"), "md", 40);
	Star.init($(".star-top"), "sm", 80);
});