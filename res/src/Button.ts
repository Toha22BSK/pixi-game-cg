import Application = PIXI.Application;
import Sprite = PIXI.Sprite;
import Container = PIXI.Container;
import Texture = PIXI.Texture;
import { Place } from "./Place.js";
import { places } from "./Menugame.js";

let positionstockX: number = (1024 * 0.9) / 10;
let positionstockY: number = 1024 / 10;
let timeforgame: number = undefined;
let sizeField: number = undefined;
let soundvalue: boolean = undefined;
let musicvalue: boolean = undefined;

export class buttonplace extends Container {

    private eightsprite: Sprite;
    private sixsprite: Sprite;
    private tensprite: Sprite;
    private eightstock: Texture = Place.res.eightxeight.texture;
    private eightpress: Texture = Place.res.eightxeightpress.texture;
    private eightbring: Texture = Place.res.eightxeightbring.texture;
    private sixstock: Texture = Place.res.sixxsix.texture;
    private sixpress: Texture = Place.res.sixxsixpress.texture;
    private sixbring: Texture = Place.res.sixxsixbring.texture;
    private tenstock: Texture = Place.res.tenxten.texture;
    private tenpress: Texture = Place.res.tenxtennpress.texture;
    private tenbring: Texture = Place.res.tenxtenbring.texture;

    constructor() {
        super();
        this.eightsprite = new Sprite();
        this.sixsprite = new Sprite();
        this.tensprite = new Sprite();
        this.eightsprite.interactive = true;
        this.eightsprite.buttonMode = true;
        this.sixsprite.interactive = true;
        this.sixsprite.buttonMode = true;
        this.tensprite.interactive = true;
        this.tensprite.buttonMode = true;
        this.sixsprite.position.set(positionstockX * 3.85, positionstockY * 4.95);
        this.sixsprite.scale.set(0.8, 0.8);
        this.eightsprite.position.set(positionstockX * 5.85, positionstockY * 4.85);
        this.eightsprite.scale.set(0.8, 0.8);
        this.tensprite.position.set(positionstockX * 7.75, positionstockY * 4.7);
        this.tensprite.scale.set(0.8, 0.8);

        this.optionbuttom(this.sixsprite, this.eightsprite, this.tensprite, this.sixpress, this.sixbring, this.sixstock, this.eightstock, this.tenstock, 6);
        this.optionbuttom(this.eightsprite, this.sixsprite, this.tensprite, this.eightpress, this.eightbring, this.eightstock, this.sixstock, this.tenstock, 8);
        this.optionbuttom(this.tensprite, this.eightsprite, this.sixsprite, this.tenpress, this.tenbring, this.tenstock, this.eightstock, this.sixstock, 10);
 
        this.eightsprite.texture = this.eightstock;
        this.sixsprite.texture = this.sixstock;
        this.tensprite.texture = this.tenstock;
        this.addChild(this.eightsprite);
        this.addChild(this.sixsprite);
        this.addChild(this.tensprite);
    }
    private optionbuttom(use: any, use2: any, use3: any, press: any, bring: any, stock: any, stock2: any, stock3: any, value: number) {
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
            sizeField = value;
        }.bind(this));
    }
}

export class buttontime extends Container {

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
        this.fivesprite.position.set(positionstockX * 4.15, positionstockY * 3.9);
        this.fivesprite.scale.set(0.8, 0.8);
        this.tensprite.position.set(positionstockX * 5.5, positionstockY * 3.8);
        this.tensprite.scale.set(0.8, 0.8);
        this.fifteensprite.position.set(positionstockX * 7, positionstockY * 3.7);
        this.fifteensprite.scale.set(0.8, 0.8);
        this.thirtysprite.position.set(positionstockX * 8.5, positionstockY * 3.6);
        this.thirtysprite.scale.set(0.8, 0.8);

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
            timeforgame = value;
        }.bind(this));
    }
}
export class soundbuttom extends Container {
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

    constructor() {
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

        this.onsoundsprite.position.set(positionstockX * 3.75, positionstockY * 6);
        this.onsoundsprite.scale.set(0.8, 0.8);
        this.onmusicsprite.position.set(positionstockX * 4.5, positionstockY * 2.9);
        this.onmusicsprite.scale.set(0.8, 0.8);
        this.offsoundsprite.position.set(positionstockX * 5.75, positionstockY * 5.85);
        this.offsoundsprite.scale.set(0.8, 0.8);
        this.offmusicsprite.position.set(positionstockX * 6.5, positionstockY * 2.75);
        this.offmusicsprite.scale.set(0.8, 0.8);

        this.optionbuttom(this.onmusicsprite, this.offmusicsprite, this.onpress, this.onbring, this.onstock, this.offstock, true, 0);
        this.optionbuttom(this.offmusicsprite, this.onmusicsprite, this.offpress, this.offbring, this.offstock, this.onstock, false, 0);
        this.optionbuttom(this.onsoundsprite, this.offsoundsprite, this.onpress, this.onbring, this.onstock, this.offstock, true, 1);
        this.optionbuttom(this.offsoundsprite, this.onsoundsprite, this.offpress, this.offbring, this.offstock, this.onstock, false, 1);

        this.onsoundsprite.texture = this.onstock;
        this.onmusicsprite.texture = this.onstock;
        this.offsoundsprite.texture = this.offstock;
        this.offmusicsprite.texture = this.offstock;

        this.addChild(this.onsoundsprite);
        this.addChild(this.onmusicsprite);
        this.addChild(this.offsoundsprite);
        this.addChild(this.offmusicsprite);
    }
    private optionbuttom(use: any, use2: any, press: any, bring: any, stock: any, stock2: any, valuesound: boolean, who: number) {
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
            if (who == 1){
                soundvalue = valuesound;
            }else{
                musicvalue = valuesound;
            }
        }.bind(this));
    }
}
export class startbutton extends Container {

    private startsprite: Sprite;
    private startstock: Texture = Place.res.start.texture;
    private startbring: Texture = Place.res.startbring.texture;
    private startpress: Texture = Place.res.startpress.texture;

    constructor(place: Place) {

        super();
        this.startsprite = new Sprite();
        this.startsprite.interactive = true;
        this.startsprite.buttonMode = true;
        this.startsprite.anchor.x = 0.5;

        this.startsprite.position.set(1024 / 2, positionstockY * 7);
        this.startsprite.scale.set(0.4, 0.4);

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
            this.emit("click");
            setTimeout(function () {
                this.startsprite.texture = this.startstock;
            
            if (musicvalue == undefined || sizeField == undefined || soundvalue == undefined || timeforgame == undefined){
                
                place.ShowError();
            }else{
                place.showGameField(sizeField, timeforgame);
            }
            }.bind(this), 200);
        }.bind(this));

        this.startsprite.texture = this.startstock;

        this.addChild(this.startsprite);
    }
}
export class soundgamebutton extends Container {
    private soundforgame: Sprite;
    private soundbuttonon: Texture = Place.res.soundbuttonon.texture;
    private soundbuttonoff: Texture = Place.res.soundbuttonoff.texture;
    constructor() {
        super();
        this.soundforgame = new Sprite();
        this.soundforgame.position.set(1024 * 0.95, 1024 * 0.25);
        this.soundforgame.scale.set(0.5);
        this.soundforgame.anchor.set(0.5);
        this.soundforgame.interactive = true;
        this.soundforgame.buttonMode = true;

        this.soundforgame.on("mouseover", function (): void {
            if (soundvalue == true) {
                this.soundforgame.texture = this.soundbuttonoff;
            } else {
                this.soundforgame.texture = this.soundbuttonon;
            }
        }.bind(this));
        this.soundforgame.on("mouseout", function (): void {
            if (soundvalue == true) {
                this.soundforgame.texture = this.soundbuttonon;
            } else {
                this.soundforgame.texture = this.soundbuttonoff;
            }
        }.bind(this));
        this.soundforgame.on("mouseup", function (): void {
            if (soundvalue == true) {
                this.soundforgame.texture = this.soundbuttonoff;
                soundvalue = false;
            } else {
                this.soundforgame.texture = this.soundbuttonon;
                soundvalue = true;
            }
            this.emit("click");
        }.bind(this));

        if (soundvalue == true) {
            this.soundforgame.texture = this.soundbuttonon;
        } else {
            this.soundforgame.texture = this.soundbuttonoff;
        }

        this.addChild(this.soundforgame);
    }
}
export class musicgamebutton extends Container {
    private musicforgame: Sprite;
    private musicbuttonon: Texture = Place.res.musicbuttonon.texture;
    private musicbuttonoff: Texture = Place.res.musicbuttonoff.texture;

    constructor() {
        super();
        this.musicforgame = new Sprite();
        this.musicforgame.position.set(1024 * 0.05, 1024 * 0.25);
        this.musicforgame.scale.set(0.5);
        this.musicforgame.anchor.set(0.5);
        this.musicforgame.interactive = true;
        this.musicforgame.buttonMode = true;

        this.musicforgame.on("mouseover", function (): void {
            if (musicvalue == true) {
                this.musicforgame.texture = this.musicbuttonoff;
            } else {
                this.musicforgame.texture = this.musicbuttonon;
            }
        }.bind(this));
        this.musicforgame.on("mouseout", function (): void {
            if (musicvalue == true) {
                this.musicforgame.texture = this.musicbuttonon;
            } else {
                this.musicforgame.texture = this.musicbuttonoff;
            }
        }.bind(this));
        this.musicforgame.on("mouseup", function (): void {
            if (musicvalue == true) {
                this.musicforgame.texture = this.musicbuttonoff;
                musicvalue = false;
            } else {
                this.musicforgame.texture = this.musicbuttonon;
                musicvalue = true;
            }
            this.emit("click");
        }.bind(this));

        if (musicvalue == true) {
            this.musicforgame.texture = this.musicbuttonon;
        } else {
            this.musicforgame.texture = this.musicbuttonoff;
        }

        this.addChild(this.musicforgame);
    }
}
export class pausebutton extends Container {
    private pausegame: Sprite;
    private pausebutton: Texture = Place.res.pausebutton.texture;
    private pausebuttonpress: Texture = Place.res.pausebuttonpress.texture;
    constructor(place: Place) {
        super();
        this.pausegame = new Sprite();
        this.pausegame.position.set(1024 / 2, 1024 * 0.12);
        this.pausegame.scale.set(0.5);
        this.pausegame.anchor.set(0.5);
        this.pausegame.interactive = true;
        this.pausegame.buttonMode = true;

        this.pausegame.on("mouseover", function (): void {
            this.pausegame.texture = this.pausebuttonpress;
        }.bind(this));

        this.pausegame.on("mouseout", function (): void {
            this.pausegame.texture = this.pausebutton;
        }.bind(this));

        this.pausegame.on("mouseup", function (): void {
            this.pausegame.texture = this.pausebuttonpress;
            this.emit("click");
            
            setTimeout(function () {
                this.pausegame.texture = this.pausebutton;
                place.PauseGame();
            }.bind(this), 200);
        }.bind(this));

        this.pausegame.texture = this.pausebutton;

        this.addChild(this.pausegame);
    }
}

export class playbutton extends Container {
    private playgame: Sprite;
    private playbutton: Texture = Place.res.playbutton.texture;
    private playbuttonpress: Texture = Place.res.playbuttonpress.texture;
    constructor(place: Place) {
        super();
 
        this.playgame = new Sprite();
        this.playgame.position.set(1024 / 2, 1024 / 2);
        this.playgame.anchor.set(0.5);
        this.playgame.scale.set(0.5);
        this.playgame.interactive = true;
        this.playgame.buttonMode = true;
 

        this.playgame.on("mouseover", function (): void {
            this.playgame.texture = this.playbuttonpress;
        }.bind(this));

        this.playgame.on("mouseout", function (): void {
            this.playgame.texture = this.playbutton;
        }.bind(this));

        this.playgame.on("mouseup", function (): void {
            this.playgame.texture = this.playbuttonpress;
            this.emit("click");
            setTimeout(function () {
                this.playgame.texture = this.playbutton;
                place.ResumeGame();
            }.bind(this), 200);
        }.bind(this));

        this.playgame.texture = this.playbutton;

        this.addChild(this.playgame);
    }
}
export class OK extends Container{
    private OK: Sprite;
    private OKbutton: Texture = Place.res.OK.texture;
    private OKbuttonpress: Texture = Place.res.OKpress.texture;
    constructor(place: Place) {
        super();

        this.OK = new Sprite();
        this.OK.position.set(1024 / 2, 1024*0.6);
        this.OK.anchor.set(0.5);
        this.OK.scale.set(0.4);
        this.OK.interactive = true;
        this.OK.buttonMode = true;


        this.OK.on("mouseover", function (): void {
            this.OK.texture = this.OKbuttonpress;
        }.bind(this));

        this.OK.on("mouseout", function (): void {
            this.OK.texture = this.OKbutton;
        }.bind(this));

        this.OK.on("mouseup", function (): void {
            this.OK.texture = this.OKbuttonpress;
            this.emit("click");
            setTimeout(function () {
                this.OK.texture = this.OKbutton;
                place.CloseError();
            }.bind(this), 200);
        }.bind(this));

        this.OK.texture = this.OKbutton;

        this.addChild(this.OK);
    }
}