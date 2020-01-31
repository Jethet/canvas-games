// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");

function startGame(){    //this invokes the method of the myGameArea object
    myGameArea.start();
}


window.addEventListener('load', main);

var myGameArea = {
    canvas: document.getElementById("canvas"),
    start: function (){
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = canvas.getContext("2d");
        document.body.insertBefore(this.canvas,
            document.body.childNodes[0];
    }
}
