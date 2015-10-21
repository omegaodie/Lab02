var ctx;//these are bad globals
var player;// they are not required and are bad coding practise

function Game()
{
	this.initCanvas();
	player = new Player();
	goal.draw();
	player.draw();
}

Game.prototype.test = function(e)
{
	console.log("test");
}

Game.prototype.gameLoop = function(e)
{
	ctx.clearRect(0,0,canvas.width, canvas.height);
	player.move(e);
	goal.draw();
	player.draw();
	//console.log("gameLoop");// finished with test statements should be deleted
	window.requestAnimationFrame(game.gameLoop);
}

Game.prototype.initCanvas = function()
{
	canvas = document.createElement("canvas");
	ctx = canvas.getContext("2d");
	document.body.appendChild(canvas);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}
