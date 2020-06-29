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
define(["require", "exports", "./menugame.js", "./Button.js", "./Preview.js", "./Game.js", "./Error.js"], function (require, exports, menugame_js_1, Button_js_1, Preview_js_1, Game_js_1, Error_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Place = void 0;
    var Sprite = PIXI.Sprite;
    var Container = PIXI.Container;
    var Place = /** @class */ (function (_super) {
        __extends(Place, _super);
        function Place(resources) {
            var _this = _super.call(this) || this;
            Place.res = resources;
            _this.PauseButton = new Button_js_1.pausebutton(_this);
            _this.Logo = new menugame_js_1.logo();
            _this.OK = new Button_js_1.OK(_this);
            _this.ErrorOption = new Error_js_1.erroroption();
            _this.Sound = new menugame_js_1.sound();
            _this.Places = new menugame_js_1.places();
            _this.Time = new menugame_js_1.time();
            _this.Preview = new Preview_js_1.preview(_this);
            _this.Buttonplace = new Button_js_1.buttonplace();
            _this.Music = new menugame_js_1.music();
            _this.StartButton = new Button_js_1.startbutton(_this);
            _this.Buttonsound = new Button_js_1.soundbuttom();
            _this.Buttontime = new Button_js_1.buttontime();
            _this.PlayButton = new Button_js_1.playbutton(_this);
            _this.backgroundSprite = new Sprite(Place.res.background.texture);
            _this.backgroundSprite.width = Place.size;
            _this.backgroundSprite.height = Place.size;
            _this.addChild(_this.backgroundSprite);
            _this.addChild(_this.Preview);
            return _this;
        }
        Place.prototype.showMenu = function () {
            this.removeChild(this.Preview);
            this.addChild(this.Logo);
            this.addChild(this.Sound);
            this.addChild(this.Places);
            this.addChild(this.Time);
            this.addChild(this.Buttonplace);
            this.addChild(this.Buttontime);
            this.addChild(this.Music);
            this.addChild(this.Buttonsound);
            this.addChild(this.StartButton);
        };
        Place.prototype.showGameField = function (sizefield, minute) {
            this.GameField = new Game_js_1.gamefield(sizefield, minute);
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
        };
        Place.prototype.PauseGame = function () {
            this.backgroundPause = new Sprite(Place.res.black.texture);
            this.backgroundPause.width = Place.size;
            this.backgroundPause.height = Place.size;
            this.backgroundPause.alpha = 0.5;
            this.addChild(this.backgroundPause);
            this.addChild(this.PlayButton);
        };
        Place.prototype.ResumeGame = function () {
            this.removeChild(this.backgroundPause);
            this.removeChild(this.PlayButton);
        };
        Place.prototype.ShowError = function () {
            this.ScaleHigh(this.ErrorOption);
            this.ScaleHigh(this.OK);
            this.addChild(this.ErrorOption);
            this.addChild(this.OK);
        };
        Place.prototype.CloseError = function () {
            this.removeChild(this.ErrorOption);
            this.removeChild(this.OK);
        };
        Place.prototype.ScaleHigh = function (use) {
            TweenMax.fromTo(use.scale, 1, { x: 0, y: 0 }, { x: 1, y: 1 });
        };
        Place.size = 1024;
        return Place;
    }(Container));
    exports.Place = Place;
});
//# sourceMappingURL=Place.js.map