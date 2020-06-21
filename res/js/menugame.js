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
define(["require", "exports", "./place.js", "./button.js"], function (require, exports, place_js_1, button_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buttonmenu = exports.time = exports.places = exports.sound = exports.logo = void 0;
    var Sprite = PIXI.Sprite;
    var Container = PIXI.Container;
    var width = window.innerWidth;
    var height = window.innerHeight;
    /*let sizesound: number = Place.res.sound.texture.width;
    let sizeplace: number = Place.res.place.texture.width;
    let sizetime: number = Place.res.time.texture.width;
    let sizestart: number = Place.res.start.texture.width*0.4;
    let positionsound: number = (1024 - Place.res.sound.texture.width)/2;
    let positionplace: number = (1024 - sizeplace)/3;
    let positiontime: number = (1024 - sizetime)/4;
    */
    var logo = /** @class */ (function (_super) {
        __extends(logo, _super);
        function logo() {
            var _this = _super.call(this) || this;
            _this.sprite = new Sprite(place_js_1.Place.res.logo.texture);
            _this.sprite.position.set(512 - _this.sprite.width / 2, 0);
            _this.addChild(_this.sprite);
            return _this;
        }
        return logo;
    }(Container));
    exports.logo = logo;
    var sound = /** @class */ (function (_super) {
        __extends(sound, _super);
        function sound() {
            var _this = _super.call(this) || this;
            _this.sprite = new Sprite(place_js_1.Place.res.sound.texture);
            _this.sprite.position.set(1024 * 0.1, 1024 / 10 * 6);
            _this.sprite.scale.set(0.8, 0.8);
            _this.addChild(_this.sprite);
            return _this;
        }
        return sound;
    }(Container));
    exports.sound = sound;
    var places = /** @class */ (function (_super) {
        __extends(places, _super);
        function places() {
            var _this = _super.call(this) || this;
            _this.sprite = new Sprite(place_js_1.Place.res.places.texture);
            _this.sprite.position.set(1024 * 0.1, 1024 / 10 * 4.75);
            _this.sprite.scale.set(0.8, 0.8);
            _this.addChild(_this.sprite);
            return _this;
        }
        return places;
    }(Container));
    exports.places = places;
    var time = /** @class */ (function (_super) {
        __extends(time, _super);
        function time() {
            var _this = _super.call(this) || this;
            _this.sprite = new Sprite(place_js_1.Place.res.time.texture);
            _this.sprite.position.set(1024 * 0.1, 1024 / 10 * 3.5);
            _this.sprite.scale.set(0.8, 0.8);
            _this.addChild(_this.sprite);
            return _this;
            //this.sprite.scale.set (, );
        }
        return time;
    }(Container));
    exports.time = time;
    var start = /** @class */ (function (_super) {
        __extends(start, _super);
        function start() {
            return _super.call(this, place_js_1.Place.res.start.texture, place_js_1.Place.res.startpress.texture, place_js_1.Place.res.startbring.texture, 512 - place_js_1.Place.res.start.texture.width * 0.4 / 2, 1024 * 0.7, 0.4) || this;
        }
        return start;
    }(button_js_1.button));
    var on = /** @class */ (function (_super) {
        __extends(on, _super);
        function on() {
            return _super.call(this, place_js_1.Place.res.on.texture, place_js_1.Place.res.onpress.texture, place_js_1.Place.res.onbring.texture, place_js_1.Place.res.sound.texture.width + ((1024 / 2 - place_js_1.Place.res.sound.texture.width) / 2), 1024 / 10 * 5.8, 0.8) || this;
        }
        return on;
    }(button_js_1.button));
    var off = /** @class */ (function (_super) {
        __extends(off, _super);
        function off() {
            return _super.call(this, place_js_1.Place.res.off.texture, place_js_1.Place.res.offpress.texture, place_js_1.Place.res.offbring.texture, place_js_1.Place.res.sound.texture.width + ((1024 / 2 - place_js_1.Place.res.sound.texture.width) / 2) * 2.4, 1024 / 10 * 5.75, 0.8) || this;
        }
        return off;
    }(button_js_1.button));
    var five = /** @class */ (function (_super) {
        __extends(five, _super);
        function five() {
            return _super.call(this, place_js_1.Place.res.five.texture, place_js_1.Place.res.fivepress.texture, place_js_1.Place.res.fivebring.texture, place_js_1.Place.res.time.texture.width + ((1024 * 0.9 - place_js_1.Place.res.time.texture.width) / 8) * 1, 1024 / 10 * 3.25, 0.8) || this;
        }
        return five;
    }(button_js_1.button));
    var ten = /** @class */ (function (_super) {
        __extends(ten, _super);
        function ten() {
            return _super.call(this, place_js_1.Place.res.ten.texture, place_js_1.Place.res.tenpress.texture, place_js_1.Place.res.tenbring.texture, place_js_1.Place.res.time.texture.width + ((1024 * 0.9 - place_js_1.Place.res.time.texture.width) / 8) * 2.5, 1024 / 10 * 3.20, 0.8) || this;
        }
        return ten;
    }(button_js_1.button));
    var fifteen = /** @class */ (function (_super) {
        __extends(fifteen, _super);
        function fifteen() {
            return _super.call(this, place_js_1.Place.res.fifteen.texture, place_js_1.Place.res.fifteenpress.texture, place_js_1.Place.res.fifteenbring.texture, place_js_1.Place.res.time.texture.width + ((1024 * 0.9 - place_js_1.Place.res.time.texture.width) / 8) * 4, 1024 / 10 * 3.15, 0.8) || this;
        }
        return fifteen;
    }(button_js_1.button));
    var thirty = /** @class */ (function (_super) {
        __extends(thirty, _super);
        function thirty() {
            return _super.call(this, place_js_1.Place.res.thirty.texture, place_js_1.Place.res.thirtypress.texture, place_js_1.Place.res.thirtybring.texture, place_js_1.Place.res.time.texture.width + ((1024 * 0.9 - place_js_1.Place.res.time.texture.width) / 8) * 5.5, 1024 / 10 * 3.10, 0.8) || this;
        }
        return thirty;
    }(button_js_1.button));
    var eightxeight = /** @class */ (function (_super) {
        __extends(eightxeight, _super);
        function eightxeight() {
            return _super.call(this, place_js_1.Place.res.eightxeight.texture, place_js_1.Place.res.eightxeightpress.texture, place_js_1.Place.res.eightxeightbring.texture, place_js_1.Place.res.places.texture.width + ((1024 * 0.9 - place_js_1.Place.res.places.texture.width) / 4) * 0.85, 1024 / 10 * 4.5, 0.8) || this;
        }
        return eightxeight;
    }(button_js_1.button));
    var twelvextwelve = /** @class */ (function (_super) {
        __extends(twelvextwelve, _super);
        function twelvextwelve() {
            return _super.call(this, place_js_1.Place.res.twelvextwelve.texture, place_js_1.Place.res.twelvextwelvepress.texture, place_js_1.Place.res.twelvextwelvebring.texture, place_js_1.Place.res.places.texture.width + ((1024 * 0.9 - place_js_1.Place.res.places.texture.width) / 4) * 1.7, 1024 / 10 * 4.45, 0.8) || this;
        }
        return twelvextwelve;
    }(button_js_1.button));
    var sixteenxsixteen = /** @class */ (function (_super) {
        __extends(sixteenxsixteen, _super);
        function sixteenxsixteen() {
            return _super.call(this, place_js_1.Place.res.sixteenxsixteen.texture, place_js_1.Place.res.sixteenxsixteenpress.texture, place_js_1.Place.res.sixteenxsixteenbring.texture, place_js_1.Place.res.places.texture.width + ((1024 * 0.9 - place_js_1.Place.res.places.texture.width) / 4) * 2.8, 1024 / 10 * 4.40, 0.8) || this;
        }
        return sixteenxsixteen;
    }(button_js_1.button));
    var buttonmenu = /** @class */ (function (_super) {
        __extends(buttonmenu, _super);
        function buttonmenu() {
            var _this = _super.call(this) || this;
            _this.startButton = new start();
            _this.onButton = new on();
            _this.offButton = new off();
            _this.fiveButton = new five();
            _this.tenButton = new ten();
            _this.fifteenButton = new fifteen();
            _this.thirtyButton = new thirty();
            _this.eightxeightButton = new eightxeight();
            _this.twelvextwelveButton = new twelvextwelve();
            _this.sixteenxsixteenButton = new sixteenxsixteen();
            _this.addChild(_this.startButton);
            _this.addChild(_this.onButton);
            _this.addChild(_this.offButton);
            _this.addChild(_this.fiveButton);
            _this.addChild(_this.tenButton);
            _this.addChild(_this.fifteenButton);
            _this.addChild(_this.thirtyButton);
            _this.addChild(_this.eightxeightButton);
            _this.addChild(_this.twelvextwelveButton);
            _this.addChild(_this.sixteenxsixteenButton);
            return _this;
        }
        return buttonmenu;
    }(Container));
    exports.buttonmenu = buttonmenu;
});
//# sourceMappingURL=menugame.js.map