// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  const(name, id, role, email, school) {
    super(name, id, role, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
}
module.exports = Intern;
