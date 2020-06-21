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
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.button = void 0;
    var Sprite = PIXI.Sprite;
    var Container = PIXI.Container;
    var button = /** @class */ (function (_super) {
        __extends(button, _super);
        function button(_normal, _pressed, _bringed, _positionX, _positionY, _scale) {
            var _this = _super.call(this) || this;
            _this.bringAlpha = 0.8;
            _this.sprite = new Sprite();
            _this.sprite.interactive = true;
            _this.sprite.buttonMode = true;
            _this.sprite.position.x = _positionX;
            _this.sprite.position.y = _positionY;
            _this.sprite.scale.x = _scale;
            _this.sprite.scale.y = _scale;
            _this.stock = _normal;
            _this.press = _pressed;
            _this.bring = _bringed;
            _this.sprite.on("mouseover", function () {
                if (this.sprite.texture != this.press) {
                    this.sprite.texture = this.bring;
                }
            }.bind(_this));
            _this.sprite.on("mouseout", function () {
                if (this.sprite.texture != this.press) {
                    this.sprite.texture = this.stock;
                }
            }.bind(_this));
            _this.sprite.on("mousedown", function () {
                this.sprite.texture = this.stock;
            }.bind(_this));
            _this.sprite.on("mouseupoutside", function () {
                if (this.sprite.texture == this.press) {
                    this.sprite.texture = this.stock;
                }
            }.bind(_this));
            _this.sprite.on("mouseup", function () {
                this.sprite.texture = this.press;
                this.sprite.interactive = false;
                this.emit("click");
                setTimeout(function () {
                    this.alpha = 1;
                    this.sprite.interactive = true;
                }.bind(this), 50);
            }.bind(_this));
            _this.sprite.texture = _this.stock;
            _this.addChild(_this.sprite);
            return _this;
        }
        return button;
    }(Container));
    exports.button = button;
});
//# sourceMappingURL=button.js.map