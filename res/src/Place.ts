import Application = PIXI.Application;
import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import Loader = PIXI.Loader;
import Sound = PIXI.sound;
import { menugame } from "./MenuGame.js";
import { preview } from "./Preview.js";
import { gamefield } from "./Game.js";
declare let TweenMax: any;
declare let TimelineMax: any;

export class Place extends Container {
    public static size: number = 1024;
    public static res: any;
    private backgroundSprite: Sprite;
    private MenuGame: menugame;
    private Preview: preview;
    private GameField: gamefield;
    private soundback: any ;

    constructor(resources: any) {
        super();
        Place.res = resources;
        this.soundback = Place.res.backgroundsound.sound;
        this.MenuGame = new menugame (this);
        this.Preview = new preview(this);
        this.backgroundSprite = new Sprite(Place.res.background.texture);
        this.backgroundSprite.width = Place.size;
        this.backgroundSprite.height = Place.size;
        this.addChild(this.backgroundSprite);
        this.addChild(this.Preview);
        this.soundback.volume = 0.25;
        this.soundback.play({loop: true});
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
    public End(){
        this.removeChild(this.GameField);
    }
    public restartgamefield(value1: number, value2: number) {
        this.removeChild(this.GameField);
        this.showGameField(value1, value2);
    }
    public BackToMenu() {
        this.removeChild(this.GameField);
        this.showMenu();
    }
    public PauseMusic(){
        this.soundback.pause();
    }
    public ResumeMusic(){
        this.soundback.resume();
    }




}