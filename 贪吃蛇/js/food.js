//开启新的作用域避免命名冲突
(function(window){
	var elements = [];
	//局部作用域,外面无法访问
	function Food(options){
		options = options || {};
		this.x = options.x || 20;
		this.y = options.y || 20;
		this.width = options.width || 20;
		this.height = options.height || 20;
		this.backgroundColor = options.backgroundColor || "green";
	}
	//随机生成食物
	Food.prototype.render = function(map){
		//删除之前的食物
		remove();
		//动态创建div 页面上显示的食物
		var div = document.createElement("div");
		map.appendChild(div);
		elements.push(div);
		// 设置div样式
		div.style.position = "absolute";
		div.style.backgroundColor = this.backgroundColor;
		div.style.width = this.width + 'px';
		div.style.height = this.height + 'px';
		//随机位置
		this.x = Tools.getRandom(0,map.offsetWidth/this.width-1)*this.width;
		this.y = Tools.getRandom(0,map.offsetHeight/this.height-1)*this.height;
		div.style.left = this.x + 'px';
		div.style.top = this.y + 'px';
		
	}
	function remove(){
		console.log(elements);
		for(var i = elements.length-1;i>=0;i--){
			//删除对应的食物后
		 	elements[i].parentNode.removeChild(elements[i]);
			//删除对应的数组元素
			elements.splice(0,1);
		 }
	
	}
	//把Food构造函数 让外部可以访问
	//新增window属性
	window.Food = Food;
})(window);
