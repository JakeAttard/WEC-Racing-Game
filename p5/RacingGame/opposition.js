function Opposition() {
    this.w = 150;
    this.h = 300;

    this.x = floor(random(0, width - this.w));
    this.y = -this.h;
    this.speed = driverSpeed - 1;

    this.isOvertakenBy = false;

    var imgArray = [{
            "name": wecPorsche,
            "flag": 1
        },
        {
            "name": wecMcdonalds,
            "flag": 1
        },
        {
            "name": wecAudi,
            "flag": 1
        },
        {
            "name": tyres,
            "flag": 0
        }
     ];

    var randomIndex = Math.floor(Math.random() * imgArray.length - 1) + 1;

    this.show = function () {
        if (imgArray[randomIndex].flag == 1) {
            image(imgArray[randomIndex].name, this.x, this.y);
        } else {
            image(tyres, this.x, this.y, 200, 200);
        }
    }

    this.flag = imgArray[randomIndex].flag;

    this.update = function () {
        var x = Math.round(frameCount / 200);
        this.y += 2 * x;
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