module objects {
    export class Label extends createjs.Text {
        // member variables
        public isCentered:boolean;
        public width:number;
        public height:number;
        public halfWidth:number;
        public halfHeight:number;

        // constructors
        constructor(text:string, fontSize:string, fontFamily:string, fontColour:string, x:number = 0, y:number = 0, isCentered:boolean = false) {
            super(text, fontSize + " " + fontFamily, fontColour);

            this.isCentered = isCentered;

            this._initialize();

            if(isCentered) {
                this.regX = this.halfWidth;
                this.regY = this.halfHeight;
            }

            this.x = x;
            this.y = y;
        }

        // private methods
        private _initialize():void {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
        }

        // public methods
        public Start() {

        }

        public Update() {

        }

        public Reset() {

        }
    }
}