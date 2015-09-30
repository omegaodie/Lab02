var ctx;
var goal;

function Player()
{
	this.x = 50;
	this.y = 50;

	goal = new Goal();
}

Player.prototype.move = function(e)
{
	//W = 119
	//A = 97
	//S = 115
	//D = 100
	var z = e.keyCode;
	//console.log(e.keyCode);
	

	if (z == 119) 
	{
		this.y -= 5;
	}
	else if(z == 115)
	{
		this.y += 5;
	}
	if (z == 97)
	{
		this.x -= 5;
	}
	else if (z == 100)
	{
		this.x += 5;
	}
}

Player.prototype.draw = function()
{
	ctx.fillStyle = rgb(0,0,0);
	ctx.fillRect(this.x,this.y,50,50);

	if (	this.x + 50 > goal.x && this.x < goal.x + 50
		&&	this.y + 50 > goal.y && this.y < goal.y + 50)
	{//Collision has occurred.
		ctx.fillStyle = rgb(0,255,0);
		ctx.fillRect(this.x,this.y,50,50);
	}
}

/*function for rgb for convenience*/
Game.prototype.rgb = function(r, g, b) 
{ 
	return 'rgb('+this.clamp(Math.round(r),0,255)+', '+this.clamp(Math.round(g),0,255)+', '+this.clamp(Math.round(b),0,255)+')';
}

/*helper function*/
Game.prototype.clamp = function(value, min, max)
{ 
	if(max<min) { 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}