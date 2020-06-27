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
    exports.playbutton = exports.pausebutton = exports.musicgamebutton = exports.soundgamebutton = exports.startbutton = exports.soundbuttom = exports.buttontime = exports.buttonplace = void 0;
    var Sprite = PIXI.Sprite;
    var Container = PIXI.Container;
    var positionstockX = (1024 * 0.9) / 10;
    var positionstockY = 1024 / 10;
    var timeforgame = 5;
    var sizeField = 8;
    var soundvalue = true;
    var musicvalue = true;
    var buttonplace = /** @class */ (function (_super) {
        __extends(buttonplace, _super);
        function buttonplace() {
            var _this = _super.call(this) || this;
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
            _this.eightsprite.position.set(positionstockX * 4, positionstockY * 4.95);
            _this.eightsprite.scale.set(0.8, 0.8);
            _this.twelvesprite.position.set(positionstockX * 5.7, positionstockY * 4.85);
            _this.twelvesprite.scale.set(0.8, 0.8);
            _this.sixteensprite.position.set(positionstockX * 7.75, positionstockY * 4.7);
            _this.sixteensprite.scale.set(0.8, 0.8);
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
                sizeField = value;
            }.bind(this));
        };
        return buttonplace;
    }(Container));
    exports.buttonplace = buttonplace;
    var buttontime = /** @class */ (function (_super) {
        __extends(buttontime, _super);
        function buttontime() {
            var _this = _super.call(this) || this;
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
            _this.fivesprite.position.set(positionstockX * 4.15, positionstockY * 3.9);
            _this.fivesprite.scale.set(0.8, 0.8);
            _this.tensprite.position.set(positionstockX * 5.5, positionstockY * 3.8);
            _this.tensprite.scale.set(0.8, 0.8);
            _this.fifteensprite.position.set(positionstockX * 7, positionstockY * 3.7);
            _this.fifteensprite.scale.set(0.8, 0.8);
            _this.thirtysprite.position.set(positionstockX * 8.5, positionstockY * 3.6);
            _this.thirtysprite.scale.set(0.8, 0.8);
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
                timeforgame = value;
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
            _this.onsoundsprite.position.set(positionstockX * 3.75, positionstockY * 6);
            _this.onsoundsprite.scale.set(0.8, 0.8);
            _this.onmusicsprite.position.set(positionstockX * 4.5, positionstockY * 2.9);
            _this.onmusicsprite.scale.set(0.8, 0.8);
            _this.offsoundsprite.position.set(positionstockX * 5.75, positionstockY * 5.85);
            _this.offsoundsprite.scale.set(0.8, 0.8);
            _this.offmusicsprite.position.set(positionstockX * 6.5, positionstockY * 2.75);
            _this.offmusicsprite.scale.set(0.8, 0.8);
            _this.optionbuttom(_this.onmusicsprite, _this.offmusicsprite, _this.onpress, _this.onbring, _this.onstock, _this.offstock, true, 0);
            _this.optionbuttom(_this.offmusicsprite, _this.onmusicsprite, _this.offpress, _this.offbring, _this.offstock, _this.onstock, false, 0);
            _this.optionbuttom(_this.onsoundsprite, _this.offsoundsprite, _this.onpress, _this.onbring, _this.onstock, _this.offstock, true, 1);
            _this.optionbuttom(_this.offsoundsprite, _this.onsoundsprite, _this.offpress, _this.offbring, _this.offstock, _this.onstock, false, 1);
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
        soundbuttom.prototype.optionbuttom = function (use, use2, press, bring, stock, stock2, valuesound, who) {
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
                if (who == 1) {
                    soundvalue = valuesound;
                }
                else {
                    musicvalue = valuesound;
                }
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
            _this.startsprite.anchor.x = 0.5;
            _this.startsprite.position.set(1024 / 2, positionstockY * 7);
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
                this.emit("click");
                place.showGameField(sizeField, timeforgame);
            }.bind(_this));
            _this.startsprite.texture = _this.startstock;
            _this.addChild(_this.startsprite);
            return _this;
        }
        return startbutton;
    }(Container));
    exports.startbutton = startbutton;
    var soundgamebutton = /** @class */ (function (_super) {
        __extends(soundgamebutton, _super);
        function soundgamebutton() {
            var _this = _super.call(this) || this;
            _this.soundbuttonon = place_js_1.Place.res.soundbuttonon.texture;
            _this.soundbuttonoff = place_js_1.Place.res.soundbuttonoff.texture;
            _this.soundforgame = new Sprite();
            _this.soundforgame.position.set(1024 * 0.95, 1024 * 0.25);
            _this.soundforgame.scale.set(0.1);
            _this.soundforgame.anchor.set(0.5);
            _this.soundforgame.interactive = true;
            _this.soundforgame.buttonMode = true;
            _this.soundforgame.on("mouseover", function () {
                if (soundvalue == true) {
                    this.soundforgame.texture = this.soundbuttonoff;
                }
                else {
                    this.soundforgame.texture = this.soundbuttonon;
                }
            }.bind(_this));
            _this.soundforgame.on("mouseout", function () {
                if (soundvalue == true) {
                    this.soundforgame.texture = this.soundbuttonon;
                }
                else {
                    this.soundforgame.texture = this.soundbuttonoff;
                }
            }.bind(_this));
            _this.soundforgame.on("mouseup", function () {
                if (soundvalue == true) {
                    this.soundforgame.texture = this.soundbuttonoff;
                    soundvalue = false;
                }
                else {
                    this.soundforgame.texture = this.soundbuttonon;
                    soundvalue = true;
                }
                this.emit("click");
            }.bind(_this));
            if (soundvalue == true) {
                _this.soundforgame.texture = _this.soundbuttonon;
            }
            else {
                _this.soundforgame.texture = _this.soundbuttonoff;
            }
            _this.addChild(_this.soundforgame);
            return _this;
        }
        return soundgamebutton;
    }(Container));
    exports.soundgamebutton = soundgamebutton;
    var musicgamebutton = /** @class */ (function (_super) {
        __extends(musicgamebutton, _super);
        function musicgamebutton() {
            var _this = _super.call(this) || this;
            _this.musicbuttonon = place_js_1.Place.res.musicbuttonon.texture;
            _this.musicbuttonoff = place_js_1.Place.res.musicbuttonoff.texture;
            _this.musicforgame = new Sprite();
            _this.musicforgame.position.set(1024 * 0.05, 1024 * 0.25);
            _this.musicforgame.scale.set(0.05);
            _this.musicforgame.anchor.set(0.5);
            _this.musicforgame.interactive = true;
            _this.musicforgame.buttonMode = true;
            _this.musicforgame.on("mouseover", function () {
                if (musicvalue == true) {
                    this.musicforgame.texture = this.musicbuttonoff;
                }
                else {
                    this.musicforgame.texture = this.musicbuttonon;
                }
            }.bind(_this));
            _this.musicforgame.on("mouseout", function () {
                if (musicvalue == true) {
                    this.musicforgame.texture = this.musicbuttonon;
                }
                else {
                    this.musicforgame.texture = this.musicbuttonoff;
                }
            }.bind(_this));
            _this.musicforgame.on("mouseup", function () {
                if (musicvalue == true) {
                    this.musicforgame.texture = this.musicbuttonoff;
                    musicvalue = false;
                }
                else {
                    this.musicforgame.texture = this.musicbuttonon;
                    musicvalue = true;
                }
                this.emit("click");
            }.bind(_this));
            if (musicvalue == true) {
                _this.musicforgame.texture = _this.musicbuttonon;
            }
            else {
                _this.musicforgame.texture = _this.musicbuttonoff;
            }
            _this.addChild(_this.musicforgame);
            return _this;
        }
        return musicgamebutton;
    }(Container));
    exports.musicgamebutton = musicgamebutton;
    var pausebutton = /** @class */ (function (_super) {
        __extends(pausebutton, _super);
        function pausebutton(place) {
            var _this = _super.call(this) || this;
            _this.pausebutton = place_js_1.Place.res.pausebutton.texture;
            _this.pausebuttonpress = place_js_1.Place.res.pausebuttonpress.texture;
            _this.pausegame = new Sprite();
            _this.pausegame.position.set(1024 / 2, 1024 * 0.1);
            _this.pausegame.scale.set(0.5);
            _this.pausegame.anchor.set(0.5);
            _this.pausegame.interactive = true;
            _this.pausegame.buttonMode = true;
            _this.pausegame.on("mouseover", function () {
                this.pausegame.texture = this.pausebuttonpress;
            }.bind(_this));
            _this.pausegame.on("mouseout", function () {
                this.pausegame.texture = this.pausebutton;
            }.bind(_this));
            _this.pausegame.on("mouseup", function () {
                this.pausegame.texture = this.pausebuttonpress;
                this.emit("click");
                setTimeout(function () {
                    this.pausegame.texture = this.pausebutton;
                    place.PauseGame();
                }.bind(this), 200);
            }.bind(_this));
            _this.pausegame.texture = _this.pausebutton;
            _this.addChild(_this.pausegame);
            return _this;
        }
        return pausebutton;
    }(Container));
    exports.pausebutton = pausebutton;
    var playbutton = /** @class */ (function (_super) {
        __extends(playbutton, _super);
        function playbutton(place) {
            var _this = _super.call(this) || this;
            _this.playbutton = place_js_1.Place.res.playbutton.texture;
            _this.playbuttonpress = place_js_1.Place.res.playbuttonpress.texture;
            _this.playgame = new Sprite();
            _this.playgame.position.set(1024 / 2, 1024 / 2);
            _this.playgame.anchor.set(0.5);
            _this.playgame.scale.set(0.5);
            _this.playgame.interactive = true;
            _this.playgame.buttonMode = true;
            _this.playgame.on("mouseover", function () {
                this.playgame.texture = this.playbuttonpress;
            }.bind(_this));
            _this.playgame.on("mouseout", function () {
                this.playgame.texture = this.playbutton;
            }.bind(_this));
            _this.playgame.on("mouseup", function () {
                this.playgame.texture = this.playbuttonpress;
                this.emit("click");
                setTimeout(function () {
                    this.playgame.texture = this.playbutton;
                    place.ResumeGame();
                }.bind(this), 200);
            }.bind(_this));
            _this.playgame.texture = _this.playbutton;
            _this.addChild(_this.playgame);
            return _this;
        }
        return playbutton;
    }(Container));
    exports.playbutton = playbutton;
});
//# sourceMappingURL=Button.js.map