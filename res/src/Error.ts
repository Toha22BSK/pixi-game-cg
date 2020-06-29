import Application = PIXI.Application;
import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import Texture = PIXI.Texture;
import Text = PIXI.Text;
import TextStyle = PIXI.TextStyle;
import { Place } from "./Place.js";

export class erroroption extends Container{
    private alerterror: Sprite;
    private texterrror: Text;
    constructor(){
        super();
        this.alerterror = new Sprite(Place.res.erroroption.texture);
        this.alerterror.position.set (Place.size / 2, Place.size / 2);
        this.alerterror.anchor.set (0.5, 0.5);
        this.texterrror = new Text("Вы не выбрали необходимые режимы игры. Пожалуйста, установите необходимые параметры!");
        this.texterrror.anchor.set(0.5, 0.5);
        this.texterrror.position.set(Place.size /2, Place.size * 0.45);
        this.texterrror.style = new TextStyle({
            fontSize: 48, fontFamily: "Calibri", fill: "#00fff0", align: "center", wordWrapWidth: this.alerterror.width * 0.9,
            dropShadow: false, wordWrap: true, 
        });
 
        this.addChild(this.alerterror);
        this.addChild(this.texterrror);
        
    }

}