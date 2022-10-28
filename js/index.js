// var parent = document.querySelector("#container");
// var box1 = new Box(parent);
// box1.random();
// 生成10个方块,随机生成颜色
//获取容器
var parent = document.querySelector("#container");
var btns = document.querySelectorAll("button");
// 数组存储创建的方块对象
var arr = [];
for(var i=0;i<10;i++){
	var r = Tools.getRandom(0,255);
	var g = Tools.getRandom(0,255);
	var b = Tools.getRandom(0,255);
	
	var box = new Box(parent,{
		backgroundColor: `rgb(${r},${g},${b})`
	});
	arr.push(box);
}
//设置随机位置
var timer = setInterval(suiji,500);

btns[0].onclick = function(){
	clearInterval(timer);
	timer = setInterval(suiji,500);
}
btns[1].onclick = function(){
	clearInterval(timer);
}
function suiji(){
	var r = Tools.getRandom(0,255);
	var g = Tools.getRandom(0,255);
	var b = Tools.getRandom(0,255);
	for(var i=0;i<arr.length;i++){
		var box =  arr[i];
		box.random();
	}
}