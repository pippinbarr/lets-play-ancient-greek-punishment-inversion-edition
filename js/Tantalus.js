let Tantalus = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize: function Tantalus () {
    Phaser.Scene.call(this, { key: 'tantalus' });
  },

  create: function () {
    this.cameras.main.setBackgroundColor('#dda');

    this.gameIsOver = false;

    this.tantalus = this.add.sprite(400,200,'atlas','tantalus/tantalus.png');
    this.tantalus.setScale(8,8);

    this.branch = this.add.sprite(400,200,'atlas','tantalus/branch/branch_1.png');
    this.branch.setScale(8,8);

    this.water = this.add.sprite(400,200,'atlas','tantalus/water/water_1.png');
    this.water.setScale(8,8);

    this.ground = this.add.sprite(400,200,'atlas','tantalus/ground.png');
    this.ground.setScale(8,8);

    // Add key control
    this.g = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
    this.h = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);

    // Add instructions
    let appleInstructionStyle = { fontFamily: 'Commodore', fontSize: '20px', fill: '#000', wordWrap: true, align: 'center' };
    let appleInstructionString = "YOU ARE THE APPLE\nHOLD G TO\nLIFT YOUR BRANCH";
    this.appleInstructionsText = this.add.text(3*this.game.canvas.width/4,100,appleInstructionString,appleInstructionStyle);
    this.appleInstructionsText.setOrigin(0.5);

    let waterInstructionStyle = { fontFamily: 'Commodore', fontSize: '20px', fill: '#fff', wordWrap: true, align: 'center' };
    let waterInstructionString = "YOU ARE THE WATER\nHOLD H TO\nLOWER YOUR LEVEL";
    this.waterInstructionsText = this.add.text(400,360,waterInstructionString,waterInstructionStyle);
    this.waterInstructionsText.setOrigin(0.5);

  },

  update: function (time,delta) {

    if (this.gameIsOver) return;

    this.handleInput();
  },

  handleInput: function () {
    if (Phaser.Input.Keyboard.JustDown(this.g)) {

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
