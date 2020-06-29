import Application = PIXI.Application;
import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import { logo, sound, places, time, music } from "./menugame.js";
import { buttonplace, buttontime, soundbuttom, startbutton, playbutton, pausebutton, OK} from "./Button.js";
import { preview } from "./Preview.js";
import { gamefield } from "./Game.js";
import { erroroption } from "./Error.js"
declare let TweenMax: any;
declare let TimelineMax: any;

export class Place extends Container {
    public static size: number = 1024;
    public static res: any;
    private backgroundSprite: Sprite;
    private backgroundPause: Sprite;
    private Logo: logo;
    private Sound: sound;
    private Places: places;
    private Time: time;
    private Buttonplace: buttonplace;
    private Buttonsound: soundbuttom;
    private Buttontime: buttontime;
    private Preview: preview;
    private Music: music;
    private StartButton: startbutton;
    private GameField: gamefield;
    private PlayButton: playbutton;
    private PauseButton: pausebutton;
    private ErrorOption: erroroption;
    private OK: OK;

    constructor(resources: any) {
        super();
        Place.res = resources;
        this.PauseButton = new pausebutton(this);
        this.Logo = new logo();
        this.OK = new OK(this);
        this.ErrorOption = new erroroption();
        this.Sound = new sound();
        this.Places = new places();
        this.Time = new time();
        this.Preview = new preview(this);
        this.Buttonplace = new buttonplace();
        this.Music = new music();
        this.StartButton = new startbutton(this);
        this.Buttonsound = new soundbuttom();
        this.Buttontime = new buttontime();
        this.PlayButton = new playbutton(this);
        this.backgroundSprite = new Sprite(Place.res.background.texture);
        this.backgroundSprite.width = Place.size;
        this.backgroundSprite.height = Place.size;
        this.addChild(this.backgroundSprite);
        this.addChild(this.Preview);
    }
    public showMenu(){
        this.removeChild(this.Preview)
        this.addChild(this.Logo);
        this.addChild(this.Sound);
        this.addChild(this.Places);
        this.addChild(this.Time);
        this.addChild(this.Buttonplace);
        this.addChild(this.Buttontime);
        this.addChild(this.Music);
        this.addChild(this.Buttonsound);
        this.addChild(this.StartButton);
    }
    public showGameField(sizefield: number, minute: number){
        this.GameField = new gamefield(sizefield, minute);
        this.removeChild(this.Logo);
        this.removeChild(this.Sound);
        this.removeChild(this.Places);
        this.removeChild(this.Time);
        this.removeChild(this.Buttonplace);
        this.removeChild(this.Buttontime);
        this.removeChild(this.Music);
        this.removeChild(this.Buttonsound);
        this.removeChild(this.StartButton);
        this.addChild(this.GameField);
        this.addChild(this.PauseButton);
    }
    public PauseGame(){
        this.backgroundPause = new Sprite(Place.res.black.texture);
        this.backgroundPause.width = Place.size;
        this.backgroundPause.height = Place.size;
        this.backgroundPause.alpha = 0.5;
        this.addChild(this.backgroundPause);
        this.addChild(this.PlayButton);
    }
    public ResumeGame(){
        this.removeChild(this.backgroundPause);
        this.removeChild(this.PlayButton);
    }
    public ShowError(){
        this.ScaleHigh(this.ErrorOption);
        this.ScaleHigh(this.OK);
        this.addChild(this.ErrorOption);
        this.addChild(this.OK);
        
    }
    public CloseError() {
        this.removeChild(this.ErrorOption);
        this.removeChild(this.OK);
    }
    public ScaleHigh(use: any) {
        TweenMax.fromTo(use.scale, 1, { x: 0, y: 0 }, { x: 1, y: 1 });
    }



}