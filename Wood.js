class Wood {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1.0,
      }
      this.body = Bodies.rectangle(x, y, 120, 25, options);
      this.width = 120;
      this.height = 25;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x= mouseX;
      pos.y= mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
  
  stroke("blue");
  
  
      fill("orange");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };