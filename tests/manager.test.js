const Manager = require("./lib/manager.js");

test("creates an manager section", () => {
    
    const manager = new Manager("Amna", 5334, "amnasyeda@mail.com", "74356");
  
    expect(manager.officeNumber).toEqual(expect.any(Number));

  });