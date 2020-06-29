import Application = PIXI.Application;
import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import Texture = PIXI.Texture;
import { Place } from "./Place.js";
declare let TweenMax: any;
declare let TimelineMax: any;
export class preview extends Container {
    private sprite: Sprite;

    constructor(place: Place) {
        super();
        this.sprite = new Sprite();
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        this.sprite.anchor.set (0.5,0.5);
        this.sprite.texture = Place.res.logo.texture;
        this.sprite.position.x = Place.size / 2 ;
        this.sprite.position.y = Place.size / 2 ;
        this.alpha = 0.9;
        this.scalelogo(this.sprite);
        this.sprite.on("mouseover", function (): void {

            this.alpha = 1;
        }.bind(this));
        this.sprite.on("mouseout", function (): void {
            this.alpha = 0.9; 

        }.bind(this));

        this.sprite.on("mouseup", function (): void {
            this.emit("click");
            place.showMenu();
        }.bind(this));
        this.addChild(this.sprite);
    }
    public scalelogo(use: any) {
        TweenMax.fromTo(use.scale, 1, { x: 0, y: 0 }, { x: 1, y: 1 });
    }




}