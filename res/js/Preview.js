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
define(["require", "exports", "./Game", "./Button"], function (require, exports, Game_1, Button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Preview = void 0;
    var Container = PIXI.Container;
    var Preview = /** @class */ (function (_super) {
        __extends(Preview, _super);
        function Preview(game) {
            var _this = _super.call(this) || this;
            _this.game = game;
            _this.logo = new Button_1.Button("showMenu", [Game_1.Game.RES.logo.texture], [Game_1.Game.SIZE / 2, Game_1.Game.SIZE / 2]);
            _this.logo.on("showMenu", _this.game.showMenu.bind(_this.game));
            TweenMax.fromTo(_this.logo.scale, 1, { x: 0, y: 0 }, { x: 1, y: 1 });
            _this.addChild(_this.logo);
            return _this;
        }
        return Preview;
    }(Container));
    exports.Preview = Preview;
});
//# sourceMappingURL=Preview.js.map