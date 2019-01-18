let Preloader = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function Preloader () {
        Phaser.Scene.call(this, { key: 'preloader' });
    },

    preload: function () {
      this.load.multiatlas('atlas', 'assets/atlas/atlas.json', 'assets/atlas');
    },

    create: function () {
        this.scene.start('tantalus');
    }

});
