module math {
    export class Vec2 extends createjs.Point {
        // member variables

        // constructors
        constructor(x:number = 0, y:number = 0) {
            super(x, y);
        }

        // private methods

        // public methods

        /**
         * This method determines the distance between two Vec2 objects and 
         * returns a number in whole pixels
         * 
         * @param P1 
         * @param P2 
         */
        public static Distance(P1:Vec2, P2:Vec2):number {
            return Math.floor(Math.sqrt(Math.pow(P2.x - P1.x, 2) + Math.pow(P2.y - P1.y, 2)));
        }
    }
}