define(['jquery'], function() {
	var Loading = {
		/*
		 * initFunc 回调函数 可以放入页面初始化的代码
		 */
		init: function(initFunc) {
			//loadingimgX轴动画
			var stopLoadingX = false;
			loadingimgX();

			function loadingimgX() {
				$(".loading-img").stop().animate({
					left: "-553px"
				}, 1000, "linear", function() {
					$(".loading-img").css("left", "0");
					//解除递归的标志
					if(!stopLoadingX) {
						loadingimgX();
					}
				});
			}

			//第二步动画
			setTimeout(function() {
				//如果资源初步加载完成 执行下一步动画
				if(document.readyState == "complete") {
					//加载100%
					$(".loading-bottom").css("height", "300px");
					$(".loading-img").css("bottom", "300px");
					$(".loading-bottom p").css("margin-top", "140px");
					$(".loading-bottom").css("animation", "loadingBottom2 1s linear");
					$(".loading-img").css("animation", "loadingImgY2 1s linear");
					$(".loading-bottom p").css("animation", "pMarginChange 1s linear");
					//占满屏幕动画
					setTimeout(function() {
						stopLoadingX = true;
						$(".loading-img").remove();
						$(".loading-bottom p").remove();
						$(".loading-ball").css("overflow", "visible");
						var clientHeight = window.innerHeight;
						var clientWidth = window.innerWidth;
						$(".loading-bottom").css("position", "absolute");
						$(".loading-bottom").css("border-radius", "50%");
						$(".loading-bottom").animate({
							height: 2 * clientHeight + "px",
							top: (150 - clientHeight) + "px",
							width: 2 * clientWidth + "px",
							left: (150 - clientWidth) + "px"
						}, null, "linear", function() {
							$(".loading-box").animate({
								opacity: 0
							}, 200, "linear", function() {
								$(".loading-box").css("display", "none");
							});
							return initFunc();
						});
					}, 1500);
				}
			}, 2500);
		}
	}

	return Loading;

});