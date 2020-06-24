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
define(["require", "exports", "./place.js"], function (require, exports, place_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.startbutton = exports.soundbuttom = exports.buttontime = exports.buttonplace = void 0;
    var Sprite = PIXI.Sprite;
    var Container = PIXI.Container;
    var positionstockX = (1024 * 0.9) / 10;
    var positionstockY = 1024 / 10;
    var buttonplace = /** @class */ (function (_super) {
        __extends(buttonplace, _super);
        function buttonplace() {
            var _this = _super.call(this) || this;
            _this.valueplace = 0;
            _this.eightstock = place_js_1.Place.res.eightxeight.texture;
            _this.eightpress = place_js_1.Place.res.eightxeightpress.texture;
            _this.eightbring = place_js_1.Place.res.eightxeightbring.texture;
            _this.twelvestock = place_js_1.Place.res.twelvextwelve.texture;
            _this.twelvepress = place_js_1.Place.res.twelvextwelvepress.texture;
            _this.twelvebring = place_js_1.Place.res.twelvextwelvebring.texture;
            _this.sixteenstock = place_js_1.Place.res.sixteenxsixteen.texture;
            _this.sixteenpress = place_js_1.Place.res.sixteenxsixteenpress.texture;
            _this.sixteenbring = place_js_1.Place.res.sixteenxsixteenbring.texture;
            _this.eightsprite = new Sprite();
            _this.twelvesprite = new Sprite();
            _this.sixteensprite = new Sprite();
            _this.eightsprite.interactive = true;
            _this.eightsprite.buttonMode = true;
            _this.twelvesprite.interactive = true;
            _this.twelvesprite.buttonMode = true;
            _this.sixteensprite.interactive = true;
            _this.sixteensprite.buttonMode = true;
            _this.eightsprite.position.x = positionstockX * 4;
            _this.eightsprite.position.y = positionstockY * 4.95;
            _this.eightsprite.scale.x = 0.8;
            _this.eightsprite.scale.y = 0.8;
            _this.twelvesprite.position.x = positionstockX * 5.7;
            _this.twelvesprite.position.y = positionstockY * 4.85;
            _this.twelvesprite.scale.x = 0.8;
            _this.twelvesprite.scale.y = 0.8;
            _this.sixteensprite.position.x = positionstockX * 7.75;
            _this.sixteensprite.position.y = positionstockY * 4.7;
            _this.sixteensprite.scale.x = 0.8;
            _this.sixteensprite.scale.y = 0.8;
            _this.optionbuttom(_this.eightsprite, _this.twelvesprite, _this.sixteensprite, _this.eightpress, _this.eightbring, _this.eightstock, _this.twelvestock, _this.sixteenstock, 8);
            _this.optionbuttom(_this.twelvesprite, _this.eightsprite, _this.sixteensprite, _this.twelvepress, _this.twelvebring, _this.twelvestock, _this.eightstock, _this.sixteenstock, 12);
            _this.optionbuttom(_this.sixteensprite, _this.eightsprite, _this.twelvesprite, _this.sixteenpress, _this.sixteenbring, _this.sixteenstock, _this.eightstock, _this.twelvestock, 16);
            _this.eightsprite.texture = _this.eightstock;
            _this.twelvesprite.texture = _this.twelvestock;
            _this.sixteensprite.texture = _this.sixteenstock;
            _this.addChild(_this.eightsprite);
            _this.addChild(_this.twelvesprite);
            _this.addChild(_this.sixteensprite);
            return _this;
        }
        buttonplace.prototype.optionbuttom = function (use, use2, use3, press, bring, stock, stock2, stock3, value) {
            use.on("mouseover", function () {
                if (use.texture != press) {
                    use.texture = bring;
                }
            }.bind(this));
            use.on("mouseout", function () {
                if (use.texture != press) {
                    use.texture = stock;
                }
            }.bind(this));
            use.on("mouseup", function () {
                use.texture = press;
                use2.texture = stock2;
                use3.texture = stock3;
                this.valueplace = value;
            }.bind(this));
        };
        return buttonplace;
    }(Container));
    exports.buttonplace = buttonplace;
    var buttontime = /** @class */ (function (_super) {
        __extends(buttontime, _super);
        function buttontime() {
            var _this = _super.call(this) || this;
            _this.valuetime = 0;
            _this.fivestock = place_js_1.Place.res.five.texture;
            _this.fivepress = place_js_1.Place.res.fivepress.texture;
            _this.fivebring = place_js_1.Place.res.fivebring.texture;
            _this.tenstock = place_js_1.Place.res.ten.texture;
            _this.tenpress = place_js_1.Place.res.tenpress.texture;
            _this.tenbring = place_js_1.Place.res.tenbring.texture;
            _this.fifteenstock = place_js_1.Place.res.fifteen.texture;
            _this.fifteenpress = place_js_1.Place.res.fifteenpress.texture;
            _this.fifteenbring = place_js_1.Place.res.fifteenbring.texture;
            _this.thirtystock = place_js_1.Place.res.thirty.texture;
            _this.thirtypress = place_js_1.Place.res.thirtypress.texture;
            _this.thirtybring = place_js_1.Place.res.thirtybring.texture;
            _this.fivesprite = new Sprite();
            _this.tensprite = new Sprite();
            _this.fifteensprite = new Sprite();
            _this.thirtysprite = new Sprite();
            _this.fivesprite.interactive = true;
            _this.fivesprite.buttonMode = true;
            _this.tensprite.interactive = true;
            _this.tensprite.buttonMode = true;
            _this.fifteensprite.interactive = true;
            _this.fifteensprite.buttonMode = true;
            _this.thirtysprite.interactive = true;
            _this.thirtysprite.buttonMode = true;
            _this.fivesprite.position.x = positionstockX * 4.15;
            _this.fivesprite.position.y = positionstockY * 3.90;
            _this.fivesprite.scale.x = 0.8;
            _this.fivesprite.scale.y = 0.8;
            _this.tensprite.position.x = positionstockX * 5.5;
            _this.tensprite.position.y = positionstockY * 3.8;
            _this.tensprite.scale.x = 0.8;
            _this.tensprite.scale.y = 0.8;
            _this.fifteensprite.position.x = positionstockX * 7;
            _this.fifteensprite.position.y = positionstockY * 3.7;
            _this.fifteensprite.scale.x = 0.8;
            _this.fifteensprite.scale.y = 0.8;
            _this.thirtysprite.position.x = positionstockX * 8.5;
            _this.thirtysprite.position.y = positionstockY * 3.6;
            _this.thirtysprite.scale.x = 0.8;
            _this.thirtysprite.scale.y = 0.8;
            _this.optionbuttom(_this.fivesprite, _this.tensprite, _this.fifteensprite, _this.thirtysprite, _this.fivepress, _this.fivebring, _this.fivestock, _this.tenstock, _this.fifteenstock, _this.thirtystock, 5);
            _this.optionbuttom(_this.tensprite, _this.fivesprite, _this.fifteensprite, _this.thirtysprite, _this.tenpress, _this.tenbring, _this.tenstock, _this.fivestock, _this.fifteenstock, _this.thirtystock, 10);
            _this.optionbuttom(_this.fifteensprite, _this.tensprite, _this.fivesprite, _this.thirtysprite, _this.fifteenpress, _this.fifteenbring, _this.fifteenstock, _this.tenstock, _this.fivestock, _this.thirtystock, 15);
            _this.optionbuttom(_this.thirtysprite, _this.tensprite, _this.fifteensprite, _this.fivesprite, _this.thirtypress, _this.thirtybring, _this.thirtystock, _this.tenstock, _this.fifteenstock, _this.fivestock, 30);
            _this.fivesprite.texture = _this.fivestock;
            _this.tensprite.texture = _this.tenstock;
            _this.fifteensprite.texture = _this.fifteenstock;
            _this.thirtysprite.texture = _this.thirtystock;
            _this.addChild(_this.fivesprite);
            _this.addChild(_this.tensprite);
            _this.addChild(_this.fifteensprite);
            _this.addChild(_this.thirtysprite);
            return _this;
        }
        buttontime.prototype.optionbuttom = function (use, use2, use3, use4, press, bring, stock, stock2, stock3, stock4, value) {
            use.on("mouseover", function () {
                if (use.texture != press) {
                    use.texture = bring;
                }
            }.bind(this));
            use.on("mouseout", function () {
                if (use.texture != press) {
                    use.texture = stock;
                }
            }.bind(this));
            use.on("mouseup", function () {
                use.texture = press;
                use2.texture = stock2;
                use3.texture = stock3;
                use4.texture = stock4;
                this.valuetime = value;
            }.bind(this));
        };
        return buttontime;
    }(Container));
    exports.buttontime = buttontime;
    var soundbuttom = /** @class */ (function (_super) {
        __extends(soundbuttom, _super);
        function soundbuttom() {
            var _this = _super.call(this) || this;
            _this.onstock = place_js_1.Place.res.on.texture;
            _this.onbring = place_js_1.Place.res.onbring.texture;
            _this.onpress = place_js_1.Place.res.onpress.texture;
            _this.offstock = place_js_1.Place.res.off.texture;
            _this.offbring = place_js_1.Place.res.offbring.texture;
            _this.offpress = place_js_1.Place.res.offpress.texture;
            _this.onsoundsprite = new Sprite();
            _this.onmusicsprite = new Sprite();
            _this.offsoundsprite = new Sprite();
            _this.offmusicsprite = new Sprite();
            _this.onsoundsprite.interactive = true;
            _this.onsoundsprite.buttonMode = true;
            _this.onmusicsprite.interactive = true;
            _this.onmusicsprite.buttonMode = true;
            _this.offsoundsprite.interactive = true;
            _this.offsoundsprite.buttonMode = true;
            _this.offmusicsprite.interactive = true;
            _this.offmusicsprite.buttonMode = true;
            _this.onsoundsprite.position.x = positionstockX * 3.75;
            _this.onsoundsprite.position.y = positionstockY * 6;
            _this.onsoundsprite.scale.x = 0.8;
            _this.onsoundsprite.scale.y = 0.8;
            _this.onmusicsprite.position.x = positionstockX * 4.5;
            _this.onmusicsprite.position.y = positionstockY * 2.9;
            _this.onmusicsprite.scale.x = 0.8;
            _this.onmusicsprite.scale.y = 0.8;
            _this.offsoundsprite.position.x = positionstockX * 5.75;
            _this.offsoundsprite.position.y = positionstockY * 5.85;
            _this.offsoundsprite.scale.x = 0.8;
            _this.offsoundsprite.scale.y = 0.8;
            _this.offmusicsprite.position.x = positionstockX * 6.5;
            _this.offmusicsprite.position.y = positionstockY * 2.75;
            _this.offmusicsprite.scale.set(0.8, 0.8);
            _this.optionbuttom(_this.onmusicsprite, _this.offmusicsprite, _this.onpress, _this.onbring, _this.onstock, _this.offstock);
            _this.optionbuttom(_this.offmusicsprite, _this.onmusicsprite, _this.offpress, _this.offbring, _this.offstock, _this.onstock);
            _this.optionbuttom(_this.onsoundsprite, _this.offsoundsprite, _this.onpress, _this.onbring, _this.onstock, _this.offstock);
            _this.optionbuttom(_this.offsoundsprite, _this.onsoundsprite, _this.offpress, _this.offbring, _this.offstock, _this.onstock);
            _this.onsoundsprite.texture = _this.onstock;
            _this.onmusicsprite.texture = _this.onstock;
            _this.offsoundsprite.texture = _this.offstock;
            _this.offmusicsprite.texture = _this.offstock;
            _this.addChild(_this.onsoundsprite);
            _this.addChild(_this.onmusicsprite);
            _this.addChild(_this.offsoundsprite);
            _this.addChild(_this.offmusicsprite);
            return _this;
        }
        soundbuttom.prototype.optionbuttom = function (use, use2, press, bring, stock, stock2) {
            use.on("mouseover", function () {
                if (use.texture != press) {
                    use.texture = bring;
                }
            }.bind(this));
            use.on("mouseout", function () {
                if (use.texture != press) {
                    use.texture = stock;
                }
            }.bind(this));
            use.on("mouseup", function () {
                use.texture = press;
                use2.texture = stock2;
            }.bind(this));
        };
        return soundbuttom;
    }(Container));
    exports.soundbuttom = soundbuttom;
    var startbutton = /** @class */ (function (_super) {
        __extends(startbutton, _super);
        function startbutton(place) {
            var _this = _super.call(this) || this;
            _this.startstock = place_js_1.Place.res.start.texture;
            _this.startbring = place_js_1.Place.res.startbring.texture;
            _this.startpress = place_js_1.Place.res.startpress.texture;
            _this.startsprite = new Sprite();
            _this.startsprite.interactive = true;
            _this.startsprite.buttonMode = true;
            _this.startsprite.position.set(1024 / 2 - _this.startstock.width * 0.4 / 2, positionstockY * 7);
            _this.startsprite.scale.set(0.4, 0.4);
            _this.startsprite.on("mouseover", function () {
                if (this.startsprite.texture != this.startpress) {
                    this.startsprite.texture = this.startbring;
                }
            }.bind(_this));
            _this.startsprite.on("mouseout", function () {
                if (this.startsprite.texture != this.startpress) {
                    this.startsprite.texture = this.startstock;
                }
            }.bind(_this));
            _this.startsprite.on("mouseup", function () {
                this.startsprite.texture = this.startpress;
            }.bind(_this));
            _this.startsprite.texture = _this.startstock;
            _this.addChild(_this.startsprite);
            return _this;
        }
        return startbutton;
    }(Container));
    exports.startbutton = startbutton;
});
//# sourceMappingURL=Button.js.map