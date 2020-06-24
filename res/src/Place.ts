import Application = PIXI.Application;
import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import { logo, sound, places, time } from "./menugame.js";
import {buttonplace} from "./Button.js"
import { preview } from "./preview"

export class Place extends Container {
    public static size: number = 1024;
    public static res: any;
    private backgroundSprite: Sprite;
    private Logo: logo;
    private Sound: sound;
    private Places: places;
    private Time: time;
    private Buttonplace: buttonplace;
    private Preview: preview;

    constructor(resources: any) {
        super();
        Place.res = resources;
        this.Logo = new logo();
        this.Sound = new sound();
        this.Places = new places();
        this.Time = new time();
        this.Preview = new preview(this);
        this.Buttonplace = new buttonplace();
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
    }

}