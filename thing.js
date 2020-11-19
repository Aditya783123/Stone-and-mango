

class Thing{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        };
        this.pointB=pointB;
        this.thing = Constraint.create(options);
        World.add(world, this.thing);
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.thing.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
