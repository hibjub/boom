class String {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 13
        }
        this.string = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.string);
    }

    fly() {
        this.string.bodyA = null;
    }

    display(){
        if (this.string.bodyA) {
        var pointA = this.string.bodyA.position;
        var pointB = this.pointB;
        stroke(144,12,62);
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}