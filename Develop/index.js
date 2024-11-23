const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = ({
  title,
  description,
  installation,
  usage,
  credits,
  license,
  github,
  email,
  contributing,
  tests, // Add tests here
}) => {
  return `
# ${title}
![badge](https://img.shields.io/badge/license-${license}-green)
## description
${description}

## table of Contents
- [installation](#installation)
- [usage](#usage)
- [license](#license)
- [questions](#questions)
- [tests](#tests)
- [contributing](#contributing)

## installation
${installation}
## usage
${usage}
## license
${license}
## questions
${github} \\
${email}
## tests
${tests}
## contributing
${contributing}
`;
};

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a title.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Why was this project built?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please give a descirption.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Why installation did you use?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please give a descirption.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "What is the purpose of this project?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please give a description.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "license",
    message: "Do you have the proper license?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please give a description.");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "github",
    message: "What is your github profile?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please give a description.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please give a description.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "tests",
    message: "Have you conducted the proper tests?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please give a description.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contributing",
    message: "Did you recieve any help while building this project?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please give a description.");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // TODO: Create a function to write README file
  fs.writeFile(fileName, data, (err) => {
    //overwrites the readme
    err ? console.log(`Error: ${err}`) : console.log("Success!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (response) {
    console.log("Responses from Inquirer:", response); // Check what Inquirer returns
    const generated = generateMarkdown(response);
    console.log("Generated Markdown:", generated); // Check the generated output
    writeToFile("README.md", generated);
  });
}

// Function call to initialize app
init(); // activating init
