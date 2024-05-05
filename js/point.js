function get_angle(point1, point2) {
    let angle = 0;
    if (!point3) {
        let dy = point1.y - point2.y;
        let dx = point1.x - point2.x;
        angle = Math.atan2(dy, dx);
        angle = rad_to_deg(angle);
        if (angle < 0) {
            angle += 360;
        }
    }
    return angle;
}

class Point {
    constructor(width_, height_, x, y) {
        this.height_ = height_;
        this.width_ = width_;
        
        if (!x && !y) {
            this.x = random(50, this.width_ - 50);
            this.y = random(50, this.height_ - 50);
        } else {
            this.x = x;
            this.y = y;
        }
        
        this.is_vertex = false;
        this.radius = 10;
    }

    display() {
        fill(255);
        stroke(255);
        strokeWeight(2);
        
        if (this.is_vertex) {
            this.highlight();
        } else {
            circle(this.x, this.y, this.radius);
        }
    }

    highlight() {
        fill(255, 0, 0);
        circle(this.x, this.y, this.radius);
    }

    sub(other) {
        let new_x = this.x - other.x;
        let new_y = this.y - other.y;
        return new Point(this.width_, this.height_, new_x, new_y);
    }

    cross(other) {
        return this.x * other.y - this.y * other.x;
    }

    get_angle(prev1) {
        return get_angle(prev1, this);
    }

    set_vertex() {
        this.is_vertex = true;
    }

    line(other) {
        stroke(255);
        strokeWeight(3);
        line(this.x, this.y, other.x, other.y);
    }
}
