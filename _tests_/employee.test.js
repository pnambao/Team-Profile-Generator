const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("getName", () => {
    it("Must return name of employee", () => {
      const inputName = "Panje";

      const employeeName = new Employee({ name: "Panje" }).getName();

      expect(employeeName).toEqual(inputName);
    });
  });
  describe("getId", () => {
    it("Must return the id of employee", () => {
      const inputId = 2;

      const id = new Employee({ id: 2 }).getId();

      expect(id).toEqual(inputId);
    });
  });
  describe("getEmail", () => {
    it("should return email of employee", () => {
      const inputEmail = "example@email.com";

      const email = new Employee({ email: "example@email.com" }).getEmail();

      expect(email).toEqual(inputEmail);
    });
  });
  describe("getRole", () => {
    it("should return 'Employee'", () => {
      const employeeType = "Employee";

      const result = new Employee({}).getRole();

      expect(result).toEqual(employeeType);
    });
  });
});
