var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./Balls.js", "./Place.js", "./Button.js"], function (require, exports, Balls_js_1, Place_js_1, Button_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.gamefield = void 0;
    var Sprite = PIXI.Sprite;
    var Container = PIXI.Container;
    var Text = PIXI.Text;
    var TextStyle = PIXI.TextStyle;
    var gamefield = /** @class */ (function (_super) {
        __extends(gamefield, _super);
        function gamefield(sizesquare, time) {
            var _this = _super.call(this) || this;
            _this.fieldsize = 1024 * 0.1;
            _this.scoretext = new Text("100000");
            _this.scoretext.anchor.set(0.5);
            _this.scoretext.position.set(Place_js_1.Place.size * 0.2, _this.fieldsize * 1.18);
            _this.scoretext.style = new TextStyle({
                fontSize: 72, fontFamily: "Calibri", fill: "#00fff0", align: "center", fontWeight: Place_js_1.Place.res.score.texture.width,
                dropShadow: false
            });
            _this.timetext = new Text("30:00");
            _this.timetext.anchor.set(0.5);
            _this.timetext.position.set(Place_js_1.Place.size * 0.8, _this.fieldsize * 1.18);
            _this.timetext.style = new TextStyle({
                fontSize: 72, fontFamily: "Calibri", fill: "#00fff0", align: "center", fontWeight: Place_js_1.Place.res.score.texture.width,
                dropShadow: false
            });
            _this.MusicgameButton = new Button_js_1.musicgamebutton();
            _this.SoundgameButton = new Button_js_1.soundgamebutton();
            _this.scorebackground = new Sprite(Place_js_1.Place.res.score.texture);
            _this.scorebackground.position.set(Place_js_1.Place.size * 0.2, _this.fieldsize);
            _this.scorebackground.anchor.set(0.5);
            _this.scorebackground.scale.set(0.4);
            _this.timegamebackground = new Sprite(Place_js_1.Place.res.timergame.texture);
            _this.timegamebackground.position.set(Place_js_1.Place.size * 0.8, _this.fieldsize);
            _this.timegamebackground.anchor.set(0.5);
            _this.timegamebackground.scale.set(0.4);
            _this.sizefield = sizesquare;
            switch (_this.sizefield) {
                case 6:
                    _this.scaleball = 1;
                    _this.fieldsize = _this.fieldsize * 1.17;
                    break;
                case 8:
                    _this.scaleball = 0.8;
                    break;
                case 10:
                    _this.scaleball = 0.62;
                    break;
            }
            _this.widthtexture = Place_js_1.Place.res.redball.texture.width * _this.scaleball;
            _this.heighttexture = Place_js_1.Place.res.redball.texture.height * _this.scaleball;
            _this.drawball();
            _this.BackgroundBalls();
            _this.addChild(_this.MusicgameButton);
            _this.addChild(_this.SoundgameButton);
            _this.addChild(_this.scorebackground);
            _this.addChild(_this.timegamebackground);
            _this.addChild(_this.scoretext);
            _this.addChild(_this.timetext);
            return _this;
        }
        gamefield.prototype.drawball = function () {
            this.ballsfield = new Array(this.sizefield);
            for (var i = 0; i < this.sizefield; i++) {
                this.ballsfield[i] = new Array(this.sizefield);
                for (var j = 0; j < this.sizefield; j++) {
                    var typetexture = Math.floor(Math.random() * 6);
                    this.ballsfield[i][j] = new Balls_js_1.ball(typetexture);
                    this.ballsfield[i][j].position.set(this.fieldsize * 1.7 + this.widthtexture * 1.2 * (j), this.fieldsize * 2.7 + this.heighttexture * 1.2 * (i));
                    this.ballsfield[i][j].scale.set(this.scaleball);
                    this.ScaleAnimation(this.ballsfield[i][j]);
                    this.addChild(this.ballsfield[i][j]);
                }
            }
        };
        gamefield.prototype.BackgroundBalls = function () {
            this.background = new Array(this.sizefield);
            for (var i = 0; i < this.sizefield; i++) {
                this.background[i] = new Array(this.sizefield);
                for (var j = 0; j < this.sizefield; j++) {
                    this.background[i][j] = new Sprite(Place_js_1.Place.res.backgroundball.texture);
                    this.background[i][j].position.set(this.ballsfield[i][j].position.x, this.ballsfield[i][j].position.y);
                    this.background[i][j].anchor.set(0.5, 0.5);
                    this.background[i][j].scale.set(this.scaleball);
                    this.ScaleAnimation(this.background[i][j]);
                    this.addChild(this.background[i][j]);
                }
            }
        };
        gamefield.prototype.ScaleAnimation = function (use) {
            TweenMax.fromTo(use.scale, 0.6, { x: 0, y: 0 }, { x: this.scaleball, y: this.scaleball });
        };
        return gamefield;
    }(Container));
    exports.gamefield = gamefield;
});
//# sourceMappingURL=Game.js.map