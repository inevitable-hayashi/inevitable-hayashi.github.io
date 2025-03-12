
const app = new PIXI.Application();
await app.init({ width: 640, height: 600, backgroundAlpha: 0 });
// pixiアプリケーションを作る


// コンテナに格納
const el = document.getElementById("yuunicorn_screen");
el.appendChild(app.canvas);

// yuunicornを読み込む
PIXI.Assets.add({ alias: "skeleton-data", src: "../spine/yuunicorn/IMG_4693.json" });
PIXI.Assets.add({ alias: "skeleton-atlas", src: "../spine/yuunicorn/IMG_4693.atlas" });
await PIXI.Assets.load["skeleton-data", "skeleton-atlas"];
// assetsは大文字

const yuunicorn = spine.Spine.from({skelton: "skeleton-data", atlas: "skeleton-atlas"});

app.stage.addChild(yuunicorn);