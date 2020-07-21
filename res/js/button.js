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
define(["require", "exports", "./Game", "./MenuGame"], function (require, exports, Game_1, MenuGame_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ButtonToggle = exports.Button = exports.Switcher = exports.Selector = void 0;
    var Sprite = PIXI.Sprite;
    var Container = PIXI.Container;
    var Text = PIXI.Text;
    var TextStyle = PIXI.TextStyle;
    var Selector = /** @class */ (function (_super) {
        __extends(Selector, _super);
        function Selector(event, position, values, format, index) {
            if (format === void 0) { format = "%v"; }
            if (index === void 0) { index = 0; }
            var _this = _super.call(this) || this;
            _this.index = 0;
            _this.event = event;
            _this.index = index;
            _this.values = values;
            _this.format = format;
            _this.text = new Text(String(MenuGame_1.MenuGame.sizeSetting));
            _this.text.anchor.set(0.5);
            _this.text.position.set(position[0], position[1]);
            _this.text.style = new TextStyle({
                fontSize: 72, fontFamily: "Calibri", fill: "#00fff0", align: "center", dropShadow: false
            });
            _this.buttonUP = new Button(_this.event + "UP", [Game_1.Game.RES.upButton.texture, Game_1.Game.RES.upButtonBring.texture, Game_1.Game.RES.upButtonPress.texture, Game_1.Game.RES.upButtonDisable.texture], [position[0], position[1] - 50], 0.4);
            _this.buttonUP.on(_this.event + "UP", _this.shiftValue.bind(_this, true));
            _this.buttonDOWN = new Button(_this.event + "DOWN", [Game_1.Game.RES.downButton.texture, Game_1.Game.RES.downButtonBring.texture, Game_1.Game.RES.downButtonPress.texture, Game_1.Game.RES.downButtonDisable.texture], [position[0], position[1] + 50], 0.4);
            _this.buttonDOWN.on(_this.event + "DOWN", _this.shiftValue.bind(_this, false));
            _this.setValue(_this.index);
            _this.addChild(_this.text);
            _this.addChild(_this.buttonUP);
            _this.addChild(_this.buttonDOWN);
            return _this;
        }
        Selector.prototype.shiftValue = function (up) {
            this.setValue(this.index + (up ? 1 : -1));
        };
        Selector.prototype.setValue = function (index) {
            if (index < 0)
                this.index = 0;
            else if (index > this.values.length - 1)
                this.index = this.values.length - 1;
            else
                this.index = index;
            if (this.format == "%m")
                this.text.text = (this.getValue() < 600 ? "0" : "") + String(Math.floor(this.getValue() / 60)) + "  :  " + String(this.getValue() % 60) + (this.getValue() % 60 == 0 ? "0" : "");
            else
                this.text.text = this.format.replace(/%v/g, String(this.getValue()));
            this.buttonDOWN.setEnabled(this.index == 0 ? false : true);
            this.buttonUP.setEnabled(this.index == this.values.length - 1 ? false : true);
            this.emit(this.event, this.getValue());
        };
        Selector.prototype.getValue = function () {
            return this.values[this.index];
        };
        Selector.SELECT = "select";
        return Selector;
    }(Container));
    exports.Selector = Selector;
    var Switcher = /** @class */ (function (_super) {
        __extends(Switcher, _super);
        function Switcher(event, buttonON, buttonOFF, state) {
            if (state === void 0) { state = true; }
            var _this = _super.call(this) || this;
            _this.event = event;
            _this.buttonON = buttonON;
            _this.buttonOFF = buttonOFF;
            _this.buttonON.on(Switcher.SWITCH, _this.setState.bind(_this, true));
            _this.buttonOFF.on(Switcher.SWITCH, _this.setState.bind(_this, false));
            _this.setState(state);
            return _this;
        }
        Switcher.prototype.setState = function (value, toggle) {
            if (toggle === void 0) { toggle = false; }
            this.state = value;
            this.buttonON.setState(value ? Button.PRESSED : Button.IDLE);
            this.buttonON.setEnabled(!value);
            this.buttonOFF.setState(value ? Button.IDLE : Button.PRESSED);
            this.buttonOFF.setEnabled(value);
            this.emit(this.event, value);
        };
        Switcher.SWITCH = "switch";
        return Switcher;
    }(Container));
    exports.Switcher = Switcher;
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        function Button(event, textures, position, scale, anchor, switcher) {
            if (event === void 0) { event = ""; }
            if (position === void 0) { position = [0, 0]; }
            if (scale === void 0) { scale = 1; }
            if (anchor === void 0) { anchor = 0.5; }
            if (switcher === void 0) { switcher = false; }
            var _this = _super.call(this) || this;
            _this.state = 0;
            _this.textures = [];
            _this.soloTint = [0.9, 1, 1, 0.5];
            _this.event = event;
            _this.textures = textures;
            _this.sprite = new Sprite();
            _this.position.set(position[0], position[1]);
            _this.sprite.scale.set(scale);
            _this.sprite.anchor.set(anchor);
            _this.sprite.interactive = true;
            _this.sprite.buttonMode = true;
            _this.setState(Button.IDLE);
            _this.sprite.on("pointerout", function () {
                this.setState(this.toggled && this.switcher ? Button.PRESSED : Button.IDLE);
            }.bind(_this));
            _this.sprite.on("pointerover", function () {
                this.setState(Button.HOVER);
            }.bind(_this));
            _this.sprite.on("pointerup", function () {
                this.setState(Button.PRESSED);
                if (MenuGame_1.MenuGame.soundSetting) {
                    Game_1.Game.RES.click.sound.volume = 0.5;
                    Game_1.Game.RES.click.sound.play();
                }
                this.emit(this.event);
                setTimeout(function () {
                    this.setState(Button.IDLE);
                }.bind(this), 50);
            }.bind(_this));
            _this.addChild(_this.sprite);
            return _this;
        }
        Button.prototype.setEnabled = function (value) {
            this.sprite.interactive = value;
            this.sprite.buttonMode = value;
            if (!value)
                this.setState(Button.DISABLED);
            else
                this.setState(Button.IDLE);
        };
        Button.prototype.setState = function (value) {
            if (!this.sprite.interactive) {
                this.sprite.texture = this.textures[Button.DISABLED];
                return;
            }
            this.state = value;
            if (this.textures.length == 1) {
                this.sprite.texture = this.textures[Button.IDLE];
                this.sprite.alpha = this.soloTint[value];
                return;
            }
            if (value == Button.DISABLED && !this.textures[Button.DISABLED]) {
                this.sprite.texture = this.textures[Button.IDLE];
                this.sprite.alpha = 0.5;
            }
            else {
                this.sprite.texture = this.textures[this.state];
                this.sprite.alpha = 1;
            }
        };
        Button.prototype.reset = function () {
            this.setState(Button.IDLE);
            this.sprite.interactive = true;
            this.sprite.buttonMode = true;
            this.sprite.alpha = 1;
            this.sprite.texture = this.textures[this.state];
        };
        Button.IDLE = 0;
        Button.HOVER = 1;
        Button.PRESSED = 2;
        Button.DISABLED = 3;
        return Button;
    }(Container));
    exports.Button = Button;
    var ButtonToggle = /** @class */ (function (_super) {
        __extends(ButtonToggle, _super);
        function ButtonToggle(event, textures, position, scale, anchor, toggled) {
            if (event === void 0) { event = ""; }
            if (position === void 0) { position = [0, 0]; }
            if (scale === void 0) { scale = 1; }
            if (anchor === void 0) { anchor = 0.5; }
            if (toggled === void 0) { toggled = false; }
            var _this = _super.call(this, event, textures, position, scale, anchor) || this;
            _this.toggled = toggled;
            _this.setState(_this.toggled ? Button.PRESSED : Button.IDLE);
            _this.sprite.removeAllListeners();
            _this.sprite.on("pointerup", function () {
                this.setState(this.toggled ? Button.IDLE : Button.PRESSED);
                if (MenuGame_1.MenuGame.soundSetting) {
                    Game_1.Game.RES.click.sound.volume = 0.5;
                    Game_1.Game.RES.click.sound.play();
                }
                this.emit(this.event, this.toggled);
            }.bind(_this));
            return _this;
        }
        ButtonToggle.prototype.setEnabled = function (value) {
            this.sprite.interactive = value;
            this.sprite.buttonMode = value;
            if (!value)
                this.setState(Button.DISABLED);
            else
                this.setState(this.toggled ? Button.PRESSED : Button.IDLE);
        };
        ButtonToggle.prototype.setState = function (value) {
            if (value == Button.PRESSED)
                this.toggled = true;
            else if (value == Button.IDLE)
                this.toggled = false;
            _super.prototype.setState.call(this, value);
        };
        return ButtonToggle;
    }(Button));
    exports.ButtonToggle = ButtonToggle;
});
//# sourceMappingURL=Button.js.map