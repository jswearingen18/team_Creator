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
   
    return name;
};

const getId = (id) => {
    let id = 0;
    id ++;
    return id;
};

const getEmail = (email) => {
   
    return email;
};
const getRole = (role) => {

    return role;
};
module.exports = {
    Employee,
};