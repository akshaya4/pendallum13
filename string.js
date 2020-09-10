class rope {
    constructor(body1, body2, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA : body2,
            bodyB : body1,
            pointA : {x:this.offsetX, y:this.offsetY},
            pointB : {x:this.offsetX, y:this.offsetY},
            stiffness : 0.04,
            length : 10
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        var Anchor1X = pointA.X;
        var Anchor1Y = pointA.Y;

        var Anchor2X = pointB.x+this.offsetX;
        var Anchor2Y = pointB.y+this.offsetY;

        strokeWeight(4);
        stroke("gray");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}