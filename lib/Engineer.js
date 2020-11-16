// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
\;

class Engineer extends Employee {
  const(name, email, id, role, github) {
    super(name, email, id, role);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
}
module.exports = Engineer;
