// Cars
var wecPorsche;
var wecAudi;
var wecMcdonalds;


var carCrashed;
var carRepaired;
var font;
var driverSpeed = 8;
var opposition = [];
var raceTrack = [];
var carsOvertaken = 0;
var carRepairLives = 3;


function preload() {
    wecPorsche = loadImage('images/Porsche.png');
    wecMcdonalds = loadImage('images/img0.png');
    wecAudi = loadImage('images/img1.png');
    
    carCrashed = loadImage('images/boom.png');
    carRepaired = loadImage('images/CarRepair.png');
   
    font = loadFont('Rabbit-Hole.ttf');
}

function setup() {
    createCanvas(1200, 1100);

    raceTrack.push(new raceTracks());
    opposition.push(new Opposition());
    driver = new Driver();
}

function draw() {
    background(44, 44, 44);
    
    // Race track markings frame rate
    if (frameCount % 25 === 0) {
        raceTrack.push(new raceTracks());
    }

    // Show Race Track Markings
    for (var i = raceTrack.length-1 ; i >= 0 ; i--) {
        raceTrack[i].show();
        raceTrack[i].update();

        // Remove Race Track markings once crashed
        if (raceTrack[i].offscreen()) {
            raceTrack.splice(i, 1);
        }
    }
    
    // Opposition Cars Appear After Frame Rate
    if (frameCount % 130 === 0) {
        opposition.push(new Opposition());
    }

    // Opposition Show Up
    for (var i = opposition.length-1 ; i >= 0 ; i--) {
        opposition[i].show();
        opposition[i].update();

        if (opposition[i].overtakenBy(driver) && opposition[i].isOvertakenBy === false) {
            carsOvertaken += 1;
            opposition[i].isOvertakenBy = true;
        }

        // Opposition collide with driver, get destroyed
        if (opposition[i].hits(driver)) {
            opposition[i].boom();
            opposition.splice(i, 1);

            // Collision Pentaly and Repair Life Lost
            carsOvertaken = (carsOvertaken >= 10)?(carsOvertaken-5):0;
            carRepairLives--;
        }
        // Remove Opposition
        else if (opposition[i].offscreen()) {
            opposition.splice(i, 1);
        }
    }

    // Driver Shown
    driver.show();

    // Mouse Controls
    if (keyIsDown(LEFT_ARROW)) {
        driver.turnLeft();
    }
    if (keyIsDown(RIGHT_ARROW)) {
        driver.turnRight();
    }

    // Driver Stats
    textSize(40);
    textFont(font);
    textAlign(LEFT);
    fill(255);
    text('Cars Overtaken In Race: ' + carsOvertaken, 30, 60);

    for (var i = 0 ; i < carRepairLives ; i++) {
        image(carRepaired, 30 + (i*70), height-60);
    }
    
    textSize(40);
        textFont(font);
        textStyle(BOLD);
        textAlign(LEFT);
        fill(255);
        text('Repair Lives:', 30, 1025);   

    // Game Over
    if (carRepairLives === 0) {
        noLoop();

        textSize(60);
        textFont(font);
        textStyle(BOLD);
        textAlign(CENTER);
        fill(255);
        text('GAME OVER', width/2, height/2);
    }
}
