const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        super();//name,id,email
        this.github = github;
    }

    getRole()//overridden to return'Engineer'
}