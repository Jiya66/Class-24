class bird {
    constructor(x, y) {
      var options = {
          'restitution':1.5,
          'friction':1.4,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX
      pos.y = mouseY
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("Green")
      strokeWeight(6)
      fill("green");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  