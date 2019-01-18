let Tantalus = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize: function Tantalus () {
    Phaser.Scene.call(this, { key: 'tantalus' });
  },

  create: function () {
    this.cameras.main.setBackgroundColor('#dda');

    this.gameIsOver = false;

    // Add key control
    this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    // Add instructions
    let appleInstructionStyle = { fontFamily: 'Commodore', fontSize: '24px', fill: '#000', wordWrap: true, align: 'center' };
    let appleInstructionString = "YOU ARE THE TREE\nHOLDS G TO\nRAISE YOUR BRANCH";
    this.appleInstructionsText = this.add.text(3*this.game.canvas.width/4,100,appleInstructionString,appleInstructionStyle);
    this.appleInstructionsText.setOrigin(0.5);

    let waterInstructionStyle = { fontFamily: 'Commodore', fontSize: '24px', fill: '#000', wordWrap: true, align: 'center' };
    let waterInstructionString = "YOU ARE THE WATER\nHOLD H TO\nLOWER YOUR LEVEL";
    this.waterInstructionsText = this.add.text(3*this.game.canvas.width/4,100,waterInstructionString,waterInstructionStyle);
    this.waterInstructionsText.setOrigin(0.5);

  },

  update: function (time,delta) {

    if (this.gameIsOver) return;

    this.handleInput();
  },

  handleInput: function () {
    if (Phaser.Input.Keyboard.JustDown(this.spaceBar)) {

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
