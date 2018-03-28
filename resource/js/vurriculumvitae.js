require(['jquery', 'jquery.pagepiling', 'star', 'loading'], function($, undefine, Star, Loading) {
	//loading动画绑定
	Loading.init(pageInit);
	//滑动页面绑定
	$('#dowebok').pagepiling({
		onLeave: function(anchorLink, index) {
			//moonsky动画
			if(index == 2) {
				page2Init();
			}
		}
	});

	//页面初始化(loading之后使用 避免卡顿)
	function pageInit() {
		//星星动画
		Star.init($(".star-top"), "lg", 20);
		Star.init($(".star-top"), "md", 30);
		Star.init($(".star-top"), "sm", 60);
	}

	function page2Init() {
		//改变css样式
		//绑定Class
		//绑定夜色变化效果
		$(".moon-img").css({
			bottom: '70px',
			left: '80px'
		});
		$("#moon-sky").css("background", "radial-gradient(ellipse at bottom, rgb(27, 39, 60) 0%, #090a0f 100%)");
		$(".moon-img").removeClass("moon-rise");
		setTimeout(function() {
			$(".moon-img").addClass("moon-rise");
		}, 0)
		var changeNum = 0;
		var changeBgAnimate = setInterval(function() {
			//颜色值还要改
			switch(changeNum) {
				case 1:
					$("#moon-sky").css("background", "radial-gradient(ellipse at bottom, #394F74 0%, #090a0f 100%)");
					break;
				case 2:
					$("#moon-sky").css("background", "radial-gradient(ellipse at bottom, #404d68 0%, rgb(27, 39, 60) 100%)");
					break;
				case 3:
					clearInterval(changeBgAnimate);
					break;
			}
			changeNum++;
		}, 700);
	}
});