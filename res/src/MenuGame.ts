import Application = PIXI.Application;
import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import Texture = PIXI.Texture;
import { Place } from "./Place.js";
import { buttonplace, buttontime, soundbuttom, startbutton} from "./Button.js";
let width: number = window.innerWidth;
let height: number = window.innerHeight;
export class menugame extends Container{
    private Buttonplace: buttonplace;
    private Buttonsound: soundbuttom;
    private Buttontime: buttontime;
    private StartButton: startbutton;
    private spritelogo: Sprite;
    private spritesound: Sprite;
    private spriteplaces: Sprite;
    private spritetime: Sprite;
    private spritemusic: Sprite;
    constructor(place: Place,) {
        super();
        this.Buttonplace = new buttonplace();
        this.StartButton = new startbutton(place);
        this.Buttonsound = new soundbuttom();
        this.Buttontime = new buttontime();
        this.addChild(this.Buttonplace);
        this.addChild(this.Buttontime);
        this.addChild(this.Buttonsound);
        this.addChild(this.StartButton);
        this.logo();
        this.sound();
        this.places();
        this.time();
        this.music();

    }
    private logo(){
        this.spritelogo = new Sprite(Place.res.logo.texture);
        this.spritelogo.position.set(512 - this.spritelogo.width / 2, 0);
        this.addChild(this.spritelogo);
    }
    private sound(){
        this.spritesound = new Sprite(Place.res.sound.texture);
        this.spritesound.position.set(1024 * 0.1, 1024 / 10 * 6.15);
        this.spritesound.scale.set(0.8, 0.8);
        this.addChild(this.spritesound);
    }
    private places(){
        this.spriteplaces = new Sprite(Place.res.places.texture);
        this.spriteplaces.position.set(1024 * 0.1, 1024 / 10 * 5.15);
        this.spriteplaces.scale.set(0.8, 0.8);
        this.addChild(this.spriteplaces);
    }
    private time(){
        this.spritetime = new Sprite(Place.res.time.texture);
        this.spritetime.position.set(1024 * 0.1, 1024 / 10 * 4.15);
        this.spritetime.scale.set(0.8, 0.8);
        this.addChild(this.spritetime);
    }
    private music(){
        this.spritemusic = new Sprite(Place.res.music.texture);
        this.spritemusic.position.set(1024 * 0.1, 1024 / 10 * 3);
        this.spritemusic.scale.set(0.8, 0.8);
        this.addChild(this.spritemusic);
    }

}
