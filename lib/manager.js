const Employee = require("./employee.js");

class Manager extends Employee{
    constructor(name,idNumber,email,officeNumber){
        super(name,idNumber,email)
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "manager";
    }

}

module.exports = Manager;