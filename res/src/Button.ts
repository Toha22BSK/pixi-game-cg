import Application = PIXI.Application;
import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import Texture = PIXI.Texture;
import { Place } from "./place.js";

let positionstockX: number = (1024 * 0.9) / 10;
let positionstockY: number = 1024 / 10;

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
        this.eightsprite.position.x = positionstockX*4;
        this.eightsprite.position.y = positionstockY*4.95;
        this.eightsprite.scale.x = 0.8;
        this.eightsprite.scale.y = 0.8;
        this.twelvesprite.position.x = positionstockX * 5.7;
        this.twelvesprite.position.y = positionstockY * 4.85;
        this.twelvesprite.scale.x = 0.8;
        this.twelvesprite.scale.y = 0.8;
        this.sixteensprite.position.x = positionstockX * 7.75;
        this.sixteensprite.position.y = positionstockY * 4.7;
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
    private optionbuttom(use: any, use2: any, use3: any, press: any, bring: any, stock: any, stock2: any, stock3: any, value: number){
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
   
export class buttontime extends Container{

    public valuetime: number = 0;
    private fivesprite: Sprite;
    private tensprite: Sprite;
    private fifteensprite: Sprite;
    private thirtysprite: Sprite;
    private fivestock: Texture = Place.res.five.texture;
    private fivepress: Texture = Place.res.fivepress.texture;
    private fivebring: Texture = Place.res.fivebring.texture;
    private tenstock: Texture = Place.res.ten.texture;
    private tenpress: Texture = Place.res.tenpress.texture;
    private tenbring: Texture = Place.res.tenbring.texture;
    private fifteenstock: Texture = Place.res.fifteen.texture;
    private fifteenpress: Texture = Place.res.fifteenpress.texture;
    private fifteenbring: Texture = Place.res.fifteenbring.texture;
    private thirtystock: Texture = Place.res.thirty.texture;
    private thirtypress: Texture = Place.res.thirtypress.texture;
    private thirtybring: Texture = Place.res.thirtybring.texture;

    constructor() {
        super();
        this.fivesprite = new Sprite();
        this.tensprite = new Sprite();
        this.fifteensprite = new Sprite();
        this.thirtysprite = new Sprite();
        this.fivesprite.interactive = true;
        this.fivesprite.buttonMode = true;
        this.tensprite.interactive = true;
        this.tensprite.buttonMode = true;
        this.fifteensprite.interactive = true;
        this.fifteensprite.buttonMode = true;
        this.thirtysprite.interactive = true;
        this.thirtysprite.buttonMode = true;
        this.fivesprite.position.x = positionstockX * 4.15;
        this.fivesprite.position.y = positionstockY * 3.90;
        this.fivesprite.scale.x = 0.8;
        this.fivesprite.scale.y = 0.8;
        this.tensprite.position.x = positionstockX * 5.5;
        this.tensprite.position.y = positionstockY * 3.8;
        this.tensprite.scale.x = 0.8;
        this.tensprite.scale.y = 0.8;
        this.fifteensprite.position.x = positionstockX * 7;
        this.fifteensprite.position.y = positionstockY * 3.7;
        this.fifteensprite.scale.x = 0.8;
        this.fifteensprite.scale.y = 0.8;
        this.thirtysprite.position.x = positionstockX * 8.5;
        this.thirtysprite.position.y = positionstockY * 3.6;
        this.thirtysprite.scale.x = 0.8;
        this.thirtysprite.scale.y = 0.8;

        this.optionbuttom(this.fivesprite, this.tensprite, this.fifteensprite, this.thirtysprite, this.fivepress, this.fivebring, this.fivestock, this.tenstock, this.fifteenstock, this.thirtystock, 5);
        this.optionbuttom(this.tensprite, this.fivesprite, this.fifteensprite, this.thirtysprite, this.tenpress, this.tenbring, this.tenstock, this.fivestock, this.fifteenstock, this.thirtystock, 10);
        this.optionbuttom(this.fifteensprite, this.tensprite, this.fivesprite, this.thirtysprite, this.fifteenpress, this.fifteenbring, this.fifteenstock, this.tenstock, this.fivestock, this.thirtystock, 15);
        this.optionbuttom(this.thirtysprite, this.tensprite, this.fifteensprite, this.fivesprite, this.thirtypress, this.thirtybring, this.thirtystock, this.tenstock, this.fifteenstock, this.fivestock, 30);

        this.fivesprite.texture = this.fivestock;
        this.tensprite.texture = this.tenstock;
        this.fifteensprite.texture = this.fifteenstock;
        this.thirtysprite.texture = this.thirtystock;
        this.addChild(this.fivesprite);
        this.addChild(this.tensprite);
        this.addChild(this.fifteensprite);
        this.addChild(this.thirtysprite);
    }
    private optionbuttom(use: any, use2: any, use3: any, use4: any, press: any, bring: any, stock: any, stock2: any, stock3: any, stock4: any, value: number) {
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
            use4.texture = stock4;
            this.valuetime = value;
        }.bind(this));
    }  
}
export class soundbuttom extends Container{

    private onsoundsprite: Sprite;
    private offsoundsprite: Sprite;
    private onmusicsprite: Sprite;
    private offmusicsprite: Sprite;
    private onstock: Texture = Place.res.on.texture;
    private onbring: Texture = Place.res.onbring.texture;
    private onpress: Texture = Place.res.onpress.texture;
    private offstock: Texture = Place.res.off.texture;
    private offbring: Texture = Place.res.offbring.texture;
    private offpress: Texture = Place.res.offpress.texture;

    constructor(){
        super();
        this.onsoundsprite = new Sprite();
        this.onmusicsprite = new Sprite();
        this.offsoundsprite = new Sprite();
        this.offmusicsprite = new Sprite();
        this.onsoundsprite.interactive = true;
        this.onsoundsprite.buttonMode = true;
        this.onmusicsprite.interactive = true;
        this.onmusicsprite.buttonMode = true;
        this.offsoundsprite.interactive = true;
        this.offsoundsprite.buttonMode = true;
        this.offmusicsprite.interactive = true;
        this.offmusicsprite.buttonMode = true;

        this.onsoundsprite.position.x = positionstockX * 3.75;
        this.onsoundsprite.position.y = positionstockY * 6;
        this.onsoundsprite.scale.x = 0.8;
        this.onsoundsprite.scale.y = 0.8;
        this.onmusicsprite.position.x = positionstockX * 4.5;
        this.onmusicsprite.position.y = positionstockY * 2.9;
        this.onmusicsprite.scale.x = 0.8;
        this.onmusicsprite.scale.y = 0.8;
        this.offsoundsprite.position.x = positionstockX * 5.75;
        this.offsoundsprite.position.y = positionstockY * 5.85;
        this.offsoundsprite.scale.x = 0.8;
        this.offsoundsprite.scale.y = 0.8;
        this.offmusicsprite.position.x = positionstockX * 6.5;
        this.offmusicsprite.position.y = positionstockY * 2.75;
        this.offmusicsprite.scale.set (0.8, 0.8);

        this.optionbuttom(this.onmusicsprite, this.offmusicsprite, this.onpress, this.onbring, this.onstock, this.offstock);
        this.optionbuttom(this.offmusicsprite, this.onmusicsprite, this.offpress, this.offbring, this.offstock, this.onstock);
        this.optionbuttom(this.onsoundsprite, this.offsoundsprite, this.onpress, this.onbring, this.onstock, this.offstock);
        this.optionbuttom(this.offsoundsprite, this.onsoundsprite, this.offpress, this.offbring, this.offstock, this.onstock);

        this.onsoundsprite.texture = this.onstock;
        this.onmusicsprite.texture = this.onstock;
        this.offsoundsprite.texture = this.offstock;
        this.offmusicsprite.texture = this.offstock;

        this.addChild(this.onsoundsprite);
        this.addChild(this.onmusicsprite);
        this.addChild(this.offsoundsprite);
        this.addChild(this.offmusicsprite);
    }
    private optionbuttom(use: any, use2: any, press: any, bring: any, stock: any, stock2: any) {
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

        }.bind(this));
    }  
}
export class startbutton extends Container{

    private startsprite: Sprite;
    private startstock: Texture = Place.res.start.texture;
    private startbring: Texture = Place.res.startbring.texture;
    private startpress: Texture = Place.res.startpress.texture;

    constructor(place: Place){

        super();
        this.startsprite = new Sprite();
        this.startsprite.interactive = true;
        this.startsprite.buttonMode = true;

        this.startsprite.position.set(1024 / 2 - this.startstock.width*0.4/2, positionstockY * 7);
        this.startsprite.scale.set (0.4, 0.4);

        this.startsprite.on("mouseover", function (): void {
            if (this.startsprite.texture != this.startpress) {
                this.startsprite.texture = this.startbring;
            }
        }.bind(this));
        this.startsprite.on("mouseout", function (): void {
            if (this.startsprite.texture != this.startpress) {
                this.startsprite.texture = this.startstock;
            }
        }.bind(this));

        this.startsprite.on("mouseup", function (): void {
            this.startsprite.texture = this.startpress;
        }.bind(this));

        this.startsprite.texture = this.startstock;

        this.addChild(this.startsprite);
    }
}