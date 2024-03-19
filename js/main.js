var points = []
var n_points = 100
var vertices = []
function setup() {
    createCanvas(windowWidth, windowHeight);
    createCanvas(400, 400);
    for (let i = 0; i < n_points; i++) {
        points.push(new Point(200, 200))
    }

}
function add_vertex() {
    let higest_y = 0
    let lowest_point;
    if (vertices.length == 0) {
        // find bottom most vertex
        for (point of points) {
            if (point.y > higest_y) {
                higest_y = point.y
                lowest_point = point
            }
        }
        lowest_point.set_vertex();
        vertices.push(lowest_point)
    }
    else if (vertices.length < 20) {
        let last_vertex = vertices[vertices.length - 1]
        let highest_angle = last_vertex.angle(points[0]) ;

        let highest_angle_point;
        for (point of points) {
            if (point != last_vertex ) {
                let angle = last_vertex.angle(point);
                if (angle >= highest_angle) {
                    highest_angle = angle

                    highest_angle_point = point
                }
            }
        }
        highest_angle_point.set_vertex()
        vertices.push(highest_angle_point)
        console.log(highest_angle)
    }
}
function draw() {
    background(0)
    fill(255)
    strokeWeight(0)
    for (point of points) {
        point.display()
    }
    if(vertices.length){
        vertices[vertices.length -1].highlight()
    }
    stroke(255)
    strokeWeight(1)

    for (let i = 0; i < vertices.length - 1; i++) {
        line(vertices[i].x, vertices[i].y, vertices[i + 1].x, vertices[i + 1].y)
    }


}
function mouseClicked() {
    add_vertex()
}

function windowResized() {
    // resizeCanvas(windowWidth, windowHeight);
}
