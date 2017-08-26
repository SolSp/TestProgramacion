Game=function(game){}

Game.prototype={
	preload:function()
	{
		this.load.image("background2","assets/background2.png");
		this.load.image("starfield","assets/starfield.jpg");
		this.load.image("honguito","assets/honguito.png");
		this.load.image("pandita","assets/pandita.png");
		this.load.image("bullet","assets/bullet.png");
		this.load.image("exit","assets/exit.PNG");
		this.load.image("wall","assets/wall.PNG");
		this.load.image("contra2","assets/exit.png");
		this.load.spritesheet("invader","assets/invader32x32x4.png",32,32,4);
		this.load.spritesheet("dude","assets/player.png",16,16);
		this.load.spritesheet("fruta","assets/fruta.png",32,32);

	},
	create:function()
	{
		this.game.world.setBounds(0, 0, this.world.width, this.world.height);
		this.tiempo=1000;
		var random=this.game.rnd.realInRange(0,2);
		if(random<1)
			this.background=this.add.tileSprite(0,0,this.world.width,this.world.height,"background2");
		else
			this.background=this.add.tileSprite(0,0,this.world.width,this.world.height,"starfield");
		console.log(this.world.width/2);
		
		this.player=new Player(this.game,this.world.width-80,this.world.height-2);
		this.game.add.existing(this.player);
		
		this.exit=new Wall(this.game,this.world.width-80,0,"exit");
		this.game.add.existing(this.exit);
		
		
		this.WallGroup = this.add.group();
		for(var i=0;i<5;i++)
		{
			this.wall;
			if(i%2==0) this.wall=new Wall(this.game,0,i*100,"wall");
			else this.wall=new Wall(this.game,this.world.width-200,i*100,"wall");
			this.WallGroup.add(this.wall);
		}
		
		
		this.EnemyGrupo=this.add.group();
		this.game.time.events.loop(this.tiempo,this.createEnemy,this);
		Global.cursors=this.input.keyboard.createCursorKeys();
		this.fontStyle2={font:'15px Arial',fill:'#FFFFFF',stroke:"#333",strokeThickness:5};
    	this.textVidas= this.add.text(15,0,"Vidas: ",this.fontStyle2);
    	this.textVidas.text="Vidas:"+this.player.vidas;
    	this.segundos=0;
    	
	},
	update:function()
	{
		this.segundos+=10;
		if(this.segundos >= 300 && this.tiempo >=700)
		{
			this.tiempo-=100;
			this.segundos=0;
		}
		
		this.game.physics.arcade.overlap(this.player,this.EnemyGrupo,function(player,enemy)
		{
			if(enemy.tipo == "Fruta")
			{
				this.player.vidas--;
			}
			else if(enemy.tipo=="Invader")
			{
				this.player.vidas--;
			}
			else if(enemy.tipo=="Honguito")
			{
				this.player.vidas--;
			}
			else if(enemy.tipo=="Pandita")
			{
				this.player.vidas--;
			}
			enemy.kill();
		},null,this);
		
		this.game.physics.arcade.overlap(this.player,this.exit,function(player,exit)
		{
			this.state.start("YouWin");
		},null,this);
		
		this.game.physics.arcade.collide(this.player,this.WallGroup,function(player,wall)
		{
			
		},null,this);

		if(this.player.vidas<=0)
		{
			this.state.start("GameOver");
		}
		
		this.textVidas.text="Vidas:"+this.player.vidas;

	},
	createEnemy:function()
	{
		var random = this.game.rnd.realInRange(0,4);
		var tipo;
		if(random<1)
    		tipo="Fruta";
    	else if(random>1&&random<2)
    		tipo="Invader";
    	else if(random>2&&random<4)
    		tipo="Honguito";    		
    	else if(random>4&&random<5)
    		tipo="Pandita";
    	var randomX=this.game.rnd.realInRange(0,this.game.width-50);
    	var enem=new Enemy(this.game,randomX,0,tipo);
    	this.EnemyGrupo.add(enem);
	}
}

