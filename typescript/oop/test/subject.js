class Subject {
  constructor(name, point) {
    this.name = name;
    this.point = point;
  }
  getInfoSj() {
    return "Ten mon hoc : " + this.name + " Diem : " + this.point;
  }
  setPoint(point) {
    this.point = point;
  }
  getPoint() {
    return this.point;
  }
  getName() {
    return this.name;
  }
}
