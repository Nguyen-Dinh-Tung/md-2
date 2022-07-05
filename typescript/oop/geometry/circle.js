class Circle {
  constructor(color, filled, radius) {
    this.color = color;
    this.filled = filled;
    this.radius = radius;
  }
  getArea() {
    return this.radius * this.radius * 3.14;
  }
  getPrimeter() {
    return this.radius * 2 * 3.14;
  }
}
