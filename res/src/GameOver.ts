import Application = PIXI.Application;
import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import Texture = PIXI.Texture;
import { Place } from "./Place.js";
import { restartgame, backmenu } from "./Button.js";
import Text = PIXI.Text;
import TextStyle = PIXI.TextStyle;
declare let TweenMax: any;
declare let TimelineMax: any;
export class gameover extends Container{
    private backgroundwindow: Sprite;
    private scoreend: Sprite;
    private gameoversprite: Sprite;
    private score: Text;
    private RestartGame: restartgame;
    private BackMenu: backmenu;
    private MenuBack: Texture = Place.res.BackgroundEndButtton.texture;
    private MenuStock: Texture = Place.res.menu.texture;
    private MenuBring: Texture = Place.res.menubring.texture;
    private MenuPress: Texture = Place.res.menupress.texture;
    constructor(endscore: number, place: Place){
        super();
        this.backgroundwindow = new Sprite(Place.res.black.texture);
        this.backgroundwindow.position.set (Place.size / 2);
        this.backgroundwindow.anchor.set (0.5);
        this.backgroundwindow.alpha = 0.7;
        this.scoreend = new Sprite(Place.res.score.texture);
        this.scoreend.position.set(Place.size / 2, Place.size * 0.4);
        this.scoreend.anchor.set(0.5);
        this.gameoversprite = new Sprite(Place.res.GameOver.texture);
        this.gameoversprite.position.set(Place.size / 2);
        this.gameoversprite.anchor.set(0.5);
        this.RestartGame = new restartgame(place);
        this.BackMenu = new backmenu(this.MenuBack, this.MenuStock, this.MenuBring, this.MenuPress, Place.size * 0.75, Place.size * 0.73, Place.size *0.77, 1,1,place);
        this.score = new Text(String(endscore));
        this.score.anchor.set(0.5);
        this.score.position.set(Place.size / 2, Place.size * 0.45);
        this.score.style = new TextStyle({
            fontSize: 120, fontFamily: "Calibri", fill: "#00fff0", align: "center", fontWeight: Place.res.score.texture.width,
            dropShadow: false
        });
        this.addChild(this.backgroundwindow);
        this.AnimatioGameOver();

    }
    public AnimatioGameOver() {
            let animationover = new TimelineMax({ repeat: 2, repeatDelay: 0.5, onComplete: this.AnimatioGameOvertwo.bind(this), onRepeat: this.ScaleGameOver.bind(this), });
    }
    public AnimatioGameOvertwo() {
        let animationscore = new TimelineMax({ repeat: 2, repeatDelay: 2, onComplete: this.AnimationScore.bind(this), onRepeat: this.AlphaGameOverDown.bind(this) });
    }
    public AnimationScore() {
        let animationEnd = new TimelineMax({ repeat: 2, repeatDelay: 0.5, onComplete: this.AnimationButton.bind(this), onRepeat: this.ScaleScore.bind(this) });
    }
    public AnimationButton() {
        let animationbutton = new TimelineMax({ repeat: 2, repeatDelay: 1, onRepeat: this.AlphaButton.bind(this) });
    }
    public ScaleGameOver(){
        TweenMax.fromTo(this.gameoversprite.scale, 1, { x: 0, y: 0 }, { x: 1, y: 1 });
        this.addChild(this.gameoversprite);
    }
    public AlphaGameOverDown(){
        TweenMax.fromTo(this.gameoversprite, 1, { alpha: 1 }, { alpha: 0 });
    }

    public ScaleScore(){
        TweenMax.fromTo(this.scoreend.scale, 1, { x: 0, y: 0 }, { x: 1, y: 1 });
        TweenMax.fromTo(this.score.scale, 1, { x: 0, y: 0 }, { x: 1, y: 1 });
        this.addChild(this.RestartGame);
        this.addChild(this.BackMenu);
        this.addChild(this.scoreend);
        this.addChild(this.score);

        this.RestartGame.alpha = 0;
        this.BackMenu.alpha = 0;
        this.removeChild(this.gameoversprite)
    }

    public AlphaButton(){
        TweenMax.fromTo(this.RestartGame, 2, { alpha: 0 }, { alpha: 1 });
        TweenMax.fromTo(this.BackMenu, 2, { alpha: 0 }, { alpha: 1 });

    }
}