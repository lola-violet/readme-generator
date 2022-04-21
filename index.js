// Required packages
const inquirer = require('inquirer');
const fs = require('fs');

// Prompts 
inquirer.prompt([
    {
        type: 'input',
        message: 'Enter the title of your project',
        name: 'title',
    },{
        type: 'input',
        message: 'Enter a description of your project',
        name: 'description',
    },{
        type: 'input',
        message: 'Enter installation instructions for your project',
        name: 'installation',
    },{
        type: 'input',
        message: 'Enter usage instructions for your project',
        name: 'usage',
    },{
        type: 'list',
        message: 'Select the license associated with your project',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
        name: 'license',
    },{
        type: 'input',
        message: 'Enter installation instructions for your project',
        name: 'credits',
    },{
        type: 'input',
        message: 'Enter instructions for contributing to your project',
        name: 'contributions',
    },{
        type: 'input',
        message: 'Enter testing instructions',
        name: 'tests',
    },{
        type: 'input',
        message: 'Enter your github username',
        name: 'github',
    },{
        type: 'input',
        message: 'Enter your professional email',
        name: 'email',
    },
])
.then((data) => {
    console.log("Success!");

    const title = data.title;
    const description = data.description;
    const installation = data.installation;
    const usage = data.usage;
    const license = data.license;
    const credits = data.credits;
    const contributions = data.contributions;
    const tests = data.tests;
    const github = data.github;
    const email = data.email;

    console.log(title, description, installation, usage, license, credits, contributions, tests, github, email);
});

function getBadge(license) {
    switch(license) {
        case 'None': return '';
        case 'Apache License 2.0': return '![license_badge](https://img.shields.io/badge/license-Apache%202.0-blueviolet)\n';
        case 'GNU General Public License v3.0': return '![license_badge](https://img.shields.io/badge/license-GNU%20v3.0-blueviolet)\n';
        case 'MIT License': return '![license_badge](https://img.shields.io/badge/license-MIT-blueviolet)\n';
        case 'BSD 2-Clause "Simplified" License': return '![license_badge](https://img.shields.io/badge/license-BSD%202--Clause-blueviolet)\n';
        case 'BSD 3-Clause "New" or "Revised" License': return '![license_badge](https://img.shields.io/badge/license-GNU%20v3.0-blueviolet)\n';
        case 'Boost Software License': return '![license_badge](https://img.shields.io/badge/license-Boost%20Software-blueviolet)\n';
        case 'Creative Commons Zero v1.0 Universal': return '![license_badge](https://img.shields.io/badge/license-Creative%20Commons%20Zero%20v1.0-blueviolet)\n';
        case 'Eclipse Public License 2.0': return '![license_badge](https://img.shields.io/badge/license-Eclipse%202.0-blueviolet)\n';
        case 'GNU Affero General Public License v3.0': return '![license_badge](https://img.shields.io/badge/license-GNU%20Affero%20v3.0-blueviolet)\n';
        case 'GNU General Public License v2.0': return '![license_badge](https://img.shields.io/badge/license-GNU%20v2.0-blueviolet)\n';
        case 'GNU Lesser General Public License v2.1': return '![license_badge](https://img.shields.io/badge/license-GNU%20Lesser%20v2.1-blueviolet)\n';
        case 'Mozilla Public License 2.0': return '![license_badge](https://img.shields.io/badge/license-Mozilla%202.0-blueviolet)\n';
        case 'The Unlicense': return '![license_badge](https://img.shields.io/badge/license-The%20Unlicense-blueviolet)\n';
        default: return '';
    }
}