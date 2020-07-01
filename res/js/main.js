define(["require", "exports", "./Place.js"], function (require, exports, Place_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Application = PIXI.Application;
    var Loader = PIXI.Loader;
    var loader = new Loader();
    var width = window.innerWidth;
    var height = window.innerHeight;
    var size = Place_js_1.Place.size;
    var scale = Math.min(width / size, height / size);
    var positionx = (width - size * scale) / 2;
    var positiony = (height - size * scale) / 2;
    loader.add("background", "/res/media/pictures/background2.png");
    loader.add("redball", "res/media/pictures/red.png");
    loader.add("blueball", "res/media/pictures/blue.png");
    loader.add("greenball", "res/media/pictures/green.png");
    loader.add("yellowball", "res/media/pictures/yellow.png");
    loader.add("pinkball", "res/media/pictures/pink.png");
    loader.add("lightblueball", "res/media/pictures/light_blue.png");
    loader.add("five", "res/media/pictures/5.png");
    loader.add("fivebring", "res/media/pictures/5bring.png");
    loader.add("fivepress", "res/media/pictures/5press.png");
    loader.add("ten", "res/media/pictures/10.png");
    loader.add("tenbring", "res/media/pictures/10bring.png");
    loader.add("tenpress", "res/media/pictures/10press.png");
    loader.add("fifteen", "res/media/pictures/15.png");
    loader.add("fifteenbring", "res/media/pictures/15bring.png");
    loader.add("fifteenpress", "res/media/pictures/15press.png");
    loader.add("thirty", "res/media/pictures/30.png");
    loader.add("thirtybring", "res/media/pictures/30bring.png");
    loader.add("thirtypress", "res/media/pictures/30press.png");
    loader.add("off", "res/media/pictures/off.png");
    loader.add("offbring", "res/media/pictures/off_bring.png");
    loader.add("offpress", "res/media/pictures/off_press.png");
    loader.add("on", "res/media/pictures/on.png");
    loader.add("onbring", "res/media/pictures/on_bring.png");
    loader.add("onpress", "res/media/pictures/on_press.png");
    loader.add("eightxeight", "res/media/pictures/8x8.png");
    loader.add("eightxeightbring", "res/media/pictures/8x8bring.png");
    loader.add("eightxeightpress", "res/media/pictures/8x8press.png");
    loader.add("sixxsix", "res/media/pictures/6x6.png");
    loader.add("sixxsixbring", "res/media/pictures/6x6bring.png");
    loader.add("sixxsixpress", "res/media/pictures/6x6press.png");
    loader.add("tenxten", "res/media/pictures/10x10.png");
    loader.add("tenxtenbring", "res/media/pictures/10x10bring.png");
    loader.add("tenxtennpress", "res/media/pictures/10x10press.png");
    loader.add("soundbuttonon", "res/media/pictures/soundbuttonon.png");
    loader.add("soundbuttonoff", "res/media/pictures/soundbuttonoff.png");
    loader.add("musicbuttonon", "res/media/pictures/musicbuttonon.png");
    loader.add("musicbuttonoff", "res/media/pictures/musicbuttonoff.png");
    loader.add("pausebutton", "res/media/pictures/pause.png");
    loader.add("pausebuttonpress", "res/media/pictures/pausepress.png");
    loader.add("playbutton", "res/media/pictures/play.png");
    loader.add("playbuttonpress", "res/media/pictures/playpress.png");
    loader.add("places", "res/media/pictures/place.png");
    loader.add("sound", "res/media/pictures/sound.png");
    loader.add("music", "res/media/pictures/music.png");
    loader.add("time", "res/media/pictures/time.png");
    loader.add("start", "res/media/pictures/start.png");
    loader.add("startbring", "res/media/pictures/start2.png");
    loader.add("startpress", "res/media/pictures/start3.png");
    loader.add("logo", "res/media/pictures/logo.png");
    loader.add("score", "res/media/pictures/score.png");
    loader.add("timergame", "res/media/pictures/timeforgame.png");
    loader.add("black", "res/media/pictures/black.png");
    loader.add("backgroundball", "res/media/pictures/backgroundball.png");
    loader.add("erroroption", "res/media/pictures/error.png");
    loader.add("OK", "res/media/pictures/OK.png");
    loader.add("OKpress", "res/media/pictures/OKpress.png");
    loader.add("BackgroundEndButtton", "res/media/pictures/BackgroundEndButtton.png");
    loader.add("restart", "res/media/pictures/restart.png");
    loader.add("menu", "res/media/pictures/menu.png");
    loader.add("restartbring", "res/media/pictures/restartbring.png");
    loader.add("menubring", "res/media/pictures/menubring.png");
    loader.add("restartpress", "res/media/pictures/restartpress.png");
    loader.add("menupress", "res/media/pictures/menupress.png");
    loader.add("GameOver", "res/media/pictures/GameOver.png");
    loader.add("theend", "res/media/pictures/TheEnd.png");
    loader.add("theendpress", "res/media/pictures/TheEndpress.png");
    loader.add("backgroundbuttonfield", "res/media/pictures/backgroundbuttongamefield.png");
    loader.add("MenuButton", "res/media/pictures/MenuButton.png");
    loader.add("MenuButtonbring", "res/media/pictures/MenuButtonbring.png");
    loader.add("MenuButtonpress", "res/media/pictures/MenuButtonpress.png");
    loader.add("redraw", "res/media/pictures/redraw.png");
    loader.add("redrawbring", "res/media/pictures/redrawbring.png");
    loader.add("redrawpress", "res/media/pictures/redrawpress.png");
    loader.load(setup);
    var app = new Application({
        backgroundColor: 0x000000,
        antialias: true,
        transparent: false,
        resolution: 1
    });
    function eventListenerResize() {
        app.renderer.autoResize = true;
        app.renderer.resize(width, height);
        app.stage.x = positionx;
        app.stage.y = positiony;
        app.stage.scale.x = scale;
        app.stage.scale.y = scale;
        app.render();
    }
    eventListenerResize();
    window.onresize = eventListenerResize;
    document.body.appendChild(app.view);
    function setup(loader, resources) {
        var place = new Place_js_1.Place(resources);
        app.stage.addChild(place);
    }
});
//# sourceMappingURL=Main.js.map