class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;

        game.addEntity(new Wheelie(game, 16, 16));
        game.addEntity(new Megaman(game, 100, 100));
    };

    clearEntities() {
        this.game.entities = [this];
    };

    loadLevelOne() {
        

    };

    update() {
        //PARAMS.DEBUG = document.getElementById("debug").checked;
    };

    draw(ctx) {

        if (PARAMS.DEBUG) {
        }
    };
};