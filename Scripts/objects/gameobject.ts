module objects {
    export abstract class GameObject extends createjs.Sprite {
        // member variables
        public width:number;
        public height:number;
        public halfWidth:number;
        public halfHeight:number;
        public isColliding:boolean;

        // constructors
        constructor(imageString:string) {
            super(managers.Game.TextureAtlas, imageString);

            this.name = imageString;
            this._initialize();


        }

        // private methods


        private _initialize():void {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.isColliding = false;
        }

        // public methods
        public Start():void {

        }

        public Update():void {

        }

        public Reset():void {

        }
    }
}