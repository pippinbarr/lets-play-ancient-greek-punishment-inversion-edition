let Preloader = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize: function Preloader () {
    Phaser.Scene.call(this, { key: 'preloader' });
  },

  preload: function () {
    this.load.multiatlas('atlas', 'assets/atlas/atlas.json', 'assets/atlas');

    this.load.audio('peck', ['assets/sounds/peck.mp3','assets/sounds/peck.ogg']);
    this.load.audio('swoopup', ['assets/sounds/swoopup.mp3','assets/sounds/swoopup.ogg']);
    this.load.audio('swoopdown', ['assets/sounds/swoopdown.mp3','assets/sounds/swoopdown.ogg']);
    this.load.audio('victory', ['assets/sounds/victory.mp3','assets/sounds/victory.ogg']);
  },

  create: function () {
    this.scene.start('menu');
  }

});
