import Application = PIXI.Application;
import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import Texture = PIXI.Texture;
import { Place } from "./place.js";
import { TweenLite } from "gsap";
export class preview extends Container{
    private sprite: Sprite;
    private timer = [50, 2000, 3000,100, 70];
    private alphalogo = [0.5, 0.9];
    private timerID: any; 
    private animation: any;
constructor(place: Place){
    super();
    this.sprite = new Sprite();
    this.sprite.interactive = true;
    this.sprite.buttonMode = true;
    this.sprite.texture = Place.res.logo.texture;
    this.sprite.position.x = Place.size / 2 - Place.res.logo.texture.width/2;
    this.sprite.position.y = Place.size / 2 - Place.res.logo.texture.height / 2;
    this.alpha = 0.9;
    //this.animation = TweenLite.to(this.sprite, 1, {scale: 1});

    this.sprite.on("mouseover", function (): void {
        //this.sprite.scale = 1;
        this.alpha = 1;
    }.bind(this));
    this.sprite.on("mouseout", function (): void {
        this.alpha = 0.9;/*
        this.timerID = setInterval(function time() {
            if (this.alpha != 1)
                this.alpha = this.alphalogo[Math.floor(Math.random() * this.alphalogo.length)];
            else
                alert('stop');
        }.bind(this), this.timer[Math.floor(Math.random() * this.timer.length)]);*/
    }.bind(this));

    this.sprite.on("mouseup", function (): void {
        this.emit("click");
        place.showMenu();
    }.bind(this));
    //this.addChild(this.animation);
    this.addChild(this.sprite);
}
}