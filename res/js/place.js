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
define(["require", "exports", "./MenuGame.js", "./Button.js", "./Preview.js", "./Game.js", "./Error.js"], function (require, exports, MenuGame_js_1, Button_js_1, Preview_js_1, Game_js_1, Error_js_1) {
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
            _this.MenuGame = new MenuGame_js_1.menugame(_this);
            _this.OK = new Button_js_1.OK(_this);
            _this.ErrorOption = new Error_js_1.erroroption();
            _this.Preview = new Preview_js_1.preview(_this);
            _this.backgroundSprite = new Sprite(Place.res.background.texture);
            _this.backgroundSprite.width = Place.size;
            _this.backgroundSprite.height = Place.size;
            _this.addChild(_this.backgroundSprite);
            _this.addChild(_this.Preview);
            return _this;
        }
        Place.prototype.showMenu = function () {
            this.addChild(this.MenuGame);
            this.removeChild(this.Preview);
        };
        Place.prototype.showGameField = function (sizefield, minute) {
            this.GameField = new Game_js_1.gamefield(sizefield, minute, this);
            this.removeChild(this.MenuGame);
            this.addChild(this.GameField);
        };
        Place.prototype.ShowError = function () {
            this.ScaleHigh(this.ErrorOption);
            this.ScaleHigh(this.OK);
            this.addChild(this.ErrorOption);
            this.addChild(this.OK);
        };
        Place.prototype.End = function () {
            this.removeChild(this.GameField);
        };
        Place.prototype.CloseError = function () {
            this.removeChild(this.ErrorOption);
            this.removeChild(this.OK);
        };
        Place.prototype.restartgamefield = function (value1, value2) {
            this.removeChild(this.GameField);
            this.showGameField(value1, value2);
        };
        Place.prototype.BackToMenu = function () {
            this.removeChild(this.GameField);
            this.showMenu();
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