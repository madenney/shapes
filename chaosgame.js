/**
 * Created by Matt on 6/16/2017.
 */


function Game() {

    var canvas = $("#canvas");
    var turtle = document.getElementById("canvas").getContext("2d");

    var drawSquare = function(x, y, width) {
        var h = width/2;

        turtle.beginPath();
        turtle.moveTo(x - h, y - h);
        turtle.lineTo(x + h, y - h);
        turtle.lineTo(x + h, y + h);
        turtle.lineTo(x - h, y + h);
        turtle.lineTo(x - h, y - h);
        turtle.stroke();
    };

    var drawPolygon = function(x, y, sideNum, width) {

        var h = width/2;
        var innerAngle = 180 - (360/sideNum);

        if (sideNum % 2 == 0) {
            var start = [x-h, y-(h/(Math.tan(innerAngle/2)))];
        } else {
            var start = [x, y - (1/((1+Math.sin(innerAngle/2)/(width*Math.sin(innerAngle/2)))))];
        }

        turtle.beginPath();
        turtle.moveTo(start[0], start[1]);
        for(var i = 0; i < sideNum; i++) {

        }
    };

    this.clicked = function(clickX, clickY) {
        console.log(clickX);
        console.log(clickY);
        // turtle.beginPath();
        drawSquare(clickX, clickY, 20);
    }

}