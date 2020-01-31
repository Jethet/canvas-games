var myGamePiece;

function startGame(){    //this invokes the method of the myGameArea object
    myGamePiece = new component(30, 30, "blue", 10, 120);
    myGameArea.start();
};


var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function (){                 // The start() method creates a <canvas>
        this.canvas.width = width;        // element and inserts it as the first 
        this.canvas.height = heigth;       // childnode of the <body> element
        this.ctx = canvas.getContext("2d");
        document.body.insertBefore(this.canvas,
            document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20); // Draw and clear display
    },                                                   // 50 times per second
    clear : function() {        // This clears the entire canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};


function component(width, height, color, x, y){   // Object constructor
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.update = function(){
        ctx = myGameArea.ctx;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};

function updateGameArea(){
    myGameArea.clear();
    myGamePiece.x += 1;
    myGamePiece.update();
};


startGame();