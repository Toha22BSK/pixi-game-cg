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
    exports.buttonplace = void 0;
    var Sprite = PIXI.Sprite;
    var Container = PIXI.Container;
    var buttonplace = /** @class */ (function (_super) {
        __extends(buttonplace, _super);
        function buttonplace() {
            var _this = _super.call(this) || this;
            _this.valueplace = 0;
            _this.eightstock = place_js_1.Place.res.eightxeight.texture;
            _this.eightpress = place_js_1.Place.res.eightxeightpress.texture;
            _this.eightbring = place_js_1.Place.res.eightxeightbring.texture;
            _this.twelvestock = place_js_1.Place.res.twelvextwelve.texture;
            _this.twelvepress = place_js_1.Place.res.twelvextwelvepress.texture;
            _this.twelvebring = place_js_1.Place.res.twelvextwelvebring.texture;
            _this.sixteenstock = place_js_1.Place.res.sixteenxsixteen.texture;
            _this.sixteenpress = place_js_1.Place.res.sixteenxsixteenpress.texture;
            _this.sixteenbring = place_js_1.Place.res.sixteenxsixteenbring.texture;
            _this.positionstockX = (place_js_1.Place.size * 0.9) / 10;
            _this.positionstockY = place_js_1.Place.size / 10;
            _this.eightsprite = new Sprite();
            _this.twelvesprite = new Sprite();
            _this.sixteensprite = new Sprite();
            _this.eightsprite.interactive = true;
            _this.eightsprite.buttonMode = true;
            _this.twelvesprite.interactive = true;
            _this.twelvesprite.buttonMode = true;
            _this.sixteensprite.interactive = true;
            _this.sixteensprite.buttonMode = true;
            _this.eightsprite.position.x = _this.positionstockX * 4;
            _this.eightsprite.position.y = _this.positionstockY * 4.5;
            _this.eightsprite.scale.x = 0.8;
            _this.eightsprite.scale.y = 0.8;
            _this.twelvesprite.position.x = _this.positionstockX * 5.75;
            _this.twelvesprite.position.y = _this.positionstockY * 4.45;
            _this.twelvesprite.scale.x = 0.8;
            _this.twelvesprite.scale.y = 0.8;
            _this.sixteensprite.position.x = _this.positionstockX * 7.75;
            _this.sixteensprite.position.y = _this.positionstockY * 4.4;
            _this.sixteensprite.scale.x = 0.8;
            _this.sixteensprite.scale.y = 0.8;
            _this.optionbuttom(_this.eightsprite, _this.twelvesprite, _this.sixteensprite, _this.eightpress, _this.eightbring, _this.eightstock, _this.twelvestock, _this.sixteenstock, 8);
            _this.optionbuttom(_this.twelvesprite, _this.eightsprite, _this.sixteensprite, _this.twelvepress, _this.twelvebring, _this.twelvestock, _this.eightstock, _this.sixteenstock, 12);
            _this.optionbuttom(_this.sixteensprite, _this.eightsprite, _this.twelvesprite, _this.sixteenpress, _this.sixteenbring, _this.sixteenstock, _this.eightstock, _this.twelvestock, 16);
            _this.eightsprite.texture = _this.eightstock;
            _this.twelvesprite.texture = _this.twelvestock;
            _this.sixteensprite.texture = _this.sixteenstock;
            _this.addChild(_this.eightsprite);
            _this.addChild(_this.twelvesprite);
            _this.addChild(_this.sixteensprite);
            return _this;
        }
        buttonplace.prototype.optionbuttom = function (use, use2, use3, press, bring, stock, stock2, stock3, value) {
            use.on("mouseover", function () {
                if (use.texture != press) {
                    use.texture = bring;
                }
            }.bind(this));
            use.on("mouseout", function () {
                if (use.texture != press) {
                    use.texture = stock;
                }
            }.bind(this));
            use.on("mouseup", function () {
                use.texture = press;
                use2.texture = stock2;
                use3.texture = stock3;
                this.valueplace = value;
            }.bind(this));
        };
        return buttonplace;
    }(Container));
    exports.buttonplace = buttonplace;
});
//# sourceMappingURL=Button.js.map