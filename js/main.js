let config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 400,
    scene: [Preloader, Menu, Sisyphus],
    pixelArt: true
};

let game = new Phaser.Game(config);
