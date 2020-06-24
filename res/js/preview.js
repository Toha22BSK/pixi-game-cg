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
    exports.preview = void 0;
    var Sprite = PIXI.Sprite;
    var Container = PIXI.Container;
    var preview = /** @class */ (function (_super) {
        __extends(preview, _super);
        function preview(place) {
            var _this = _super.call(this) || this;
            _this.timer = [50, 2000, 3000, 100, 70];
            _this.alphalogo = [0.5, 0.9];
            _this.sprite = new Sprite();
            _this.sprite.interactive = true;
            _this.sprite.buttonMode = true;
            _this.sprite.texture = place_js_1.Place.res.logo.texture;
            _this.sprite.position.x = place_js_1.Place.size / 2 - place_js_1.Place.res.logo.texture.width / 2;
            _this.sprite.position.y = place_js_1.Place.size / 2 - place_js_1.Place.res.logo.texture.height / 2;
            _this.alpha = 0.9;
            //this.animation = TweenLite.to(this.sprite, 1, {scale: 1});
            _this.sprite.on("mouseover", function () {
                //this.sprite.scale = 1;
                this.alpha = 1;
            }.bind(_this));
            _this.sprite.on("mouseout", function () {
                this.alpha = 0.9; /*
                this.timerID = setInterval(function time() {
                    if (this.alpha != 1)
                        this.alpha = this.alphalogo[Math.floor(Math.random() * this.alphalogo.length)];
                    else
                        alert('stop');
                }.bind(this), this.timer[Math.floor(Math.random() * this.timer.length)]);*/
            }.bind(_this));
            _this.sprite.on("mouseup", function () {
                this.emit("click");
                place.showMenu();
            }.bind(_this));
            //this.addChild(this.animation);
            _this.addChild(_this.sprite);
            return _this;
        }
        return preview;
    }(Container));
    exports.preview = preview;
});
//# sourceMappingURL=preview.js.map