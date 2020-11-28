class Mango{
    constructor(x,y){
        var options = {
            isStatic: true,
            friction: 1,
            restitution: 0
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,100/2,options);
        this.image = loadImage("mango.png");
        World.add(world,this.body);    
    }
    display(){
        rectMode(CENTER);
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
        pop();
    }
}
