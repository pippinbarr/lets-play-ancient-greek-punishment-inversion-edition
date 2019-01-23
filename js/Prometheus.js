let Prometheus = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize: function Prometheus () {
    Phaser.Scene.call(this, { key: 'prometheus' });

    this.EAGLE_FLY_SPEED = 70;
  },

  create: function () {
    this.cameras.main.setBackgroundColor('#daa');

    this.gameIsOver = false;

    // Eagle

    this.eagle = this.physics.add.sprite(300,200,'atlas','prometheus/eagle/eagle_1.png').setScale(4);
    this.eagle.setCollideWorldBounds(true);

    this.createAnimation('eagle_flying','prometheus/eagle/eagle',1,4,5,-1);
    this.createAnimation('eagle_perched','prometheus/eagle/eagle',5,5,5,-1);
    this.createAnimation('eagle_peck','prometheus/eagle/eagle',6,5,5,0);

    this.eagle.anims.play('eagle_flying');

    // Prometheus

    this.prometheus = this.add.sprite(this.game.canvas.width/2,this.game.canvas.height/2 + 4*10,'atlas','prometheus/prometheus/prometheus_1.png').setScale(4);

    this.createAnimation('prometheus_struggle','prometheus/prometheus/prometheus',1,3,5,0);

    this.prometheus.anims.play('prometheus_struggle');

    // Rock

    this.rock = this.add.sprite(this.game.canvas.width/2,this.game.canvas.height/2,'atlas','prometheus/rock/rock_1.png').setScale(4);

    // Hotspots

    this.perches = this.createPerches();
    this.currentPerch = null;

    this.physics.add.overlap(this.eagle,this.perches, this.perch, null, this);

    // Input

    this.cursors = this.input.keyboard.createCursorKeys();

    // Instructions

    let flyInstructionStyle = { fontFamily: 'Commodore', fontSize: '24px', fill: '#000', wordWrap: true, align: 'center' };
    let flyInstructionString = "YOU ARE THE EAGLE\nUSE ARROW KEYS\nTO FLY AND\nLAND ON PROMETHEUS";
    this.flyInstructionsText = this.add.text(this.game.canvas.width/4,150,flyInstructionString,flyInstructionStyle);
    this.flyInstructionsText.setOrigin(0.5);

    let peckInstructionStyle = { fontFamily: 'Commodore', fontSize: '24px', fill: '#000', wordWrap: true, align: 'center' };
    let peckInstructionString = "TAP DOWN TO\nPECK OUT\nPROMETHEUS'S\nLIVER";
    this.peckInstructionsText = this.add.text(650,300,peckInstructionString,peckInstructionStyle);
    this.peckInstructionsText.setOrigin(0.5);

  },

  update: function (time,delta) {

    if (this.gameIsOver) return;

    this.handleInput();

  },

  handleInput: function () {

    if (this.currentPerch !== null) {
      if (this.cursors.up.isDown) {
        this.eagle.y -= 4*8;
        this.eagle.anims.play('eagle_flying');
        this.eagle.body.checkCollision.none = false;
        this.eagle.setVelocityY(-this.EAGLE_FLY_SPEED);
        this.currentPerch = null;
      }
      else if (Phaser.Input.Keyboard.JustDown(this.cursors.down) && this.currentPerch.peck) {
        this.eagle.anims.play("eagle_peck");
      }
      return;
    }

    // Check cursor input and move eagle appropriately
    if (this.cursors.left.isDown) {
      this.eagle.setVelocityX(-this.EAGLE_FLY_SPEED);
      // this.eagle.setScale(-4,4);
      this.eagle.flipX = true;
    }
    else if (this.cursors.right.isDown) {
      this.eagle.setVelocityX(this.EAGLE_FLY_SPEED);
      // this.eagle.setScale(4,4);
      this.eagle.flipX = false;
    }
    else {
      this.eagle.setVelocityX(0);
    }

    if (this.cursors.up.isDown) {
      this.eagle.setVelocityY(-this.EAGLE_FLY_SPEED);
    }
    else if (this.cursors.down.isDown) {
      this.eagle.setVelocityY(this.EAGLE_FLY_SPEED);
    }
    else {
      this.eagle.setVelocityY(0);
    }
  },

  gameOver: function () {
    this.gameIsOver = true;

    let screenRect = new Phaser.Geom.Rectangle(0,0, this.game.canvas.width, this.game.canvas.height);
    let gameOverBackground = this.add.graphics({ fillStyle: { color: '#000' } });
    gameOverBackground.fillRectShape(screenRect);
    let gameOverStyle = { fontFamily: 'Commodore', fontSize: '24px', fill: '#aaf', wordWrap: true, align: 'center' };
    let gameOverString = "YOU LOSE!\n\nXXXXX";
    let gameOverText = this.add.text(this.game.canvas.width/2,this.game.canvas.height/2,gameOverString,gameOverStyle);
    gameOverText.setOrigin(0.5);

    setTimeout(() => {
      this.scene.start('menu');
    },2000);
  },

  // createAnimation(name,start,end)
  //
  // Helper function to generate the frames and animation for Sisyphus between set limits
  createAnimation: function (name,path,start,end,framerate,repeat) {
    let frames = this.anims.generateFrameNames('atlas', {
      start: start, end: end, zeroPad: 0,
      prefix: path + '_', suffix: '.png'
    });
    let config = {
      key: name,
      frames: frames,
      frameRate: framerate,
      repeat: repeat,
    };
    this.anims.create(config);
  },

  createPerches: function () {
    let perches = this.physics.add.staticGroup();

    // Liver
    this.createPerch(perches,4*99,4*61,4*98,4*56,true,false);
    // Head
    this.createPerch(perches,4*108,4*61,4*108,4*54,false,true);
    // Feet
    this.createPerch(perches,4*92,4*64,4*92,4*58,false,false);
    // West 1
    this.createPerch(perches,4*86,4*72,4*85,4*68,false,true);
    // West 2
    this.createPerch(perches,4*76,4*80,4*76,4*76,false,true);
    // West 3
    this.createPerch(perches,4*66,4*88,4*68,4*88,false,true);
    // West 4
    this.createPerch(perches,4*64,4*98,4*64,4*94,false,true);
    // East 1
    this.createPerch(perches,4*116,4*64,4*116,4*62,false,false);
    // East 2
    this.createPerch(perches,4*124,4*74,4*124,4*72,false,false);
    // East 3
    this.createPerch(perches,4*134,4*84,4*133,4*82,false,false);
    // East 3
    this.createPerch(perches,4*142,4*90,4*141,4*87,false,false);
    // East 4
    this.createPerch(perches,4*150,4*95,4*152,4*94,false,false);

    return perches;
  },

  createPerch: function (perches,x,y,perchX,perchY,peck,flipX) {
    let p = perches.create(x,y,'atlas','prometheus/perch.png').setScale(4);
    p.peck = peck;
    p.data = { x: perchX, y: perchY, flipX: flipX };
    p.alpha = 0.5;
    p.visible = false;
  },

  perch: function (eagle, perch) {
    this.eagle.x = perch.data.x;
    this.eagle.y = perch.data.y;
    this.eagle.flipX = perch.data.flipX;
    this.eagle.setVelocityX(0);
    this.eagle.setVelocityY(0);
    this.eagle.anims.play('eagle_perched');
    this.currentPerch = perch;
    this.cursors.down.reset();

    this.eagle.body.checkCollision.none = true;
  }

});
