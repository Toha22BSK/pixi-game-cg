import Container = PIXI.Container;
import { Game } from "./Game";
import { Button } from "./Button";
declare let TweenMax: any;

export class Preview extends Container {
    private logo: Button;
    private game: Game;

    constructor(game: Game) {
        super();
        this.game = game;
        this.logo = new Button("showMenu", [Game.RES.logo.texture], [Game.SIZE / 2, Game.SIZE / 2]);
        this.logo.on("showMenu", this.game.showMenu.bind(this.game));
        TweenMax.fromTo(this.logo.scale, 1, { x: 0, y: 0 }, { x: 1, y: 1});
        this.addChild(this.logo);
    }

}