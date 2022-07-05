class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  displayName = "Poinn";
  distance(b) {
    const dx = this.x - b.x;
    const dy = this.y - b.y;
    return Math.hypot(dx, dy);
  }
}
