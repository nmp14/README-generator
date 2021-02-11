const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    "Title of Project", "Project Description", "Table of Contents", "Installation", "Usage", "Liscense", "Contributing", "Tests", "Questions"
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("Generating README file...");
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt([
            {
                name: "title",
                type: "input",
                message: "What is the title of the project?",
            },
            {
                name: "description",
                type: "input",
                message: "Enter description of project",
            },
        ])
        .then(answers => {
            let markdown = generateMarkdown(answers);
            writeToFile("./README_files/README.md", markdown);
        })
}

// function call to initialize program
init();
