import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import { MenuGame } from "./MenuGame";
import { Preview } from "./Preview";
import { GameField } from "./GameField";
import { GameOver } from "./GameOver";


export class Game extends Container {
    public static readonly SIZE: number = 1024;
    public static RES: any;

    private backgroundSprite: Sprite;
    private menuGame: MenuGame;
    private preview: Preview;
    private gameField: GameField;
    private gameOver: GameOver;
    private soundBack: any;

    constructor(resources: any) {
        super();
        Game.RES = resources;
        this.soundBack = Game.RES.backgroundSound.sound;

        this.menuGame = new MenuGame(this);
        this.preview = new Preview(this);

        this.backgroundSprite = new Sprite(Game.RES.background.texture);
        this.backgroundSprite.width = Game.SIZE;
        this.backgroundSprite.height = Game.SIZE;

        this.soundBack.volume = 0.25;
        this.soundBack.play({ loop: true });

        this.addChild(this.backgroundSprite);
        this.addChild(this.preview);
    }

    public showMenu(): void {
        this.removeChild(this.preview);
        this.preview.destroy();
        this.addChild(this.menuGame);
    }

    public showGameField(fieldSize: number, minute: number): void {
        this.gameField = new GameField(fieldSize, minute , this);
        this.removeChild(this.menuGame);
        this.menuGame.destroy();
        this.addChild(this.gameField);
    }

    public showGameOver(){
        this.gameOver = new GameOver(MenuGame.scoreGame, this);
        this.removeChild(this.gameField);
        this.gameField.destroy();
        this.addChild(this.gameOver);
    }

    public restartgamefield(value1: number, value2: number): void {
        this.removeChild(this.gameOver);
        this.gameOver.destroy();
        this.showGameField(value1, value2);
    }

    public backToMenu(who: number): void {
        if (who == 0){
            this.removeChild(this.gameField);
            this.gameField.destroy();
        } else {
            this.removeChild(this.gameOver);  
            this.gameOver.destroy();
        }
        this.menuGame = new MenuGame(this);
        this.addChild(this.menuGame);
    }

    public pauseMusic(): void {
        this.soundBack.pause();
    }

    public resumeMusic(): void {
        this.soundBack.resume();
    }
}