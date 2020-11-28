class Stone {
    constructor(x,y,r){
        var option = {
            restitution: 0,
            friction: 1,
            density: 1.2
            
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r/2,option);    
        this.image = loadImage("stone.png")
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r);
        pop();
    }

}
