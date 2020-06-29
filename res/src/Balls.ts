import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import Texture = PIXI.Texture;
import { Place } from "./Place.js";

export class ball extends Container {
    private balls: Sprite;
    private positionx: number;
    private positiony: number;
    private scaleballs: number;
    private typeball: number;
    private textureballs: Texture[] = [
        Place.res.redball.texture,
        Place.res.blueball.texture,
        Place.res.greenball.texture,
        Place.res.yellowball.texture,
        Place.res.pinkball.texture,
        Place.res.lightblueball.texture
    ];

    constructor(type: number){
        super();
        this.balls = new Sprite();
        this.balls.anchor.set(0.5);
        this.setType(type);
        this.addChild(this.balls);
    }
    public setType(t: number) {
        this.typeball = t;
        this.balls.texture = this.textureballs[this.typeball];
    }
}
