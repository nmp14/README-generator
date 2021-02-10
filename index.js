const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
    "Title of Project", "Project Description", "Table of Contents", "Installation", "Usage", "Liscense", "Contributing", "Tests", "Questions"
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
        .prompt([
            /* Pass your questions in here */
        ])
        .then(answers => {
            // Use user feedback for... whatever!!
        })
}

// function call to initialize program
init();
