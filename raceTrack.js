function raceTracks() {
    this.w = 10;
    this.h = 50;

    this.x = floor(width/2 - this.w/2);
    this.y = 0;

    this.show = function() {
        strokeWeight(5);
        fill(255, 255, 255);
        rect(this.x, this.y, this.w, this.h);
    }

    this.update = function() {
        this.y += driverSpeed;
    }

    this.offscreen = function() {
        return (this.y > height);
    }
}
