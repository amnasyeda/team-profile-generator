class Employee {
    constructor(name,idNumber,email){
        this.name = name;
        this.idNumber = idNumber;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.idNumber;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "employee"
    }
}
module.exports = Employee;