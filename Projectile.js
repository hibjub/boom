class Ball {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':3
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.radius = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      stroke("black");
      fill("red");
      ellipseMode(RADIUS);
      ellipse(0,0,this.radius,this.radius);
      pop();
    }
  }