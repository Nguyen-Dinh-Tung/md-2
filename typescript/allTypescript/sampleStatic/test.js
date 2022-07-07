class Instructor {
  constructor({ name, role = "ASSSITANT" } = {}) {
    this.role = role;
    this.name = name;
  }
  renderDetails() {
    console.log(`${this.name} - ${this.role}`);
  }
  static hello() {
    console.log("Helo");
  }
  static canTeach(instructor) {
    return instructor.role == "classroom";
  }
}
let a = new Instructor({ name: "Brian" });
let b = new Instructor({ name: "Alice", role: "Class" });

a.renderDetails();
b.renderDetails();
Instructor.hello();
console.log(`
${a.name} can teach: ${Instructor.canTeach(a)}
`);
