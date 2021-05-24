class Partical {
    constructor(x, y, r) {
        var options = {
       'restitution':0.4,
        
        }
        this.body = Bodies.circle(x, y,this.r, options);
        this.cplor=color(random(0,225),  random(0,225),  random(0,225))
        World.add(world, this.body);
    }

    display(){
        
        var partical=this.body.position;		
			push()
			translate(partical.x, partical.y);
			 rectMode(CENTER)
			 rotate(this.body.angle)
			fill(255,0,255)
			ellipseMode(RADIUS);
			pop();
    }



    }
