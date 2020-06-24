import Application = PIXI.Application;
import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import Texture = PIXI.Texture;
import { Place } from "./place.js";
let width: number = window.innerWidth;
let height: number = window.innerHeight;
/*export class menupole extends Container{
    private textures = Place.res;
    private eightButton: button;
    private twelveButton: button;
    private sixteenButton: button;
    private positionx: number = (Place.size * 0.9)/10;
    private positiony: number = Place.size/10;
    public znach: number = 0;
    constructor(){
        super();
        this.eightButton = new button(this.textures.eightxeight.texture, this.textures.eightxeightpress.texture, this.textures.eightxeightbring.texture, this.positionx * 4, this.positiony * 4.25,0.8);
        this.twelveButton = new button(this.textures.twelvextwelve.texture, this.textures.twelvextwelvepress.texture, this.textures.twelvextwelvebring.texture, this.positionx * 5.75, this.positiony * 4.20, 0.8);
        this.sixteenButton = new button(this.textures.sixteenxsixteen.texture, this.textures.sixteenxsixteenpress.texture, this.textures.sixteenxsixteenbring.texture, this.positionx * 7.75, this.positiony * 4.15, 0.8);
        
        this.addChild(this.eightButton);
        this.addChild(this.twelveButton);
        this.addChild(this.sixteenButton);
    }
}
*/
export class logo extends Container {
    private sprite: Sprite;

    constructor() {
        super();
        this.sprite = new Sprite(Place.res.logo.texture);
        this.sprite.position.set(512 - this.sprite.width / 2, 0);
        this.addChild(this.sprite);

    }
}

export class sound extends Container {
    private sprite: Sprite;
    constructor() {
        super();
        this.sprite = new Sprite(Place.res.sound.texture);
        this.sprite.position.set(1024 * 0.1, 1024 / 10 * 6.15);
        this.sprite.scale.set(0.8, 0.8);
        this.addChild(this.sprite);

    }
}

export class places extends Container {
    private sprite: Sprite;
    constructor() {
        super();
        this.sprite = new Sprite(Place.res.places.texture);
        this.sprite.position.set(1024 * 0.1, 1024 / 10 * 5.15);
        this.sprite.scale.set(0.8, 0.8);
        this.addChild(this.sprite);

    }
}
export class time extends Container {
    private sprite: Sprite;
    constructor() {
        super();
        this.sprite = new Sprite(Place.res.time.texture);
        this.sprite.position.set(1024 * 0.1, 1024 / 10 * 4.15);
        this.sprite.scale.set(0.8, 0.8);
        this.addChild(this.sprite);
    }
}
export class music extends Container {
    private sprite: Sprite;
    constructor() {
        super();
        this.sprite = new Sprite(Place.res.music.texture);
        this.sprite.position.set(1024 * 0.1, 1024 / 10 * 3);
        this.sprite.scale.set(0.8, 0.8);
        this.addChild(this.sprite);
    }
}
/*
export class buttonmenu extends Container {
    public startButton: start;
    public onButton: on;
    public offButton: off;
    public fiveButton: five;
    public tenButton: ten;
    public fifteenButton: fifteen;
    public thirtyButton: thirty;
    public eightxeightButton: eightxeight;
    public twelvextwelveButton: twelvextwelve;
    public sixteenxsixteenButton: sixteenxsixteen;
    constructor() {
        super();
        this.startButton = new start();
        this.onButton = new on();
        this.offButton = new off();
        this.fiveButton = new five();
        this.tenButton = new ten();
        this.fifteenButton = new fifteen();
        this.thirtyButton = new thirty();
        this.eightxeightButton = new eightxeight();
        this.twelvextwelveButton = new twelvextwelve();
        this.sixteenxsixteenButton = new sixteenxsixteen();
        this.addChild(this.startButton);
        this.addChild(this.onButton);
        this.addChild(this.offButton);
        this.addChild(this.fiveButton);
        this.addChild(this.tenButton);
        this.addChild(this.fifteenButton);
        this.addChild(this.thirtyButton);
        this.addChild(this.eightxeightButton);
        this.addChild(this.twelvextwelveButton);
        this.addChild(this.sixteenxsixteenButton);

    }
}
*/