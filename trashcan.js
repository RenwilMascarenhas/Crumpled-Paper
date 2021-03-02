class Trashcan{
    constructor(x,y,height,angle){
      super(x,y,20,height,angle);
      this.image = loadImage("sprites/trashcangreen.png");
      Matter.Body.setAngle(this.body, angle);
    }
  }