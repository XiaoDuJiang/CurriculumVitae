define(['jquery'], function($) {
	//然后随机时间？随机地方？生成几个星星？然后移动动画？怎么消失？还是不消失？
	var Star = function() {
		var star = {};
		/**
		 * 星星初始化方法
		 * @param {Jquery} $divbox
		 * @param {String} size lg/md/sm
		 * @param {int} num 星星数量(10的倍数)
		 */
		star.init = function($divbox, size, num) {
			//首先屏幕中生成星星

			//获取区域
			var sizeAry = buildSizeAry();
			//放置位置的数组
			var positionAry = [];
			//每个区域生成星星的数量
			var cellNum = Math.floor(num / 10);
			//生成星星位置
			for(var j = 0; j < sizeAry.length; j++) {
				for(var i = 0; i < cellNum; i++) {
					var xRd = 20 * Math.random();
					var yRd = 50 * Math.random();
					positionAry.push(
						[sizeAry[j][0] + xRd + "%", sizeAry[j][1] + yRd + "%"]
					);
				}
			}

			var starArys = [];
			//显示初始的星星
			for(var starPos in positionAry) {
				var $starDiv = $("<div class='star-" + size + "'></div>");
				$starDiv.css({
					top: positionAry[starPos][1],
					left: positionAry[starPos][0]
				});
				starArys.push($starDiv);
				$divbox.append($starDiv);
			}

			//绑定移动动画 animate 通过屏幕的高度和时间去计算移动像素 并且绑定删除方法		

			//10s 15s 20s
			var clientHeight = window.innerHeight;
			//时间
			var moveTime;
			//移动次数
			var moveStep;
			//每次移动的像素
			var movePx;
			switch(size) {
				case "lg":
					moveTime = 40000;
					moveStep = moveTime / 50;
					movePx = clientHeight / moveTime * 50;
					break;
				case "md":
					moveTime = 30000;
					moveStep = moveTime / 50;
					movePx = clientHeight / moveTime * 50;
					break;
				case "sm":
					moveTime = 18000;
					moveStep = moveTime / 50;
					movePx = clientHeight / moveTime * 50;
					break;
			}

			//初次的动画
			var firstMoveAnimate = setInterval(function() {
				$(".star-" + size).each(function() {
					$(this).css("top", parseFloat($(this).css("top")) - movePx + "px");
					var $firstStar = $(this);
					setTimeout(function() {
						$firstStar.remove();
					}, moveTime);
				});
				moveStep--;
				if(firstMoveAnimate == 0) {
					clearInterval(firstMoveAnimate);
				}
			}, 50)

			//根据时间随机生成新的星星 并且绑定动画CSS3 并且绑定删除方法
			var createTime;
			switch(size) {
				case "lg":
					createTime = 400;
					break;
				case "md":
					createTime = 360;
					break;
				case "sm":
					createTime = 200;
					break;
			}

			var createNum = 5;
			var createAry;
			setInterval(function() {
				//伪随机5个区域生成星星
				if(createNum == 5) {
					createAry = [0, 20, 40, 60, 80];
				}
				var aryNum = Math.floor(createNum * Math.random());
				leftPx = createAry[aryNum] + 20 * Math.random() + "%";
				var $starDiv = $("<div class='star-" + size + " star-" + size + "-animate'></div>");
				$starDiv.css({
					top: "100%",
					left: leftPx
				});
				$divbox.append($starDiv);
				setTimeout(function() {
					$starDiv.remove();
				}, moveTime + 1000);
				createAry.splice(aryNum, 1);
				createNum--;
				createNum = createNum == 0 ? 5 : createNum;
			}, createTime);

		}

		//将屏幕分成十块 避免分布不均匀
		//x:x轴取值范围
		//y:y轴取值范围
		function buildSizeAry() {
			var sizeAry = [];
			for(var i = 0; i < 10; i++) {
				var xNum = i % 5;
				var yNum = i < 5 ? 0 : 1;
				sizeAry.push([xNum * 20, yNum * 50]);
			}

			return sizeAry;
		}

		return star;
	}();
	
	return Star;
});