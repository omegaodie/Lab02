var ctx;// more globals use this. instead

function Goal()
{
	Math.random();
	this.x = Math.random() * 400 + 100;
	this.y = Math.random() * 400 + 100;
}

Goal.prototype.draw = function()
{
	ctx.fillStyle = rgb(127,0,0);
	ctx.strokeRect(this.x,this.y,50,50);
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
