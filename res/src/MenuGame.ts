import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import { Game } from "./Game";
import { Button, Switcher, Selector, ButtonToggle} from "./Button";

export class MenuGame extends Container{
    private game: Game;

    private spritelogo: Sprite;
    private spritesound: Sprite;
    private spriteplaces: Sprite;
    private spritetime: Sprite;
    private spritemusic: Sprite;

    private startButton: Button;

    private switcherSound: Switcher;
    private buttonSoundON: ButtonToggle;
    private buttonSoundOFF: ButtonToggle;

    private switcherMusic: Switcher;
    private buttonMusicON: ButtonToggle;
    private buttonMusicOFF: ButtonToggle;

    private gameSizeSelector: Selector;
    private gameTimeSelector: Selector;

    public static sizeSetting: number;
    public static timeSetting: number;
    public static soundSetting: boolean = true;
    public static musicSetting: boolean = true;
    public static scoreGame: number;

    constructor(game: Game) {
        super();
        this.game = game;
        this.configurateUI();
    }

    private configurateUI(): void {
        this.startButton = new Button("startGame", [Game.RES.start.texture, Game.RES.startBring.texture, Game.RES.startPress.texture],
                                    [Game.SIZE / 2, Game.SIZE * 0.85], 0.35);
        this.startButton.on("startGame", this.startGame.bind(this));

        this.buttonSoundON = new ButtonToggle(Switcher.SWITCH, [Game.RES.on.texture, Game.RES.onBring.texture, Game.RES.onPress.texture, Game.RES.onPress.texture],
                                        [Game.SIZE * 0.45, Game.SIZE * 0.665], 0.8, 0.5, MenuGame.soundSetting);
        this.buttonSoundOFF = new ButtonToggle(Switcher.SWITCH, [Game.RES.off.texture, Game.RES.offBring.texture, Game.RES.offPress.texture, Game.RES.offPress.texture],
                                        [Game.SIZE * 0.65, Game.SIZE * 0.665], 0.8, 0.5, !MenuGame.soundSetting);

        this.buttonMusicON = new ButtonToggle(Switcher.SWITCH, [Game.RES.on.texture, Game.RES.onBring.texture, Game.RES.onPress.texture, Game.RES.onPress.texture],
                                        [Game.SIZE * 0.45, Game.SIZE * 0.565], 0.8, 0.5, MenuGame.musicSetting);
        this.buttonMusicOFF = new ButtonToggle(Switcher.SWITCH, [Game.RES.off.texture, Game.RES.offBring.texture, Game.RES.offPress.texture, Game.RES.offPress.texture],
                                        [Game.SIZE * 0.65, Game.SIZE * 0.565], 0.8, 0.5, !MenuGame.musicSetting);
        
        
        this.switcherSound = new Switcher(Switcher.SWITCH + "Sound", this.buttonSoundON, this.buttonSoundOFF, MenuGame.soundSetting);
        this.switcherSound.on(Switcher.SWITCH + "Sound", this.switchSound.bind(this));

        this.switcherMusic = new Switcher(Switcher.SWITCH + "Music", this.buttonMusicON, this.buttonMusicOFF, MenuGame.musicSetting);
        this.switcherMusic.on(Switcher.SWITCH + "Music", this.switchMusic.bind(this));

        this.gameSizeSelector = new Selector(Selector.SELECT + "GameSize", [Game.SIZE / 1.7, Game.SIZE * 0.285], [6,7,8,9,10], "%v   x   %v");
        this.gameSizeSelector.on(Selector.SELECT + "GameSize", this.selectGameSize.bind(this));
        MenuGame.sizeSetting = this.gameSizeSelector.getValue();

        this.gameTimeSelector = new Selector(Selector.SELECT + "GameTime", [Game.SIZE / 1.7, Game.SIZE * 0.435], [30,60,90,120,150,300,450,600,1200,2400], "%m", 3);
        this.gameTimeSelector.on(Selector.SELECT + "GameTime", this.selectGameTime.bind(this));
        MenuGame.timeSetting = this.gameTimeSelector.getValue();

        this.spritelogo = new Sprite(Game.RES.logo.texture);
        this.spritelogo.position.set(512 - this.spritelogo.width / 2, 0);
        this.spritelogo.scale.set(0.9);

        this.spritesound = new Sprite(Game.RES.sound.texture);
        this.spritesound.position.set(1024 * 0.1, 1024 / 10 * 6.15);
        this.spritesound.scale.set(0.8, 0.8);

        this.spriteplaces = new Sprite(Game.RES.places.texture);
        this.spriteplaces.position.set(1024 * 0.1, 1024 / 10 * 2.5);
        this.spriteplaces.scale.set(0.8, 0.8);

        this.spritetime = new Sprite(Game.RES.time.texture);
        this.spritetime.position.set(1024 * 0.1, 1024 / 10 * 4);
        this.spritetime.scale.set(0.8, 0.8);

        this.spritemusic = new Sprite(Game.RES.music.texture);
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
    }

    private startGame(): void {
        this.game.showGameField(MenuGame.sizeSetting, MenuGame.timeSetting);
        this.startButton.reset();
    }

    private switchSound(value: boolean): void {
        MenuGame.soundSetting = value;
    }

    private switchMusic(value: boolean): void {
        MenuGame.musicSetting = value;
        if (value)
            this.game.resumeMusic();
        else
            this.game.pauseMusic();
    }

    private selectGameSize(value: any): void {
        MenuGame.sizeSetting = value;
    }

    private selectGameTime(value: any): void {
        MenuGame.timeSetting = value;
    }
}
