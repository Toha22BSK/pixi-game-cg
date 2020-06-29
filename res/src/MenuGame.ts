import Application = PIXI.Application;
import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import Texture = PIXI.Texture;
import { Place } from "./Place.js";
let width: number = window.innerWidth;
let height: number = window.innerHeight;

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
