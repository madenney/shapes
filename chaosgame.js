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

        console.log("Drawing a " + sideNum + " side polygon");
        var innerAngle = 180 - (360/sideNum);
        console.log("Inner angle = ", innerAngle);
        var array = [];

        if (sideNum % 2 == 0) {
            var radius = width/2;
            for(var i = 1; i < sideNum + 1; i++) {
                var coords = [];
                coords.push(x - radius * Math.cos(2*Math.PI*(i/sideNum)));
                coords.push(y - radius * Math.sin(2*Math.PI*(i/sideNum)));
                array.push(coords);
            }
        } else {
            var apothem = (width*Math.abs(Math.sin(innerAngle/2))/(1+Math.abs(Math.sin(innerAngle/2))));
            console.log("apothem = ", apothem);
            var radius = width - apothem;
            for(var i = 1; i < sideNum + 1; i++) {
                var coords = [];
                coords.push(x - radius * Math.sin(2*Math.PI*(i/sideNum)));
                coords.push(y - radius * Math.cos(2*Math.PI*(i/sideNum)));
                array.push(coords);
            }
        }
        console.log(array);
        console.log("radius = ", radius);


        turtle.beginPath();
        turtle.moveTo(array[0][0], array[0][1]);
        for(var i = 0; i < array.length; i++) {
            turtle.lineTo(array[i][0],array[i][1]);
        }
        turtle.lineTo(array[0][0], array[0][1]);
        turtle.stroke();
    };

    this.clicked = function(clickX, clickY) {
        console.log(clickX);
        console.log(clickY);
        // turtle.beginPath();
        var sideNum = Math.floor(Math.random() * 6) + 3;
        drawPolygon(clickX, clickY, sideNum, 100);
    }

}