const Employee = require("./Employee");

class Manager extends Employee {
  constructor(input) {
    super(input);
    this.officeNumber = input.officeNumber;
  }

  getRole() {
    return "Manager";
  }

  getCard() {
    return `    <div class="card shadow">
      <div class="card-header p-3 mb-0 bg-primary text-white">
        <h5 class="card-title">${this.getName()}</h5>
        <h6 class="card-subtitle mb-0">${this.getRole()}</h6>
      </div>
      <div class="card-body">
        <p class="card-text">ID: ${this.getId()}</p>
        <p class="card-text">Email: <a href="mailto: ${this.getEmail()}" class="card-link" target="_blank">${this.getEmail()}</a></p>
        <p class="card-text">Office number: ${this.officeNumber}</p>
      </div>
    </div>\n`;
  }
}

module.exports = Manager;