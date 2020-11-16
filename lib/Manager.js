// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  const(name, id, role, email, officeNumber) {
    super(name, id, role, email);
    this.school = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}
module.exports = Manager;
