// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation process for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is this project used for?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select the appropriate license for this project.',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 1.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v3.0',
            'Mozilla Public License 2.0',
            'The Unlicense']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) console.log(err);
        console.log('README successfully generated.');
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions).then((data) => {
        console.log(data);
        return data;
    });
};

// Function call to initialize app
init()
    .then(userData => {
        return generateMarkdown(userData);
    })
    .then(readmeData => {
        writeToFile('/Users/samcuratolo/Desktop/Bootcamp/Challenges/README-generator/README.md', readmeData)
    })

