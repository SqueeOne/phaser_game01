var game;

import Boot from "./states/Boot.js";
import Preload from "./states/Preload.js";
import Game from "./states/Game.js";

window.onload = function() {
    //hi
    game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');
    game.state.add('boot', Boot);
    game.state.add('preload', Preload);
    game.state.add('game', Game);
    game.state.start('boot');
};

export default class Boot {
    
    preload() {
        this.load.image('preloader', 'assets/images/loading_bar.png');
    }
    
    create() {
        this.game.input.maxPointers = 1;
        this.game.state.start('preload');
    }
}