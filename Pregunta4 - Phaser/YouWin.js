YouWin=function(game){}

YouWin.prototype={
	preload:function()
	{
		
		this.load.image("starfield","assets/starfield.jpg");
		this.load.image("playbutton","assets/playbutton.png");

	},
	create:function()
	{
	    this.background=this.add.tileSprite(0,0,this.world.width,this.world.height,"starfield");
	    this.btnStart =this.add.button(this.world.width/2-50,this.world.height/2,'playbutton',this.startGame);
	    this.btnStart.scale.setTo(0.3,0.3);
	    this.fontStyle2={font:'40px Arial',fill:'#FFFFFF',stroke:"#333",strokeThickness:5};
	    this.text=this.add.text(0,0,"Ganaste!",this.fontStyle2);
	},
	startGame:function()
	{
		this.state.start("Game");
	}
}