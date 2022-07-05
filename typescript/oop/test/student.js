class Student {
  constructor(name) {
    this.name = name;
    this.subjects = [];
    this.total = 0;
    this.rate = 0;
  }
  getInfo() {
    return "Ten hs :" + this.name + " Mon hoc : " + this.subjects;
  }
  addSubject(subject) {
    this.subjects.push(subject);
  }
  getSubject() {
    return this.subjects;
  }
  setTotalpoin() {
    this.subjects.forEach((element) => {
      return (this.total += element.point);
    });
  }
  getRate() {
    this.getAvg();
    if (this.rate < 6) {
      return "Học sinh kém";
    } else if (this.rate > 6 && this.rate < 8) {
      return "Học sinh khá";
    } else if (this.rate > 8) {
      return "Học sinh giỏi";
    }
  }

  getAvg() {
    this.rate = this.total / this.subjects.length;
  }
}
