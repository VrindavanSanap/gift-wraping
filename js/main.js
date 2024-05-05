var points = [];
var n_points = 30;
var vertices = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    const canvas = createCanvas(400, 400);
    canvas.parent('canvas');

    for (let i = 0; i < n_points; i++) {
        points.push(new Point(400, 400));
    }
    background(0);
}

function get_angle(point1, point2) {
    let angle = 0;
    let dy = point1.y - point2.y;
    let dx = point1.x - point2.x;

    angle = Math.atan2(dy, dx);
    angle = rad_to_deg(angle);
    if (angle < 0) {
        angle += 360;
    }

    return angle;
}

function add_vertex() {
    if (vertices.length == 0) {
        // Find lowest point
        let lowest_y = 0;
        let lowest_point;
        for (let point of points) {
            if (point.y > lowest_y) {
                lowest_y = point.y;
                lowest_point = point;
            }
        }
        lowest_point.set_vertex();
        vertices.push(lowest_point);
    } else if (vertices.length == 1) {
        let highest_angle = 0;
        let highest_point;
        for (let point of points) {
            let angle = point.get_angle(vertices[0]);
            if (angle > highest_angle) {
                highest_angle = angle;
                highest_point = point;
            }
        }
        highest_point.set_vertex();
        vertices.push(highest_point);
    } else if (vertices[vertices.length - 1] == vertices[0]) {
        return;
    } else {
        let highest_point = null;
        let vertices_len = vertices.length;
        let prev1 = vertices[vertices_len - 1];

        for (let i = 0; i < points.length; i++) {
            let point = points[i];

            if (!highest_point) {
                if (!point.is_vertex) {
                    highest_point = point;
                }
            } else {
                if (point != prev1) {
                    let a = highest_point.sub(prev1);
                    let b = point.sub(prev1);
                    let cross = a.cross(b);
                    if (cross > 0) {
                        highest_point = point;
                    }
                }
            }
        }
        highest_point.set_vertex();
        vertices.push(highest_point);
    }
}
function reset() {
    points = []
    for (let i = 0; i < n_points; i++) {
        points.push(new Point(400, 400));
    }
    vertices = []
}
function draw() {
    background(0)
    fill(255)
    strokeWeight(0)
    for (let i = 0; i < vertices.length - 1; i++) {
        vertices[i].line(vertices[i + 1])
    }
    for (let point of points) {
        point.display()
    }
    add_vertex()
}
function mouseClicked() {
    add_vertex()
}

function windowResized() {
    // resizeCanvas(windowWidth, windowHeight);
}


