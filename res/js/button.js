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
define(["require", "exports", "./Place.js"], function (require, exports, Place_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReDraw = exports.TheEnd = exports.backmenu = exports.restartgame = exports.OK = exports.playbutton = exports.pausebutton = exports.musicgamebutton = exports.soundgamebutton = exports.startbutton = exports.soundbuttom = exports.buttontime = exports.buttonplace = void 0;
    var Sprite = PIXI.Sprite;
    var Container = PIXI.Container;
    var positionstockX = (1024 * 0.9) / 10;
    var positionstockY = 1024 / 10;
    var timeforgame = undefined;
    var sizeField = undefined;
    var soundvalue = undefined;
    var musicvalue = undefined;
    var statusstart = false;
    var buttonplace = /** @class */ (function (_super) {
        __extends(buttonplace, _super);
        function buttonplace() {
            var _this = _super.call(this) || this;
            _this.eightstock = Place_js_1.Place.res.eightxeight.texture;
            _this.eightpress = Place_js_1.Place.res.eightxeightpress.texture;
            _this.eightbring = Place_js_1.Place.res.eightxeightbring.texture;
            _this.sixstock = Place_js_1.Place.res.sixxsix.texture;
            _this.sixpress = Place_js_1.Place.res.sixxsixpress.texture;
            _this.sixbring = Place_js_1.Place.res.sixxsixbring.texture;
            _this.tenstock = Place_js_1.Place.res.tenxten.texture;
            _this.tenpress = Place_js_1.Place.res.tenxtennpress.texture;
            _this.tenbring = Place_js_1.Place.res.tenxtenbring.texture;
            _this.eightsprite = new Sprite();
            _this.sixsprite = new Sprite();
            _this.tensprite = new Sprite();
            _this.eightsprite.interactive = true;
            _this.eightsprite.buttonMode = true;
            _this.sixsprite.interactive = true;
            _this.sixsprite.buttonMode = true;
            _this.tensprite.interactive = true;
            _this.tensprite.buttonMode = true;
            _this.sixsprite.position.set(positionstockX * 3.85, positionstockY * 4.95);
            _this.sixsprite.scale.set(0.8, 0.8);
            _this.eightsprite.position.set(positionstockX * 5.85, positionstockY * 4.85);
            _this.eightsprite.scale.set(0.8, 0.8);
            _this.tensprite.position.set(positionstockX * 7.75, positionstockY * 4.7);
            _this.tensprite.scale.set(0.8, 0.8);
            _this.optionbuttom(_this.sixsprite, _this.eightsprite, _this.tensprite, _this.sixpress, _this.sixbring, _this.sixstock, _this.eightstock, _this.tenstock, 6);
            _this.optionbuttom(_this.eightsprite, _this.sixsprite, _this.tensprite, _this.eightpress, _this.eightbring, _this.eightstock, _this.sixstock, _this.tenstock, 8);
            _this.optionbuttom(_this.tensprite, _this.eightsprite, _this.sixsprite, _this.tenpress, _this.tenbring, _this.tenstock, _this.eightstock, _this.sixstock, 10);
            _this.refreshbuttonplace();
            _this.addChild(_this.eightsprite);
            _this.addChild(_this.sixsprite);
            _this.addChild(_this.tensprite);
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
                setInterval(function () {
                    if (statusstart == true)
                        this.refreshbuttonplace();
                }.bind(this), 1000);
            }.bind(this));
        };
        buttonplace.prototype.refreshbuttonplace = function () {
            this.eightsprite.texture = this.eightstock;
            this.sixsprite.texture = this.sixstock;
            this.tensprite.texture = this.tenstock;
        };
        return buttonplace;
    }(Container));
    exports.buttonplace = buttonplace;
    var buttontime = /** @class */ (function (_super) {
        __extends(buttontime, _super);
        function buttontime() {
            var _this = _super.call(this) || this;
            _this.fivestock = Place_js_1.Place.res.five.texture;
            _this.fivepress = Place_js_1.Place.res.fivepress.texture;
            _this.fivebring = Place_js_1.Place.res.fivebring.texture;
            _this.tenstock = Place_js_1.Place.res.ten.texture;
            _this.tenpress = Place_js_1.Place.res.tenpress.texture;
            _this.tenbring = Place_js_1.Place.res.tenbring.texture;
            _this.fifteenstock = Place_js_1.Place.res.fifteen.texture;
            _this.fifteenpress = Place_js_1.Place.res.fifteenpress.texture;
            _this.fifteenbring = Place_js_1.Place.res.fifteenbring.texture;
            _this.thirtystock = Place_js_1.Place.res.thirty.texture;
            _this.thirtypress = Place_js_1.Place.res.thirtypress.texture;
            _this.thirtybring = Place_js_1.Place.res.thirtybring.texture;
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
            _this.optionbuttom(_this.fivesprite, _this.tensprite, _this.fifteensprite, _this.thirtysprite, _this.fivepress, _this.fivebring, _this.fivestock, _this.tenstock, _this.fifteenstock, _this.thirtystock, 5 * 60);
            _this.optionbuttom(_this.tensprite, _this.fivesprite, _this.fifteensprite, _this.thirtysprite, _this.tenpress, _this.tenbring, _this.tenstock, _this.fivestock, _this.fifteenstock, _this.thirtystock, 10 * 60);
            _this.optionbuttom(_this.fifteensprite, _this.tensprite, _this.fivesprite, _this.thirtysprite, _this.fifteenpress, _this.fifteenbring, _this.fifteenstock, _this.tenstock, _this.fivestock, _this.thirtystock, 15 * 60);
            _this.optionbuttom(_this.thirtysprite, _this.tensprite, _this.fifteensprite, _this.fivesprite, _this.thirtypress, _this.thirtybring, _this.thirtystock, _this.tenstock, _this.fifteenstock, _this.fivestock, 30 * 60);
            _this.refreshbuttontime();
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
                setInterval(function () {
                    if (statusstart == true)
                        this.refreshbuttontime();
                }.bind(this), 1000);
            }.bind(this));
        };
        buttontime.prototype.refreshbuttontime = function () {
            this.fivesprite.texture = this.fivestock;
            this.tensprite.texture = this.tenstock;
            this.fifteensprite.texture = this.fifteenstock;
            this.thirtysprite.texture = this.thirtystock;
        };
        return buttontime;
    }(Container));
    exports.buttontime = buttontime;
    var soundbuttom = /** @class */ (function (_super) {
        __extends(soundbuttom, _super);
        function soundbuttom() {
            var _this = _super.call(this) || this;
            _this.onstock = Place_js_1.Place.res.on.texture;
            _this.onbring = Place_js_1.Place.res.onbring.texture;
            _this.onpress = Place_js_1.Place.res.onpress.texture;
            _this.offstock = Place_js_1.Place.res.off.texture;
            _this.offbring = Place_js_1.Place.res.offbring.texture;
            _this.offpress = Place_js_1.Place.res.offpress.texture;
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
            _this.refreshbuttonsound();
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
                setInterval(function () {
                    if (statusstart == true)
                        this.refreshbuttonsound();
                }.bind(this), 1000);
            }.bind(this));
        };
        soundbuttom.prototype.refreshbuttonsound = function () {
            this.onsoundsprite.texture = this.onstock;
            this.onmusicsprite.texture = this.onstock;
            this.offsoundsprite.texture = this.offstock;
            this.offmusicsprite.texture = this.offstock;
        };
        return soundbuttom;
    }(Container));
    exports.soundbuttom = soundbuttom;
    var startbutton = /** @class */ (function (_super) {
        __extends(startbutton, _super);
        function startbutton(place) {
            var _this = _super.call(this) || this;
            _this.startstock = Place_js_1.Place.res.start.texture;
            _this.startbring = Place_js_1.Place.res.startbring.texture;
            _this.startpress = Place_js_1.Place.res.startpress.texture;
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
                setTimeout(function () {
                    this.startsprite.texture = this.startstock;
                    if (musicvalue == undefined || sizeField == undefined || soundvalue == undefined || timeforgame == undefined) {
                        place.ShowError();
                    }
                    else {
                        statusstart = true;
                        place.showGameField(sizeField, timeforgame);
                    }
                }.bind(this), 200);
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
            _this.soundbuttonon = Place_js_1.Place.res.soundbuttonon.texture;
            _this.soundbuttonoff = Place_js_1.Place.res.soundbuttonoff.texture;
            _this.soundforgame = new Sprite();
            _this.soundforgame.position.set(1024 * 0.95, 1024 * 0.25);
            _this.soundforgame.scale.set(0.5);
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
            _this.musicbuttonon = Place_js_1.Place.res.musicbuttonon.texture;
            _this.musicbuttonoff = Place_js_1.Place.res.musicbuttonoff.texture;
            _this.musicforgame = new Sprite();
            _this.musicforgame.position.set(1024 * 0.05, 1024 * 0.25);
            _this.musicforgame.scale.set(0.5);
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
        function pausebutton(GmaeField) {
            var _this = _super.call(this) || this;
            _this.pausebutton = Place_js_1.Place.res.pausebutton.texture;
            _this.pausebuttonpress = Place_js_1.Place.res.pausebuttonpress.texture;
            _this.pausegame = new Sprite();
            _this.pausegame.position.set(1024 / 2, 1024 * 0.12);
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
                    GmaeField.PauseGame();
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
        function playbutton(GmaeField) {
            var _this = _super.call(this) || this;
            _this.playbutton = Place_js_1.Place.res.playbutton.texture;
            _this.playbuttonpress = Place_js_1.Place.res.playbuttonpress.texture;
            _this.playgame = new Sprite();
            _this.playgame.position.set(1024 / 2, 1024 / 2);
            _this.playgame.anchor.set(0.5);
            _this.playgame.scale.set(0.8);
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
                    GmaeField.ResumeGame();
                }.bind(this), 200);
            }.bind(_this));
            _this.playgame.texture = _this.playbutton;
            _this.addChild(_this.playgame);
            return _this;
        }
        return playbutton;
    }(Container));
    exports.playbutton = playbutton;
    var OK = /** @class */ (function (_super) {
        __extends(OK, _super);
        function OK(place) {
            var _this = _super.call(this) || this;
            _this.OKbutton = Place_js_1.Place.res.OK.texture;
            _this.OKbuttonpress = Place_js_1.Place.res.OKpress.texture;
            _this.OK = new Sprite();
            _this.OK.position.set(1024 / 2, 1024 * 0.6);
            _this.OK.anchor.set(0.5);
            _this.OK.scale.set(0.4);
            _this.OK.interactive = true;
            _this.OK.buttonMode = true;
            _this.OK.on("mouseover", function () {
                this.OK.texture = this.OKbuttonpress;
            }.bind(_this));
            _this.OK.on("mouseout", function () {
                this.OK.texture = this.OKbutton;
            }.bind(_this));
            _this.OK.on("mouseup", function () {
                this.OK.texture = this.OKbuttonpress;
                this.emit("click");
                setTimeout(function () {
                    this.OK.texture = this.OKbutton;
                    place.CloseError();
                }.bind(this), 200);
            }.bind(_this));
            _this.OK.texture = _this.OKbutton;
            _this.addChild(_this.OK);
            return _this;
        }
        return OK;
    }(Container));
    exports.OK = OK;
    var restartgame = /** @class */ (function (_super) {
        __extends(restartgame, _super);
        function restartgame(place) {
            var _this = _super.call(this) || this;
            _this.restartstock = Place_js_1.Place.res.restart.texture;
            _this.restartbring = Place_js_1.Place.res.restartbring.texture;
            _this.restartpress = Place_js_1.Place.res.restartpress.texture;
            _this.backgroundrestart = new Sprite(Place_js_1.Place.res.BackgroundEndButtton.texture);
            _this.backgroundrestart.position.set(Place_js_1.Place.size * 0.25, Place_js_1.Place.size * 0.73);
            _this.backgroundrestart.anchor.set(0.5, 0.5);
            _this.buttonrestart = new Sprite();
            _this.buttonrestart.position.set(Place_js_1.Place.size * 0.25, Place_js_1.Place.size * 0.77);
            _this.buttonrestart.anchor.set(0.5, 0.5);
            _this.buttonrestart.interactive = true;
            _this.buttonrestart.buttonMode = true;
            _this.buttonrestart.on("mouseover", function () {
                this.buttonrestart.texture = this.restartbring;
            }.bind(_this));
            _this.buttonrestart.on("mouseout", function () {
                this.buttonrestart.texture = this.restartstock;
            }.bind(_this));
            _this.buttonrestart.on("mouseup", function () {
                this.buttonrestart.texture = this.restartpress;
                this.emit("click");
                setTimeout(function () {
                    this.buttonrestart.texture = this.restartstock;
                    place.restartgamefield(sizeField, timeforgame);
                }.bind(this), 200);
            }.bind(_this));
            _this.buttonrestart.texture = _this.restartstock;
            _this.addChild(_this.backgroundrestart);
            _this.addChild(_this.buttonrestart);
            return _this;
        }
        return restartgame;
    }(Container));
    exports.restartgame = restartgame;
    var backmenu = /** @class */ (function (_super) {
        __extends(backmenu, _super);
        function backmenu(use, use2, use3, use4, positionX, positionY, positionY2, scale1, scale2, place) {
            var _this = _super.call(this) || this;
            _this.backmenustock = use2;
            _this.backmenubring = use3;
            _this.backmenupress = use4;
            _this.backgroundbackmenu = new Sprite(use);
            _this.backgroundbackmenu.position.set(positionX, positionY);
            _this.backgroundbackmenu.anchor.set(0.5, 0.5);
            _this.backgroundbackmenu.scale.set(scale1, scale1);
            _this.buttonbackmenu = new Sprite();
            _this.buttonbackmenu.position.set(positionX, positionY2);
            _this.buttonbackmenu.anchor.set(0.5, 0.5);
            _this.buttonbackmenu.scale.set(scale2, scale2);
            _this.buttonbackmenu.interactive = true;
            _this.buttonbackmenu.buttonMode = true;
            _this.buttonbackmenu.on("mouseover", function () {
                this.buttonbackmenu.texture = this.backmenubring;
            }.bind(_this));
            _this.buttonbackmenu.on("mouseout", function () {
                this.buttonbackmenu.texture = this.backmenustock;
            }.bind(_this));
            _this.buttonbackmenu.on("mouseup", function () {
                this.buttonbackmenu.texture = this.backmenupress;
                this.emit("click");
                setTimeout(function () {
                    this.buttonbackmenu.texture = this.backmenustock;
                    sizeField = undefined;
                    timeforgame = undefined;
                    statusstart = false;
                    place.BackToMenu();
                }.bind(this), 200);
            }.bind(_this));
            _this.buttonbackmenu.texture = _this.backmenustock;
            _this.addChild(_this.backgroundbackmenu);
            _this.addChild(_this.buttonbackmenu);
            return _this;
        }
        return backmenu;
    }(Container));
    exports.backmenu = backmenu;
    var TheEnd = /** @class */ (function (_super) {
        __extends(TheEnd, _super);
        function TheEnd(gameField, place) {
            var _this = _super.call(this) || this;
            _this.TheEndstock = Place_js_1.Place.res.theend.texture;
            _this.TheEndpress = Place_js_1.Place.res.theendpress.texture;
            _this.TheEndButon = new Sprite();
            _this.TheEndButon.position.set(Place_js_1.Place.size / 2, Place_js_1.Place.size * 0.8);
            _this.TheEndButon.anchor.set(0.5, 0.5);
            _this.TheEndButon.scale.set(0.4);
            _this.TheEndButon.interactive = true;
            _this.TheEndButon.buttonMode = true;
            _this.TheEndButon.on("mouseover", function () {
                this.TheEndButon.texture = this.TheEndpress;
            }.bind(_this));
            _this.TheEndButon.on("mouseout", function () {
                this.TheEndButon.texture = this.TheEndstock;
            }.bind(_this));
            _this.TheEndButon.on("mouseup", function () {
                this.TheEndButon.texture = this.TheEndpress;
                this.emit("click");
                setTimeout(function () {
                    this.TheEndButon.texture = this.TheEndstock;
                    gameField.TheEndbButton();
                    gameField.StartGameOver(place);
                }.bind(this), 200);
            }.bind(_this));
            _this.TheEndButon.texture = _this.TheEndstock;
            _this.addChild(_this.TheEndButon);
            return _this;
        }
        return TheEnd;
    }(Container));
    exports.TheEnd = TheEnd;
    var ReDraw = /** @class */ (function (_super) {
        __extends(ReDraw, _super);
        function ReDraw(gameField) {
            var _this = _super.call(this) || this;
            _this.redrawstock = Place_js_1.Place.res.redraw.texture;
            _this.redrawbring = Place_js_1.Place.res.redrawbring.texture;
            _this.redrawpress = Place_js_1.Place.res.redrawpress.texture;
            _this.redrawbackground = new Sprite(Place_js_1.Place.res.backgroundbuttonfield.texture);
            _this.redrawbackground.position.set(1024 * 0.95, 1024 * 0.9);
            _this.redrawbackground.anchor.set(0.5, 0.5);
            _this.redrawbackground.scale.set(0.32, 0.32);
            _this.redrawButon = new Sprite();
            _this.redrawButon.position.set(1024 * 0.953, 1024 * 0.895);
            _this.redrawButon.anchor.set(0.5, 0.5);
            _this.redrawButon.scale.set(0.3, 0.3);
            _this.redrawButon.interactive = true;
            _this.redrawButon.buttonMode = true;
            _this.redrawButon.on("mouseover", function () {
                this.redrawButon.texture = this.redrawbring;
            }.bind(_this));
            _this.redrawButon.on("mouseout", function () {
                this.redrawButon.texture = this.redrawstock;
            }.bind(_this));
            _this.redrawButon.on("mouseup", function () {
                this.redrawButon.texture = this.redrawpress;
                this.emit("click");
                setTimeout(function () {
                    this.redrawButon.texture = this.redrawstock;
                    gameField.redrawfield();
                }.bind(this), 200);
            }.bind(_this));
            _this.redrawButon.texture = _this.redrawstock;
            _this.addChild(_this.redrawbackground);
            _this.addChild(_this.redrawButon);
            return _this;
        }
        return ReDraw;
    }(Container));
    exports.ReDraw = ReDraw;
});
//# sourceMappingURL=Button.js.map