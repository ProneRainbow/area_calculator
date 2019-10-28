// 1. Attach this file geometry.js to the index.html file

// 2. Create a function that calculates the area of a rectangle.
//    The function should accept the width and height as arguments
//    and return the area of that rectangle.
//    The area of a rectangle is the width * height

// 3. Create a function that calculates the volume of a rectangular prism.
//    The function should accept the width, height and length as arguments
//    and return the volume of that rectangular prism.
//    The volume of a rectangular prism is the width * height * length

// 4. Create a function that calculates the area of a circle.
//    The function should accept the radius of the circle as an argument
//    and return the area of that circle.
//    The area of a circle is the value of π * radius^2

// 5. Create a function that calculates the volume of a sphere.
//    The function should accept the radius of the sphere as an argument
//    and return the volume.
//    The volume of a circle is: 4/3 *  π * radius^3

// 6. Use console.log to test each function and output to the JavaScript console
//    Here are the values to test and the expected results
//    -- Area of rectangle that is 5 wide and 22 tall: 110
//    -- Volume of a rectangular prism that is 4.5 x 12.5 x 17.4: 978.7499999999999
//    -- Area of a circle that with a radius of 7.2: 162.8601631620949
//    -- Volume of a spehere with a radius of 7.2: 1563.4575663561109


var width  = prompt("Please enter a width");
var height = prompt("Please enter a height");
var length = prompt("please enter a length");
var radius = prompt("Please enter a radius");

function areaOfRectangle() {
    var area = parseFloat(width) * parseFloat(height);
    return document.getElementById("area").innerHTML = "The area of the rectangle is " + area;
}

function volumeOfPrism() {
    var volume = parseFloat(width) * parseFloat(height) * parseFloat(length);
    return document.getElementById("volume").innerHTML = "The volume of the prism is " + volume;
}

function areaOfCircle() {
    var circleArea = Math.PI * Math.pow(parseFloat(radius), 2);
    return document.getElementById("circleArea").innerHTML = "The area of the circe is " + circleArea;
}

function volumeOfSphere() {
    var sphereVolume = (4/3) * Math.PI * Math.pow(parseFloat(radius), 3);
    return document.getElementById("sphereVolume").innerHTML = "The volume of the sphere is " + sphereVolume;
}

areaOfRectangle();
volumeOfPrism();
areaOfCircle();
volumeOfSphere();



