import Application = PIXI.Application;
import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import Texture = PIXI.Texture;
import Text = PIXI.Text;
import TextStyle = PIXI.TextStyle;
import { Place } from "./Place.js";
import { gameover } from "./GameOver.js";
declare let TweenMax: any;
declare let TimelineMax: any;
import { musicgamebutton, soundgamebutton, playbutton, TheEnd, pausebutton, backmenu, ReDraw } from "./Button.js";
export class gamefield extends Container {

    private MusicgameButton: musicgamebutton;
    private SoundgameButton: soundgamebutton;
    private sizefield: number;
    private timergame: number;
    private scoreplus: number;
    private selectball: any[];
    public statussound: boolean;
    private poshorizon: number[];
    private posvertical: number[];
    private redraw: ReDraw;
    private BackMenu: backmenu;
    private theend: TheEnd;
    private GameOver: gameover;
    protected scoretext: Text;
    protected timetext: Text;
    private PlayButton: playbutton;
    private scorebackground: Sprite;
    private timegamebackground: Sprite;
    private fieldsize: number = 1024 * 0.1;
    private widthtexture: number;
    private heighttexture: number;
    private scaleball: number;
    private timerstart: any;
    private ScoreGame: number;
    private drawstatus: boolean[] = new Array(true, true);
    private swapstatus: boolean = false;
    private PauseButton: pausebutton;
    private backgroundPause: Sprite;
    private background: Sprite[][];
    private backbackground: Texture = Place.res.backgroundbuttonfield.texture;
    private backstock: Texture = Place.res.MenuButton.texture;
    private backbring: Texture = Place.res.MenuButtonbring.texture;
    private backpress: Texture = Place.res.MenuButtonpress.texture;
    private balls: Sprite[][];
    private pressball: Sprite;
    private timeforgame: any;
    private count: number;
    private textureballs: Texture[] = [
        Place.res.redball.texture,
        Place.res.blueball.texture,
        Place.res.greenball.texture,
        Place.res.yellowball.texture,
        Place.res.pinkball.texture,
        Place.res.lightblueball.texture
    ];
    constructor(sizesquare: number, time: number, place: Place) {
        super();
        this.redraw = new ReDraw(this);
        this.pressball = new Sprite(Place.res.pressball.texture);
        this.pressball.anchor.set(0.5);
        this.PauseButton = new pausebutton(this);
        this.theend = new TheEnd(this, place);
        this.BackMenu = new backmenu(this.backbackground, this.backstock, this.backbring, this.backpress, 1024 * 0.05, 1024 * 0.9, 1024 * 0.9, 0.32, 0.4, place);
        this.timergame = time;
        this.ScoreGame = 0;
        this.scoreplus = 0;
        this.selectball = new Array();
        this.PlayButton = new playbutton(this);
        this.scoretext = new Text(String(this.ScoreGame));
        this.scoretext.anchor.set(0.5);
        this.scoretext.position.set(Place.size * 0.2, this.fieldsize * 1.18);
        this.scoretext.style = new TextStyle({
            fontSize: 72, fontFamily: "Calibri", fill: "#00fff0", align: "center", fontWeight: Place.res.score.texture.width,
            dropShadow: false
        });

        this.timetext = new Text("--:--");
        this.timetext.anchor.set(0.5);
        this.timetext.position.set(Place.size * 0.8, this.fieldsize * 1.18);
        this.timetext.style = new TextStyle({
            fontSize: 72, fontFamily: "Calibri", fill: "#00fff0", align: "center", fontWeight: Place.res.score.texture.width,
            dropShadow: false
        });
        this.count = 0;
        this.MusicgameButton = new musicgamebutton(place);
        this.SoundgameButton = new soundgamebutton(this);

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
        this.checkfirstplay();


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

        // let timebild = new TimelineMax({ repeat: 1, repeatDelay: 5, onComplete: this.findball.bind(this) });
        // this.findball();
         this.timeforgame = new TimelineMax({ repeat: 1, repeatDelay: this.timergame, onComplete: this.StartGameOver.bind(this, place) });


    }
    private createball() {
        this.balls = new Array<[]>(this.sizefield);
        for (let i = 0; i < this.sizefield; i++) {
            this.balls[i] = new Array(this.sizefield);
            for (let j = 0; j < this.sizefield; j++) {
                var typetexture = Math.floor(Math.random() * 6);
                this.balls[i][j] = new Sprite(this.textureballs[typetexture]);
                this.balls[i][j].position.set(this.fieldsize * 1.7 + this.widthtexture * 1.2 * (j), this.fieldsize * 2.7 + this.heighttexture * 1.2 * (i));
                this.balls[i][j].scale.set(this.scaleball);
                this.balls[i][j].anchor.set(0.5);
            }
        }
        this.drawstatus[0] = true;
        this.drawstatus[1] = true;
    }
    public checkfirstplay() {
        do {
            this.createball();
            this.firstcheckhorizon();
            this.firstcheckvertical();
        } while (this.drawstatus[0] == false || this.drawstatus[1] == false);
        this.drawball();
        this.drawstatus[0] = true;
        this.drawstatus[1] = true;


    }
    public drawball() {
        for (let i = 0; i < this.sizefield; i++) {
            for (let j = 0; j < this.sizefield; j++) {
                this.ScaleAnimation(this.balls[i][j]);
                this.addChild(this.balls[i][j]);
                this.interactivemode(this.balls[i][j]);
            }
        }

        this.BackgroundBalls();
        this.interactiveon();
        let timebild = new TimelineMax({ repeat: 1, repeatDelay: 1, onComplete: this.findball.bind(this) });
    }
    public deleteball() {
        for (let i = 0; i < this.sizefield; i++) {
            for (let j = 0; j < this.sizefield; j++) {
                this.RemoveAnimation(this.balls[i][j]);
                this.removeChild(this.balls[i][j]);
            }
        }
    }
    public deletebackground() {
        for (let i = 0; i < this.sizefield; i++) {
            for (let j = 0; j < this.sizefield; j++) {
                this.RemoveAnimation(this.background[i][j]);
                this.removeChild(this.background[i][j]);
            }
        }
    }
    public BackgroundBalls() {
        this.background = new Array<[]>(this.sizefield);
        for (let i = 0; i < this.sizefield; i++) {
            this.background[i] = new Array(this.sizefield);
            for (let j = 0; j < this.sizefield; j++) {
                this.background[i][j] = new Sprite(Place.res.backgroundball.texture);
                this.background[i][j].position.set(this.balls[i][j].position.x, this.balls[i][j].position.y);
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
    public TimerText() {
        let seconds = this.timergame % 60;
        let minutes = (this.timergame - seconds) / 60;
        let AddChar = function () { if (seconds < 10) return "0"; else return ""; };
        this.timetext.text = String(minutes) + ":" + AddChar() + String(seconds);
    }
    public TickTimer() {
        this.timergame -= 1;
        this.TimerText();
    }
    public TimerEnd() {
        this.timergame = 0;
        this.TimerText();

    }
    public TimerAnimation() {
        this.TimerText();
        // TweenMax.lagSmoothing(0);
        this.timerstart = new TimelineMax({ repeat: this.timergame, repeatDelay: 1, onComplete: this.TimerEnd.bind(this), onRepeat: this.TickTimer.bind(this) });
    }
    public PauseGame() {
        this.backgroundPause = new Sprite(Place.res.black.texture);
        this.backgroundPause.width = Place.size;
        this.backgroundPause.height = Place.size;
        this.backgroundPause.alpha = 0.5;
        this.timerstart.pause();
        this.addChild(this.backgroundPause);
        this.addChild(this.PlayButton);
        this.addChild(this.theend);
        this.interactiveoff();
        this.timeforgame.pause();
    }
    public ResumeGame() {
        this.removeChild(this.backgroundPause);
        this.removeChild(this.PlayButton);
        this.removeChild(this.theend);
        this.interactiveon();
        this.timerstart.resume();
        this.timeforgame.resume();
    }
    public TheEndbButton() {
        this.removeChild(this.backgroundPause);
        this.removeChild(this.PlayButton);
        this.removeChild(this.theend);
    }
    public StartGameOver(place: Place) {
        this.GameOver = new gameover(this.ScoreGame, place);
        this.addChild(this.GameOver);
        this.deleteallfield();
        this.deletebackground();
    }
    public redrawfield() {
        this.deleteball();
        this.deletebackground();
        this.checkfirstplay();
        this.removeChild(this.pressball);
    }
    public deleteallfield() {
        this.removeChild(this.MusicgameButton);
        this.removeChild(this.SoundgameButton);
        this.removeChild(this.scorebackground);
        this.removeChild(this.timegamebackground);
        this.removeChild(this.scoretext);
        this.removeChild(this.timetext);
        this.removeChild(this.PauseButton);
        this.removeChild(this.redraw);
        this.removeChild(this.BackMenu);
        this.removeChild(this.pressball);
        this.deleteball();
    }
    public findballvertcal() {
        let n = 1;
        let k = 0;

        for (let i = 0; i < this.sizefield; i++) {
            n = 1;
            this.posvertical = new Array();
            k = 0;
            for (let j = 1; j < this.sizefield; j++) {
                if (this.balls[j - 1][i].texture == this.balls[j][i].texture && this.balls[j][i].visible != false) {
                    n++;
                    this.posvertical[k++] = j - 1;
                    this.posvertical[k++] = i;
                    this.posvertical[k++] = j;
                    this.posvertical[k++] = i;
                    if (j == this.sizefield - 1 && n >= 3)
                        this.deadball(this.posvertical);
                }
                else {
                    if (n >= 3) {
                        this.deadball(this.posvertical);
                    }
                    this.posvertical = new Array();
                    k = 0;
                    n = 1;
                }
            }
        }
    }
    public findballhorizon() {
        let n = 1;
        let k = 0;
        let check;
        for (let i = 0; i < this.sizefield; i++) {
            n = 1;
            this.poshorizon = new Array();
            k = 0;
            for (let j = 1; j < this.sizefield; j++) {
                if (this.balls[i][j - 1].texture == this.balls[i][j].texture && this.balls[i][j].visible != false) {
                    n++;
                    this.poshorizon[k++] = i;
                    this.poshorizon[k++] = j - 1;
                    this.poshorizon[k++] = i;
                    this.poshorizon[k++] = j;
                    if (j == this.sizefield - 1 && n >= 3)
                        this.deadball(this.poshorizon);
                }
                else {
                    if (n >= 3) {
                        this.deadball(this.poshorizon);
                    }
                    this.poshorizon = new Array();
                    k = 0;
                    n = 1;
                }
            }
        }
    }
    public findball() {
        this.findballvertcal();
        this.findballhorizon();
        if (this.scoreplus != 0) {
            this.ScoreGame += this.scoreplus;
            if (this.statussound == true) {
                Place.res.crushball.sound.volume = 0.4;
                Place.res.crushball.sound.play()
            }
            let scoreanimate = new TimelineMax({ repeat: 1, repeatDelay: 2, onComplete: function () { this.scoretext.text = String(this.ScoreGame); }.bind(this), onUpdate: function () { this.scoretext.text = "+" + String(this.scoreplus) }.bind(this) });
            let t1 = new TimelineMax({ repeat: 1, repeatDelay: 2, onComplete: function () { this.scoreplus = 0; }.bind(this) });
        }
    }
    public deadball(use: any) {

        for (let i = 0; i < use.length - 1; i++) {
            this.removeChild(this.balls[use[i++]][use[i]]);
            i--;
            this.balls[use[i++]][use[i]].visible = false;

        }
        this.scoreplus += (use.length / 2 + 2) * 50;
        console.error(this.scoreplus);
        use = new Array();

    }
    public interactiveoff() {
        for (let i = 0; i < this.sizefield; i++) {
            for (let j = 0; j < this.sizefield; j++) {
                this.balls[i][j].interactive = false;
                this.balls[i][j].buttonMode = false;
            }
        }
    }
    public interactiveon() {
        for (let i = 0; i < this.sizefield; i++) {
            for (let j = 0; j < this.sizefield; j++) {
                this.balls[i][j].interactive = true;
                this.balls[i][j].buttonMode = true;
            }
        }
    }
    public interactivemode(use: any) {
        use.on("mouseover", function (): void {
            if (use.scale.x != this.scaleball + 0.1)
                use.scale.set(this.scaleball + 0.11);
        }.bind(this));

        use.on("mouseout", function (): void {
            if (use.scale.x == this.scaleball + 0.11)
                use.scale.set(this.scaleball);
        }.bind(this));

        use.on("mouseup", function (): void {
            if (this.statussound == true) {
                Place.res.clickball.sound.volume = 0.3;
                Place.res.clickball.sound.play();
            }
            this.pressball.position.set(use.position.x, use.position.y);
            this.pressball.scale.set(this.scaleball);
            this.addChild(this.pressball);
            this.swapball(use);
            this.emit("click");
        }.bind(this));
    }
    public swapball(use: any) {
        this.selectball[this.count] = use;
        this.count++;
        if (this.selectball.length == 2) {
            this.checkswap(this.selectball);
            if (this.swapstatus == true) {
                this.animationswap();
                this.count = 0;
            }
            else {
                console.error(this.selectball[1].position.x);
                console.error(this.selectball[0].position.x - this.widthtexture * 1.2);
                this.removeChild(this.pressball);   
                this.count = 0;
                this.selectball = new Array();
            }
        }

    }
    public changetextureball() {
        let temp: Texture;
        temp = this.selectball[0].texture;
        this.selectball[0].texture = this.selectball[1].texture;
        this.selectball[1].texture = temp;
        this.changealphaup(this.selectball);
        this.removeChild(this.pressball);
        this.selectball = new Array();
    }
    public changealphadown(use: any) {
        TweenMax.fromTo(this.selectball, 1, { alpha: 1 }, { alpha: 0 });
    }
    public changealphaup(use: any) {
        TweenMax.fromTo(this.selectball, 1, { alpha: 0 }, { alpha: 1 });
        let wait = new TimelineMax({ repeat: 1, repeatDelay: 1, onComplete: this.findball.bind(this) });
    }
    public checkswap(use: any) {
        let n = 1;
        let temp: any;
        let koordinat: number[] = new Array();
        for (let i = 0; i < this.sizefield; i++) {
            for (let j = 0; j < this.sizefield; j++) {
                if (use[0].position == this.balls[i][j].position && this.balls[i][j].visible != false) {
                    koordinat[0] = i;
                    koordinat[1] = j;
                }
                if (use[1].position == this.balls[i][j].position && this.balls[i][j].visible != false) {
                    koordinat[2] = i;
                    koordinat[3] = j;
                }
            }
        }
        if (Math.abs(Math.abs(koordinat[0] - koordinat[2]) - Math.abs(koordinat[1] - koordinat[3])) == 1){
        console.error(koordinat[1]);
        console.error(koordinat[3]);

        if (koordinat[1] > koordinat[3]) {
            temp = koordinat[1];
            koordinat[1] = koordinat[3];
            koordinat[3] = temp;

        }
        if (koordinat[0] > koordinat[2]) {
            temp = koordinat[0];
            koordinat[0] = koordinat[2];
            koordinat[2] = temp;
        }
        this.swapany(koordinat);
        for (let i = koordinat[1]; i <= koordinat[3]; i++) {
            n = 1;
            console.error(i);
            for (let j = 1; j < this.sizefield; j++) {
                if (this.balls[j - 1][i].texture == this.balls[j][i].texture && this.balls[j][i].visible != false) {
                    n++;
                    console.error(n);
                    if ( n >= 3)
                        this.swapstatus = true;
                    console.error(this.swapstatus);
                }else
                    n = 1;
                }
            }

        
        for (let i = koordinat[0]; i <= koordinat[2]; i++) {
            n = 1;
            console.error(i);
            for (let j = 1; j < this.sizefield; j++) {
                if (this.balls[i][j - 1].texture == this.balls[i][j].texture && this.balls[i][j].visible != false) {
                    n++;
                    console.error(n);
                    if (n >= 3)
                        this.swapstatus = true;
                } else
                    n = 1;
                }
            }
        this.swapany(koordinat);
        }

    }

    private animationswap() {
        let scaledown = new TimelineMax({ repeat: 1, repeatDelay: 0, onComplete: this.changetextureball.bind(this), onUpdate: this.changealphadown.bind(this) });
        let wait = new TimelineMax({ repeat: 1, repeatDelay: 1, onComplete: this.interactiveon.bind(this), onUpdate: this.interactiveoff.bind(this) });
        let wait2 = new TimelineMax({ repeat: 1, repeatDelay: 1, onComplete: function () { this.selectball = new Array() }.bind(this), onUpdate: function () { this.swapstatus = false }.bind(this) });
    }
    private firstcheckvertical() {
        let n = 1;

        for (let i = 0; i < this.sizefield; i++) {

            n = 1;
            for (let j = 1; j < this.sizefield; j++) {
                if (this.balls[j - 1][i].texture == this.balls[j][i].texture && this.balls[j][i].visible != false) {
                    n++;
                    if (j == this.sizefield - 1 && n >= 3) {
                        this.drawstatus[0] = false;
                        break;

                    }
                }
                else {
                    if (n >= 3) {
                        this.drawstatus[0] = false;
                        break;
                    }
                    n = 1;
                }

            }
        }
    }
    private firstcheckhorizon() {
        let n = 1;

        for (let i = 0; i < this.sizefield; i++) {
            n = 1;
            for (let j = 1; j < this.sizefield; j++) {
                if (this.balls[i][j - 1].texture == this.balls[i][j].texture) {
                    n++;
                    if (j == this.sizefield - 1 && n >= 3) {
                        this.drawstatus[0] = false;
                        break;

                    }
                }
                else {
                    if (n >= 3) {
                        this.drawstatus[0] = false;
                        break;
                    }
                    n = 1;
                }
            }
        }
    }
    private swapany(use: number[]) {
        let temp: Texture;
        temp = this.balls[use[0]][use[1]].texture;
        this.balls[use[0]][use[1]].texture = this.balls[use[2]][use[3]].texture;
        this.balls[use[2]][use[3]].texture = temp;
    }

}
