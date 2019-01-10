let Preloader = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function Preloader () {
        Phaser.Scene.call(this, { key: 'preloader' });
    },

    preload: function () {
      this.load.image('assets/images/placeholder');
    },

    create: function () {
        this.scene.start('menu');
    }

});
