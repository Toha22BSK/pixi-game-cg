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
    exports.ball = void 0;
    var Sprite = PIXI.Sprite;
    var Container = PIXI.Container;
    var ball = /** @class */ (function (_super) {
        __extends(ball, _super);
        function ball() {
            var _this = _super.call(this) || this;
            _this.textureballs = [
                place_js_1.Place.res.redball.texture,
                place_js_1.Place.res.blueball.texture,
                place_js_1.Place.res.greenball.texture,
                place_js_1.Place.res.yellowball.texture,
                place_js_1.Place.res.pinkball.texture,
                place_js_1.Place.res.lightblueball.texture
            ];
            _this.balls = new Sprite();
            _this.balls.position.set(35);
            _this.balls.anchor.set(0.5);
            _this.balls.scale.set(1);
            _this.addChild(_this.balls);
            return _this;
        }
        return ball;
    }(Container));
    exports.ball = ball;
});
//# sourceMappingURL=Balls.js.map