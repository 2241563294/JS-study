function Box(parent, options){
	options = options || {};
	this.width = options.Width || 20;
	this.height = options.height || 20;
	this.backgroundColor = options.backgroundColor || 'red';
	this.x = options.x || 50;
	this.y = options.y || 50;
	
	//创建对应的div,设置为属性，以便原型对其访问
	this.div = document.createElement("div");
	parent.appendChild(this.div);
	this.parent = parent;
	//设置样式
	this.init();
}
//初始化方块的样式
Box.prototype.init = function(){
	var div = this.div;
	div.style.backgroundColor = this.backgroundColor;
	div.style.width = this.width + 'px';
	div.style.height = this.height + 'px';
	div.style.left = this.x +'px';
	div.style.top = this.y + 'px';
	div.style.position = "absolute";
}
//随机生成方块的位置
Box.prototype.random = function(){
	var x = Tools.getRandom(0, this.parent.offsetWidth / this.width - 1) * this.width;
	var y = Tools.getRandom(0, this.parent.offsetHeight / this.height -1) * this.height;
	this.div.style.left = x + 'px';
	this.div.style.top = y + 'px';
	this.div.style.transition = "0.5s";
}