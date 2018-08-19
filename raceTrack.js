function raceTracks() {
    this.w = 10;
    this.h = 50;

    this.x = floor(width/2 - this.w/2);
    this.y = 0;

    this.show = function() {
        strokeWeight(5);
        fill(255, 255, 0);
        rect(this.x, this.y, this.w, this.h);
        
        strokeWeight(5);
        fill(255, 255, 255);
        rect(this.x / 2 * 1, this.y, this.w, this.h);
        rect(this.x * 1.5, this.y, this.w, this.h);
    }

    this.update = function() {
        var x = Math.round(frameCount/200);
        this.y += driverSpeed + 1*x;
    }

    this.offscreen = function() {
        return (this.y > height);
    }
}
