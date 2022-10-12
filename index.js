// exporting inquirer and fs into index.js
const inquirer = require('inquirer');
const fs = require('fs')
// const Employee = require('./employee');
// const { manager } = require('./manager');
// const { engineer } = require('./engineer');
// const { intern } = require('./intern');

// const employee = new Employee(manager, engineer, intern);

// employee.getName(name);
// employee.getId(id);
// employee.getEmail();
// employee.getRole();
// function to generate the HTML file also takes in 3 parameters
const generateHTML = ({name, email, role}) =>
`<!DOCTYPE html>
<html lang="en-us">
<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="asset/style.css">
    <title>JSwearingen Team Profile</title>
</head>
<header>
    <h1 class="headerTitle">Jeremiah Swearingen's Team</h1>
</header>
<body>
<div>
    <h2>${name}</h2>
    <h4>${email}</h4>
    <h4>${role}</h4>
</body>`;

// Questions initialized through NODE.js to receive answers 
inquirer.prompt([
    { name: "name",
      message: "What is the team member's name?",
      type: "input",
    },
    { name: "email",
    message: "What is your team member's email address",
    type: "input",
    },
    { name: "role",
    message: "What is your team member's role?",
    type: "list",
    choices: ["Manager", "Engineer", "Intern"],
    },
]) 
// then statement that then calls the function to create the html with fs write file
.then((answers) => {
    const htmlContent = generateHTML(answers);

    fs.writeFile("develop/index.html", htmlContent, (err) =>
    err ? console.log(err) : console.log("Successfully created HTML!")
    )
});