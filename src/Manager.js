const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {
        super();//name,id,email
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';//overridden to return'Manager'
    }
}

module.exports = Manager;