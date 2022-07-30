function setup() {
  noCursor()
  var cnv = createCanvas(windowWidth, windowHeight)
  cnv.style('display', 'block')
}

function draw() {
  background(0, 0, 255)
  frameRate(144)
  line(mouseX, 0, mouseX, height)
  line(0, mouseY, width, mouseY)
  strokeWeight(1)
  stroke(255, 255, 255)
}
