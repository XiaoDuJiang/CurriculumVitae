define(['jquery', 'star'], function($, Star) {
	var pageInit = {
		pageInit: function() {
			Star.init($(".star-top"), "lg", 20);
			Star.init($(".star-top"), "md", 30);
			Star.init($(".star-top"), "sm", 60);
		},
		page2Iint: function() {
			//改变css样式
			//绑定Class
			//绑定夜色变化效果
			$(".moon-img").css({
				bottom: '70px',
				left: '80px'
			});
			$("#moon-sky").css("background", "radial-gradient(ellipse at bottom, rgb(27, 39, 60) 0%, #090a0f 100%)");
			$(".moon-img").removeClass("moon-rise");
			$(".technology").removeClass("technologyShow");
			$(".technology").css("opacity", 0);
			setTimeout(function() {
				$(".moon-img").addClass("moon-rise");
			}, 0);
			setTimeout(function() {
				$(".technology").css("opacity", 1);
				$(".technology").addClass("technologyShow");
			}, 1000);

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
		},
		page3Init: function() {
			//太阳升起动画
			$(".sun-img").css("bottom", "-100px");
			$(".sun-sky").css("background", "radial-gradient(ellipse at bottom, #394F74 0%, #090a0f 100%)");
			$(".sun-sea").css("background", "radial-gradient(ellipse at top, #090a0f 0%, #394F74 100%)");
			//标题以及项目动画
			$(".project-box").css("opacity", 0);
			$(".page-title").css("opacity", 0);
			$(".page-title").css("color", "white");
			var changeNum = 0;
			setTimeout(function() {
				//太阳升起动画
				$(".sun-img").removeClass("sunRise");
				setTimeout(function() {
					$(".sun-img").css("bottom", "100px");
					$(".sun-img").addClass("sunRise");
				}, 0);
				//项目动画
				$(".project-box").stop().animate({
					"opacity": 1
				}, 2000);
				//标题动画
				$(".page-title").stop().animate({
					"opacity": 1
				}, 2000);
			}, 1200);

			//背景改变动画
			var changeBgAnimate = setInterval(function() {
				//颜色值还要改
				switch(changeNum) {
					case 1:
						$(".sun-sky").css("background", "radial-gradient(ellipse at bottom, white 0%, #394F74 100%)");
						$(".sun-sea").css("background", "radial-gradient(ellipse at top, #666666 0%, #394F74 100%)");
						break;
					case 2:
						$(".sun-sky").css("background", "radial-gradient(ellipse at bottom, #ffffcc 0%, #394F74 100%)");
						$(".sun-sea").css("background", "radial-gradient(ellipse at top, #669999 0%, #394F74 100%)");
						break;
					case 3:
						$(".sun-sky").css("background", "radial-gradient(ellipse at bottom, white 0%, #ffffcc 100%)");
						$(".sun-sea").css("background", "radial-gradient(ellipse at top, #339999 0%, #394F74 100%)");
						$(".page-title").css("color", "#394F74");
						break;
					case 4:
						clearInterval(changeBgAnimate);
						break;
				}
				changeNum++;
			}, 800);

		}
	}

	return pageInit;
});