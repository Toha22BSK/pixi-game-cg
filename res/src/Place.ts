import Application = PIXI.Application;
import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import { logo, sound, places, time, buttonmenu } from "./menugame.js"

export class Place extends Container {
    public static size: number = 1024;
    public static res: any;
    private backgroundSprite: Sprite;
    private Logo: logo;
    private Sound: sound;
    private Places: places;
    private Time: time;
    private Buttonmenu: buttonmenu;

    constructor(resources: any) {
        super();
        Place.res = resources;
        this.Logo = new logo();
        this.Sound = new sound();
        this.Places = new places();
        this.Time = new time();
        this.Buttonmenu = new buttonmenu();
        this.backgroundSprite = new Sprite(Place.res.background.texture);
        this.backgroundSprite.width = Place.size;
        this.backgroundSprite.height = Place.size;
        this.addChild(this.backgroundSprite);
        this.addChild(this.Logo);
        this.addChild(this.Sound);
        this.addChild(this.Places);
        this.addChild(this.Time);
        this.addChild(this.Buttonmenu)
    }
}