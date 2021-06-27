const Employee = require("./employee.js");

class Intern extends Employee{
    constructor(name,idNumber,email, school){
        super(name,idNumber,email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }

    getRole(){
        return "intern";
    }
}

module.exports = Intern;