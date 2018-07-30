//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function () {
    // Game Variables
    var canvas;
    var stage;
    var AssetManager;
    var CurrentScene;
    var CurrentState;
    var ScoreBoard;
    var TextureAtlas;
    var stats;
    var textureData = {
        "images": [],
        "framerate": 60,
        "frames": [
            [1, 1, 226, 178, 0, 0, 0],
            [1, 181, 62, 63, 0, 0, 0],
            [65, 181, 65, 65, 0, 0, 0],
            [132, 181, 65, 65, 0, 0, 0],
            [1, 248, 65, 65, 0, 0, 0],
            [68, 248, 150, 50, 0, 0, 0],
            [1, 315, 150, 50, 0, 0, 0]
        ],
        "animations": {
            "cloud": { "frames": [0] },
            "island": { "frames": [1] },
            "plane": {
                "frames": [2, 3, 4],
                "speed": 0.2
            },
            "RestartButton": { "frames": [5] },
            "StartButton": { "frames": [6] }
        }
    };
    var Manifest = [
        { id: "textureAtlas", src: "/Assets/sprites/textureAtlas.png" },
        { id: "ocean", src: "/Assets/images/ocean.gif" },
        { id: "yay", src: "/Assets/audio/yay.ogg" },
        { id: "thunder", src: "/Assets/audio/thunder.ogg" },
        { id: "engine", src: "/Assets/audio/engine.ogg" }
    ];
    function SetupStats() {
        stats.showPanel(0);
        document.body.appendChild(stats.dom);
    }
    function Init() {
        console.log("%c Assets Loading...", "font-weight:bold; font-size:20px; color: green;");
        AssetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = AssetManager; // set as single instance of the LoadQueue object
        AssetManager.installPlugin(createjs.Sound); // enables sound file preloading
        AssetManager.on("complete", Start);
        AssetManager.loadManifest(Manifest);
    }
    function Start() {
        console.log("%c Game Initializing...", "font-weight:bold; font-size:20px; color: red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.Stage = stage; // create a reference to the stage class
        stage.enableMouseOver(20); // enables mouse over events
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);
        CurrentState = config.Scene.START;
        managers.Game.CurrentState = CurrentState;
        ScoreBoard = new managers.ScoreBoard;
        managers.Game.ScoreBoard = ScoreBoard;
        textureData.images = [AssetManager.getResult("textureAtlas")];
        TextureAtlas = new createjs.SpriteSheet(textureData);
        managers.Game.TextureAtlas = TextureAtlas;
        stats = new Stats();
        SetupStats();
        // This is where all the magic happens
        Main();
    }
    function Update() {
        stats.begin();
        if (CurrentState != managers.Game.CurrentState) {
            CurrentState = managers.Game.CurrentState;
            Main();
        }
        CurrentScene.Update();
        stage.update();
        stats.end();
    }
    function Main() {
        console.log("%c Switching Scenes...", "font-style:italic; font-size:16px; color:blue;");
        if (CurrentScene) {
            CurrentScene.Destroy();
            stage.removeChild(CurrentScene);
        }
        switch (CurrentState) {
            case config.Scene.START:
                CurrentScene = new scenes.Start();
                break;
            case config.Scene.PLAY:
                CurrentScene = new scenes.Play();
                break;
            case config.Scene.END:
                CurrentScene = new scenes.End();
                break;
        }
        managers.Game.CurrentScene = CurrentScene;
        stage.addChild(CurrentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map