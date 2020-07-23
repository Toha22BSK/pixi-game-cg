import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import Texture = PIXI.Texture;
import Text = PIXI.Text;
import TextStyle = PIXI.TextStyle;
import { Game } from "./Game";
import { MenuGame } from "./MenuGame";
declare let TweenMax: any;
declare let TimelineMax: any;

export class Selector extends Container {
    public static readonly SELECT = "select";

    private event: string;
    private buttonUP: Button;
    private buttonDOWN: Button;
    private text: Text;
    private format: string;
    private values: Array<any>;
    private index: number = 0;

    constructor(event: string, position: Array<number>, values: Array<any>, format: string = "%v", index: number = 0) {
        super();

        this.event = event;
        this.index = index;
        this.values = values;
        this.format = format;
        this.text = new Text(String(MenuGame.sizeSetting));
        this.text.anchor.set(0.5);
        this.text.position.set(position[0], position[1]);
        this.text.style = new TextStyle({
            fontSize: 72, fontFamily: "Calibri", fill: "#00fff0", align: "center", dropShadow: false
        });

        this.buttonUP = new Button(this.event + "UP", [Game.RES.upButton.texture, Game.RES.upButtonBring.texture, Game.RES.upButtonPress.texture, Game.RES.upButtonDisable.texture],
            [position[0], position[1] - 50], 0.4);
        this.buttonUP.on(this.event + "UP", this.shiftValue.bind(this, true));

        this.buttonDOWN = new Button(this.event + "DOWN", [Game.RES.downButton.texture, Game.RES.downButtonBring.texture, Game.RES.downButtonPress.texture, Game.RES.downButtonDisable.texture],
            [position[0], position[1] + 50], 0.4);
        this.buttonDOWN.on(this.event + "DOWN", this.shiftValue.bind(this, false));

        this.setValue(this.index);
        this.addChild(this.text);
        this.addChild(this.buttonUP);
        this.addChild(this.buttonDOWN);
    }

    private shiftValue(up: boolean): void {
        this.setValue(this.index + (up ? 1 : -1));
    }

    public setValue(index: number): void {
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
    }

    public getValue(): any {
        return this.values[this.index];
    }

}

export class Switcher extends Container {
    public static readonly SWITCH = "switch";

    private event: string;
    private buttonON: ButtonToggle;
    private buttonOFF: ButtonToggle;
    private state: boolean;

    constructor(event: string, buttonON: ButtonToggle, buttonOFF: ButtonToggle, state: boolean = true) {
        super();

        this.event = event;
        this.buttonON = buttonON;
        this.buttonOFF = buttonOFF;
        this.buttonON.on(Switcher.SWITCH, this.setState.bind(this, true));
        this.buttonOFF.on(Switcher.SWITCH, this.setState.bind(this, false));

        this.setState(state);
    }

    public setState(value: boolean, toggle: boolean = false): void {
        this.state = value;
        this.buttonON.setState(value ? Button.PRESSED : Button.IDLE);
        this.buttonON.setEnabled(!value);

        this.buttonOFF.setState(value ? Button.IDLE : Button.PRESSED);
        this.buttonOFF.setEnabled(value);

        this.emit(this.event, value);
    }
}

export class Button extends Container {

    public static readonly IDLE = 0;
    public static readonly HOVER = 1;
    public static readonly PRESSED = 2;
    public static readonly DISABLED = 3;

    protected sprite: Sprite;
    private event: string;
    private state: number = 0;

    private textures: Array<Texture> = [];
    private soloTint: Array<number> = [0.9, 1, 1, 0.5];

    constructor(event: string = "", textures: Array<Texture>, position: Array<number> = [0, 0], scale: number = 1, anchor: number = 0.5, switcher = false) {
        super();
        this.event = event;
        this.textures = textures;

        this.sprite = new Sprite();
        this.position.set(position[0], position[1]);
        this.sprite.scale.set(scale);
        this.sprite.anchor.set(anchor);

        this.sprite.interactive = true;
        this.sprite.buttonMode = true;

        this.setState(Button.IDLE);

        this.sprite.on("pointerout", function () {
            this.setState(this.toggled && this.switcher ? Button.PRESSED : Button.IDLE);
        }.bind(this));

        this.sprite.on("pointerover", function () {
            this.setState(Button.HOVER);
        }.bind(this));

        this.sprite.on("pointerup", function () {
            this.setState(Button.PRESSED);
            if (MenuGame.soundSetting) {
                Game.RES.click.sound.volume = 0.5;
                Game.RES.click.sound.play();
            }
            this.emit(this.event);
            setTimeout(function (): void {
                this.setState(Button.IDLE);
            }.bind(this), 50);
        }.bind(this));

        this.addChild(this.sprite);
    }

    public setEnabled(value: boolean): void {
        this.sprite.interactive = value;
        this.sprite.buttonMode = value;

        if (!value)
            this.setState(Button.DISABLED);
        else
            this.setState(Button.IDLE);
    }

    public setState(value: number): void {
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
    }

    public reset(): void {
        this.setState(Button.IDLE);
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        this.sprite.alpha = 1;
        this.sprite.texture = this.textures[this.state];
    }
}

export class ButtonToggle extends Button {
    public toggled: boolean;

    constructor(event: string = "", textures: Array<Texture>, position: Array<number> = [0, 0], scale: number = 1, anchor: number = 0.5, toggled: boolean = false) {
        super(event, textures, position, scale, anchor);
        this.toggled = toggled;
        this.setState(this.toggled ? Button.PRESSED : Button.IDLE);

        this.sprite.removeAllListeners();
        this.sprite.on("pointerup", function () {
            this.setState(this.toggled ? Button.IDLE : Button.PRESSED);
            if (MenuGame.soundSetting) {
                Game.RES.click.sound.volume = 0.5;
                Game.RES.click.sound.play();
            }
            this.emit(this.event, this.toggled);
        }.bind(this));
    }

    public setEnabled(value: boolean): void {
        this.sprite.interactive = value;
        this.sprite.buttonMode = value;

        if (!value)
            this.setState(Button.DISABLED);
        else
            this.setState(this.toggled ? Button.PRESSED : Button.IDLE);
    }

    public setState(value: number): void {
        if (value == Button.PRESSED)
            this.toggled = true;
        else if (value == Button.IDLE)
            this.toggled = false;

        super.setState(value);
    }
}
