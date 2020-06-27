import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import Texture = PIXI.Texture;
import { Place } from "./place.js";

export class ball extends Container {
    private balls: Sprite;
    private positionx: number;
    private positiony: number;
    private scaleballs: number;
    private textureballs: Texture[] = [
        Place.res.redball.texture,
        Place.res.blueball.texture,
        Place.res.greenball.texture,
        Place.res.yellowball.texture,
        Place.res.pinkball.texture,
        Place.res.lightblueball.texture
    ];

    constructor(){
        super();
        this.balls = new Sprite();
       this.balls.position.set(35);
        this.balls.anchor.set(0.5);
        this.balls.scale.set(1);

        this.addChild(this.balls);
    }
}
