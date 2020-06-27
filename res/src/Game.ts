import Application = PIXI.Application;
import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import Texture = PIXI.Texture;
import Text = PIXI.Text;
import TextStyle = PIXI.TextStyle;
import { ball } from "./Balls.js"
import { Place } from "./place.js";
import { pausebutton, musicgamebutton, soundgamebutton} from "./Button.js";
export class gamefield extends Container {

    private MusicgameButton: musicgamebutton;
    private SoundgameButton: soundgamebutton;
    private sizefield: number;
    private time: number;
    protected scoretext: Text;
    protected timetext: Text;
    private scorebackground: Sprite;
    private timegamebackground: Sprite;
    private ballsfield: ball[][];
    private fieldsize: number = 1024 * 0.4;
    private widthtexture: number;
    private heighttexture: number;
    private scaleball: number;
    constructor(sizesquare: number, time: number) {
        super();

        this.scoretext = new Text("100000");
        this.scoretext.anchor.set (0.5);
        this.scoretext.position.set(Place.size * 0.2, this.fieldsize / 3.2);
        this.scoretext.style = new TextStyle({
            fontSize: 72, fontFamily: "Calibri", fill: "#00fff0", align: "center", fontWeight: Place.res.score.texture.width,
            dropShadow: false
        });

        this.timetext = new Text("30:00");
        this.timetext.anchor.set(0.5);
        this.timetext.position.set(Place.size * 0.8, this.fieldsize / 3.2);
        this.timetext.style = new TextStyle({
            fontSize: 72, fontFamily: "Calibri", fill: "#00fff0", align: "center", fontWeight: Place.res.score.texture.width,
            dropShadow: false
        });
        
        this.MusicgameButton = new musicgamebutton();
        this.SoundgameButton = new soundgamebutton();

        this.scorebackground = new Sprite(Place.res.score.texture);
        this.scorebackground.position.set(Place.size * 0.2, this.fieldsize/4);
        this.scorebackground.anchor.set(0.5);
        this.scorebackground.scale.set(0.4);

        this.timegamebackground = new Sprite(Place.res.timergame.texture);
        this.timegamebackground.position.set(Place.size * 0.8, this.fieldsize/4)
        this.timegamebackground.anchor.set(0.5);
        this.timegamebackground.scale.set(0.4);

        this.sizefield = sizesquare;
        this.widthtexture = Place.res.redball.texture.width;
        this.heighttexture = Place.res.redball.texture.height;
        switch (this.sizefield) {
            case 8:
                this.scaleball = 0.3;
                break;
            case 12:
                this.scaleball = 0.2;
                break;
            case 16:
                this.scaleball = 0.15;
                break;
        }
        this.ballsfield = new Array<ball[]>(this.sizefield);
        for (let i = 0; i < this.sizefield; i++) {
            this.ballsfield[i] = new Array<ball>(this.sizefield);
            for (let j = 0; j < this.sizefield; j++) {
                this.ballsfield[i][j] = new ball();
                this.ballsfield[i][j].position.set(this.fieldsize + this.widthtexture * (j + 1), this.fieldsize * 1.5 + this.heighttexture * (i + 1));
                this.ballsfield[i][j].scale.set(this.scaleball);
                this.addChild(this.ballsfield[i][j]);
            }

        }
        this.addChild(this.MusicgameButton);
        this.addChild(this.SoundgameButton);
        this.addChild(this.scorebackground);
        this.addChild(this.timegamebackground);
        this.addChild(this.scoretext);
        this.addChild(this.timetext);

    }

}