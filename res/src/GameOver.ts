import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import { Game } from "./Game";
import { Button } from "./Button";
import Text = PIXI.Text;
import TextStyle = PIXI.TextStyle;
import { MenuGame } from "./MenuGame";
declare let TweenMax: any;
declare let TimelineMax: any;

export class GameOver extends Container {
    private backgroundWindow: Sprite;
    private scoreEnd: Sprite;
    private backgroundRestart: Sprite;
    private backgroundMenu: Sprite;
    private gameoverSprite: Sprite;
    private score: Text;
    private restartGame: Button;
    private backMenu: Button;
    private game: Game;

    constructor(endscore: number, game: Game) {
        super();
        this.game = game;
        this.confugirationUI();
        this.animatioGameOver();

    }

    private confugirationUI(): void{
        this.backgroundWindow = new Sprite(Game.RES.black.texture);
        this.backgroundWindow.position.set(Game.SIZE / 2);
        this.backgroundWindow.anchor.set(0.5);
        this.backgroundWindow.alpha = 0.7;

        this.scoreEnd = new Sprite(Game.RES.score.texture);
        this.scoreEnd.position.set(Game.SIZE / 2, Game.SIZE * 0.4);
        this.scoreEnd.anchor.set(0.5);

        this.backgroundMenu = new Sprite(Game.RES.backgroundEndButtton.texture);
        this.backgroundMenu.position.set(Game.SIZE * 0.75, Game.SIZE * 0.737);
        this.backgroundMenu.anchor.set(0.5);

        this.backgroundRestart = new Sprite(Game.RES.backgroundEndButtton.texture);
        this.backgroundRestart.position.set(Game.SIZE * 0.25, Game.SIZE * 0.735);
        this.backgroundRestart.anchor.set(0.5);

        this.gameoverSprite = new Sprite(Game.RES.GameOver.texture);
        this.gameoverSprite.position.set(Game.SIZE / 2);
        this.gameoverSprite.anchor.set(0.5);

        this.backMenu = new Button("backToMenu", [Game.RES.menu.texture, Game.RES.menuBring.texture, Game.RES.menuPress.texture],
            [Game.SIZE * 0.75, Game.SIZE * 0.78], 1);
        this.backMenu.on("backToMenu", this.game.backToMenu.bind(this.game, 1));

        this.restartGame = new Button("restartGame", [Game.RES.restart.texture, Game.RES.restartBring.texture, Game.RES.restartPress.texture],
            [Game.SIZE * 0.25, Game.SIZE * 0.78], 1);
        this.restartGame.on("restartGame", this.game.restartgamefield.bind(this.game, MenuGame.sizeSetting, MenuGame.timeSetting));

        this.score = new Text(String(MenuGame.scoreGame));
        this.score.anchor.set(0.5);
        this.score.position.set(Game.SIZE / 2, Game.SIZE * 0.45);
        this.score.style = new TextStyle({
            fontSize: 120, fontFamily: "Calibri", fill: "#00fff0", align: "center", fontWeight: Game.RES.score.texture.width,
            dropShadow: false
        });

        this.addChild(this.backgroundWindow);
    }

    private animatioGameOver(): void {
        let animationOver = new TimelineMax({ repeat: 2, repeatDelay: 0.5, onComplete: this.animatioGameOvertwo.bind(this), onRepeat: this.scaleGameOver.bind(this), });
    }

    private animatioGameOvertwo(): void {
        let animationScore = new TimelineMax({ repeat: 2, repeatDelay: 2, onComplete: this.animationScore.bind(this), onRepeat: this.alphaGameOverDown.bind(this) });
    }

    private animationScore(): void {
        let animationEnd = new TimelineMax({ repeat: 2, repeatDelay: 0.5, onComplete: this.animationButton.bind(this), onRepeat: this.scaleScore.bind(this) });
    }

    private animationButton(): void {
        let animationButton = new TimelineMax({ repeat: 2, repeatDelay: 1, onRepeat: this.alphaButton.bind(this) });
    }

    private scaleGameOver(): void {
        TweenMax.fromTo(this.gameoverSprite.scale, 1, { x: 0, y: 0 }, { x: 1, y: 1 });
        this.addChild(this.gameoverSprite);
    }

    private alphaGameOverDown(): void {
        TweenMax.fromTo(this.gameoverSprite, 1, { alpha: 1 }, { alpha: 0 });
    }

    private scaleScore(): void {
        this.restartGame.alpha = 0;
        this.backMenu.alpha = 0;

        TweenMax.fromTo(this.scoreEnd.scale, 1, { x: 0, y: 0 }, { x: 1, y: 1 });
        TweenMax.fromTo(this.score.scale, 1, { x: 0, y: 0 }, { x: 1, y: 1 });

        this.addChild(this.scoreEnd);
        this.addChild(this.score);
        this.removeChild(this.gameoverSprite);
    }

    private alphaButton(): void {
        this.addChild(this.backgroundMenu);
        this.addChild(this.backgroundRestart);
        this.addChild(this.restartGame);
        this.addChild(this.backMenu);

        TweenMax.fromTo(this.restartGame, 2, { alpha: 0 }, { alpha: 1 });
        TweenMax.fromTo(this.backgroundRestart, 2, { alpha: 0 }, { alpha: 1 });
        TweenMax.fromTo(this.backMenu, 2, { alpha: 0 }, { alpha: 1 });
        TweenMax.fromTo(this.backgroundMenu, 2, { alpha: 0 }, { alpha: 1 });
        
        
    }
}