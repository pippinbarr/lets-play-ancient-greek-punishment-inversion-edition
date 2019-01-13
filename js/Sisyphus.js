let Sisyphus = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize: function Sisyphus () {
    Phaser.Scene.call(this, { key: 'sisyphus' });

    this.MAX_TIME_PER_INPUT = 100;
    this.MAX_FRAME_TIME = 800;
    this.MIN_FRAME_TIME = 100;
    // Used to track rate of keypresses
    this.timeSinceLastInput = 100000;
    // Force exerted between rock and Sisypus
    // -1 = no rock force (Sisyphus pushes top speed)
    // 0 = equillibrium and no movement
    // +1 = total rock force (Sisyphus retreats)
    this.rockForce = 1;
  },

  create: function () {
    this.cameras.main.setBackgroundColor('#aaf');

    // Create the sprite that represents the entire minigame, scale up
    this.sisyphus = this.add.sprite(this.game.canvas.width/2, this.game.canvas.height/2, 'atlas', 'sisyphus/sisyphus_1.png');
    this.sisyphus.setScale(4,4);

    // Add the various animations
    this.createAnimation('start',1,52);
    this.createAnimation('reverseStart',52,1);
    this.createAnimation('uphill',51,95);
    this.createAnimation('downhill',95,51);

    // Sisyphus starts off pushing by default
    this.sisyphus.anims.play('start');

    this.defaultFrameTime = this.sisyphus.anims.currentAnim.msPerFrame;

    // Add input tracking
    this.keyOne = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
    this.keyTwo = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
    this.nextKey = this.keyOne;

    // Add instructions
    let instructionStyle = { fontFamily: 'Commodore', fontSize: '24px', fill: '#000', wordWrap: true, align: 'center' };
    let instructionText = "YOU ARE THE ROCK\nRAPIDLY PRESS\n'G' AND 'H'\nTO ROLL DOWNHILL";
    let instructions = this.add.text(this.game.canvas.width/4,100,instructionText,instructionStyle);
    instructions.setOrigin(0.5);
  },

  update: function (time,delta) {

    this.timeSinceLastInput += delta;

    let anims = this.sisyphus.anims;

    if (anims.currentAnim.key === 'start' && anims.currentFrame.index === anims.currentAnim.frames.length - 1) {
      this.sisyphus.anims.play('uphill');
    }

    let index = anims.currentFrame.index;

    if (this.timeSinceLastInput < this.MAX_TIME_PER_INPUT) {
      this.rockForce = Math.min(this.rockForce + 0.05,1);
    }
    else {
      this.rockForce = Math.max(this.rockForce - 0.05,-1);
    }

    switch (anims.currentAnim.key) {
      case 'uphill':
      if (this.rockForce > 0) {
        anims.play('downhill');
        anims.play('downhill',false,anims.currentAnim.frames.length - index);
      }
      break;

      case 'downhill':
      if (this.rockForce < 0) {
        anims.play('uphill');
        anims.play('uphill',false,anims.currentAnim.frames.length - index);
      }
      break;
    }

    anims.msPerFrame = (1 - Math.abs(this.rockForce)) * this.MAX_FRAME_TIME + this.MIN_FRAME_TIME;

    if (Phaser.Input.Keyboard.JustDown(this.nextKey)) {
      this.timeSinceLastInput = 0;
      this.nextKey = (this.nextKey === this.keyOne) ? this.keyTwo : this.keyOne;
    }
  },

  // createAnimation(name,start,end)
  //
  // Helper function to generate the frames and animation for Sisyphus between set limits
  createAnimation: function (name,start,end) {
    let frames = this.anims.generateFrameNames('atlas', {
      start: start, end: end, zeroPad: 0,
      prefix: 'sisyphus/sisyphus_', suffix: '.png'
    });
    this.anims.create({key: name, frames: frames, frameRate: 10, repeat: 0 });
  },


});
