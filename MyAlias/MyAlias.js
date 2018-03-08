var canvas = document.getElementById("canvas");
var processing = new Processing(canvas, function(processing) {
    processing.size(400, 400);
    processing.background(0xFFF);

    var mouseIsPressed = false;
    processing.mousePressed = function () { mouseIsPressed = true; };
    processing.mouseReleased = function () { mouseIsPressed = false; };

    var keyIsPressed = false;
    processing.keyPressed = function () { keyIsPressed = true; };
    processing.keyReleased = function () { keyIsPressed = false; };

    function getImage(s) {
        var url = "https://www.kasandbox.org/programming-images/" + s + ".png";
        processing.externals.sketch.imageCache.add(url);
        return processing.loadImage(url);
    }

    function getLocalImage(url) {
        processing.externals.sketch.imageCache.add(url);
        return processing.loadImage(url);
    }

    // use degrees rather than radians in rotate function
    var rotateFn = processing.rotate;
    processing.rotate = function (angle) {
        rotateFn(processing.radians(angle));
    };

    with (processing) {
      
var Comet = function(config)
{
    this.xPos = config.xPos;
    this.yPos = config.yPos;
    this.width = config.width;
    this.height = config.height;
    this.color = config.color || color(255, 255, 255);
    
    this.xVel = config.xVel || 0;
    this.yVel = config.yVel || 0;
    
    this.update = function()
    {
        this.xPos += this.xVel;
        this.yPos += this.yVel;
        
        if(this.xPos < 0 - this.width)
        {
            this.xPos = width;
        }
        if(this.xPos > width + this.width)
        {
            this.xPos = 0;
        }
        
        if(this.yPos < 0 - this.height)
        {
            this.yPos = height;
            this.xPos = this.xPos + (random(-10, 10) * 5);
        }
        if(this.yPos > height + this.height)
        {
            this.yPos = 0;
            this.xPos = this.xPos + (random(-10, 10) * 5);
        }
    };
    
    this.draw = function() 
    {
        noStroke();
        fill(this.color);
        rect(this.xPos, this.yPos, this.width,this.height);
    };
};
var createArray = function(Obj)
{
    var arr = [];
    arr.add = function(config)
    {
        this.push(new Obj(config));
    };
    arr.update = function()
    {
        for(var i = 0; i < this.length; i++)
        {
            this[i].update();
        }
    };
    arr.draw = function(a)
    {
        for(var i = 0; i < this.length; i++)
        {
            this[i].draw(a);
        }
    };
    return arr;
};

var comets = createArray(Comet);
comets.generate = function(amt)
{
    for(var i = 0; i < amt; i++)
    {
        this.add({
            xPos : random(0, 4) * 100,
            yPos : random(0, 4) * 100,
            width : random(1, 3),
            height : 50,
            
            color : color(40, 173, 214),
            
            yVel : -random(3, 5) * 1.25,
        });
    }
};
comets.generate(random(15, 20));

var LoadArc = function(config)
{
    this.xPos = config.xPos;
    this.yPos = config.yPos;
    this.width = config.width;
    this.height = config.height;
    this.color = config.color || color(65, 125, 185, 150);
    
    this.maxValue = 360;
    this.value = 0;
    this.maxLoadValue = config.maxLoadValue;
    this.loadValue = 0;
    
    this.draw = function(loadValue) 
    {
        this.loadValue = loadValue;
        this.value = (this.loadValue * this.maxValue) / this.maxLoadValue;
        
        fill(this.color);
        arc(this.xPos, this.yPos, this.width, this.height, 0, this.value);
    };
};

var loadArcs = createArray(LoadArc);
loadArcs.add({
    xPos : 200,
    yPos : 265,
    width  : 60,
    height : 60,
    
    maxLoadValue : 100,
    color : color(65, 125, 185, 75),
});
loadArcs.add({
    xPos : 200,
    yPos : 265,
    width  : 50,
    height : 50,
    
    maxLoadValue : 100,
    color : color(65, 125, 185, 50),
});

var loadingSign = function(amt)
{
    loadArcs.draw(amt); 
};

draw = function() 
{
    background(0, 0, 0);
    noStroke();
    
    comets.draw();
    comets.update();
    
    fill(65, 123, 186);
    textSize(25);
    
    textMode(CENTER);
    text("Prolight <- Nitrobyte", 109, 100);
    
    textSize(17.5);
    text("I Changed My alias!", 124, 155);
    
    loadArcs.draw(64);
};


    }
    if (typeof draw !== 'undefined') processing.draw = draw;
});