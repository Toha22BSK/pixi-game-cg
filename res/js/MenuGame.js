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
define(["require", "exports", "./Game", "./Button"], function (require, exports, Game_1, Button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MenuGame = void 0;
    var Sprite = PIXI.Sprite;
    var Container = PIXI.Container;
    var MenuGame = /** @class */ (function (_super) {
        __extends(MenuGame, _super);
        function MenuGame(game) {
            var _this = _super.call(this) || this;
            _this.game = game;
            _this.configurateUI();
            return _this;
        }
        MenuGame.prototype.configurateUI = function () {
            this.startButton = new Button_1.Button("startGame", [Game_1.Game.RES.start.texture, Game_1.Game.RES.startBring.texture, Game_1.Game.RES.startPress.texture], [Game_1.Game.SIZE / 2, Game_1.Game.SIZE * 0.85], 0.35);
            this.startButton.on("startGame", this.startGame.bind(this));
            this.buttonSoundON = new Button_1.ButtonToggle(Button_1.Switcher.SWITCH, [Game_1.Game.RES.on.texture, Game_1.Game.RES.onBring.texture, Game_1.Game.RES.onPress.texture, Game_1.Game.RES.onPress.texture], [Game_1.Game.SIZE * 0.45, Game_1.Game.SIZE * 0.665], 0.8, 0.5, MenuGame.soundSetting);
            this.buttonSoundOFF = new Button_1.ButtonToggle(Button_1.Switcher.SWITCH, [Game_1.Game.RES.off.texture, Game_1.Game.RES.offBring.texture, Game_1.Game.RES.offPress.texture, Game_1.Game.RES.offPress.texture], [Game_1.Game.SIZE * 0.65, Game_1.Game.SIZE * 0.665], 0.8, 0.5, !MenuGame.soundSetting);
            this.buttonMusicON = new Button_1.ButtonToggle(Button_1.Switcher.SWITCH, [Game_1.Game.RES.on.texture, Game_1.Game.RES.onBring.texture, Game_1.Game.RES.onPress.texture, Game_1.Game.RES.onPress.texture], [Game_1.Game.SIZE * 0.45, Game_1.Game.SIZE * 0.565], 0.8, 0.5, MenuGame.musicSetting);
            this.buttonMusicOFF = new Button_1.ButtonToggle(Button_1.Switcher.SWITCH, [Game_1.Game.RES.off.texture, Game_1.Game.RES.offBring.texture, Game_1.Game.RES.offPress.texture, Game_1.Game.RES.offPress.texture], [Game_1.Game.SIZE * 0.65, Game_1.Game.SIZE * 0.565], 0.8, 0.5, !MenuGame.musicSetting);
            this.switcherSound = new Button_1.Switcher(Button_1.Switcher.SWITCH + "Sound", this.buttonSoundON, this.buttonSoundOFF, MenuGame.soundSetting);
            this.switcherSound.on(Button_1.Switcher.SWITCH + "Sound", this.switchSound.bind(this));
            this.switcherMusic = new Button_1.Switcher(Button_1.Switcher.SWITCH + "Music", this.buttonMusicON, this.buttonMusicOFF, MenuGame.musicSetting);
            this.switcherMusic.on(Button_1.Switcher.SWITCH + "Music", this.switchMusic.bind(this));
            this.gameSizeSelector = new Button_1.Selector(Button_1.Selector.SELECT + "GameSize", [Game_1.Game.SIZE / 1.7, Game_1.Game.SIZE * 0.285], [6, 7, 8, 9, 10], "%v   x   %v");
            this.gameSizeSelector.on(Button_1.Selector.SELECT + "GameSize", this.selectGameSize.bind(this));
            MenuGame.sizeSetting = this.gameSizeSelector.getValue();
            this.gameTimeSelector = new Button_1.Selector(Button_1.Selector.SELECT + "GameTime", [Game_1.Game.SIZE / 1.7, Game_1.Game.SIZE * 0.435], [30, 60, 90, 120, 150, 300, 450, 600, 1200, 2400], "%m", 3);
            this.gameTimeSelector.on(Button_1.Selector.SELECT + "GameTime", this.selectGameTime.bind(this));
            MenuGame.timeSetting = this.gameTimeSelector.getValue();
            this.spritelogo = new Sprite(Game_1.Game.RES.logo.texture);
            this.spritelogo.position.set(512 - this.spritelogo.width / 2, 0);
            this.spritelogo.scale.set(0.9);
            this.spritesound = new Sprite(Game_1.Game.RES.sound.texture);
            this.spritesound.position.set(1024 * 0.1, 1024 / 10 * 6.15);
            this.spritesound.scale.set(0.8, 0.8);
            this.spriteplaces = new Sprite(Game_1.Game.RES.places.texture);
            this.spriteplaces.position.set(1024 * 0.1, 1024 / 10 * 2.5);
            this.spriteplaces.scale.set(0.8, 0.8);
            this.spritetime = new Sprite(Game_1.Game.RES.time.texture);
            this.spritetime.position.set(1024 * 0.1, 1024 / 10 * 4);
            this.spritetime.scale.set(0.8, 0.8);
            this.spritemusic = new Sprite(Game_1.Game.RES.music.texture);
            this.spritemusic.position.set(1024 * 0.1, 1024 / 10 * 5);
            this.spritemusic.scale.set(0.8, 0.8);
            this.addChild(this.gameTimeSelector);
            this.addChild(this.buttonSoundON);
            this.addChild(this.buttonSoundOFF);
            this.addChild(this.buttonMusicON);
            this.addChild(this.buttonMusicOFF);
            this.addChild(this.startButton);
            this.addChild(this.gameSizeSelector);
            this.addChild(this.spritelogo);
            this.addChild(this.spritesound);
            this.addChild(this.spriteplaces);
            this.addChild(this.spritetime);
            this.addChild(this.spritemusic);
        };
        MenuGame.prototype.startGame = function () {
            this.game.showGameField(MenuGame.sizeSetting, MenuGame.timeSetting);
            this.startButton.reset();
        };
        MenuGame.prototype.switchSound = function (value) {
            MenuGame.soundSetting = value;
        };
        MenuGame.prototype.switchMusic = function (value) {
            MenuGame.musicSetting = value;
            if (value)
                this.game.resumeMusic();
            else
                this.game.pauseMusic();
        };
        MenuGame.prototype.selectGameSize = function (value) {
            MenuGame.sizeSetting = value;
        };
        MenuGame.prototype.selectGameTime = function (value) {
            MenuGame.timeSetting = value;
        };
        MenuGame.soundSetting = true;
        MenuGame.musicSetting = true;
        return MenuGame;
    }(Container));
    exports.MenuGame = MenuGame;
});
//# sourceMappingURL=MenuGame.js.map