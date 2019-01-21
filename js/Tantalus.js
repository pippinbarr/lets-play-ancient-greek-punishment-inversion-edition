let Tantalus = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize: function Tantalus () {
    Phaser.Scene.call(this, { key: 'tantalus' });
  },

  create: function () {
    this.cameras.main.setBackgroundColor('#dda');

    this.gameIsOver = false;

    // Tantalus

    // - Sprite
    this.tantalus = this.add.sprite(400,200,'atlas','tantalus/tantalus.png');
    this.tantalus.setScale(8,8);

    // - Animations
    this.createAnimation('tantalus_idle','tantalus/reaching/reaching',1,1,5,-1);

    this.createAnimation('reach','tantalus/reaching/reaching',1,5,5,0);
    this.createAnimation('eating_fail_loop','tantalus/eating_fail/eating_fail',1,2,5,-1);
    this.createAnimation('eating','tantalus/eating/eating',1,18,5,0);

    this.createAnimation('stoop','tantalus/stooping/stooping',1,3,5,0);
    this.createAnimation('unstoop','tantalus/stooping/stooping',3,1,5,0);
    this.createAnimation('undrinking_fail','tantalus/drinking_fail/drinking_fail',0,1,5,0);
    this.createAnimation('drinking_fail','tantalus/drinking_fail/drinking_fail',1,3,5,0);
    this.createAnimation('drinking','tantalus/drinking/drinking',1,2,5,-1);

    this.tantalus.anims.play('tantalus_idle');

    this.stoop();

    // - Animation complete events
    this.tantalus.on('animationcomplete',function (animation,frame) {
      if (animation.key === 'reach') {
        if (this.branchUp || this.branchRaising) {
          this.tantalus.anims.play('eating_fail_loop');
        }
        else {
          this.eat();
        }
      }
      else if (animation.key === 'stoop') {
        if (this.waterDown || this.waterLowering) {
          this.tantalus.anims.play('drinking_fail');
          this.tantalus.x += 1*8;
          this.tantalus.y -= 3*8;
        }
        else {
          this.drink();
        }
      }
      else if (animation.key === 'drinking_fail') {
        this.tantalus.anims.play('undrinking_fail');
      }
      else if (animation.key === 'undrinking_fail') {
        this.tantalus.anims.play('unstoop');
        this.tantalus.x -= 8*1;
        this.tantalus.y += 8*3;
      }
    },this);

    // Branch

    // - Sprite
    this.branch = this.add.sprite(400,200,'atlas','tantalus/branch/branch_1.png');
    this.branch.setScale(8,8);

    // - Animations
    this.createAnimation('branch_idle','tantalus/branch/branch',1,1,5,-1);
    this.createAnimation('branch_raise','tantalus/branch/branch',2,4,10,0);
    this.createAnimation('branch_lower','tantalus/branch/branch',4,2,10,0);
    this.createAnimation('no_apple','tantalus/branch/branch',5,5,5,-1);

    // - State variables
    this.branchUp = false;
    this.branchDown = true;
    this.branchRaising = false;
    this.branchLowering = false;
    this.eating = false;

    // - Animation complete events
    this.branch.on('animationcomplete',function (animation,frame) {
      if (animation.key === 'branch_raise') {
        this.branchUp = true;
        this.branchRaising = false;
      }
      else if (animation.key === 'branch_lower') {
        this.branchDown = true;
        this.branchLowering = false;
        if (this.tantalus.anims.currentAnim.key === 'eating_fail_loop') {
          this.eat();
        }
      }
    },this);

    this.branch.anims.play('branch_idle');

    // Water

    // - Sprite
    this.water = this.add.sprite(400,200,'atlas','tantalus/water/water_1.png');
    this.water.setScale(8,8);

    // - Animations
    this.createAnimation('water_idle','tantalus/water/water',1,1,5,-1);
    this.createAnimation('water_lower','tantalus/water/water',2,7,10,0);
    this.createAnimation('water_raise','tantalus/water/water',7,2,10,0);

    // - State variables
    this.waterUp = true;
    this.waterDown = false;
    this.waterRaising = false;
    this.waterLowering = false;
    this.drinking = false;

    // - Animation complete events
    this.water.on('animationcomplete',function (animation,frame) {
      if (animation.key === 'water_lower') {
        this.waterDown = true;
        this.waterLowering = false;
      }
      else if (animation.key === 'water_raise') {
        this.waterUp = true;
        this.waterRaising = false;
      }
    },this);

    this.water.anims.play('water_idle');

    // Ground sprite

    this.ground = this.add.sprite(400,200,'atlas','tantalus/ground.png');
    this.ground.setScale(8,8);

    // Input

    this.branchKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
    this.waterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);

    // Instructions

    // - Branch
    let appleInstructionStyle = { fontFamily: 'Commodore', fontSize: '20px', fill: '#000', wordWrap: true, align: 'center' };
    let appleInstructionString = "YOU ARE THE APPLE\nHOLD G TO\nLIFT YOUR BRANCH";
    this.appleInstructionsText = this.add.text(3*this.game.canvas.width/4,100,appleInstructionString,appleInstructionStyle);
    this.appleInstructionsText.setOrigin(0.5);

    // - Water
    let waterInstructionStyle = { fontFamily: 'Commodore', fontSize: '20px', fill: '#fff', wordWrap: true, align: 'center' };
    let waterInstructionString = "YOU ARE THE WATER\nHOLD H TO\nLOWER YOUR LEVEL";
    this.waterInstructionsText = this.add.text(400,360,waterInstructionString,waterInstructionStyle);
    this.waterInstructionsText.setOrigin(0.5);

  },

  update: function (time,delta) {

    if (this.gameIsOver) return;

    this.handleInput();
  },

  stoop: function () {
    this.tantalus.x -= 1*8;
    this.tantalus.y += 3*8;
    this.tantalus.anims.play('stoop');
  },

  reach: function () {
    this.tantalus.anims.play('reach');
  },

  eat: function  () {
    this.tantalus.x -= 1*8;
    this.tantalus.y += 3*8;
    this.tantalus.anims.play('eating');
    this.branch.anims.play('no_apple');
    this.eating = true;
  },

  drink: function  () {
    this.tantalus.anims.play('drinking');
    this.drinking = true;
  },

  handleInput: function () {

    console.log("input")

    if (!this.branchRaising && !this.branchLowering && !this.eating) {
      if (this.branchKey.isDown && this.branchDown) {
        this.branchRaising = true;
        this.branchDown = false;
        this.branch.anims.play('branch_raise');
      }
      else if (!this.branchKey.isDown && this.branchUp) {
        this.branchUp = false;
        this.branchLowering = true;
        this.branch.anims.play('branch_lower');
      }
    }

    if (!this.waterRaising && !this.waterLowering && !this.drinking) {
      if (this.waterKey.isDown && this.waterUp) {
        this.waterLowering = true;
        this.waterUp = false;
        this.water.anims.play('water_lower');
      }
      else if (!this.waterKey.isDown && this.waterDown) {
        this.waterDown = false;
        this.waterRaising = true;
        this.water.anims.play('water_raise');
      }
    }

  },

  gameOver: function () {
    this.gameIsOver = true;

    let screenRect = new Phaser.Geom.Rectangle(0,0, this.game.canvas.width, this.game.canvas.height);
    let gameOverBackground = this.add.graphics({ fillStyle: { color: '#000' } });
    gameOverBackground.fillRectShape(screenRect);
    let gameOverStyle = { fontFamily: 'Commodore', fontSize: '24px', fill: '#dda', wordWrap: true, align: 'center' };
    let gameOverString = "YOU LOSE!\n\nTANTALUS XXXXX!";
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
  }

});
