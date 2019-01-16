let Danaids = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize: function Danaids () {
    Phaser.Scene.call(this, { key: 'danaids' });
  },

  create: function () {
    this.cameras.main.setBackgroundColor('#dda');

    this.gameIsOver = false;

    // Add tap
    this.tap = this.add.sprite(4*5, this.game.canvas.height/2 + 4*16, 'atlas', 'danaids/tap/tap_1.png');
    this.tap.setScale(4,4);

    this.createAnimation('tap_running','danaids/tap/tap',1,3,10,-1);
    this.createAnimation('tap_filling','danaids/tap/tap',4,4,10,-1);
    this.createAnimation('tap_restarting','danaids/tap/tap',4,6,10,0);
    this.tap.anims.play('tap_running');

    // Add bath
    this.bath = this.add.sprite(this.game.canvas.width - 4*20, this.game.canvas.height/2 + 4*19, 'atlas', 'danaids/bath.png');
    this.bath.setScale(4,4);

    // Add Danaid
    this.danaid = this.add.sprite(4*60, this.game.canvas.height/2 + 4*16, 'atlas', 'danaids/danaid/danaid_1.png');
    this.danaid.setScale(-4,4);
    this.createAnimation('idle','danaids/danaid/danaid',4,4,10,-1);
    this.createAnimation('running','danaids/danaid/danaid',1,3,10,-1);
    this.createAnimation('raise_bucket','danaids/danaid/danaid',5,6,5,0);
    this.createAnimation('lower_bucket','danaids/danaid/danaid',6,5,5,0);
    this.createAnimation('pour','danaids/danaid/danaid',5,11,5,0);
    this.createAnimation('finish_pour','danaids/danaid/danaid',11,5,5,0);
    this.createAnimation('put_down_bucket','danaids/danaid/danaid',12,21,5,0);
    this.createAnimation('pick_up_bucket','danaids/danaid/danaid',21,12,5,0);
    this.createAnimation('enter_bath','danaids/entering_bath/entering_bath',2,11,5,0);


    this.danaid.anims.play('idle');


    // Add ground plane
    let groundRect = new Phaser.Geom.Rectangle(0, this.game.canvas.height/2 + 4*26, this.game.canvas.width, 200);
    this.ground = this.add.graphics({ fillStyle: { color: 0x000000 } });
    this.ground.fillRectShape(groundRect);

    // Add instructions
    let instructionStyle = { fontFamily: 'Commodore', fontSize: '24px', fill: '#000', wordWrap: true, align: 'center' };
    let instructionString = "YOU ARE THE BATH\nPRESS SPACE\nTO EMPTY";
    this.instructionsText = this.add.text(3*this.game.canvas.width/4,100,instructionString,instructionStyle);
    this.instructionsText.setOrigin(0.5);
  },

  update: function (time,delta) {

    if (this.gameIsOver) return;

    this.handleInput();
    this.updateDanaid();

    if (false) {
      this.gameIsOver = true;
      setTimeout(() => {
        this.gameOver();
      },1250);
    }
  },

  handleInput: function () {

  },

  updateDanaid: function () {

  },

  gameOver: function () {
    this.gameIsOver = true;

    let screenRect = new Phaser.Geom.Rectangle(0,0, this.game.canvas.width, this.game.canvas.height);
    let gameOverBackground = this.add.graphics({ fillStyle: { color: '#000' } });
    gameOverBackground.fillRectShape(screenRect);
    let gameOverStyle = { fontFamily: 'Commodore', fontSize: '24px', fill: '#dda', wordWrap: true, align: 'center' };
    let gameOverString = "YOU LOSE!\n\nTHE DANAID GOT CLEAN!";
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
