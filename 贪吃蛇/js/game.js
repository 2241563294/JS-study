(function(){
	var gthis;
	var timer;
	function Game(map){
		this.food = new Food();
		this.snake = new Snake();
		this.map = map;
		gthis = this;
	}
	
	
	Game.prototype.start = function(){
		//把蛇和食物对象 渲染到地图上
		this.food.render(this.map);
		this.snake.render(this.map);
		//开始游戏逻辑
		//蛇移动起来
		runSnake();
		//通过键盘控制蛇的移动
		bindKey();
	}
	Game.prototype.end = function(){
		clearInterval(timer);
	}
	//蛇移动起来--私有
	function runSnake(){
		timer = setInterval(function(){
			this.snake.move(this.food,this.map);
			this.snake.render(this.map);
			// 当蛇遇到边界游戏结束
			var maxX = this.map.offsetWidth / this.snake.width;
			var maxY = this.map.offsetHeight / this.snake.height;
			var headX = this.snake.body[0].x;
			var headY = this.snake.body[1].y;
			if(headX<0 || headX >= maxX || headY < 0 || headY >= maxY){
				clearInterval(timer);
				alert("啊我死啦~");
			}
		}.bind(gthis),150);
		//bind可以改变函数的this为指定指向
		//原理是在内存新建一个函数，让新函数指向我们给的参数
		//bind并没有调用方法
	}
	//通过键盘控制蛇的移动
	function bindKey(){
		document.addEventListener("keydown",function(e){
			// console.log(e.keyCode);
			/*上：38，下：40，左：37，右,39*/
			if(e.keyCode == 39 && gthis.snake.direction != "left"){
				gthis.snake.direction = "right";
			}else if(e.keyCode == 37 && gthis.snake.direction != "right"){
				gthis.snake.direction = "left";
			}else if(e.keyCode == 38 && gthis.snake.direction != "bottom"){
				gthis.snake.direction = "top";
			}else if(e.keyCode == 40 && gthis.snake.direction != "top"){
				gthis.snake.direction = "bottom";
			}
		},false);
	}
	window.Game = Game;
})();