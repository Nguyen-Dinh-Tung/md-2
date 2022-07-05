class Retangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  getArea() {
    return this.width * this.height;
  }
  getPrimeter() {
    return (this.width + this.height) * 2;
  }
}
