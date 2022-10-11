const inquirer = require('inquirer');
const fs = require('fs')
const Employee = require('./employee');
const { manager } = require('./manager');
const { engineer } = require('./engineer');
const { intern } = require('./intern');

const employee = new Employee(manager, engineer, intern);

employee.getName(name);
employee.getId(id);
employee.getEmail();
employee.getRole();

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




.then((answers) => {
    const htmlContent = generateHTML(answers);

    fs.writeFile("develop/index.html", htmlContent, (err) =>
    err ? console.log(err) : console.log("Successfully created HTML!")
    )
});