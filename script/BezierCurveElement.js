import * as PIXI from 'pixi.js';

class BezierCurve extends PIXI.Graphics {
    constructor(origin, destination, firstPoint, secondPoint){
        super(); // invoque des méthodes de la super class

        this.origin = origin;
        this.destination = destination;
        
        this.firstPoint = {
            x:(destination.x - origin.x) * firstPoint.x,
            y:(destination.y - origin.y) * firstPoint.y,
        };

        this.secondPoint = {
            x:(destination.x - origin.x) * secondPoint.x,
            y:(destination.y - origin.y) * secondPoint.y,
        };


        this.moveTo(this.origin.x, this.origin.y);
        this.lineStyle(3, 0xAAAAAA, 1);
        this.bezierCurveTo(this.firstPoint.x, this.firstPoint.y, this.secondPoint.x, this.secondPoint.y, this.destination.x, this.destination.y);
    }



    


}


export {
    BezierCurve
}