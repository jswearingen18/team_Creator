const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
}

const getName = (name) => {
    inquirer.prompt([
        { name: "name",
          message: "What is the team member's name?",
          type: "input",
        },
    ]) 
    return name;
};

const getId = (id) => {
    let id = 0;
    id ++;
    return id;
};

const getEmail = (email) => {
    inquirer.prompt([
        { name: "email",
          message: "What is your team member's email address",
          type: "input",
        }
    ])
    return email;
};
const getRole = (role) => {
    inquirer.prompt([
        { name: "role",
          message: "What is your team member's role?",
          type: "input",
        }
    ])
    return role;
};
module.exports = {
    Employee,
};