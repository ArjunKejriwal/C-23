class Box {
    constructor(x, y){
        var options = {
            restitution:1
        }
        this.body = Matter.Bodies.rectangle(x, y, 50, 50, options)
        Matter.World.add(w, this.body)
    }

    display(){
        rectMode(CENTER)
        rect(this.body.position.x, this.body.position.y, 50, 50)
    }
}