define(["require", "exports", "./Game"], function (require, exports, Game_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Application = PIXI.Application;
    var Loader = PIXI.Loader;
    var loader = new Loader();
    var width = window.innerWidth;
    var height = window.innerHeight;
    var size = Game_1.Game.SIZE;
    var scale = Math.min(width / size, height / size);
    var positionX = (width - size * scale) / 2;
    var positionY = (height - size * scale) / 2;
    loader.add("backgroundSound", "res/media/music/backgroundSound.mp3");
    loader.add("click", "res/media/music/click.mp3");
    loader.add("clickBall", "res/media/music/clickBall.mp3");
    loader.add("crushBall", "res/media/music/crushBall.wav");
    loader.add("false", "res/media/music/false.mp3");
    loader.add("background", "/res/media/pictures/background.png");
    loader.add("redBall", "res/media/pictures/red.png");
    loader.add("blueBall", "res/media/pictures/blue.png");
    loader.add("greenBall", "res/media/pictures/green.png");
    loader.add("yellowBall", "res/media/pictures/yellow.png");
    loader.add("pinkBall", "res/media/pictures/pink.png");
    loader.add("lightblueBall", "res/media/pictures/light_blue.png");
    loader.add("off", "res/media/pictures/off.png");
    loader.add("offBring", "res/media/pictures/off_bring.png");
    loader.add("offPress", "res/media/pictures/off_press.png");
    loader.add("on", "res/media/pictures/on.png");
    loader.add("onBring", "res/media/pictures/on_bring.png");
    loader.add("onPress", "res/media/pictures/on_press.png");
    loader.add("soundButtonOn", "res/media/pictures/soundButtonOn.png");
    loader.add("soundButtonOff", "res/media/pictures/soundButtonOff.png");
    loader.add("musicButtonOn", "res/media/pictures/musicButtonOn.png");
    loader.add("musicButtonOff", "res/media/pictures/musicButtonOff.png");
    loader.add("pauseButton", "res/media/pictures/pause.png");
    loader.add("pauseButtonPress", "res/media/pictures/pausePress.png");
    loader.add("playButton", "res/media/pictures/play.png");
    loader.add("playButtonPress", "res/media/pictures/playPress.png");
    loader.add("places", "res/media/pictures/game.png");
    loader.add("sound", "res/media/pictures/sound.png");
    loader.add("music", "res/media/pictures/music.png");
    loader.add("time", "res/media/pictures/time.png");
    loader.add("start", "res/media/pictures/start.png");
    loader.add("startBring", "res/media/pictures/startBring.png");
    loader.add("startPress", "res/media/pictures/startPress.png");
    loader.add("logo", "res/media/pictures/logo.png");
    loader.add("score", "res/media/pictures/score.png");
    loader.add("timerGame", "res/media/pictures/timeForGame.png");
    loader.add("black", "res/media/pictures/black.png");
    loader.add("backgroundBall", "res/media/pictures/backgroundBall.png");
    loader.add("backgroundEndButtton", "res/media/pictures/backgroundEndButtton.png");
    loader.add("restart", "res/media/pictures/restart.png");
    loader.add("restartBring", "res/media/pictures/restartBring.png");
    loader.add("restartPress", "res/media/pictures/restartPress.png");
    loader.add("menu", "res/media/pictures/menu.png");
    loader.add("menuBring", "res/media/pictures/menuBring.png");
    loader.add("menuPress", "res/media/pictures/menuPress.png");
    loader.add("GameOver", "res/media/pictures/GameOver.png");
    loader.add("theEnd", "res/media/pictures/TheEnd.png");
    loader.add("theEndPress", "res/media/pictures/TheEndPress.png");
    loader.add("menuButton", "res/media/pictures/menuButton.png");
    loader.add("menuButtonBring", "res/media/pictures/menuButtonBring.png");
    loader.add("menuButtonPress", "res/media/pictures/menuButtonPress.png");
    loader.add("pressBall", "res/media/pictures/pressBall.png");
    loader.add("redraw", "res/media/pictures/redraw.png");
    loader.add("redrawBring", "res/media/pictures/redrawBring.png");
    loader.add("redrawPress", "res/media/pictures/redrawPress.png");
    loader.add("downButton", "res/media/pictures/downButton.png");
    loader.add("downButtonBring", "res/media/pictures/downButtonBring.png");
    loader.add("downButtonPress", "res/media/pictures/downButtonPress.png");
    loader.add("downButtonDisable", "res/media/pictures/downButtonDisable.png");
    loader.add("upButton", "res/media/pictures/upButton.png");
    loader.add("upButtonBring", "res/media/pictures/upButtonBring.png");
    loader.add("upButtonPress", "res/media/pictures/upButtonPress.png");
    loader.add("upButtonDisable", "res/media/pictures/upButtonDisable.png");
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
        app.stage.x = positionX;
        app.stage.y = positionY;
        app.stage.scale.x = scale;
        app.stage.scale.y = scale;
        app.render();
    }
    function setup(loader, resources) {
        var game = new Game_1.Game(resources);
        app.stage.addChild(game);
    }
    eventListenerResize();
    window.onresize = eventListenerResize;
    document.body.appendChild(app.view);
});
//# sourceMappingURL=Main.js.map