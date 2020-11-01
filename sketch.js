var en, w, ob, gr;

function setup (){

 createCanvas(400, 400);

 en = Matter.Engine.create();

 w = en.world;

 box1 = new Box (200, 120)

 box2 = new Box (300, 270)

 gr = Matter.Bodies.rectangle(200, 390, 400, 20, {isStatic : true});

 Matter.World.add(w, gr);

 console.log(ob);

}

function draw (){

 background(0);

 Matter.Engine.update(en);

 box1.display()

 box2.display()

 rectMode(CENTER);

 rect (gr.position.x, gr.position.y, 400, 20);

}