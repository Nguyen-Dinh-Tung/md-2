class Quadra {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.delta;
  }
  getValue() {
    return "a : " + this.a + " b : " + this.b + " c : " + this.c;
  }
  getDelta() {
    return (this.delta = this.b * this.b - 4 * a * c);
  }
  getRoot1() {
    if (this.delta == 0) {
      return ((-this.b + Math.pow(this.delta, 0.5)) / 2) * this.a;
    }
  }
  getRoot2() {
    if (this.delta > 0) {
      return ((-this.b - Math.pow(this.delta, 0.5)) / 2) * this.a;
    }
  }
}
