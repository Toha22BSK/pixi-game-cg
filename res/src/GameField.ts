import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import Texture = PIXI.Texture;
import Text = PIXI.Text;
import TextStyle = PIXI.TextStyle;
import { Game } from "./Game";
import { Button, ButtonToggle } from "./Button";
import { MenuGame } from "./MenuGame";
declare let TweenMax: any;
declare let TimelineMax: any;

export class GameField extends Container {
    public static scoreGame: number;
    private musicGameButton: ButtonToggle;
    private soundGameButton: ButtonToggle;
    private sizeField: number;
    private timerGame: number;
    private scorePlus: number;
    private selectBall: any[];
    private posHorizon: number[];
    private posVertical: number[];
    private redraw: Button;
    private backMenu: Button;
    private theEnd: Button;
    private scoreText: Text;
    private timeText: Text;
    private playButton: Button;
    private scoreBackground: Sprite;
    private timeGameBackground: Sprite;
    private fieldSize: number = Game.SIZE * 0.1;
    private widthTexture: number;
    private heightTexture: number;
    private scaleBall: number;
    private timerStart: any;
    private drawStatus: boolean[] = new Array(true, true);
    private swapStatus: boolean = false;
    private endStatus: boolean = true;
    private pauseButton: Button;
    private backgroundPause: Sprite;
    private background: Sprite[][];
    private balls: Sprite[][];
    private pressBall: Sprite;
    private count: number;
    private game: Game;
    private textureBalls: Texture[] = [
        Game.RES.redBall.texture,
        Game.RES.blueBall.texture,
        Game.RES.greenBall.texture,
        Game.RES.yellowBall.texture,
        Game.RES.pinkBall.texture,
        Game.RES.lightblueBall.texture
    ];

    constructor(sizeSquare: number, time: number, game: Game) {
        super();
        this.game = game;
        this.timerGame = time;
        this.sizeField = sizeSquare;
        this.configurateUI();
        this.timerAnimation();
    }

    private configurateUI(): void {
        this.pressBall = new Sprite(Game.RES.pressBall.texture);
        this.pressBall.anchor.set(0.5);

        this.pauseButton = new Button("gamePause", [Game.RES.pauseButton.texture, Game.RES.pauseButtonPress.texture, Game.RES.pauseButtonPress.texture],
            [Game.SIZE / 2, Game.SIZE * 0.12], 0.5);
        this.pauseButton.on("gamePause", this.gamePause.bind(this));

        this.playButton = new Button("gameResume", [Game.RES.playButton.texture, Game.RES.playButtonPress.texture, Game.RES.playButtonPress.texture],
            [Game.SIZE / 2, Game.SIZE / 2], 0.85);
        this.playButton.on("gameResume", this.resumeGame.bind(this));

        this.theEnd = new Button("gameEnd", [Game.RES.theEnd.texture, Game.RES.theEndPress.texture, Game.RES.theEndPress.texture],
            [Game.SIZE / 2, Game.SIZE * 0.8], 0.4);
        this.theEnd.on("gameEnd", this.game.showGameOver.bind(this.game));

        this.redraw = new Button("redraw", [Game.RES.redraw.texture, Game.RES.redrawBring.texture, Game.RES.redrawPress.texture],
            [Game.SIZE * 0.95, Game.SIZE * 0.9], 0.4);
        this.redraw.on("redraw", this.redrawField.bind(this));

        this.backMenu = new Button("backToMenu", [Game.RES.menuButton.texture, Game.RES.menuButtonBring.texture, Game.RES.menuButtonPress.texture],
            [Game.SIZE * 0.05, Game.SIZE * 0.9], 0.5);
        this.backMenu.on("backToMenu", this.backFromMenu.bind(this));

        this.musicGameButton = new ButtonToggle("musicGame", [Game.RES.musicButtonOff.texture, Game.RES.musicButtonOn.texture, Game.RES.musicButtonOn.texture],
            [Game.SIZE * 0.05, Game.SIZE * 0.25], 0.5, 0.5, MenuGame.musicSetting);
        this.musicGameButton.on("musicGame", this.switchMusic.bind(this));

        this.soundGameButton = new ButtonToggle("soundGame", [Game.RES.soundButtonOff.texture, Game.RES.soundButtonOn.texture, Game.RES.soundButtonOn.texture],
            [Game.SIZE * 0.95, Game.SIZE * 0.25], 0.5, 0.5, MenuGame.soundSetting);
        this.soundGameButton.on("soundGame", this.switchSound.bind(this));

        MenuGame.scoreGame = 0;
        this.scorePlus = 0;
        this.count = 0;
        this.selectBall = new Array();
        this.scaleBall = (16 - this.sizeField) / 10;
        this.widthTexture = Game.RES.redBall.texture.width * this.scaleBall;
        this.heightTexture = Game.RES.redBall.texture.height * this.scaleBall;

        this.scoreText = new Text(String(MenuGame.scoreGame));
        this.scoreText.anchor.set(0.5);
        this.scoreText.position.set(Game.SIZE * 0.2, this.fieldSize * 1.18);
        this.scoreText.style = new TextStyle({
            fontSize: 72, fontFamily: "Calibri", fill: "#00fff0", align: "center", fontWeight: Game.RES.score.texture.width, dropShadow: false
        });

        this.timeText = new Text("--:--");
        this.timeText.anchor.set(0.5);
        this.timeText.position.set(Game.SIZE * 0.8, this.fieldSize * 1.18);
        this.timeText.style = new TextStyle({
            fontSize: 72, fontFamily: "Calibri", fill: "#00fff0", align: "center", fontWeight: Game.RES.score.texture.width, dropShadow: false
        });

        this.scoreBackground = new Sprite(Game.RES.score.texture);
        this.scoreBackground.position.set(Game.SIZE * 0.2, this.fieldSize);
        this.scoreBackground.anchor.set(0.5);
        this.scoreBackground.scale.set(0.4);

        this.timeGameBackground = new Sprite(Game.RES.timerGame.texture);
        this.timeGameBackground.position.set(Game.SIZE * 0.8, this.fieldSize);
        this.timeGameBackground.anchor.set(0.5);
        this.timeGameBackground.scale.set(0.4);

        switch (this.sizeField) {
            case 6:
                this.fieldSize = this.fieldSize * 1.17;
                break;
            case 7:
                this.fieldSize = this.fieldSize * 1.09;
                break;
        };

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
    }

    private backFromMenu(): void {
        this.game.backToMenu(0);
        this.timerStart.kill();
    }

    private switchMusic(value: boolean): void {
        MenuGame.musicSetting = value;
        if (value)
            this.game.resumeMusic();
        else
            this.game.pauseMusic();
    }

    private switchSound(value: boolean): void {
        MenuGame.soundSetting = value;
    }

    private createBall(): void {
        this.balls = new Array<[]>(this.sizeField);
        for (let i = 0; i < this.sizeField; i++) {
            this.balls[i] = new Array(this.sizeField);
            for (let j = 0; j < this.sizeField; j++) {
                var typetexture = Math.floor(Math.random() * 6);
                this.balls[i][j] = new Sprite(this.textureBalls[typetexture]);
                this.balls[i][j].position.set(this.fieldSize * 1.7 + this.widthTexture * 1.2 * (j), this.fieldSize * 2.7 + this.heightTexture * 1.2 * (i));
                this.balls[i][j].scale.set(this.scaleBall);
                this.balls[i][j].anchor.set(0.5);
            }
        }

        this.drawStatus[0] = true;
        this.drawStatus[1] = true;
    }

    private checkfirstplay(): void {
        do {
            this.createBall();
            this.firstCheckHorizon();
            this.firstCheckVertical();
        } while (this.drawStatus[0] == false || this.drawStatus[1] == false);

        this.drawStatus[0] = true;
        this.drawStatus[1] = true;

        this.drawBall();
    }

    private drawBall(): void {
        this.backgroundBalls();
        for (let i = 0; i < this.sizeField; i++) {
            for (let j = 0; j < this.sizeField; j++) {
                this.scaleAnimation(this.balls[i][j]);
                this.addChild(this.balls[i][j]);
                this.interactiveMode(this.balls[i][j]);
            }
        }

        this.interactiveBall(true);
    }

    private deleteAll(use: any): void {
        for (let i = 0; i < this.sizeField; i++) {
            for (let j = 0; j < this.sizeField; j++) {
                this.removeChild(use[i][j]);
            }
        }
    }

    private backgroundBalls(): void {
        this.background = new Array<[]>(this.sizeField);
        for (let i = 0; i < this.sizeField; i++) {
            this.background[i] = new Array(this.sizeField);
            for (let j = 0; j < this.sizeField; j++) {
                this.background[i][j] = new Sprite(Game.RES.backgroundBall.texture);
                this.background[i][j].position.set(this.balls[i][j].position.x, this.balls[i][j].position.y);
                this.background[i][j].anchor.set(0.5, 0.5);
                this.background[i][j].scale.set(this.scaleBall);
                this.scaleAnimation(this.background[i][j]);
                this.addChild(this.background[i][j]);
            }
        }
    }

    private scaleAnimation(use: any): void {
        TweenMax.fromTo(use.scale, 0.6, { x: 0, y: 0 }, { x: this.scaleBall, y: this.scaleBall });
    }

    private timerText(): void {
        let seconds = this.timerGame % 60;
        let minutes = (this.timerGame - seconds) / 60;
        let AddChar = function () { if (seconds < 10) return "0"; else return ""; };
        this.timeText.text = String(minutes) + ":" + AddChar() + String(seconds);
    }

    private tickTimer(): void {
        this.timerGame -= 1;
        this.timerText();
    }

    private timerEnd(): void {
        this.timerGame = 0;
        this.timerText();
        if (!this.endStatus) {
            let wait = new TimelineMax({ repeat: 1, repeatDelay: 2, onComplete: this.timerEnd.bind(this) });
        } else {
            this.game.showGameOver();
        }
    }

    private timerAnimation(): void {
        this.timerText();
        this.timerStart = new TimelineMax({ repeat: this.timerGame, repeatDelay: 1, onComplete: this.timerEnd.bind(this), onRepeat: this.tickTimer.bind(this) });
    }

    private gamePause(): void {
        this.backgroundPause = new Sprite(Game.RES.black.texture);
        this.backgroundPause.width = Game.SIZE;
        this.backgroundPause.height = Game.SIZE;
        this.backgroundPause.alpha = 0.5;
        this.backgroundPause.interactive = true;

        this.addChild(this.backgroundPause);
        this.addChild(this.playButton);
        this.addChild(this.theEnd);

        this.pauseButton.reset();
        this.timerStart.pause();
    }

    private resumeGame(): void {
        this.removeChild(this.backgroundPause);
        this.removeChild(this.playButton);
        this.removeChild(this.theEnd);

        this.timerStart.resume();
    }

    private redrawField(): void {
        this.removeChild(this.pressBall);
        this.deleteAll(this.balls);
        this.deleteAll(this.background);

        this.checkfirstplay();
    }

    private findballVertcal(): void {
        let n = 1;
        let k = 0;

        for (let i = 0; i < this.sizeField; i++) {
            this.posVertical = new Array();
            n = 1;
            k = 0;
            for (let j = 1; j < this.sizeField; j++) {
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
    }

    private findballHorizon(): void {
        let n = 1;
        let k = 0;

        for (let i = 0; i < this.sizeField; i++) {
            this.posHorizon = new Array();
            n = 1;
            k = 0;
            for (let j = 1; j < this.sizeField; j++) {
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
    }

    private findBall(): void {
        this.findballVertcal();
        this.findballHorizon();

        if (this.scorePlus != 0) {
            MenuGame.scoreGame += this.scorePlus;
            if (MenuGame.soundSetting == true) {
                Game.RES.crushBall.sound.volume = 0.4;
                Game.RES.crushBall.sound.play()
            }
            let scoreAnimate = new TimelineMax({ repeat: 1, repeatDelay: 1, onComplete: function () { this.scoreText.text = String(MenuGame.scoreGame); }.bind(this), onUpdate: function () { this.scoreText.text = "+" + String(this.scorePlus) }.bind(this) });
            let t1 = new TimelineMax({ repeat: 1, repeatDelay: 1.1, onComplete: function () { this.scorePlus = 0; this.endStatus = true; }.bind(this) });
            this.ballDown();
        }
    }

    private deadBall(use: any): void {
        for (let i = 0; i < use.length - 1; i++) {
            this.balls[use[i++]][use[i]].visible = false;
        }

        this.scorePlus += (use.length / 2 + 2) * 50;
        use = new Array();
    }

    private interactiveBall(value: boolean): void {
        for (let i = 0; i < this.sizeField; i++) {
            for (let j = 0; j < this.sizeField; j++) {
                this.balls[i][j].interactive = value;
                this.balls[i][j].buttonMode = value;
                this.balls[i][j].scale.set(this.scaleBall);
            }
        }
    }

    private interactiveMode(use: any): void {
        use.on("pointerover", function (): void {
            if (use.scale.x != this.scaleBall + 0.1)
                use.scale.set(this.scaleBall + 0.11);
        }.bind(this));

        use.on("pointerout", function (): void {
            if (use.scale.x == this.scaleBall + 0.11)
                use.scale.set(this.scaleBall);
        }.bind(this));

        use.on("pointerup", function (): void {
            if (MenuGame.soundSetting == true) {
                Game.RES.clickBall.sound.volume = 0.3;
                Game.RES.clickBall.sound.play();
            }
            this.pressBall.position.set(use.position.x, use.position.y);
            this.pressBall.scale.set(this.scaleBall);
            this.addChild(this.pressBall);
            this.swapBall(use);
        }.bind(this));
    }

    private swapBall(use: any): void {
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
    }

    private changeTextureBall(): void {
        let temp: Texture = this.selectBall[0].texture;;
        this.selectBall[0].texture = this.selectBall[1].texture;
        this.selectBall[1].texture = temp;
        this.changeAlpha(this.selectBall, true);
        this.removeChild(this.pressBall);
        this.selectBall = new Array();
        let wait = new TimelineMax({ repeat: 1, repeatDelay: 1, onComplete: this.findBall.bind(this) });
    }

    private changeAlpha(use: any, why: boolean): void {
        if (why)
            TweenMax.fromTo(this.selectBall, 1, { alpha: 0 }, { alpha: 1 });
        else
            TweenMax.fromTo(this.selectBall, 1, { alpha: 1 }, { alpha: 0 });
    }

    private checkSwap(use: any): void {
        let n = 1;
        let temp: any;
        let koordinat: number[] = new Array();

        for (let i = 0; i < this.sizeField; i++) {
            for (let j = 0; j < this.sizeField; j++) {
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

            for (let i = koordinat[1]; i <= koordinat[3]; i++) {
                n = 1;
                for (let j = 1; j < this.sizeField; j++) {
                    if (this.balls[j - 1][i].texture == this.balls[j][i].texture && this.balls[j][i].visible != false) {
                        n++;
                        if (n >= 3)
                            this.swapStatus = true;
                    } else
                        n = 1;
                }
            }

            for (let i = koordinat[0]; i <= koordinat[2]; i++) {
                n = 1;
                for (let j = 1; j < this.sizeField; j++) {
                    if (this.balls[i][j - 1].texture == this.balls[i][j].texture && this.balls[i][j].visible != false) {
                        n++;
                        if (n >= 3)
                            this.swapStatus = true;
                    } else
                        n = 1;
                }
            }

            this.swapAny(koordinat);
        }
    }

    private animationSwap(): void {
        let scaledown = new TimelineMax({ repeat: 1, repeatDelay: 0, onComplete: this.changeTextureBall.bind(this), onUpdate: this.changeAlpha.bind(this, false) });
        let wait = new TimelineMax({ repeat: 1, repeatDelay: 1, onComplete: this.interactiveBall.bind(this, true), onUpdate: this.interactiveBall.bind(this, false) });
        let wait2 = new TimelineMax({ repeat: 1, repeatDelay: 1, onComplete: function () { this.selectBall = new Array() }.bind(this), onUpdate: function () { this.swapStatus = false }.bind(this) });
    }

    private firstCheckVertical(): void {
        let n = 1;

        for (let i = 0; i < this.sizeField; i++) {
            n = 1;
            for (let j = 1; j < this.sizeField; j++) {
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
    }

    private firstCheckHorizon(): void {
        let n = 1;

        for (let i = 0; i < this.sizeField; i++) {
            n = 1;
            for (let j = 1; j < this.sizeField; j++) {
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
    }

    private positionDown(use: any, startx: number, starty: number, finishx: number, finishy: number, time: number): void {
        TweenMax.fromTo(use.position, time, { x: startx, y: starty }, { x: finishx, y: finishy });
    }

    private swapAny(use: number[]): void {
        let temp: Texture = this.balls[use[0]][use[1]].texture;;
        this.balls[use[0]][use[1]].texture = this.balls[use[2]][use[3]].texture;
        this.balls[use[2]][use[3]].texture = temp;
    }

    private ballDown(): void {
        this.interactiveBall(false);
        let n = 0;
        let last = 0;

        function swapDown(j: number, i: number, kol: number) {
            if (this.balls[j][i].visible == false) {
                this.balls[j][i].visible = true;
            }
            this.balls[j][i].texture = this.balls[j - kol][i].texture;
        }

        for (let i = 0; i < this.sizeField; i++) {
            n = 0;
            for (let j = 0; j < this.sizeField; j++) {
                if (this.balls[j][i].visible == false) {
                    n++;
                    last = j;
                }
                if (j == this.sizeField - 1 && n != 0) {
                    for (let k = last; k >= 0 + n; k--) {
                        let firstx = this.balls[k - n][i].position.x;
                        let firsty = this.balls[k - n][i].position.y;
                        let lastx = this.balls[k][i].position.x;
                        let lasty = this.balls[k][i].position.y;
                        let t1 = new TimelineMax({ repeat: 1, repeatDelay: 0, onComplete: swapDown.bind(this, k, i, n) });
                        let t2 = new TimelineMax({ repeat: 1, repeatDelay: 0, onComplete: this.positionDown.bind(this, this.balls[k][i], firstx, firsty, lastx, lasty, 1) });
                    }

                    for (let l = n - 1; l >= 0; l--) {
                        this.balls[l][i].visible = false;

                        let firstx2 = this.balls[0][i].position.x;
                        let firsty2 = this.balls[0][i].position.y;
                        let lastx2 = this.balls[l][i].position.x;
                        let lasty2 = this.balls[l][i].position.y;

                        if (l != 0) {
                            let t4 = new TimelineMax({ repeat: 1, repeatDelay: 1 - 1 / n * l, onComplete: this.addNewBall.bind(this, l, i) });
                            let t5 = new TimelineMax({ repeat: 1, repeatDelay: 1 - 1 / n * l, onComplete: this.positionDown.bind(this, this.balls[l][i], firstx2, firsty2, lastx2, lasty2, 1 / n * l) });
                        } else {
                            let t4 = new TimelineMax({ repeat: 1, repeatDelay: 1, onComplete: this.addNewBall.bind(this, l, i) });
                            let t5 = new TimelineMax({ repeat: 1, repeatDelay: 1, onComplete: this.positionDown.bind(this, this.balls[l][i], firstx2, firsty2, lastx2, lasty2, 0) });
                        }
                    }
                }
            }
        }

        let t8 = new TimelineMax({ repeat: 1, repeatDelay: 1.1, onComplete: this.interactiveBall.bind(this, true) });
        if (this.timerGame != 0) {
            let t7 = new TimelineMax({ repeat: 1, repeatDelay: 1.1, onComplete: this.findBall.bind(this) });
        }
    }

    private addNewBall(j: number, i: number): void {
        if (this.balls[j][i].visible == false)
            this.balls[j][i].visible = true;

        let typetexture = Math.floor(Math.random() * 6);
        this.balls[j][i].texture = this.textureBalls[typetexture];
    }
}