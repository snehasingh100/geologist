
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var packageBody;
var ball1,ball2,ball3,ball4,ball5;;
var ball6,ball7,ball8,ball9,ball10;

function preload(){

	
}

function setup() {
	createCanvas(750, 400);


	engine = Engine.create();
	world = engine.world;
    
	
		
	

	ground = new Ground(500,height,1000,20);
    hammer= new Hammer(100,125);
	stone = new Stone(700,320,70,70);
    


    wood= new Wood(320,100);

	ball1 = Bodies.circle(width/3 , 100 , 5 , {restitution:0.3
	});
	World.add(world, ball1);
					
	ball2 = Bodies.circle(width/3 , 90 , 5 , {restitution:0.3
	});
	World.add(world, ball2);
					
	ball3 = Bodies.circle(width/3 , 80 , 5 , {restitution:0.3
	});
	World.add(world, ball3);

	ball4 = Bodies.circle(width/3 , 70 , 5 , {restitution:0.3
	});
	World.add(world, ball4);

	ball5 = Bodies.circle(width/3 , 110 , 5 , {restitution:0.3
	});
	World.add(world, ball5);

	ball6 = Bodies.circle(width/3 , 120 , 5 , {restitution:0.3
	});
	World.add(world, ball6);

	ball7 = Bodies.circle(width/3 , 130 , 5 , {restitution:0.3
	});
	World.add(world, ball7);

	ball8 = Bodies.circle(width/3 , 140 , 5 , {restitution:0.3
	});
	World.add(world, ball8);

	ball9 = Bodies.circle(width/3 , 160 , 5 , {restitution:0.3
	});
	World.add(world, ball9);
													
	ball10 = Bodies.circle(width/3 , 150 , 5 , {restitution:0.3
	});
	World.add(world, ball10);
		
	packageBody = Bodies.circle(width/1.5 , 300 , 25 , {restitution:0.3
});
	World.add(world, packageBody);
	
	




}	
  




function draw() {
background(0);
Engine.update(engine);


ellipse(packageBody.position.x,packageBody.position.y,50,50);
ellipse(ball1.position.x,ball1.position.y,10,10);
ellipse(ball2.position.x,ball2.position.y,10,10);
ellipse(ball3.position.x,ball3.position.y,10,10);
ellipse(ball4.position.x,ball4.position.y,10,10);
ellipse(ball5.position.x,ball5.position.y,10,10);
ellipse(ball6.position.x,ball6.position.y,10,10);
ellipse(ball7.position.x,ball7.position.y,10,10);
ellipse(ball8.position.x,ball8.position.y,10,10);
ellipse(ball9.position.x,ball9.position.y,10,10);
ellipse(ball10.position.x,ball10.position.y,10,10);



 ground.display();
 hammer.display();
 stone.display();

wood.display();
}



