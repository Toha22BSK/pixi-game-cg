var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./place.js"], function (require, exports, place_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.time = exports.places = exports.sound = exports.logo = void 0;
    var Sprite = PIXI.Sprite;
    var Container = PIXI.Container;
    var width = window.innerWidth;
    var height = window.innerHeight;
    /*export class menupole extends Container{
        private textures = Place.res;
        private eightButton: button;
        private twelveButton: button;
        private sixteenButton: button;
        private positionx: number = (Place.size * 0.9)/10;
        private positiony: number = Place.size/10;
        public znach: number = 0;
        constructor(){
            super();
            this.eightButton = new button(this.textures.eightxeight.texture, this.textures.eightxeightpress.texture, this.textures.eightxeightbring.texture, this.positionx * 4, this.positiony * 4.25,0.8);
            this.twelveButton = new button(this.textures.twelvextwelve.texture, this.textures.twelvextwelvepress.texture, this.textures.twelvextwelvebring.texture, this.positionx * 5.75, this.positiony * 4.20, 0.8);
            this.sixteenButton = new button(this.textures.sixteenxsixteen.texture, this.textures.sixteenxsixteenpress.texture, this.textures.sixteenxsixteenbring.texture, this.positionx * 7.75, this.positiony * 4.15, 0.8);
            
            this.addChild(this.eightButton);
            this.addChild(this.twelveButton);
            this.addChild(this.sixteenButton);
        }
    }
    */
    var logo = /** @class */ (function (_super) {
        __extends(logo, _super);
        function logo() {
            var _this = _super.call(this) || this;
            _this.sprite = new Sprite(place_js_1.Place.res.logo.texture);
            _this.sprite.position.set(512 - _this.sprite.width / 2, 0);
            _this.addChild(_this.sprite);
            return _this;
        }
        return logo;
    }(Container));
    exports.logo = logo;
    var sound = /** @class */ (function (_super) {
        __extends(sound, _super);
        function sound() {
            var _this = _super.call(this) || this;
            _this.sprite = new Sprite(place_js_1.Place.res.sound.texture);
            _this.sprite.position.set(1024 * 0.1, 1024 / 10 * 6);
            _this.sprite.scale.set(0.8, 0.8);
            _this.addChild(_this.sprite);
            return _this;
        }
        return sound;
    }(Container));
    exports.sound = sound;
    var places = /** @class */ (function (_super) {
        __extends(places, _super);
        function places() {
            var _this = _super.call(this) || this;
            _this.sprite = new Sprite(place_js_1.Place.res.places.texture);
            _this.sprite.position.set(1024 * 0.1, 1024 / 10 * 4.75);
            _this.sprite.scale.set(0.8, 0.8);
            _this.addChild(_this.sprite);
            return _this;
        }
        return places;
    }(Container));
    exports.places = places;
    var time = /** @class */ (function (_super) {
        __extends(time, _super);
        function time() {
            var _this = _super.call(this) || this;
            _this.sprite = new Sprite(place_js_1.Place.res.time.texture);
            _this.sprite.position.set(1024 * 0.1, 1024 / 10 * 3.5);
            _this.sprite.scale.set(0.8, 0.8);
            _this.addChild(_this.sprite);
            return _this;
            //this.sprite.scale.set (, );
        }
        return time;
    }(Container));
    exports.time = time;
});
/*
class start extends button {
    constructor() {
        super(Place.res.start.texture, Place.res.startpress.texture, Place.res.startbring.texture, 512 - Place.res.start.texture.width * 0.4 / 2, 1024 * 0.7, 0.4)
    }
}
class on extends button {
    constructor() {
        super(Place.res.on.texture, Place.res.onpress.texture, Place.res.onbring.texture, Place.res.sound.texture.width + ((1024 / 2 - Place.res.sound.texture.width) / 2), 1024 / 10 * 5.8, 0.8)
    }
}
class off extends button {
    constructor() {
        super(Place.res.off.texture, Place.res.offpress.texture, Place.res.offbring.texture, Place.res.sound.texture.width + ((1024 / 2 - Place.res.sound.texture.width) / 2) * 2.4, 1024 / 10 * 5.75, 0.8)
    }
}
class five extends button {
    constructor() {
        super(Place.res.five.texture, Place.res.fivepress.texture, Place.res.fivebring.texture, Place.res.time.texture.width + ((1024 * 0.9 - Place.res.time.texture.width) / 8) * 1, 1024 / 10 * 3.25, 0.8)
    }
}
class ten extends button {
    constructor() {
        super(Place.res.ten.texture, Place.res.tenpress.texture, Place.res.tenbring.texture, Place.res.time.texture.width + ((1024 * 0.9 - Place.res.time.texture.width) / 8) * 2.5, 1024 / 10 * 3.20, 0.8)
    }
}
class fifteen extends button {
    constructor() {
        super(Place.res.fifteen.texture, Place.res.fifteenpress.texture, Place.res.fifteenbring.texture, Place.res.time.texture.width + ((1024 * 0.9 - Place.res.time.texture.width) / 8) * 4, 1024 / 10 * 3.15, 0.8)
    }
}
class thirty extends button {
    constructor() {
        super(Place.res.thirty.texture, Place.res.thirtypress.texture, Place.res.thirtybring.texture, Place.res.time.texture.width + ((1024 * 0.9 - Place.res.time.texture.width) / 8) * 5.5, 1024 / 10 * 3.10, 0.8)
    }
}
class eightxeight extends button {
    constructor() {
        super(Place.res.eightxeight.texture, Place.res.eightxeightpress.texture, Place.res.eightxeightbring.texture, Place.res.places.texture.width + ((1024 * 0.9 - Place.res.places.texture.width) / 4) * 0.85, 1024 / 10 * 4.5, 0.8)
    }
}
class twelvextwelve extends button {
    constructor() {
        super(Place.res.twelvextwelve.texture, Place.res.twelvextwelvepress.texture, Place.res.twelvextwelvebring.texture, Place.res.places.texture.width + ((1024 * 0.9 - Place.res.places.texture.width) / 4) * 1.7, 1024 / 10 * 4.45, 0.8)
    }
}
class sixteenxsixteen extends button {
    constructor() {
        super(Place.res.sixteenxsixteen.texture, Place.res.sixteenxsixteenpress.texture, Place.res.sixteenxsixteenbring.texture, Place.res.places.texture.width + ((1024 * 0.9 - Place.res.places.texture.width) / 4) * 2.8, 1024 / 10 * 4.40, 0.8)
    }
}
export class buttonmenu extends Container {
    public startButton: start;
    public onButton: on;
    public offButton: off;
    public fiveButton: five;
    public tenButton: ten;
    public fifteenButton: fifteen;
    public thirtyButton: thirty;
    public eightxeightButton: eightxeight;
    public twelvextwelveButton: twelvextwelve;
    public sixteenxsixteenButton: sixteenxsixteen;
    constructor() {
        super();
        this.startButton = new start();
        this.onButton = new on();
        this.offButton = new off();
        this.fiveButton = new five();
        this.tenButton = new ten();
        this.fifteenButton = new fifteen();
        this.thirtyButton = new thirty();
        this.eightxeightButton = new eightxeight();
        this.twelvextwelveButton = new twelvextwelve();
        this.sixteenxsixteenButton = new sixteenxsixteen();
        this.addChild(this.startButton);
        this.addChild(this.onButton);
        this.addChild(this.offButton);
        this.addChild(this.fiveButton);
        this.addChild(this.tenButton);
        this.addChild(this.fifteenButton);
        this.addChild(this.thirtyButton);
        this.addChild(this.eightxeightButton);
        this.addChild(this.twelvextwelveButton);
        this.addChild(this.sixteenxsixteenButton);

    }
}
*/ 
//# sourceMappingURL=menugame.js.map