class Ground{
    constructor(x,y){
        var options = {
            friction : 0,
            restitution: 0,
            density: 1.2,
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,1400,20,options);
        this.x = x;
        this.y = y;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("black");
        rectMode(CENTER);
        fill("#66340C");
        rect(pos.x, pos.y, 1400, 20);
    }
}