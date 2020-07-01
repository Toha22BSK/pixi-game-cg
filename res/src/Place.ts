import Application = PIXI.Application;
import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import { menugame } from "./MenuGame.js";
import { OK} from "./Button.js";
import { preview } from "./Preview.js";
import { gamefield } from "./Game.js";
import { erroroption } from "./Error.js"
declare let TweenMax: any;
declare let TimelineMax: any;

export class Place extends Container {
    public static size: number = 1024;
    public static res: any;
    private backgroundSprite: Sprite;
    private MenuGame: menugame;
    private Preview: preview;
    private GameField: gamefield;
    private ErrorOption: erroroption;
    private OK: OK;

    constructor(resources: any) {
        super();
        Place.res = resources;
        this.MenuGame = new menugame (this);
        this.OK = new OK(this);
        this.ErrorOption = new erroroption();
        this.Preview = new preview(this);
 

        this.backgroundSprite = new Sprite(Place.res.background.texture);
        this.backgroundSprite.width = Place.size;
        this.backgroundSprite.height = Place.size;
        this.addChild(this.backgroundSprite);
        this.addChild(this.Preview);
    }
    public showMenu(){
        this.addChild(this.MenuGame);
        this.removeChild(this.Preview)

    }
    public showGameField(sizefield: number, minute: number){
        this.GameField = new gamefield(sizefield, minute , this);
        this.removeChild(this.MenuGame);
        this.addChild(this.GameField);
    }
    public ShowError(){
        this.ScaleHigh(this.ErrorOption);
        this.ScaleHigh(this.OK);
        this.addChild(this.ErrorOption);
        this.addChild(this.OK);
    }
    public End(){
        this.removeChild(this.GameField);
    }
    public CloseError() {
        this.removeChild(this.ErrorOption);
        this.removeChild(this.OK);
    }
    public restartgamefield(value1: number, value2: number) {
        this.removeChild(this.GameField);
        this.showGameField(value1, value2);
    }
    public BackToMenu() {
        this.removeChild(this.GameField);
        this.showMenu();
    }
    public ScaleHigh(use: any) {
        TweenMax.fromTo(use.scale, 1, { x: 0, y: 0 }, { x: 1, y: 1 });
    }


}