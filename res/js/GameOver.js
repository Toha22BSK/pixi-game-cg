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
define(["require", "exports", "./Game", "./Button", "./MenuGame"], function (require, exports, Game_1, Button_1, MenuGame_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GameOver = void 0;
    var Sprite = PIXI.Sprite;
    var Container = PIXI.Container;
    var Text = PIXI.Text;
    var TextStyle = PIXI.TextStyle;
    var GameOver = /** @class */ (function (_super) {
        __extends(GameOver, _super);
        function GameOver(endscore, game) {
            var _this = _super.call(this) || this;
            _this.game = game;
            _this.confugirationUI();
            _this.animatioGameOver();
            return _this;
        }
        GameOver.prototype.confugirationUI = function () {
            this.backgroundWindow = new Sprite(Game_1.Game.RES.black.texture);
            this.backgroundWindow.position.set(Game_1.Game.SIZE / 2);
            this.backgroundWindow.anchor.set(0.5);
            this.backgroundWindow.alpha = 0.7;
            this.scoreEnd = new Sprite(Game_1.Game.RES.score.texture);
            this.scoreEnd.position.set(Game_1.Game.SIZE / 2, Game_1.Game.SIZE * 0.4);
            this.scoreEnd.anchor.set(0.5);
            this.backgroundMenu = new Sprite(Game_1.Game.RES.backgroundEndButtton.texture);
            this.backgroundMenu.position.set(Game_1.Game.SIZE * 0.75, Game_1.Game.SIZE * 0.737);
            this.backgroundMenu.anchor.set(0.5);
            this.backgroundRestart = new Sprite(Game_1.Game.RES.backgroundEndButtton.texture);
            this.backgroundRestart.position.set(Game_1.Game.SIZE * 0.25, Game_1.Game.SIZE * 0.735);
            this.backgroundRestart.anchor.set(0.5);
            this.gameoverSprite = new Sprite(Game_1.Game.RES.GameOver.texture);
            this.gameoverSprite.position.set(Game_1.Game.SIZE / 2);
            this.gameoverSprite.anchor.set(0.5);
            this.backMenu = new Button_1.Button("backToMenu", [Game_1.Game.RES.menu.texture, Game_1.Game.RES.menuBring.texture, Game_1.Game.RES.menuPress.texture], [Game_1.Game.SIZE * 0.75, Game_1.Game.SIZE * 0.78], 1);
            this.backMenu.on("backToMenu", this.game.backToMenu.bind(this.game, 1));
            this.restartGame = new Button_1.Button("restartGame", [Game_1.Game.RES.restart.texture, Game_1.Game.RES.restartBring.texture, Game_1.Game.RES.restartPress.texture], [Game_1.Game.SIZE * 0.25, Game_1.Game.SIZE * 0.78], 1);
            this.restartGame.on("restartGame", this.game.restartgamefield.bind(this.game, MenuGame_1.MenuGame.sizeSetting, MenuGame_1.MenuGame.timeSetting));
            this.score = new Text(String(MenuGame_1.MenuGame.scoreGame));
            this.score.anchor.set(0.5);
            this.score.position.set(Game_1.Game.SIZE / 2, Game_1.Game.SIZE * 0.45);
            this.score.style = new TextStyle({
                fontSize: 120, fontFamily: "Calibri", fill: "#00fff0", align: "center", fontWeight: Game_1.Game.RES.score.texture.width,
                dropShadow: false
            });
            this.addChild(this.backgroundWindow);
        };
        GameOver.prototype.animatioGameOver = function () {
            var animationOver = new TimelineMax({ repeat: 2, repeatDelay: 0.5, onComplete: this.animatioGameOvertwo.bind(this), onRepeat: this.scaleGameOver.bind(this), });
        };
        GameOver.prototype.animatioGameOvertwo = function () {
            var animationScore = new TimelineMax({ repeat: 2, repeatDelay: 2, onComplete: this.animationScore.bind(this), onRepeat: this.alphaGameOverDown.bind(this) });
        };
        GameOver.prototype.animationScore = function () {
            var animationEnd = new TimelineMax({ repeat: 2, repeatDelay: 0.5, onComplete: this.animationButton.bind(this), onRepeat: this.scaleScore.bind(this) });
        };
        GameOver.prototype.animationButton = function () {
            var animationButton = new TimelineMax({ repeat: 2, repeatDelay: 1, onRepeat: this.alphaButton.bind(this) });
        };
        GameOver.prototype.scaleGameOver = function () {
            TweenMax.fromTo(this.gameoverSprite.scale, 1, { x: 0, y: 0 }, { x: 1, y: 1 });
            this.addChild(this.gameoverSprite);
        };
        GameOver.prototype.alphaGameOverDown = function () {
            TweenMax.fromTo(this.gameoverSprite, 1, { alpha: 1 }, { alpha: 0 });
        };
        GameOver.prototype.scaleScore = function () {
            this.restartGame.alpha = 0;
            this.backMenu.alpha = 0;
            TweenMax.fromTo(this.scoreEnd.scale, 1, { x: 0, y: 0 }, { x: 1, y: 1 });
            TweenMax.fromTo(this.score.scale, 1, { x: 0, y: 0 }, { x: 1, y: 1 });
            this.addChild(this.scoreEnd);
            this.addChild(this.score);
            this.removeChild(this.gameoverSprite);
        };
        GameOver.prototype.alphaButton = function () {
            this.addChild(this.backgroundMenu);
            this.addChild(this.backgroundRestart);
            this.addChild(this.restartGame);
            this.addChild(this.backMenu);
            TweenMax.fromTo(this.restartGame, 2, { alpha: 0 }, { alpha: 1 });
            TweenMax.fromTo(this.backgroundRestart, 2, { alpha: 0 }, { alpha: 1 });
            TweenMax.fromTo(this.backMenu, 2, { alpha: 0 }, { alpha: 1 });
            TweenMax.fromTo(this.backgroundMenu, 2, { alpha: 0 }, { alpha: 1 });
        };
        return GameOver;
    }(Container));
    exports.GameOver = GameOver;
});
//# sourceMappingURL=GameOver.js.map