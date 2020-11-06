class Box{
    constructor(x, y) {
       this.x = x;
       this.y = y;
       this.boxWidth = 200;
       this.boxHeight = 100;
       this.thickness = 20;
       this.angle = 0;

        this.bottomBody = Bodies.rectangle(this.x, this.y, this.boxWidth, this.thickness, {isStatic : true});
        this.leftBody = Bodies.rectangle(this.x-this.boxWidth/2, this.y-this.boxHeight/2, this.thickness, this.boxHeight, {isStatic : true});
        this.rightBody = Bodies.rectangle(this.x+this.boxWidth/2, this.y-this.boxHeight/2, this.thickness, this.boxHeight, {isStatic : true});
        Matter.Body.setAngle(this.leftBody,this.angle);
        Matter.Body.setAngle(this.rightBody,-1*this.angle);
        World.add(world, this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
      }
      display(){
        var pos = this.bottomBody.position;
        push();
        translate(pos.x, pos.y);
        fill("blue");
       rect(0, 0, this.boxWidth, this.thickness);
        pop();

       var posLeft = this.leftBody.position;
        push();
        translate(posLeft.x, posLeft.y);
        rotate(this.angle);
        fill("blue");
       rect(0, 0, this.thickness, this.boxHeight);
        pop();

        var posRight = this.rightBody.position;
        push();
        translate(posRight.x, posRight.y);
        rotate(-1*this.angle);
        fill("blue");
       rect(0, 0, this.thickness, this.boxHeight);
        pop();
      }
}