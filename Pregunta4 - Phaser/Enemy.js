Enemy=function(game,x,y,tipo)
{
	this.game=game;
	this.tipo=tipo;
	if(tipo=="Fruta"){
		var random=this.game.rnd.realInRange(0,6);		
    	Phaser.Sprite.call(this,game,x,y,'fruta');
		if(random<1)
    		this.frame=0;
    	else if(random>1&&random<2)
    		this.frame=1;
    	else if(random>2&&random<3)
    		this.frame=2;
    	else if(random>3&&random<4)
    		this.frame=3;
    	else if(random>4&&random<5)
    		this.frame=4;
    	else if(random>5&&random<6)
    		this.frame=5;
	}
	else if(tipo=="Invader")
	{
    	Phaser.Sprite.call(this,game,x,y,'invader');		
	}
	else if(tipo=="Honguito")
	{
    	Phaser.Sprite.call(this,game,x,y,'honguito');
		
	}
	this.game.physics.arcade.enable(this);	

};

Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;

Enemy.prototype.update=function()
{
	this.body.velocity.y=150;
	if(this.y>this.game.world.height)
		this.kill();
}