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
define(["require", "exports", "./Balls.js", "./place.js", "./Button.js"], function (require, exports, Balls_js_1, place_js_1, Button_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.gamefield = void 0;
    var Sprite = PIXI.Sprite;
    var Container = PIXI.Container;
    var Text = PIXI.Text;
    var TextStyle = PIXI.TextStyle;
    var gamefield = /** @class */ (function (_super) {
        __extends(gamefield, _super);
        function gamefield(sizesquare, time) {
            var _this = _super.call(this) || this;
            _this.fieldsize = 1024 * 0.4;
            _this.scoretext = new Text("100000");
            _this.scoretext.anchor.set(0.5);
            _this.scoretext.position.set(place_js_1.Place.size * 0.2, _this.fieldsize / 3.2);
            _this.scoretext.style = new TextStyle({
                fontSize: 72, fontFamily: "Calibri", fill: "#00fff0", align: "center", fontWeight: place_js_1.Place.res.score.texture.width,
                dropShadow: false
            });
            _this.timetext = new Text("30:00");
            _this.timetext.anchor.set(0.5);
            _this.timetext.position.set(place_js_1.Place.size * 0.8, _this.fieldsize / 3.2);
            _this.timetext.style = new TextStyle({
                fontSize: 72, fontFamily: "Calibri", fill: "#00fff0", align: "center", fontWeight: place_js_1.Place.res.score.texture.width,
                dropShadow: false
            });
            _this.MusicgameButton = new Button_js_1.musicgamebutton();
            _this.SoundgameButton = new Button_js_1.soundgamebutton();
            _this.scorebackground = new Sprite(place_js_1.Place.res.score.texture);
            _this.scorebackground.position.set(place_js_1.Place.size * 0.2, _this.fieldsize / 4);
            _this.scorebackground.anchor.set(0.5);
            _this.scorebackground.scale.set(0.4);
            _this.timegamebackground = new Sprite(place_js_1.Place.res.timergame.texture);
            _this.timegamebackground.position.set(place_js_1.Place.size * 0.8, _this.fieldsize / 4);
            _this.timegamebackground.anchor.set(0.5);
            _this.timegamebackground.scale.set(0.4);
            _this.sizefield = sizesquare;
            _this.widthtexture = place_js_1.Place.res.redball.texture.width;
            _this.heighttexture = place_js_1.Place.res.redball.texture.height;
            switch (_this.sizefield) {
                case 8:
                    _this.scaleball = 0.3;
                    break;
                case 12:
                    _this.scaleball = 0.2;
                    break;
                case 16:
                    _this.scaleball = 0.15;
                    break;
            }
            _this.ballsfield = new Array(_this.sizefield);
            for (var i = 0; i < _this.sizefield; i++) {
                _this.ballsfield[i] = new Array(_this.sizefield);
                for (var j = 0; j < _this.sizefield; j++) {
                    var typetexture = Math.floor(Math.random() * 6);
                    _this.ballsfield[i][j] = new Balls_js_1.ball(typetexture);
                    _this.ballsfield[i][j].position.set(_this.fieldsize + _this.widthtexture * (j + 1), _this.fieldsize * 1.5 + _this.heighttexture * (i + 1));
                    _this.ballsfield[i][j].scale.set(_this.scaleball);
                    _this.addChild(_this.ballsfield[i][j]);
                }
            }
            _this.addChild(_this.MusicgameButton);
            _this.addChild(_this.SoundgameButton);
            _this.addChild(_this.scorebackground);
            _this.addChild(_this.timegamebackground);
            _this.addChild(_this.scoretext);
            _this.addChild(_this.timetext);
            return _this;
        }
        return gamefield;
    }(Container));
    exports.gamefield = gamefield;
});
//# sourceMappingURL=Game.js.map