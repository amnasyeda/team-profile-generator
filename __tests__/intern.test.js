const Intern = require("./lib/intern.js");

test("creates an intern section", () => {
    
    const intern = new Intern("Amna", 5334, "amnasyeda@mail.com", "UniversityofToronto");
  
    expect(intern.school).toEqual(expect.any(String));

  });