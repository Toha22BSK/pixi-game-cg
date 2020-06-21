import Application = PIXI.Application;
import Loader = PIXI.Loader;
import { Place } from "./place.js"

const loader: Loader = new Loader();

let width = window.innerWidth;
let height = window.innerHeight;
let size: number = Place.size;
let scale = Math.min(width / size, height / size);
let positionx = (width - size * scale) / 2;
let positiony = (height - size * scale) / 2;

loader.add("background", "/res/media/pictures/background.png")
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
loader.add("twelvextwelve", "res/media/pictures/12x12.png");
loader.add("twelvextwelvebring", "res/media/pictures/12x12bring.png");
loader.add("twelvextwelvepress", "res/media/pictures/12x12press.png");
loader.add("sixteenxsixteen", "res/media/pictures/16x16.png");
loader.add("sixteenxsixteenbring", "res/media/pictures/16x16bring.png");
loader.add("sixteenxsixteenpress", "res/media/pictures/16x16press.png");
loader.add("places", "res/media/pictures/place.png");
loader.add("sound", "res/media/pictures/sound.png");
loader.add("time", "res/media/pictures/time.png");
loader.add("start", "res/media/pictures/start.png");
loader.add("startbring", "res/media/pictures/start2.png");
loader.add("startpress", "res/media/pictures/start3.png");
loader.add("logo", "res/media/pictures/logo.png");

loader.load(setup);

let app: Application = new Application({
    backgroundColor: 0x000012,
    antialias: true,
    transparent: false,
    resolution: 1
})
function eventListenerResize(): void {
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

function setup(loader: Loader, resources: any): void {
    let place: Place = new Place(resources);
    app.stage.addChild(place);

}
