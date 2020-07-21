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
define(["require", "exports", "./MenuGame", "./Preview", "./GameField", "./GameOver"], function (require, exports, MenuGame_1, Preview_1, GameField_1, GameOver_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Game = void 0;
    var Sprite = PIXI.Sprite;
    var Container = PIXI.Container;
    var Game = /** @class */ (function (_super) {
        __extends(Game, _super);
        function Game(resources) {
            var _this = _super.call(this) || this;
            Game.RES = resources;
            _this.soundBack = Game.RES.backgroundSound.sound;
            _this.menuGame = new MenuGame_1.MenuGame(_this);
            _this.preview = new Preview_1.Preview(_this);
            _this.backgroundSprite = new Sprite(Game.RES.background.texture);
            _this.backgroundSprite.width = Game.SIZE;
            _this.backgroundSprite.height = Game.SIZE;
            _this.soundBack.volume = 0.25;
            _this.soundBack.play({ loop: true });
            _this.addChild(_this.backgroundSprite);
            _this.addChild(_this.preview);
            return _this;
        }
        Game.prototype.showMenu = function () {
            this.removeChild(this.preview);
            this.preview.destroy();
            this.addChild(this.menuGame);
        };
        Game.prototype.showGameField = function (fieldSize, minute) {
            this.gameField = new GameField_1.GameField(fieldSize, minute, this);
            this.removeChild(this.menuGame);
            this.menuGame.destroy();
            this.addChild(this.gameField);
        };
        Game.prototype.showGameOver = function () {
            this.gameOver = new GameOver_1.GameOver(MenuGame_1.MenuGame.scoreGame, this);
            this.removeChild(this.gameField);
            this.gameField.destroy();
            this.addChild(this.gameOver);
        };
        Game.prototype.restartgamefield = function (value1, value2) {
            this.removeChild(this.gameOver);
            this.gameOver.destroy();
            this.showGameField(value1, value2);
        };
        Game.prototype.backToMenu = function (who) {
            if (who == 0) {
                this.removeChild(this.gameField);
                this.gameField.destroy();
            }
            else {
                this.removeChild(this.gameOver);
                this.gameOver.destroy();
            }
            this.menuGame = new MenuGame_1.MenuGame(this);
            this.addChild(this.menuGame);
        };
        Game.prototype.pauseMusic = function () {
            this.soundBack.pause();
        };
        Game.prototype.resumeMusic = function () {
            this.soundBack.resume();
        };
        Game.SIZE = 1024;
        return Game;
    }(Container));
    exports.Game = Game;
});
//# sourceMappingURL=Game.js.map