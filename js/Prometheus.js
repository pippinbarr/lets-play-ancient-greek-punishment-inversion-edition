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

    if (this.perched) {
      if (this.cursors.up.isDown) {
        this.eagle.y -= 4*8;
        this.eagle.anims.play('eagle_flying');
        this.eagle.body.checkCollision.none = false;
        this.eagle.setVelocityY(-this.EAGLE_FLY_SPEED);
        this.perched = false;
      }
      else if (Phaser.Input.Keyboard.JustDown(this.cursors.down)) {
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

    let p = perches.create(4*99,4*61,'atlas','prometheus/perch.png').setScale(4);
    p.peck = true;
    p.data = { x: 4*98, y: 4*56, flipX: false };
    p.alpha = 0.5;

    return perches;
  },

  perch: function (eagle, perch) {
    console.log("The eagle has landed...");

    this.eagle.x = perch.data.x;
    this.eagle.y = perch.data.y;
    this.eagle.flipX = perch.data.flipX;
    this.eagle.setVelocityX(0);
    this.eagle.setVelocityY(0);
    this.eagle.anims.play('eagle_perched');
    this.perched = true;
    this.cursors.down.reset();

    this.eagle.body.checkCollision.none = true;
  }

});
