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
define(["require", "exports", "./menugame.js", "./Button.js", "./preview"], function (require, exports, menugame_js_1, Button_js_1, preview_1) {
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
            _this.Logo = new menugame_js_1.logo();
            _this.Sound = new menugame_js_1.sound();
            _this.Places = new menugame_js_1.places();
            _this.Time = new menugame_js_1.time();
            _this.Preview = new preview_1.preview(_this);
            _this.Buttonplace = new Button_js_1.buttonplace();
            _this.Music = new menugame_js_1.music();
            _this.StartButton = new Button_js_1.startbutton(_this);
            _this.Buttonsound = new Button_js_1.soundbuttom();
            _this.Buttontime = new Button_js_1.buttontime();
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
        Place.size = 1024;
        return Place;
    }(Container));
    exports.Place = Place;
});
//# sourceMappingURL=place.js.map