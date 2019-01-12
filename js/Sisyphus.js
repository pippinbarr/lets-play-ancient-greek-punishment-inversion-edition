let Sisyphus = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize: function Sisyphus () {
    Phaser.Scene.call(this, { key: 'sisyphus' });
  },

  create: function () {
    this.cameras.main.setBackgroundColor('#aaf');

    this.sisyphus = this.add.sprite(this.game.canvas.width/2, this.game.canvas.height/2, 'atlas', 'sisyphus/sisyphus_1.png');
    this.sisyphus.setScale(4,4);

    this.createAnimation('start',1,52);
    this.createAnimation('reverseStart',52,1);
    this.createAnimation('uphill',51,95);
    this.createAnimation('downhill',95,51);

    this.keyOne = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
    this.keyTwo = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
    this.nextKey = this.keyOne;

    this.sisyphus.anims.play('start');

    let instructionStyle = { fontFamily: 'Commodore', fontSize: '24px', fill: '#000', wordWrap: true, align: 'center' };
    let instructionText = "YOU ARE THE ROCK\nRAPIDLY PRESS\n'G' AND 'H'\nTO ROLL DOWNHILL";
    let title = this.add.text(this.game.canvas.width/4,100,instructionText,instructionStyle);
    title.setOrigin(0.5);

    this.timeSinceLastInput = 100000;

    console.log(this.time);
  },

  createAnimation: function (name,start,end) {
    let frames = this.anims.generateFrameNames('atlas', {
      start: start, end: end, zeroPad: 0,
      prefix: 'sisyphus/sisyphus_', suffix: '.png'
    });
    this.anims.create({key: name, frames: frames, frameRate: 10, repeat: 0 });

  },

  update: function (time,delta) {

    this.timeSinceLastInput += delta;
    let anims = this.sisyphus.anims

    if (anims.currentAnim.key === 'start' && anims.currentFrame.index === anims.currentAnim.frames.length - 1) {
      this.sisyphus.anims.play('uphill');
    }

    let index = this.sisyphus.anims.currentFrame.index;

    switch (this.sisyphus.anims.currentAnim.key) {
      case 'uphill':
      if (this.timeSinceLastInput < 100) {
        this.sisyphus.anims.play('downhill');
        this.sisyphus.anims.play('downhill',false,this.sisyphus.anims.currentAnim.frames.length - index);
      }
      break;

      case 'downhill':
      if (this.timeSinceLastInput > 100) {
        this.sisyphus.anims.play('uphill');
        this.sisyphus.anims.play('uphill',false,this.sisyphus.anims.currentAnim.frames.length - index);
      }
      break;
    }

    if (Phaser.Input.Keyboard.JustDown(this.nextKey)) {
      this.timeSinceLastInput = 0;
      this.nextKey = (this.nextKey === this.keyOne) ? this.keyTwo : this.keyOne;
    }
  }

});
