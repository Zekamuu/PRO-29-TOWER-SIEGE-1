class Blocks{
    constructor(x, y, w, h){
        
        var options = {
            restitution:0.4,
            friction:0.1,
            isStatic:false
        }
        
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.body = Bodies.rectangle(x, y, w, h, options)
        World.add(matterWorld, this.body);
    }
    show(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);
    }
}