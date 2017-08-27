Player=function(game,x,y)
{	
    this.game=game;
    Phaser.Sprite.call(this,game,x,y,'dude');
    game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
    this.scale.setTo(2,2);
    this.vidas=5;
 
    this.animations.add('left frame',[12, 13, 14, 15],10,true); 
    this.animations.add('right frame',[8, 9, 10, 11],10,true);
    this.animations.add('front frame',[0, 1, 2, 3],10,true); 
    this.animations.add('back frame',[4, 5, 6, 7],10,true);

};

Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.constructor = Player;

Player.prototype.update=function()
{
    if(Global.cursors.left.isDown)
    {
        this.animations.play("left frame");
        this.body.velocity.x=-150;
        this.body.velocity.y=0;
    }
    else if(Global.cursors.right.isDown)
    {
        this.animations.play("right frame")
        this.body.velocity.x=150;
        this.body.velocity.y=0;
    }
    else if(Global.cursors.up.isDown)
    {
        this.animations.play("back frame")
        this.body.velocity.y=-150;
        this.body.velocity.x=0;
    }
    else if(Global.cursors.down.isDown)
    {
        this.animations.play("front frame")
        this.body.velocity.y=150;
        this.body.velocity.x=0;
    }
    else
    {
        this.animations.stop("left frame");
        this.animations.stop("right frame");
        this.animations.stop("back frame");
        this.animations.stop("front frame");
        this.frame=4;
        this.body.velocity.x=0;
        this.body.velocity.y=0;
    }
}

