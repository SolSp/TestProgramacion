Wall=function(game,x,y,tipo)
{
	this.game=game;
	this.tipo=tipo;
	
	if(tipo=="wall"){
    	Phaser.Sprite.call(this,game,x,y,'wall');
    	//this.scale.setTo(0.3,0.3);
	}
	else if(tipo=="exit")
	{
    	Phaser.Sprite.call(this,game,x,y,"exit");
    	this.scale.setTo(0.3,0.3);
	}
	this.game.physics.arcade.enable(this);
	this.body.immovable = true;
	

};

Wall.prototype = Object.create(Phaser.Sprite.prototype);

Wall.prototype.constructor = Wall;

Wall.prototype.update=function()
{
	
}