
const Engineer = require("./lib/engineer.js");

test("creates an engineer section", () => {
    
    const engineer = new Engineer("Amna", 5334, "amnasyeda@mail.com", "amnasyeda");
  
    expect(engineer.github).toEqual(expect.any(String));

  });