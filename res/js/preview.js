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
define(["require", "exports", "./Place.js"], function (require, exports, Place_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.preview = void 0;
    var Sprite = PIXI.Sprite;
    var Container = PIXI.Container;
    var preview = /** @class */ (function (_super) {
        __extends(preview, _super);
        function preview(place) {
            var _this = _super.call(this) || this;
            _this.sprite = new Sprite();
            _this.sprite.interactive = true;
            _this.sprite.buttonMode = true;
            _this.sprite.anchor.set(0.5, 0.5);
            _this.sprite.texture = Place_js_1.Place.res.logo.texture;
            _this.sprite.position.x = Place_js_1.Place.size / 2;
            _this.sprite.position.y = Place_js_1.Place.size / 2;
            _this.alpha = 0.9;
            _this.scalelogo(_this.sprite);
            _this.sprite.on("mouseover", function () {
                this.alpha = 1;
            }.bind(_this));
            _this.sprite.on("mouseout", function () {
                this.alpha = 0.9;
            }.bind(_this));
            _this.sprite.on("mouseup", function () {
                this.emit("click");
                place.showMenu();
            }.bind(_this));
            _this.addChild(_this.sprite);
            return _this;
        }
        preview.prototype.scalelogo = function (use) {
            TweenMax.fromTo(use.scale, 1, { x: 0, y: 0 }, { x: 1, y: 1 });
        };
        return preview;
    }(Container));
    exports.preview = preview;
});
//# sourceMappingURL=Preview.js.map