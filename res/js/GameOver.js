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
define(["require", "exports", "./Place.js", "./Button.js"], function (require, exports, Place_js_1, Button_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.gameover = void 0;
    var Sprite = PIXI.Sprite;
    var Container = PIXI.Container;
    var Text = PIXI.Text;
    var TextStyle = PIXI.TextStyle;
    var gameover = /** @class */ (function (_super) {
        __extends(gameover, _super);
        function gameover(endscore, place) {
            var _this = _super.call(this) || this;
            _this.MenuBack = Place_js_1.Place.res.BackgroundEndButtton.texture;
            _this.MenuStock = Place_js_1.Place.res.menu.texture;
            _this.MenuBring = Place_js_1.Place.res.menubring.texture;
            _this.MenuPress = Place_js_1.Place.res.menupress.texture;
            _this.backgroundwindow = new Sprite(Place_js_1.Place.res.black.texture);
            _this.backgroundwindow.position.set(Place_js_1.Place.size / 2);
            _this.backgroundwindow.anchor.set(0.5);
            _this.backgroundwindow.alpha = 0.7;
            _this.scoreend = new Sprite(Place_js_1.Place.res.score.texture);
            _this.scoreend.position.set(Place_js_1.Place.size / 2, Place_js_1.Place.size * 0.4);
            _this.scoreend.anchor.set(0.5);
            _this.gameoversprite = new Sprite(Place_js_1.Place.res.GameOver.texture);
            _this.gameoversprite.position.set(Place_js_1.Place.size / 2);
            _this.gameoversprite.anchor.set(0.5);
            _this.RestartGame = new Button_js_1.restartgame(place);
            _this.BackMenu = new Button_js_1.backmenu(_this.MenuBack, _this.MenuStock, _this.MenuBring, _this.MenuPress, Place_js_1.Place.size * 0.75, Place_js_1.Place.size * 0.73, Place_js_1.Place.size * 0.77, 1, 1, place);
            _this.score = new Text(String(endscore));
            _this.score.anchor.set(0.5);
            _this.score.position.set(Place_js_1.Place.size / 2, Place_js_1.Place.size * 0.45);
            _this.score.style = new TextStyle({
                fontSize: 120, fontFamily: "Calibri", fill: "#00fff0", align: "center", fontWeight: Place_js_1.Place.res.score.texture.width,
                dropShadow: false
            });
            _this.addChild(_this.backgroundwindow);
            _this.AnimatioGameOver();
            return _this;
        }
        gameover.prototype.AnimatioGameOver = function () {
            var animationover = new TimelineMax({ repeat: 2, repeatDelay: 0.5, onComplete: this.AnimatioGameOvertwo.bind(this), onRepeat: this.ScaleGameOver.bind(this), });
        };
        gameover.prototype.AnimatioGameOvertwo = function () {
            var animationscore = new TimelineMax({ repeat: 2, repeatDelay: 2, onComplete: this.AnimationScore.bind(this), onRepeat: this.AlphaGameOverDown.bind(this) });
        };
        gameover.prototype.AnimationScore = function () {
            var animationEnd = new TimelineMax({ repeat: 2, repeatDelay: 0.5, onComplete: this.AnimationButton.bind(this), onRepeat: this.ScaleScore.bind(this) });
        };
        gameover.prototype.AnimationButton = function () {
            var animationbutton = new TimelineMax({ repeat: 2, repeatDelay: 1, onRepeat: this.AlphaButton.bind(this) });
        };
        gameover.prototype.ScaleGameOver = function () {
            TweenMax.fromTo(this.gameoversprite.scale, 1, { x: 0, y: 0 }, { x: 1, y: 1 });
            this.addChild(this.gameoversprite);
        };
        gameover.prototype.AlphaGameOverDown = function () {
            TweenMax.fromTo(this.gameoversprite, 1, { alpha: 1 }, { alpha: 0 });
        };
        gameover.prototype.ScaleScore = function () {
            TweenMax.fromTo(this.scoreend.scale, 1, { x: 0, y: 0 }, { x: 1, y: 1 });
            TweenMax.fromTo(this.score.scale, 1, { x: 0, y: 0 }, { x: 1, y: 1 });
            this.addChild(this.RestartGame);
            this.addChild(this.BackMenu);
            this.addChild(this.scoreend);
            this.addChild(this.score);
            this.RestartGame.alpha = 0;
            this.BackMenu.alpha = 0;
            this.removeChild(this.gameoversprite);
        };
        gameover.prototype.AlphaButton = function () {
            TweenMax.fromTo(this.RestartGame, 2, { alpha: 0 }, { alpha: 1 });
            TweenMax.fromTo(this.BackMenu, 2, { alpha: 0 }, { alpha: 1 });
        };
        return gameover;
    }(Container));
    exports.gameover = gameover;
});
//# sourceMappingURL=GameOver.js.map