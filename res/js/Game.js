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
define(["require", "exports", "./Place.js", "./GameOver.js", "./Button.js"], function (require, exports, Place_js_1, GameOver_js_1, Button_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.gamefield = void 0;
    var Sprite = PIXI.Sprite;
    var Container = PIXI.Container;
    var Text = PIXI.Text;
    var TextStyle = PIXI.TextStyle;
    var gamefield = /** @class */ (function (_super) {
        __extends(gamefield, _super);
        function gamefield(sizesquare, time, place) {
            var _this = _super.call(this) || this;
            _this.fieldsize = 1024 * 0.1;
            _this.drawstatus = new Array(true, true);
            _this.swapstatus = false;
            _this.backbackground = Place_js_1.Place.res.backgroundbuttonfield.texture;
            _this.backstock = Place_js_1.Place.res.MenuButton.texture;
            _this.backbring = Place_js_1.Place.res.MenuButtonbring.texture;
            _this.backpress = Place_js_1.Place.res.MenuButtonpress.texture;
            _this.textureballs = [
                Place_js_1.Place.res.redball.texture,
                Place_js_1.Place.res.blueball.texture,
                Place_js_1.Place.res.greenball.texture,
                Place_js_1.Place.res.yellowball.texture,
                Place_js_1.Place.res.pinkball.texture,
                Place_js_1.Place.res.lightblueball.texture
            ];
            _this.redraw = new Button_js_1.ReDraw(_this);
            _this.pressball = new Sprite(Place_js_1.Place.res.pressball.texture);
            _this.pressball.anchor.set(0.5);
            _this.PauseButton = new Button_js_1.pausebutton(_this);
            _this.theend = new Button_js_1.TheEnd(_this, place);
            _this.BackMenu = new Button_js_1.backmenu(_this.backbackground, _this.backstock, _this.backbring, _this.backpress, 1024 * 0.05, 1024 * 0.9, 1024 * 0.9, 0.32, 0.4, place);
            _this.timergame = time;
            _this.ScoreGame = 0;
            _this.scoreplus = 0;
            _this.selectball = new Array();
            _this.PlayButton = new Button_js_1.playbutton(_this);
            _this.scoretext = new Text(String(_this.ScoreGame));
            _this.scoretext.anchor.set(0.5);
            _this.scoretext.position.set(Place_js_1.Place.size * 0.2, _this.fieldsize * 1.18);
            _this.scoretext.style = new TextStyle({
                fontSize: 72, fontFamily: "Calibri", fill: "#00fff0", align: "center", fontWeight: Place_js_1.Place.res.score.texture.width,
                dropShadow: false
            });
            _this.timetext = new Text("--:--");
            _this.timetext.anchor.set(0.5);
            _this.timetext.position.set(Place_js_1.Place.size * 0.8, _this.fieldsize * 1.18);
            _this.timetext.style = new TextStyle({
                fontSize: 72, fontFamily: "Calibri", fill: "#00fff0", align: "center", fontWeight: Place_js_1.Place.res.score.texture.width,
                dropShadow: false
            });
            _this.count = 0;
            _this.MusicgameButton = new Button_js_1.musicgamebutton(place);
            _this.SoundgameButton = new Button_js_1.soundgamebutton(_this);
            _this.scorebackground = new Sprite(Place_js_1.Place.res.score.texture);
            _this.scorebackground.position.set(Place_js_1.Place.size * 0.2, _this.fieldsize);
            _this.scorebackground.anchor.set(0.5);
            _this.scorebackground.scale.set(0.4);
            _this.timegamebackground = new Sprite(Place_js_1.Place.res.timergame.texture);
            _this.timegamebackground.position.set(Place_js_1.Place.size * 0.8, _this.fieldsize);
            _this.timegamebackground.anchor.set(0.5);
            _this.timegamebackground.scale.set(0.4);
            _this.sizefield = sizesquare;
            switch (_this.sizefield) {
                case 6:
                    _this.scaleball = 1;
                    _this.fieldsize = _this.fieldsize * 1.17;
                    break;
                case 8:
                    _this.scaleball = 0.8;
                    break;
                case 10:
                    _this.scaleball = 0.62;
                    break;
            }
            _this.widthtexture = Place_js_1.Place.res.redball.texture.width * _this.scaleball;
            _this.heighttexture = Place_js_1.Place.res.redball.texture.height * _this.scaleball;
            _this.checkfirstplay();
            _this.addChild(_this.MusicgameButton);
            _this.addChild(_this.SoundgameButton);
            _this.addChild(_this.scorebackground);
            _this.addChild(_this.timegamebackground);
            _this.addChild(_this.scoretext);
            _this.addChild(_this.timetext);
            _this.addChild(_this.PauseButton);
            _this.addChild(_this.redraw);
            _this.addChild(_this.BackMenu);
            _this.TimerAnimation();
            // let timebild = new TimelineMax({ repeat: 1, repeatDelay: 5, onComplete: this.findball.bind(this) });
            // this.findball();
            _this.timeforgame = new TimelineMax({ repeat: 1, repeatDelay: _this.timergame, onComplete: _this.StartGameOver.bind(_this, place) });
            return _this;
        }
        gamefield.prototype.createball = function () {
            this.balls = new Array(this.sizefield);
            for (var i = 0; i < this.sizefield; i++) {
                this.balls[i] = new Array(this.sizefield);
                for (var j = 0; j < this.sizefield; j++) {
                    var typetexture = Math.floor(Math.random() * 6);
                    this.balls[i][j] = new Sprite(this.textureballs[typetexture]);
                    this.balls[i][j].position.set(this.fieldsize * 1.7 + this.widthtexture * 1.2 * (j), this.fieldsize * 2.7 + this.heighttexture * 1.2 * (i));
                    this.balls[i][j].scale.set(this.scaleball);
                    this.balls[i][j].anchor.set(0.5);
                }
            }
            this.drawstatus[0] = true;
            this.drawstatus[1] = true;
        };
        gamefield.prototype.checkfirstplay = function () {
            do {
                this.createball();
                this.firstcheckhorizon();
                this.firstcheckvertical();
            } while (this.drawstatus[0] == false || this.drawstatus[1] == false);
            this.drawball();
            this.drawstatus[0] = true;
            this.drawstatus[1] = true;
        };
        gamefield.prototype.drawball = function () {
            for (var i = 0; i < this.sizefield; i++) {
                for (var j = 0; j < this.sizefield; j++) {
                    this.ScaleAnimation(this.balls[i][j]);
                    this.addChild(this.balls[i][j]);
                    this.interactivemode(this.balls[i][j]);
                }
            }
            this.BackgroundBalls();
            this.interactiveon();
            var timebild = new TimelineMax({ repeat: 1, repeatDelay: 1, onComplete: this.findball.bind(this) });
        };
        gamefield.prototype.deleteball = function () {
            for (var i = 0; i < this.sizefield; i++) {
                for (var j = 0; j < this.sizefield; j++) {
                    this.RemoveAnimation(this.balls[i][j]);
                    this.removeChild(this.balls[i][j]);
                }
            }
        };
        gamefield.prototype.deletebackground = function () {
            for (var i = 0; i < this.sizefield; i++) {
                for (var j = 0; j < this.sizefield; j++) {
                    this.RemoveAnimation(this.background[i][j]);
                    this.removeChild(this.background[i][j]);
                }
            }
        };
        gamefield.prototype.BackgroundBalls = function () {
            this.background = new Array(this.sizefield);
            for (var i = 0; i < this.sizefield; i++) {
                this.background[i] = new Array(this.sizefield);
                for (var j = 0; j < this.sizefield; j++) {
                    this.background[i][j] = new Sprite(Place_js_1.Place.res.backgroundball.texture);
                    this.background[i][j].position.set(this.balls[i][j].position.x, this.balls[i][j].position.y);
                    this.background[i][j].anchor.set(0.5, 0.5);
                    this.background[i][j].scale.set(this.scaleball);
                    this.ScaleAnimation(this.background[i][j]);
                    this.addChild(this.background[i][j]);
                }
            }
        };
        gamefield.prototype.ScaleAnimation = function (use) {
            TweenMax.fromTo(use.scale, 0.6, { x: 0, y: 0 }, { x: this.scaleball, y: this.scaleball });
        };
        gamefield.prototype.RemoveAnimation = function (use) {
            TweenMax.fromTo(use.scale, 0.6, { x: this.scaleball, y: this.scaleball }, { x: 0, y: 0 });
        };
        gamefield.prototype.TimerText = function () {
            var seconds = this.timergame % 60;
            var minutes = (this.timergame - seconds) / 60;
            var AddChar = function () { if (seconds < 10)
                return "0";
            else
                return ""; };
            this.timetext.text = String(minutes) + ":" + AddChar() + String(seconds);
        };
        gamefield.prototype.TickTimer = function () {
            this.timergame -= 1;
            this.TimerText();
        };
        gamefield.prototype.TimerEnd = function () {
            this.timergame = 0;
            this.TimerText();
        };
        gamefield.prototype.TimerAnimation = function () {
            this.TimerText();
            // TweenMax.lagSmoothing(0);
            this.timerstart = new TimelineMax({ repeat: this.timergame, repeatDelay: 1, onComplete: this.TimerEnd.bind(this), onRepeat: this.TickTimer.bind(this) });
        };
        gamefield.prototype.PauseGame = function () {
            this.backgroundPause = new Sprite(Place_js_1.Place.res.black.texture);
            this.backgroundPause.width = Place_js_1.Place.size;
            this.backgroundPause.height = Place_js_1.Place.size;
            this.backgroundPause.alpha = 0.5;
            this.timerstart.pause();
            this.addChild(this.backgroundPause);
            this.addChild(this.PlayButton);
            this.addChild(this.theend);
            this.interactiveoff();
            this.timeforgame.pause();
        };
        gamefield.prototype.ResumeGame = function () {
            this.removeChild(this.backgroundPause);
            this.removeChild(this.PlayButton);
            this.removeChild(this.theend);
            this.interactiveon();
            this.timerstart.resume();
            this.timeforgame.resume();
        };
        gamefield.prototype.TheEndbButton = function () {
            this.removeChild(this.backgroundPause);
            this.removeChild(this.PlayButton);
            this.removeChild(this.theend);
        };
        gamefield.prototype.StartGameOver = function (place) {
            this.GameOver = new GameOver_js_1.gameover(this.ScoreGame, place);
            this.addChild(this.GameOver);
            this.deleteallfield();
            this.deletebackground();
        };
        gamefield.prototype.redrawfield = function () {
            this.deleteball();
            this.deletebackground();
            this.checkfirstplay();
            this.removeChild(this.pressball);
        };
        gamefield.prototype.deleteallfield = function () {
            this.removeChild(this.MusicgameButton);
            this.removeChild(this.SoundgameButton);
            this.removeChild(this.scorebackground);
            this.removeChild(this.timegamebackground);
            this.removeChild(this.scoretext);
            this.removeChild(this.timetext);
            this.removeChild(this.PauseButton);
            this.removeChild(this.redraw);
            this.removeChild(this.BackMenu);
            this.removeChild(this.pressball);
            this.deleteball();
        };
        gamefield.prototype.findballvertcal = function () {
            var n = 1;
            var k = 0;
            for (var i = 0; i < this.sizefield; i++) {
                n = 1;
                this.posvertical = new Array();
                k = 0;
                for (var j = 1; j < this.sizefield; j++) {
                    if (this.balls[j - 1][i].texture == this.balls[j][i].texture && this.balls[j][i].visible != false) {
                        n++;
                        this.posvertical[k++] = j - 1;
                        this.posvertical[k++] = i;
                        this.posvertical[k++] = j;
                        this.posvertical[k++] = i;
                        if (j == this.sizefield - 1 && n >= 3)
                            this.deadball(this.posvertical);
                    }
                    else {
                        if (n >= 3) {
                            this.deadball(this.posvertical);
                        }
                        this.posvertical = new Array();
                        k = 0;
                        n = 1;
                    }
                }
            }
        };
        gamefield.prototype.findballhorizon = function () {
            var n = 1;
            var k = 0;
            var check;
            for (var i = 0; i < this.sizefield; i++) {
                n = 1;
                this.poshorizon = new Array();
                k = 0;
                for (var j = 1; j < this.sizefield; j++) {
                    if (this.balls[i][j - 1].texture == this.balls[i][j].texture && this.balls[i][j].visible != false) {
                        n++;
                        this.poshorizon[k++] = i;
                        this.poshorizon[k++] = j - 1;
                        this.poshorizon[k++] = i;
                        this.poshorizon[k++] = j;
                        if (j == this.sizefield - 1 && n >= 3)
                            this.deadball(this.poshorizon);
                    }
                    else {
                        if (n >= 3) {
                            this.deadball(this.poshorizon);
                        }
                        this.poshorizon = new Array();
                        k = 0;
                        n = 1;
                    }
                }
            }
        };
        gamefield.prototype.findball = function () {
            this.findballvertcal();
            this.findballhorizon();
            if (this.scoreplus != 0) {
                this.ScoreGame += this.scoreplus;
                if (this.statussound == true) {
                    Place_js_1.Place.res.crushball.sound.volume = 0.4;
                    Place_js_1.Place.res.crushball.sound.play();
                }
                var scoreanimate = new TimelineMax({ repeat: 1, repeatDelay: 2, onComplete: function () { this.scoretext.text = String(this.ScoreGame); }.bind(this), onUpdate: function () { this.scoretext.text = "+" + String(this.scoreplus); }.bind(this) });
                var t1 = new TimelineMax({ repeat: 1, repeatDelay: 2, onComplete: function () { this.scoreplus = 0; }.bind(this) });
            }
        };
        gamefield.prototype.deadball = function (use) {
            for (var i = 0; i < use.length - 1; i++) {
                this.removeChild(this.balls[use[i++]][use[i]]);
                i--;
                this.balls[use[i++]][use[i]].visible = false;
            }
            this.scoreplus += (use.length / 2 + 2) * 50;
            console.error(this.scoreplus);
            use = new Array();
        };
        gamefield.prototype.interactiveoff = function () {
            for (var i = 0; i < this.sizefield; i++) {
                for (var j = 0; j < this.sizefield; j++) {
                    this.balls[i][j].interactive = false;
                    this.balls[i][j].buttonMode = false;
                }
            }
        };
        gamefield.prototype.interactiveon = function () {
            for (var i = 0; i < this.sizefield; i++) {
                for (var j = 0; j < this.sizefield; j++) {
                    this.balls[i][j].interactive = true;
                    this.balls[i][j].buttonMode = true;
                }
            }
        };
        gamefield.prototype.interactivemode = function (use) {
            use.on("mouseover", function () {
                if (use.scale.x != this.scaleball + 0.1)
                    use.scale.set(this.scaleball + 0.11);
            }.bind(this));
            use.on("mouseout", function () {
                if (use.scale.x == this.scaleball + 0.11)
                    use.scale.set(this.scaleball);
            }.bind(this));
            use.on("mouseup", function () {
                if (this.statussound == true) {
                    Place_js_1.Place.res.clickball.sound.volume = 0.3;
                    Place_js_1.Place.res.clickball.sound.play();
                }
                this.pressball.position.set(use.position.x, use.position.y);
                this.pressball.scale.set(this.scaleball);
                this.addChild(this.pressball);
                this.swapball(use);
                this.emit("click");
            }.bind(this));
        };
        gamefield.prototype.swapball = function (use) {
            this.selectball[this.count] = use;
            this.count++;
            if (this.selectball.length == 2) {
                this.checkswap(this.selectball);
                if (this.swapstatus == true) {
                    this.animationswap();
                    this.count = 0;
                }
                else {
                    console.error(this.selectball[1].position.x);
                    console.error(this.selectball[0].position.x - this.widthtexture * 1.2);
                    this.removeChild(this.pressball);
                    this.count = 0;
                    this.selectball = new Array();
                }
            }
        };
        gamefield.prototype.changetextureball = function () {
            var temp;
            temp = this.selectball[0].texture;
            this.selectball[0].texture = this.selectball[1].texture;
            this.selectball[1].texture = temp;
            this.changealphaup(this.selectball);
            this.removeChild(this.pressball);
            this.selectball = new Array();
        };
        gamefield.prototype.changealphadown = function (use) {
            TweenMax.fromTo(this.selectball, 1, { alpha: 1 }, { alpha: 0 });
        };
        gamefield.prototype.changealphaup = function (use) {
            TweenMax.fromTo(this.selectball, 1, { alpha: 0 }, { alpha: 1 });
            var wait = new TimelineMax({ repeat: 1, repeatDelay: 1, onComplete: this.findball.bind(this) });
        };
        gamefield.prototype.checkswap = function (use) {
            var n = 1;
            var temp;
            var koordinat = new Array();
            for (var i = 0; i < this.sizefield; i++) {
                for (var j = 0; j < this.sizefield; j++) {
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
                console.error(koordinat[1]);
                console.error(koordinat[3]);
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
                this.swapany(koordinat);
                for (var i = koordinat[1]; i <= koordinat[3]; i++) {
                    n = 1;
                    console.error(i);
                    for (var j = 1; j < this.sizefield; j++) {
                        if (this.balls[j - 1][i].texture == this.balls[j][i].texture && this.balls[j][i].visible != false) {
                            n++;
                            console.error(n);
                            if (n >= 3)
                                this.swapstatus = true;
                            console.error(this.swapstatus);
                        }
                        else
                            n = 1;
                    }
                }
                for (var i = koordinat[0]; i <= koordinat[2]; i++) {
                    n = 1;
                    console.error(i);
                    for (var j = 1; j < this.sizefield; j++) {
                        if (this.balls[i][j - 1].texture == this.balls[i][j].texture && this.balls[i][j].visible != false) {
                            n++;
                            console.error(n);
                            if (n >= 3)
                                this.swapstatus = true;
                        }
                        else
                            n = 1;
                    }
                }
                this.swapany(koordinat);
            }
        };
        gamefield.prototype.animationswap = function () {
            var scaledown = new TimelineMax({ repeat: 1, repeatDelay: 0, onComplete: this.changetextureball.bind(this), onUpdate: this.changealphadown.bind(this) });
            var wait = new TimelineMax({ repeat: 1, repeatDelay: 1, onComplete: this.interactiveon.bind(this), onUpdate: this.interactiveoff.bind(this) });
            var wait2 = new TimelineMax({ repeat: 1, repeatDelay: 1, onComplete: function () { this.selectball = new Array(); }.bind(this), onUpdate: function () { this.swapstatus = false; }.bind(this) });
        };
        gamefield.prototype.firstcheckvertical = function () {
            var n = 1;
            for (var i = 0; i < this.sizefield; i++) {
                n = 1;
                for (var j = 1; j < this.sizefield; j++) {
                    if (this.balls[j - 1][i].texture == this.balls[j][i].texture && this.balls[j][i].visible != false) {
                        n++;
                        if (j == this.sizefield - 1 && n >= 3) {
                            this.drawstatus[0] = false;
                            break;
                        }
                    }
                    else {
                        if (n >= 3) {
                            this.drawstatus[0] = false;
                            break;
                        }
                        n = 1;
                    }
                }
            }
        };
        gamefield.prototype.firstcheckhorizon = function () {
            var n = 1;
            for (var i = 0; i < this.sizefield; i++) {
                n = 1;
                for (var j = 1; j < this.sizefield; j++) {
                    if (this.balls[i][j - 1].texture == this.balls[i][j].texture) {
                        n++;
                        if (j == this.sizefield - 1 && n >= 3) {
                            this.drawstatus[0] = false;
                            break;
                        }
                    }
                    else {
                        if (n >= 3) {
                            this.drawstatus[0] = false;
                            break;
                        }
                        n = 1;
                    }
                }
            }
        };
        gamefield.prototype.swapany = function (use) {
            var temp;
            temp = this.balls[use[0]][use[1]].texture;
            this.balls[use[0]][use[1]].texture = this.balls[use[2]][use[3]].texture;
            this.balls[use[2]][use[3]].texture = temp;
        };
        return gamefield;
    }(Container));
    exports.gamefield = gamefield;
});
//# sourceMappingURL=Game.js.map