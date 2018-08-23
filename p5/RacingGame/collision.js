function Collision() {
    this.w = 150;
    this.h = 300;

    this.x = floor(random(0, width - this.w));
    this.y = -this.h;
    this.speed = driverSpeed - 1;

    this.isOvertakenBy = false;

    var imgArray = [collisionObject];
    var randomIndex = Math.floor(Math.random() * imgArray.length - 1) + 1;

    this.show = function () {
        image(imgArray[randomIndex], this.x, this.y);
    }


    this.update = function () {
        this.y += this.speed;
    }

    this.offscreen = function () {
        return (this.y > height);
    }

    this.overtakenBy = function (driver) {
        if (driver.y < this.y) {
            return true;
        }
    }

    this.hits = function (driver) {
        if (driver.y < this.y + this.h && driver.y + driver.h > this.y) {
            if (driver.x < this.x + this.w && driver.x + driver.w > this.x) {
                return true;
            }
        }
    }

    this.boom = function () {
        image(carCrashed, this.x - 20, this.y);
    }
}