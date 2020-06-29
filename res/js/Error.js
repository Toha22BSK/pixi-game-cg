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
    exports.erroroption = void 0;
    var Sprite = PIXI.Sprite;
    var Container = PIXI.Container;
    var Text = PIXI.Text;
    var TextStyle = PIXI.TextStyle;
    var erroroption = /** @class */ (function (_super) {
        __extends(erroroption, _super);
        function erroroption() {
            var _this = _super.call(this) || this;
            _this.alerterror = new Sprite(Place_js_1.Place.res.erroroption.texture);
            _this.alerterror.position.set(Place_js_1.Place.size / 2, Place_js_1.Place.size / 2);
            _this.alerterror.anchor.set(0.5, 0.5);
            _this.texterrror = new Text("Вы не выбрали необходимые режимы игры. Пожалуйста, установите необходимые параметры!");
            _this.texterrror.anchor.set(0.5, 0.5);
            _this.texterrror.position.set(Place_js_1.Place.size / 2, Place_js_1.Place.size * 0.45);
            _this.texterrror.style = new TextStyle({
                fontSize: 48, fontFamily: "Calibri", fill: "#00fff0", align: "center", wordWrapWidth: _this.alerterror.width * 0.9,
                dropShadow: false, wordWrap: true,
            });
            _this.addChild(_this.alerterror);
            _this.addChild(_this.texterrror);
            return _this;
        }
        return erroroption;
    }(Container));
    exports.erroroption = erroroption;
});
//# sourceMappingURL=Error.js.map