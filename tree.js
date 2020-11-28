class Tree{
    constructor(x,y){
        var options = {
            isStatic:true,
            restitution:0,
            friction:0,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,100,100,options);
        this.tree = loadImage("Plucking mangoes/tree.png");
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.tree,pos.x,pos.y,700,700);
        pop();
    }
}