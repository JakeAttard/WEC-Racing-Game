function Driver() {
    this.w = 150;
    this.h = 300;

    this.x = floor(width/2 - this.w/2);
    this.y = floor((3 * height/4) - this.h/2);

    this.show = function() {
        image(wecPorsche, this.x, this.y);
    }

    this.turnLeft = function() {
        this.x -= 10;
        this.x = constrain(this.x, 0, width-this.w);
    }

    this.turnRight = function() {
        this.x += 10;
        this.x = constrain(this.x, 0, width-this.w);
    }
}