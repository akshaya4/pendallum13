class Bob {
    constructor(x) {
        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2,
            isStatic:true
        }
        this.body = Bodies.circle(x,600,100,options);
        this.radius = 100;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("purple");
        ellipse(0,0,this.radius,100);
        pop();
    } 
}