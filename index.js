const inquirer = require('inquirer');
const fs = require('fs')

const generateHTML = ({name, email, github}) =>
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
    <h4>${github}</h4>
</body>`;

inquirer.prompt([
{
    name: "name",
    message: "What is the team member's name?",
    type: "input",
},
{
    name: "email",
    message: "What is the team member's email address?",
    type: "input",
},
{
    name: "github",
    message: "What is the team member's github username?",
    type: "input",
},
])

.then((answers) => {
    const htmlContent = generateHTML(answers);

    fs.writeFile("index.html", htmlContent, (err) =>
    err ? console.log(err) : console.log("Successfully created HTML!")
    )
});