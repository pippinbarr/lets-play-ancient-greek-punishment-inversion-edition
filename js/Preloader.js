let Preloader = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function Preloader () {
        Phaser.Scene.call(this, { key: 'preloader' });
    },

    preload: function () {
      
    },

    create: function () {
        this.scene.start('menu');
    }

});
