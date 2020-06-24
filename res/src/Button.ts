import Application = PIXI.Application;
import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import Texture = PIXI.Texture;
import { Place } from "./place.js";

export class buttonplace extends Container {

    public valueplace: number = 0;
    private eightsprite: Sprite;
    private twelvesprite: Sprite;
    private sixteensprite: Sprite;
    private eightstock: Texture = Place.res.eightxeight.texture;
    private eightpress: Texture = Place.res.eightxeightpress.texture;
    private eightbring: Texture = Place.res.eightxeightbring.texture;
    private twelvestock: Texture = Place.res.twelvextwelve.texture;
    private twelvepress: Texture = Place.res.twelvextwelvepress.texture;
    private twelvebring: Texture = Place.res.twelvextwelvebring.texture;
    private sixteenstock: Texture = Place.res.sixteenxsixteen.texture;
    private sixteenpress: Texture = Place.res.sixteenxsixteenpress.texture;
    private sixteenbring: Texture = Place.res.sixteenxsixteenbring.texture;
    private positionstockX: number = (Place.size * 0.9) / 10;
    private positionstockY: number = Place.size / 10;
    constructor() {
        super();
        this.eightsprite = new Sprite();
        this.twelvesprite = new Sprite();
        this.sixteensprite = new Sprite();
        this.eightsprite.interactive = true;
        this.eightsprite.buttonMode = true;
        this.twelvesprite.interactive = true;
        this.twelvesprite.buttonMode = true;
        this.sixteensprite.interactive = true;
        this.sixteensprite.buttonMode = true;
        this.eightsprite.position.x = this.positionstockX*4;
        this.eightsprite.position.y = this.positionstockY*4.5;
        this.eightsprite.scale.x = 0.8;
        this.eightsprite.scale.y = 0.8;
        this.twelvesprite.position.x = this.positionstockX * 5.75;
        this.twelvesprite.position.y = this.positionstockY * 4.45;
        this.twelvesprite.scale.x = 0.8;
        this.twelvesprite.scale.y = 0.8;
        this.sixteensprite.position.x = this.positionstockX * 7.75;
        this.sixteensprite.position.y = this.positionstockY * 4.4;
        this.sixteensprite.scale.x = 0.8;
        this.sixteensprite.scale.y = 0.8;

        this.optionbuttom(this.eightsprite, this.twelvesprite, this.sixteensprite, this.eightpress, this.eightbring, this.eightstock, this.twelvestock, this.sixteenstock, 8);
        this.optionbuttom(this.twelvesprite, this.eightsprite, this.sixteensprite, this.twelvepress, this.twelvebring, this.twelvestock, this.eightstock, this.sixteenstock, 12);
       this.optionbuttom(this.sixteensprite, this.eightsprite, this.twelvesprite, this.sixteenpress, this.sixteenbring, this.sixteenstock, this.eightstock, this.twelvestock, 16);

        this.eightsprite.texture = this.eightstock;
        this.twelvesprite.texture = this.twelvestock;
        this.sixteensprite.texture = this.sixteenstock;
        this.addChild(this.eightsprite);
        this.addChild(this.twelvesprite);
        this.addChild(this.sixteensprite);
    }
    public optionbuttom(use: any, use2: any, use3: any, press: any, bring: any, stock: any, stock2: any, stock3: any, value: number){
        use.on("mouseover", function (): void {
            if (use.texture != press) {
                use.texture = bring;
            }
        }.bind(this));
        use.on("mouseout", function (): void {
            if (use.texture != press) {
                use.texture = stock;
            }
        }.bind(this));

        use.on("mouseup", function (): void {
            use.texture = press;
            use2.texture = stock2;
            use3.texture = stock3;
            this.valueplace = value;
        }.bind(this));
    }


    
}
