var canvas = document.getElementById("myCanvas");
var ref = canvas.getContext("2d");

var carWidth = 90;
var carHeight = 140;

var bg_image = "parkingLot.jpg";
var car_image = "car2.png";

var carX = 420;
var carY = 90;

function add() {

    bg_imgTag = new Image();
    bg_imgTag.onload = loadBackground;
    bg_imgTag.src = bg_image;

    car_imgTag = new Image();
    car_imgTag.onload = loadCar;
    car_imgTag.src = car_image;

}

function loadBackground() {
    ref.drawImage(bg_imgTag, 0, 0, canvas.width, canvas.height);
}

function loadCar() {
    ref.drawImage(car_imgTag, carX, carY, carWidth, carHeight);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;

    if(keyPressed=='38'){
        moveUp();
    }
    if(keyPressed=='40'){
        moveDown();
    }
}

function moveUp() {

    if(carY >= 100) {
        carY -= 10;
        console.log("Up key pressed! " + "X: " + carX + " Y: " + carY);
        loadBackground();
        loadCar();
    }

}

function moveDown() {

    if(carY <= 210) {
        carY += 10;
        console.log("Down key pressed! " + "X: " + carX + " Y: " + carY);
        loadBackground();
        loadCar();
    }

}