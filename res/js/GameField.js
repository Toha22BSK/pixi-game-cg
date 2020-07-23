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
    exports.GameField = void 0;
    var Sprite = PIXI.Sprite;
    var Container = PIXI.Container;
    var Text = PIXI.Text;
    var TextStyle = PIXI.TextStyle;
    var GameField = /** @class */ (function (_super) {
        __extends(GameField, _super);
        function GameField(sizeSquare, time, game) {
            var _this = _super.call(this) || this;
            _this.fieldSize = Game_1.Game.SIZE * 0.1;
            _this.drawStatus = new Array(true, true);
            _this.swapStatus = false;
            _this.endStatus = true;
            _this.textureBalls = [
                Game_1.Game.RES.redBall.texture,
                Game_1.Game.RES.blueBall.texture,
                Game_1.Game.RES.greenBall.texture,
                Game_1.Game.RES.yellowBall.texture,
                Game_1.Game.RES.pinkBall.texture,
                Game_1.Game.RES.lightblueBall.texture
            ];
            _this.game = game;
            _this.timerGame = time;
            _this.sizeField = sizeSquare;
            _this.configurateUI();
            _this.timerAnimation();
            return _this;
        }
        GameField.prototype.configurateUI = function () {
            this.pressBall = new Sprite(Game_1.Game.RES.pressBall.texture);
            this.pressBall.anchor.set(0.5);
            this.pauseButton = new Button_1.Button("gamePause", [Game_1.Game.RES.pauseButton.texture, Game_1.Game.RES.pauseButtonPress.texture, Game_1.Game.RES.pauseButtonPress.texture], [Game_1.Game.SIZE / 2, Game_1.Game.SIZE * 0.12], 0.5);
            this.pauseButton.on("gamePause", this.gamePause.bind(this));
            this.playButton = new Button_1.Button("gameResume", [Game_1.Game.RES.playButton.texture, Game_1.Game.RES.playButtonPress.texture, Game_1.Game.RES.playButtonPress.texture], [Game_1.Game.SIZE / 2, Game_1.Game.SIZE / 2], 0.85);
            this.playButton.on("gameResume", this.resumeGame.bind(this));
            this.theEnd = new Button_1.Button("gameEnd", [Game_1.Game.RES.theEnd.texture, Game_1.Game.RES.theEndPress.texture, Game_1.Game.RES.theEndPress.texture], [Game_1.Game.SIZE / 2, Game_1.Game.SIZE * 0.8], 0.4);
            this.theEnd.on("gameEnd", this.game.showGameOver.bind(this.game));
            this.redraw = new Button_1.Button("redraw", [Game_1.Game.RES.redraw.texture, Game_1.Game.RES.redrawBring.texture, Game_1.Game.RES.redrawPress.texture], [Game_1.Game.SIZE * 0.95, Game_1.Game.SIZE * 0.9], 0.4);
            this.redraw.on("redraw", this.redrawField.bind(this));
            this.backMenu = new Button_1.Button("backToMenu", [Game_1.Game.RES.menuButton.texture, Game_1.Game.RES.menuButtonBring.texture, Game_1.Game.RES.menuButtonPress.texture], [Game_1.Game.SIZE * 0.05, Game_1.Game.SIZE * 0.9], 0.5);
            this.backMenu.on("backToMenu", this.backFromMenu.bind(this));
            this.musicGameButton = new Button_1.ButtonToggle("musicGame", [Game_1.Game.RES.musicButtonOff.texture, Game_1.Game.RES.musicButtonOn.texture, Game_1.Game.RES.musicButtonOn.texture], [Game_1.Game.SIZE * 0.05, Game_1.Game.SIZE * 0.25], 0.5, 0.5, MenuGame_1.MenuGame.musicSetting);
            this.musicGameButton.on("musicGame", this.switchMusic.bind(this));
            this.soundGameButton = new Button_1.ButtonToggle("soundGame", [Game_1.Game.RES.soundButtonOff.texture, Game_1.Game.RES.soundButtonOn.texture, Game_1.Game.RES.soundButtonOn.texture], [Game_1.Game.SIZE * 0.95, Game_1.Game.SIZE * 0.25], 0.5, 0.5, MenuGame_1.MenuGame.soundSetting);
            this.soundGameButton.on("soundGame", this.switchSound.bind(this));
            MenuGame_1.MenuGame.scoreGame = 0;
            this.scorePlus = 0;
            this.count = 0;
            this.selectBall = new Array();
            this.scaleBall = (16 - this.sizeField) / 10;
            this.widthTexture = Game_1.Game.RES.redBall.texture.width * this.scaleBall;
            this.heightTexture = Game_1.Game.RES.redBall.texture.height * this.scaleBall;
            this.scoreText = new Text(String(MenuGame_1.MenuGame.scoreGame));
            this.scoreText.anchor.set(0.5);
            this.scoreText.position.set(Game_1.Game.SIZE * 0.2, this.fieldSize * 1.18);
            this.scoreText.style = new TextStyle({
                fontSize: 72, fontFamily: "Calibri", fill: "#00fff0", align: "center", fontWeight: Game_1.Game.RES.score.texture.width, dropShadow: false
            });
            this.timeText = new Text("--:--");
            this.timeText.anchor.set(0.5);
            this.timeText.position.set(Game_1.Game.SIZE * 0.8, this.fieldSize * 1.18);
            this.timeText.style = new TextStyle({
                fontSize: 72, fontFamily: "Calibri", fill: "#00fff0", align: "center", fontWeight: Game_1.Game.RES.score.texture.width, dropShadow: false
            });
            this.scoreBackground = new Sprite(Game_1.Game.RES.score.texture);
            this.scoreBackground.position.set(Game_1.Game.SIZE * 0.2, this.fieldSize);
            this.scoreBackground.anchor.set(0.5);
            this.scoreBackground.scale.set(0.4);
            this.timeGameBackground = new Sprite(Game_1.Game.RES.timerGame.texture);
            this.timeGameBackground.position.set(Game_1.Game.SIZE * 0.8, this.fieldSize);
            this.timeGameBackground.anchor.set(0.5);
            this.timeGameBackground.scale.set(0.4);
            switch (this.sizeField) {
                case 6:
                    this.fieldSize = this.fieldSize * 1.17;
                    break;
                case 7:
                    this.fieldSize = this.fieldSize * 1.09;
                    break;
            }
            ;
            this.checkfirstplay();
            this.addChild(this.musicGameButton);
            this.addChild(this.soundGameButton);
            this.addChild(this.scoreBackground);
            this.addChild(this.timeGameBackground);
            this.addChild(this.scoreText);
            this.addChild(this.timeText);
            this.addChild(this.pauseButton);
            this.addChild(this.redraw);
            this.addChild(this.backMenu);
        };
        GameField.prototype.backFromMenu = function () {
            this.game.backToMenu(0);
            this.timerStart.kill();
        };
        GameField.prototype.switchMusic = function (value) {
            MenuGame_1.MenuGame.musicSetting = value;
            if (value)
                this.game.resumeMusic();
            else
                this.game.pauseMusic();
        };
        GameField.prototype.switchSound = function (value) {
            MenuGame_1.MenuGame.soundSetting = value;
        };
        GameField.prototype.createBall = function () {
            this.balls = new Array(this.sizeField);
            for (var i = 0; i < this.sizeField; i++) {
                this.balls[i] = new Array(this.sizeField);
                for (var j = 0; j < this.sizeField; j++) {
                    var typetexture = Math.floor(Math.random() * 6);
                    this.balls[i][j] = new Sprite(this.textureBalls[typetexture]);
                    this.balls[i][j].position.set(this.fieldSize * 1.7 + this.widthTexture * 1.2 * (j), this.fieldSize * 2.7 + this.heightTexture * 1.2 * (i));
                    this.balls[i][j].scale.set(this.scaleBall);
                    this.balls[i][j].anchor.set(0.5);
                }
            }
            this.drawStatus[0] = true;
            this.drawStatus[1] = true;
        };
        GameField.prototype.checkfirstplay = function () {
            do {
                this.createBall();
                this.firstCheckHorizon();
                this.firstCheckVertical();
            } while (this.drawStatus[0] == false || this.drawStatus[1] == false);
            this.drawStatus[0] = true;
            this.drawStatus[1] = true;
            this.drawBall();
        };
        GameField.prototype.drawBall = function () {
            this.backgroundBalls();
            for (var i = 0; i < this.sizeField; i++) {
                for (var j = 0; j < this.sizeField; j++) {
                    this.scaleAnimation(this.balls[i][j]);
                    this.addChild(this.balls[i][j]);
                    this.interactiveMode(this.balls[i][j]);
                }
            }
            this.interactiveBall(true);
        };
        GameField.prototype.deleteAll = function (use) {
            for (var i = 0; i < this.sizeField; i++) {
                for (var j = 0; j < this.sizeField; j++) {
                    this.removeChild(use[i][j]);
                }
            }
        };
        GameField.prototype.backgroundBalls = function () {
            this.background = new Array(this.sizeField);
            for (var i = 0; i < this.sizeField; i++) {
                this.background[i] = new Array(this.sizeField);
                for (var j = 0; j < this.sizeField; j++) {
                    this.background[i][j] = new Sprite(Game_1.Game.RES.backgroundBall.texture);
                    this.background[i][j].position.set(this.balls[i][j].position.x, this.balls[i][j].position.y);
                    this.background[i][j].anchor.set(0.5, 0.5);
                    this.background[i][j].scale.set(this.scaleBall);
                    this.scaleAnimation(this.background[i][j]);
                    this.addChild(this.background[i][j]);
                }
            }
        };
        GameField.prototype.scaleAnimation = function (use) {
            TweenMax.fromTo(use.scale, 0.6, { x: 0, y: 0 }, { x: this.scaleBall, y: this.scaleBall });
        };
        GameField.prototype.timerText = function () {
            var seconds = this.timerGame % 60;
            var minutes = (this.timerGame - seconds) / 60;
            var AddChar = function () { if (seconds < 10)
                return "0";
            else
                return ""; };
            this.timeText.text = String(minutes) + ":" + AddChar() + String(seconds);
        };
        GameField.prototype.tickTimer = function () {
            this.timerGame -= 1;
            this.timerText();
        };
        GameField.prototype.timerEnd = function () {
            this.timerGame = 0;
            this.timerText();
            if (!this.endStatus) {
                var wait = new TimelineMax({ repeat: 1, repeatDelay: 2, onComplete: this.timerEnd.bind(this) });
            }
            else {
                this.game.showGameOver();
            }
        };
        GameField.prototype.timerAnimation = function () {
            this.timerText();
            this.timerStart = new TimelineMax({ repeat: this.timerGame, repeatDelay: 1, onComplete: this.timerEnd.bind(this), onRepeat: this.tickTimer.bind(this) });
        };
        GameField.prototype.gamePause = function () {
            this.backgroundPause = new Sprite(Game_1.Game.RES.black.texture);
            this.backgroundPause.width = Game_1.Game.SIZE;
            this.backgroundPause.height = Game_1.Game.SIZE;
            this.backgroundPause.alpha = 0.5;
            this.backgroundPause.interactive = true;
            this.addChild(this.backgroundPause);
            this.addChild(this.playButton);
            this.addChild(this.theEnd);
            this.pauseButton.reset();
            this.timerStart.pause();
        };
        GameField.prototype.resumeGame = function () {
            this.removeChild(this.backgroundPause);
            this.removeChild(this.playButton);
            this.removeChild(this.theEnd);
            this.timerStart.resume();
        };
        GameField.prototype.redrawField = function () {
            this.removeChild(this.pressBall);
            this.deleteAll(this.balls);
            this.deleteAll(this.background);
            this.checkfirstplay();
        };
        GameField.prototype.findballVertcal = function () {
            var n = 1;
            var k = 0;
            for (var i = 0; i < this.sizeField; i++) {
                this.posVertical = new Array();
                n = 1;
                k = 0;
                for (var j = 1; j < this.sizeField; j++) {
                    if (this.balls[j - 1][i].texture == this.balls[j][i].texture && this.balls[j][i].visible != false) {
                        n++;
                        this.posVertical[k++] = j - 1;
                        this.posVertical[k++] = i;
                        this.posVertical[k++] = j;
                        this.posVertical[k++] = i;
                        if (j == this.sizeField - 1 && n >= 3)
                            this.deadBall(this.posVertical);
                    }
                    else {
                        if (n >= 3) {
                            this.deadBall(this.posVertical);
                        }
                        this.posVertical = new Array();
                        k = 0;
                        n = 1;
                    }
                }
            }
        };
        GameField.prototype.findballHorizon = function () {
            var n = 1;
            var k = 0;
            for (var i = 0; i < this.sizeField; i++) {
                this.posHorizon = new Array();
                n = 1;
                k = 0;
                for (var j = 1; j < this.sizeField; j++) {
                    if (this.balls[i][j - 1].texture == this.balls[i][j].texture && this.balls[i][j].visible != false) {
                        n++;
                        this.posHorizon[k++] = i;
                        this.posHorizon[k++] = j - 1;
                        this.posHorizon[k++] = i;
                        this.posHorizon[k++] = j;
                        if (j == this.sizeField - 1 && n >= 3)
                            this.deadBall(this.posHorizon);
                    }
                    else {
                        if (n >= 3) {
                            this.deadBall(this.posHorizon);
                        }
                        this.posHorizon = new Array();
                        k = 0;
                        n = 1;
                    }
                }
            }
        };
        GameField.prototype.findBall = function () {
            this.findballVertcal();
            this.findballHorizon();
            if (this.scorePlus != 0) {
                MenuGame_1.MenuGame.scoreGame += this.scorePlus;
                if (MenuGame_1.MenuGame.soundSetting == true) {
                    Game_1.Game.RES.crushBall.sound.volume = 0.4;
                    Game_1.Game.RES.crushBall.sound.play();
                }
                var scoreAnimate = new TimelineMax({ repeat: 1, repeatDelay: 1, onComplete: function () { this.scoreText.text = String(MenuGame_1.MenuGame.scoreGame); }.bind(this), onUpdate: function () { this.scoreText.text = "+" + String(this.scorePlus); }.bind(this) });
                var t1 = new TimelineMax({ repeat: 1, repeatDelay: 1.1, onComplete: function () { this.scorePlus = 0; this.endStatus = true; }.bind(this) });
                this.ballDown();
            }
        };
        GameField.prototype.deadBall = function (use) {
            for (var i = 0; i < use.length - 1; i++) {
                this.balls[use[i++]][use[i]].visible = false;
            }
            this.scorePlus += (use.length / 2 + 2) * 50;
            use = new Array();
        };
        GameField.prototype.interactiveBall = function (value) {
            for (var i = 0; i < this.sizeField; i++) {
                for (var j = 0; j < this.sizeField; j++) {
                    this.balls[i][j].interactive = value;
                    this.balls[i][j].buttonMode = value;
                    this.balls[i][j].scale.set(this.scaleBall);
                }
            }
        };
        GameField.prototype.interactiveMode = function (use) {
            use.on("pointerover", function () {
                if (use.scale.x != this.scaleBall + 0.1)
                    use.scale.set(this.scaleBall + 0.11);
            }.bind(this));
            use.on("pointerout", function () {
                if (use.scale.x == this.scaleBall + 0.11)
                    use.scale.set(this.scaleBall);
            }.bind(this));
            use.on("pointerup", function () {
                if (MenuGame_1.MenuGame.soundSetting == true) {
                    Game_1.Game.RES.clickBall.sound.volume = 0.3;
                    Game_1.Game.RES.clickBall.sound.play();
                }
                this.pressBall.position.set(use.position.x, use.position.y);
                this.pressBall.scale.set(this.scaleBall);
                this.addChild(this.pressBall);
                this.swapBall(use);
            }.bind(this));
        };
        GameField.prototype.swapBall = function (use) {
            this.selectBall[this.count] = use;
            this.count++;
            if (this.selectBall.length == 2) {
                this.endStatus = false;
                this.checkSwap(this.selectBall);
                if (this.swapStatus == true) {
                    this.animationSwap();
                    this.count = 0;
                }
                else {
                    this.removeChild(this.pressBall);
                    this.count = 0;
                    this.selectBall = new Array();
                }
            }
        };
        GameField.prototype.changeTextureBall = function () {
            var temp = this.selectBall[0].texture;
            ;
            this.selectBall[0].texture = this.selectBall[1].texture;
            this.selectBall[1].texture = temp;
            this.changeAlpha(this.selectBall, true);
            this.removeChild(this.pressBall);
            this.selectBall = new Array();
            var wait = new TimelineMax({ repeat: 1, repeatDelay: 1, onComplete: this.findBall.bind(this) });
        };
        GameField.prototype.changeAlpha = function (use, why) {
            if (why)
                TweenMax.fromTo(this.selectBall, 1, { alpha: 0 }, { alpha: 1 });
            else
                TweenMax.fromTo(this.selectBall, 1, { alpha: 1 }, { alpha: 0 });
        };
        GameField.prototype.checkSwap = function (use) {
            var n = 1;
            var temp;
            var koordinat = new Array();
            for (var i = 0; i < this.sizeField; i++) {
                for (var j = 0; j < this.sizeField; j++) {
                    if (use[0].position == this.balls[i][j].position && this.balls[i][j].visible != false) {
                        koordinat[0] = i;
                        koordinat[1] = j;
                    }
                    if (use[1].position == this.balls[i][j].position && this.balls[i][j].visible != false) {
                        koordinat[2] = i;
                        koordinat[3] = j;
                    }
                }
            }
            if (Math.abs(Math.abs(koordinat[0] - koordinat[2]) - Math.abs(koordinat[1] - koordinat[3])) == 1) {
                if (koordinat[1] > koordinat[3]) {
                    temp = koordinat[1];
                    koordinat[1] = koordinat[3];
                    koordinat[3] = temp;
                }
                if (koordinat[0] > koordinat[2]) {
                    temp = koordinat[0];
                    koordinat[0] = koordinat[2];
                    koordinat[2] = temp;
                }
                this.swapAny(koordinat);
                for (var i = koordinat[1]; i <= koordinat[3]; i++) {
                    n = 1;
                    for (var j = 1; j < this.sizeField; j++) {
                        if (this.balls[j - 1][i].texture == this.balls[j][i].texture && this.balls[j][i].visible != false) {
                            n++;
                            if (n >= 3)
                                this.swapStatus = true;
                        }
                        else
                            n = 1;
                    }
                }
                for (var i = koordinat[0]; i <= koordinat[2]; i++) {
                    n = 1;
                    for (var j = 1; j < this.sizeField; j++) {
                        if (this.balls[i][j - 1].texture == this.balls[i][j].texture && this.balls[i][j].visible != false) {
                            n++;
                            if (n >= 3)
                                this.swapStatus = true;
                        }
                        else
                            n = 1;
                    }
                }
                this.swapAny(koordinat);
            }
        };
        GameField.prototype.animationSwap = function () {
            var scaledown = new TimelineMax({ repeat: 1, repeatDelay: 0, onComplete: this.changeTextureBall.bind(this), onUpdate: this.changeAlpha.bind(this, false) });
            var wait = new TimelineMax({ repeat: 1, repeatDelay: 1, onComplete: this.interactiveBall.bind(this, true), onUpdate: this.interactiveBall.bind(this, false) });
            var wait2 = new TimelineMax({ repeat: 1, repeatDelay: 1, onComplete: function () { this.selectBall = new Array(); }.bind(this), onUpdate: function () { this.swapStatus = false; }.bind(this) });
        };
        GameField.prototype.firstCheckVertical = function () {
            var n = 1;
            for (var i = 0; i < this.sizeField; i++) {
                n = 1;
                for (var j = 1; j < this.sizeField; j++) {
                    if (this.balls[j - 1][i].texture == this.balls[j][i].texture && this.balls[j][i].visible != false) {
                        n++;
                        if (j == this.sizeField - 1 && n >= 3) {
                            this.drawStatus[0] = false;
                            break;
                        }
                    }
                    else {
                        if (n >= 3) {
                            this.drawStatus[0] = false;
                            break;
                        }
                        n = 1;
                    }
                }
            }
        };
        GameField.prototype.firstCheckHorizon = function () {
            var n = 1;
            for (var i = 0; i < this.sizeField; i++) {
                n = 1;
                for (var j = 1; j < this.sizeField; j++) {
                    if (this.balls[i][j - 1].texture == this.balls[i][j].texture) {
                        n++;
                        if (j == this.sizeField - 1 && n >= 3) {
                            this.drawStatus[0] = false;
                            break;
                        }
                    }
                    else {
                        if (n >= 3) {
                            this.drawStatus[0] = false;
                            break;
                        }
                        n = 1;
                    }
                }
            }
        };
        GameField.prototype.positionDown = function (use, startx, starty, finishx, finishy, time) {
            TweenMax.fromTo(use.position, time, { x: startx, y: starty }, { x: finishx, y: finishy });
        };
        GameField.prototype.swapAny = function (use) {
            var temp = this.balls[use[0]][use[1]].texture;
            ;
            this.balls[use[0]][use[1]].texture = this.balls[use[2]][use[3]].texture;
            this.balls[use[2]][use[3]].texture = temp;
        };
        GameField.prototype.ballDown = function () {
            this.interactiveBall(false);
            var n = 0;
            var last = 0;
            function swapDown(j, i, kol) {
                if (this.balls[j][i].visible == false) {
                    this.balls[j][i].visible = true;
                }
                this.balls[j][i].texture = this.balls[j - kol][i].texture;
            }
            for (var i = 0; i < this.sizeField; i++) {
                n = 0;
                for (var j = 0; j < this.sizeField; j++) {
                    if (this.balls[j][i].visible == false) {
                        n++;
                        last = j;
                    }
                    if (j == this.sizeField - 1 && n != 0) {
                        for (var k = last; k >= 0 + n; k--) {
                            var firstx = this.balls[k - n][i].position.x;
                            var firsty = this.balls[k - n][i].position.y;
                            var lastx = this.balls[k][i].position.x;
                            var lasty = this.balls[k][i].position.y;
                            var t1 = new TimelineMax({ repeat: 1, repeatDelay: 0, onComplete: swapDown.bind(this, k, i, n) });
                            var t2 = new TimelineMax({ repeat: 1, repeatDelay: 0, onComplete: this.positionDown.bind(this, this.balls[k][i], firstx, firsty, lastx, lasty, 1) });
                        }
                        for (var l = n - 1; l >= 0; l--) {
                            this.balls[l][i].visible = false;
                            var firstx2 = this.balls[0][i].position.x;
                            var firsty2 = this.balls[0][i].position.y;
                            var lastx2 = this.balls[l][i].position.x;
                            var lasty2 = this.balls[l][i].position.y;
                            if (l != 0) {
                                var t4 = new TimelineMax({ repeat: 1, repeatDelay: 1 - 1 / n * l, onComplete: this.addNewBall.bind(this, l, i) });
                                var t5 = new TimelineMax({ repeat: 1, repeatDelay: 1 - 1 / n * l, onComplete: this.positionDown.bind(this, this.balls[l][i], firstx2, firsty2, lastx2, lasty2, 1 / n * l) });
                            }
                            else {
                                var t4 = new TimelineMax({ repeat: 1, repeatDelay: 1, onComplete: this.addNewBall.bind(this, l, i) });
                                var t5 = new TimelineMax({ repeat: 1, repeatDelay: 1, onComplete: this.positionDown.bind(this, this.balls[l][i], firstx2, firsty2, lastx2, lasty2, 0) });
                            }
                        }
                    }
                }
            }
            var t8 = new TimelineMax({ repeat: 1, repeatDelay: 1.1, onComplete: this.interactiveBall.bind(this, true) });
            if (this.timerGame != 0) {
                var t7 = new TimelineMax({ repeat: 1, repeatDelay: 1.1, onComplete: this.findBall.bind(this) });
            }
        };
        GameField.prototype.addNewBall = function (j, i) {
            if (this.balls[j][i].visible == false)
                this.balls[j][i].visible = true;
            var typetexture = Math.floor(Math.random() * 6);
            this.balls[j][i].texture = this.textureBalls[typetexture];
        };
        return GameField;
    }(Container));
    exports.GameField = GameField;
});
//# sourceMappingURL=GameField.js.map