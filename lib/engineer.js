const Employee = require("./employee.js");

class Engineer extends Employee {
    constructor(name,idNumber,email,github){
        super(name,idNumber,email)
        this.github = github;
    }
    getRole(){
        return 'engineer';
    }

};

module.exports = Engineer;