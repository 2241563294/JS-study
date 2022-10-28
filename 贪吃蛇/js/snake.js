(function(){
	var body = [];
	var elements = [];
	var position = 'absolute';
	function Snake(options){
		options = options || {};
		this.width = options.width || 20;
		this.height = options.height || 20;
		//移动方向
		this.direction = options.direction || 'right';
		//蛇的身体
		this.body = [
			{x: 3,y: 2, color: '#777'},
			{x: 2,y: 2, color: 'pink'},
			{x: 1,y: 2, color: 'pink'}
		];
	}
	Snake.prototype.render = function(map){
		remove();
		//把每一个蛇节渲染到地图上
		for(let i = 0,len = this.body.length;i<len;i++){
			var obj = this.body[i];
			var div = document.createElement('div');
			map.appendChild(div);
			elements.push(div);
			div.style.position = position;
			div.style.width = this.width + 'px';
			div.style.height = this.height + 'px';
			div.style.left = obj.x*this.width + 'px';
			div.style.top = obj.y *this.height + 'px';
			div.style.backgroundColor = obj.color;
		}
	}
	//控制蛇移动的方法
	Snake.prototype.move = function(food,map){
		//控制蛇身体
		for(var i = this.body.length-1;i>0;i--){
			this.body[i].x = this.body[i-1].x;
			this.body[i].y = this.body[i-1].y;
		}
		//控制蛇头的移动
		var head = this.body[0];
		//判断蛇移动的方向
		switch(this.direction){
			case 'right':
			head.x += 1;
			break;
			case 'left':
			head.x -= 1;
			break;
			case 'bottom':
			head.y += 1;
			break;
			case 'top':
			head.y -= 1;
			break;
		}
		//蛇头和食物重合
		var headX = head.x*this.width;
		var headY = head.y*this.height;
		if(headX ===food.x && headY ===food.y){
			// 让蛇增加一节
			var last = this.body[this.body.length-1];
			this.body.push({
				x: last.x,
				y: last.y,
				color: last.color
		});
		
			// 随机生成食物
			food.render(map);
		}
	}
	function remove(){
		for(var i = elements.length-1;i>=0;i--){
			elements[i].parentNode.removeChild(elements[i]);
			elements.splice(i,1);
		}
		
	}
	
		
	window.Snake = Snake;
})();