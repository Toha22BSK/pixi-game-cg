import Application = PIXI.Application;
import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import Texture = PIXI.Texture;
import { Place } from "./place.js";

export class button extends Container {


    private sprite: Sprite;
    private stock: Texture;
    private press: Texture;
    private bring: Texture;
    protected bringAlpha: number = 0.8;
    constructor(_normal: Texture, _pressed: Texture, _bringed: Texture, _positionX: number, _positionY: number, _scale: number) {
        super();
        this.sprite = new Sprite();
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        this.sprite.position.x = _positionX;
        this.sprite.position.y = _positionY;
        this.sprite.scale.x = _scale;
        this.sprite.scale.y = _scale;

        this.stock = _normal;
        this.press = _pressed;
        this.bring = _bringed;

        this.sprite.on("mouseover", function (): void {
            if (this.sprite.texture != this.press) {
                this.sprite.texture = this.bring;
            }
        }.bind(this));
        this.sprite.on("mouseout", function (): void {
            if (this.sprite.texture != this.press) {
                this.sprite.texture = this.stock;
            }
        }.bind(this));
        this.sprite.on("mousedown", function (): void {
            this.sprite.texture = this.stock;
        }.bind(this));
        this.sprite.on("mouseupoutside", function (): void {
            if (this.sprite.texture == this.press) {
                this.sprite.texture = this.stock;
            }
        }.bind(this));
        this.sprite.on("mouseup", function (): void {
            this.sprite.texture = this.press;
            this.sprite.interactive = false;
            this.emit("click");
            setTimeout(function () {
                this.alpha = 1;
                this.sprite.interactive = true;
            }.bind(this), 50);
        }.bind(this));


        this.sprite.texture = this.stock;
        this.addChild(this.sprite);
    }
}
