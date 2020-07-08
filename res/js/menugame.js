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
    exports.menugame = void 0;
    var Sprite = PIXI.Sprite;
    var Container = PIXI.Container;
    var width = window.innerWidth;
    var height = window.innerHeight;
    var menugame = /** @class */ (function (_super) {
        __extends(menugame, _super);
        function menugame(place) {
            var _this = _super.call(this) || this;
            _this.Buttonplace = new Button_js_1.buttonplace();
            _this.StartButton = new Button_js_1.startbutton(place);
            _this.Buttonsound = new Button_js_1.soundbuttom(place);
            _this.Buttontime = new Button_js_1.buttontime();
            _this.addChild(_this.Buttonplace);
            _this.addChild(_this.Buttontime);
            _this.addChild(_this.Buttonsound);
            _this.addChild(_this.StartButton);
            _this.logo();
            _this.sound();
            _this.places();
            _this.time();
            _this.music();
            return _this;
        }
        menugame.prototype.logo = function () {
            this.spritelogo = new Sprite(Place_js_1.Place.res.logo.texture);
            this.spritelogo.position.set(512 - this.spritelogo.width / 2, 0);
            this.addChild(this.spritelogo);
        };
        menugame.prototype.sound = function () {
            this.spritesound = new Sprite(Place_js_1.Place.res.sound.texture);
            this.spritesound.position.set(1024 * 0.1, 1024 / 10 * 6.15);
            this.spritesound.scale.set(0.8, 0.8);
            this.addChild(this.spritesound);
        };
        menugame.prototype.places = function () {
            this.spriteplaces = new Sprite(Place_js_1.Place.res.places.texture);
            this.spriteplaces.position.set(1024 * 0.1, 1024 / 10 * 5.15);
            this.spriteplaces.scale.set(0.8, 0.8);
            this.addChild(this.spriteplaces);
        };
        menugame.prototype.time = function () {
            this.spritetime = new Sprite(Place_js_1.Place.res.time.texture);
            this.spritetime.position.set(1024 * 0.1, 1024 / 10 * 4.15);
            this.spritetime.scale.set(0.8, 0.8);
            this.addChild(this.spritetime);
        };
        menugame.prototype.music = function () {
            this.spritemusic = new Sprite(Place_js_1.Place.res.music.texture);
            this.spritemusic.position.set(1024 * 0.1, 1024 / 10 * 3);
            this.spritemusic.scale.set(0.8, 0.8);
            this.addChild(this.spritemusic);
        };
        return menugame;
    }(Container));
    exports.menugame = menugame;
});
//# sourceMappingURL=MenuGame.js.map