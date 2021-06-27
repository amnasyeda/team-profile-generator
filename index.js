const inquirer = require('inquirer');
const fs = require("fs");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");

const renderHTML = require("./lib/generatehtml.js");
const RESULTS_DIR = path.resolve(__dirname, "results");
const resultsPath = path.join(RESULTS_DIR, "team.html");
const team = [];

function startApp() {
    return inquirer.prompt(questions);
};

const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of the employee? (Required)",
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log("Please enter the name of this employee!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "idNumber",
        message: "What is the ID number of the employee? (Required)",
        validate: IDNumber => {
            if (IDNumber) {
                return true;
            } else {
                console.log("Please enter the employee's ID number!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email address? (Required)",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("Please enter the employees's email address!");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "role",
        message: "What is the role of the employee? (Required)",
        choices: ["Engineer", "Intern", "Manager"],
        validate: staffRole => {
            if (staffRole) {
                return true;
            } else {
                console.log("Please select the employee's role!");
                return false;
            }
        }
    }
    ],

    // Manager question
    managerQuestions = [
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number? (Required)",
            validate: officeNumber => {
                if (officeNumber) {
                  return true;
                } else {
                  console.log("Please enter an office number!");
                  return false;
                }
              },
                type: "list",
                name: "addNew",
                message: "Do you want to add another employee",
                choices: ["yes", "no"]
            }
         ],

    // Engineer Question
    engineerQuestions = [
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub Username? (Required)",
            validate: github => {
                if (github) {
                  return true;
                } else {
                  console.log("Please enter a GitHub username!");
                  return false;
                }
            },
              type: "list",
              name: "addNew",
              message: "Do you want to add another employee",
              choices: ["yes", "no"]
          }
       ],

    // Intern Question
    internQuestions = [
        {
            type: "input",
            name: "school",
            message: "What school did the intern attend? (Required)",
            validate: school => {
                if (school) {
                  return true;
                } else {
                  console.log("Please enter a valid school name!");
                  return false;
                }
            },
              type: "list",
              name: "addNew",
              message: "Do you want to add another employee",
              choices: ["yes", "no"]
          }
       ],

     // Add more staff
     const promptNewStaff = ()=>{
        console.log(`
      =================
      Add a New Employee
      =================
      `);
        inquirer.prompt(selectStaffRole)
                .then(answer => {
            if (answer.staffRole === "Manager") {
            if (canAddManager) {
            inquirer.prompt(questions.Manager)
            .then(answer => {
        //save person's info
        const manager = new Manager
           (
            answer.name,
            answer.idNumber,
            answer.email,
            answer.officeNumber
           );
        team.push(manager);
        addManager = false;
        if (answer.addNew === "yes") {
            promptNewStaff();
        } else {
            generate();
        }
    });
        } else {
    console.log("There is a manager already!")
            promptNewStaff();
        }
        
        
        } else if (answer.staffRole === "Engineer") {
            inquirer.prompt(questions.Engineer)
                    .then(answer => {
        //save info
        const engineer = new Engineer
            (
            answer.name,
            answer.idNumber,
            answer.email,
            answer.github
            );
        team.push(engineer);
        if (answer.addNew === "yes") {
            promptNewStaff();
        } else {
            generate();
        };
    });
        
        } else if (answer.staffRole === "Intern") {
            inquirer.prompt(questions.Intern)
                    .then(answer => {
        //save info
        const intern = new Intern
            (
            answer.name,
            answer.idNumber,
            answer.email,
            answer.school
            );
        team.push(intern);
        if (answer.addNew === "yes") {
            promptNewStaff();
        } else {
            generate();
                     };
                 });
             };
        });
     };
    
const writeFile = fileContent => {
      fs.writeFile('./results/team.html', fileContent, err => {
        if (err) {
          console.log(err);
          return;
        }
  
        else{

          console.log("Your page has been created!");
        }
      });
    };



//const questions = 
promptNewStaff().then(team =>{
    return generatePage(team);
}).then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
    console.log(err);
  });