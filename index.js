const inquirer = require('inquirer');
const fs = require('fs')

const generateHTML = ({}) =>
`<!DOCTYPE html>
<html lang="en-us">
<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="asset\style.css">
    <title>JSwearingen Team Profile</title>
</head>`;

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