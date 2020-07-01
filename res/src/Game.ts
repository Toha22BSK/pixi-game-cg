import Application = PIXI.Application;
import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import Texture = PIXI.Texture;
import Text = PIXI.Text;
import TextStyle = PIXI.TextStyle;
import { ball } from "./Balls.js"
import { Place } from "./Place.js";
import { gameover } from "./GameOver.js";
declare let TweenMax: any;
declare let TimelineMax: any;
import { musicgamebutton, soundgamebutton, playbutton, TheEnd, pausebutton, backmenu, ReDraw} from "./Button.js";
export class gamefield extends Container {

    private MusicgameButton: musicgamebutton;
    private SoundgameButton: soundgamebutton;
    private sizefield: number;
    private timergame: number;
    private redraw: ReDraw;
    private BackMenu: backmenu;
    private theend: TheEnd;
    private GameOver: gameover;
    protected scoretext: Text;
    protected timetext: Text;
    private PlayButton: playbutton;
    private scorebackground: Sprite;
    private timegamebackground: Sprite;
    private ballsfield: ball[][];
    private fieldsize: number = 1024 * 0.1;
    private widthtexture: number;
    private heighttexture: number;
    private scaleball: number;
    private timerstart: any;
    private ScoreGame: number;
    private Readystatus: boolean = false;
    private PauseButton: pausebutton;
    private backgroundPause: Sprite;
    private background: Sprite[][];
    private backbackground: Texture = Place.res.backgroundbuttonfield.texture;
    private backstock: Texture = Place.res.MenuButton.texture;
    private backbring: Texture = Place.res.MenuButtonbring.texture;
    private backpress: Texture = Place.res.MenuButtonpress.texture;
    constructor(sizesquare: number, time: number, place: Place) {
        super();
        this.redraw = new ReDraw(this);
        this.PauseButton = new pausebutton(this);
        this.theend = new TheEnd(this, place);
        this.BackMenu = new backmenu(this.backbackground, this.backstock, this.backbring, this.backpress, 1024 * 0.05, 1024 * 0.9, 1024 * 0.9, 0.32, 0.4, place);
        this.timergame = time;
        this.ScoreGame = 100000;
        this.PlayButton = new playbutton(this);
        this.scoretext = new Text(String(this.ScoreGame));
        this.scoretext.anchor.set (0.5);
        this.scoretext.position.set(Place.size * 0.2, this.fieldsize*1.18);
        this.scoretext.style = new TextStyle({
            fontSize: 72, fontFamily: "Calibri", fill: "#00fff0", align: "center", fontWeight: Place.res.score.texture.width,
            dropShadow: false
        });

        this.timetext = new Text("--:--");
        this.timetext.anchor.set(0.5);
        this.timetext.position.set(Place.size * 0.8, this.fieldsize*1.18);
        this.timetext.style = new TextStyle({
            fontSize: 72, fontFamily: "Calibri", fill: "#00fff0", align: "center", fontWeight: Place.res.score.texture.width,
            dropShadow: false
        });
        
        this.MusicgameButton = new musicgamebutton();
        this.SoundgameButton = new soundgamebutton();

        this.scorebackground = new Sprite(Place.res.score.texture);
        this.scorebackground.position.set(Place.size * 0.2, this.fieldsize);
        this.scorebackground.anchor.set(0.5);
        this.scorebackground.scale.set(0.4);

        this.timegamebackground = new Sprite(Place.res.timergame.texture);
        this.timegamebackground.position.set(Place.size * 0.8, this.fieldsize)
        this.timegamebackground.anchor.set(0.5);
        this.timegamebackground.scale.set(0.4);

        this.sizefield = sizesquare;

        switch (this.sizefield) {
            case 6:
                this.scaleball = 1;
                this.fieldsize = this.fieldsize * 1.17;
                break;
            case 8:
                this.scaleball = 0.8;
                break;
            case 10:
                this.scaleball = 0.62;
                break;
        }
        this.widthtexture = Place.res.redball.texture.width * this.scaleball;
        this.heighttexture = Place.res.redball.texture.height * this.scaleball;
        this.drawball();
        this.BackgroundBalls();


        this.addChild(this.MusicgameButton);
        this.addChild(this.SoundgameButton);
        this.addChild(this.scorebackground);
        this.addChild(this.timegamebackground);
        this.addChild(this.scoretext);
        this.addChild(this.timetext);
        this.addChild(this.PauseButton);
        this.addChild(this.redraw);
        this.addChild(this.BackMenu);
        this.TimerAnimation();
        setTimeout(function (place: Place) {
            this.StartGameOver(place);
        }.bind(this), this.timergame * 1000);

    }
    public drawball (){
        this.ballsfield = new Array<ball[]>(this.sizefield);
        for (let i = 0; i < this.sizefield; i++) {
            this.ballsfield[i] = new Array<ball>(this.sizefield);
            for (let j = 0; j < this.sizefield; j++) {
                let typetexture = Math.floor(Math.random() * 6);
                this.ballsfield[i][j] = new ball(typetexture);
                this.ballsfield[i][j].position.set(this.fieldsize * 1.7 + this.widthtexture * 1.2 * (j), this.fieldsize * 2.7 + this.heighttexture * 1.2 * (i));
                this.ballsfield[i][j].scale.set(this.scaleball);
                this.ScaleAnimation(this.ballsfield[i][j]);
                this.addChild(this.ballsfield[i][j]);
            }
        }
    }
    public deleteball (){
        for (let i = 0; i < this.sizefield; i++) {
            for (let j = 0; j < this.sizefield; j++) {
                this.RemoveAnimation(this.ballsfield[i][j]);
                this.removeChild(this.ballsfield[i][j]);
            }
        }
    }
    public BackgroundBalls (){
        this.background = new Array<[]>(this.sizefield);
        for (let i = 0; i < this.sizefield; i++) {
            this.background[i] = new Array(this.sizefield);
            for (let j = 0; j < this.sizefield; j++) {
                this.background[i][j] = new Sprite(Place.res.backgroundball.texture);
                this.background[i][j].position.set(this.ballsfield[i][j].position.x, this.ballsfield[i][j].position.y);
                this.background[i][j].anchor.set(0.5, 0.5);
                this.background[i][j].scale.set(this.scaleball);
                this.ScaleAnimation(this.background[i][j]);
                this.addChild(this.background[i][j]);
            }
        }
    }
    public ScaleAnimation(use: any) {
        TweenMax.fromTo(use.scale, 0.6, { x: 0, y: 0 }, { x: this.scaleball, y: this.scaleball });
    }
    public RemoveAnimation(use: any) {
        TweenMax.fromTo(use.scale, 0.6, { x: this.scaleball, y: this.scaleball }, { x: 0, y: 0 });
       
    }
    public TimerText () {
        let seconds = this.timergame % 60;
        let minutes = (this.timergame - seconds) / 60;
        let AddChar = function () { if (seconds<10) return "0"; else return"";};
        this.timetext.text = String(minutes) + ":" + AddChar() + String(seconds);
    }
    public TickTimer(){
        this.timergame-=1;
        this.TimerText();
    }
    public TimerEnd(){
        this.timergame = 0;
        this.TimerText();

    }
    public TimerAnimation(){
        this.TimerText();
        this.timerstart = new TimelineMax({ repeat: this.timergame, repeatDelay: 1, onComplete: this.TimerEnd.bind(this), onRepeat: this.TickTimer.bind(this) });
    }
    public PauseGame(){
        this.backgroundPause = new Sprite(Place.res.black.texture);
        this.backgroundPause.width = Place.size;
        this.backgroundPause.height = Place.size;
        this.backgroundPause.alpha = 0.5;
        this.timerstart.pause();
        this.addChild(this.backgroundPause);
        this.addChild(this.PlayButton);
        this.addChild(this.theend);
    }
    public ResumeGame() {
        this.removeChild(this.backgroundPause);
        this.removeChild(this.PlayButton);
        this.removeChild(this.theend);
        this.timerstart.resume();
    }
    public TheEndbButton(){
        this.removeChild(this.backgroundPause);
        this.removeChild(this.PlayButton);
        this.removeChild(this.theend);
    }
    public StartGameOver(place: Place){
        this.GameOver = new gameover(this.ScoreGame, place);
        this.addChild(this.GameOver);
    }
    public redrawfield(){
        this.deleteball();
        this.drawball();
    }

}