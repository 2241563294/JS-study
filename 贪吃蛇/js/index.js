var map = document.querySelector("#map");
var game = new Game(map);
var btn = document.querySelectorAll("button");
btn[0].onclick = function(){
	game.start();
}
document.onkeydown = function(e){
	if(e.keyCode==83){
		game.start();
	}else if(e.keyCode==80){
		game.end();
	}
}
btn[1].onclick = function(){
	game.end();
}
btn[1].onkeydown = function(e){
	
}