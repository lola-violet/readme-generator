// Required packages
const inquirer = require('inquirer');
const fs = require('fs');

// Prompts 
inquirer.prompt([
    {
        type: 'input',
        message: 'Enter the title of your project',
        name: 'title',
    },
    {
        type: 'list',
        message: 'Select the license associated with your project',
        choices: ['update', 'me'],
        name: 'license',
    },
    {
        type: 'confirm',
        message: 'Do you want to include a license badge?',
        name: 'badge',
    },
    {
        type: 'input',
        message: 'Enter a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter installation instructions for your project',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage instructions for your project',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'unsure about this one',
        name: 'features',
    },
    {
        type: 'input',
        message: 'Enter installation instructions for your project',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Enter instructions for contributing to your project',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'Enter testing instructions',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter installation instructions for your project',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter installation instructions for your project',
        name: 'email',
    },
])