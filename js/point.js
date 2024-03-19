class Point {

    constructor(width, height) {
        this.x = 100 + random(width)
        this.y = 100 + random(height)
        this.is_vertex = false;
        this.color = { r: 255, g: 255, b: 255 }
        this.radius = 5
    }
    display() {
        fill(this.color.r, this.color.g, this.color.b)
        circle(this.x, this.y, this.radius)
    }
    highlight() {
        fill(255, 0, 0)
        circle(this.x, this.y, this.radius)
    }
    mag() {
        return (this.x ** 2 + this.y ** 2) ** (0.5)
    }
    dot(other) {
        return this.x * other.x + this.y * other.y
    }
    mul(other) {
        return this.mag() * other.mag()
    }

    angle(other) {
        let dx = this.x - other.x
        let dy = this.y - other.y
        let angle_rad = Math.atan2(dy, dx)
        let angle_deg = angle_rad * (180 / Math.PI);
        if (angle_deg < 0) {
            // angle_deg += 360
        }

        return angle_deg
    }
    set_vertex() {
        this.is_vertex = true;
        this.color = { r: 0, g: 255, b: 0 }
    }
    set_color() {

    }
}
