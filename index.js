const inquirer = require('inquirer');
const fs = require("fs");
const Manager = require("./lib/manager.js");
const Employee = require("./lib/employee.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const generateMarkdown = require('./src/generateMarkdown.js');
const allEmployees = [];

const questions = [
    {
        type: 'list',
        name: 'role',
        message: 'What is the position/role of the employee?',
        choices: ['Manager', 'Employee','Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'firstName',
        message: ({ role }) => `What is the indivisual's first name?`,
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'lastName',
        message: ({ firstName }) => `What is the indivisual's last name?`,
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: ({ firstName }) => `What is the indivisual's ID number?`,
        validate: idInput => {
            if (!isNaN(parseInt(idInput))) {
                return true;
            } else {
                console.log('Please enter a valid ID number!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'github',
        message: ({ firstName }) => `What is the indivisual's GitHub userame?`,
        when: ({ role }) => {
            if (role === 'engineer') {
                return true;
            } else {
                return false;
            }
        },
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter a username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: ({ firstName }) => `What school does the indivisual's go to?`,
        when: ({ role }) => {
            if (role === 'Intern') {
                return true;
            } else {
                return false;
            }
        },
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter a valid school name!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'addAdditional',
        message: 'Would you like to add an additional employee?',
        default: true
    }
]

const promptUser = () => {

    return inquirer.prompt(questions)
    .then(userResponse => {

     
        allEmployees.push(userResponse);


        if (userResponse.addEmployee) {
            return promptUser();
        } else {
            return allEmployees;
        };
    });
};