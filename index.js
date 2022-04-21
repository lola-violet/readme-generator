// Required packages
const inquirer = require('inquirer');
const fs = require('fs');

// Prompts for each section of the README
inquirer.prompt([
    {
        type: 'input',
        message: 'Enter the title of your project',
        name: 'title',
    },{
        type: 'input',
        message: 'Describe your project',
        name: 'description',
    },{
        type: 'input',
        message: 'Enter installation instructions',
        name: 'installation',
    },{
        type: 'input',
        message: 'Enter usage instructions',
        name: 'usage',
    },{
        type: 'list',
        message: 'Select the license associated with your project',
        // All license choices listed by GitHub when creating a new Repo
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
        name: 'license',
    },{
        type: 'input',
        message: 'Enter credits for collaborators or assets used in your project',
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
    // Variables for each data point
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
    // Variables to use switch case functions for license badge & link
    const licenseBadge = getLicenseBadge(data.license);
    const licenseInfo = getLicenseInfo(data.license);
    // Outline for the generated README file
    const readmeOutline = 
`# ${title}
${licenseBadge}

## Description
${description}

---

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [Contributing](#contributing)
* [Testing](#testing)
* [Questions](#questions)

---

## Installation 
${installation}

---

## Usage
${usage}

---

## License
This project is ${licenseInfo}.

---

## Credits
${credits}

---

## Contributing
${contributions}

---

## Testing
${tests}

---

## Questions
View all of my projects on [GitHub](https://github.com/${github}).

If you have any questions or want to contribute, please contact me via email at [${email}](mailto:${email}).`
;
    // Method to create README file & fill with collected data points
    fs.writeFile(`README-${title}.md`, readmeOutline, (error, data) =>
        error ? console.error(error) : console.log("Success!")
    );
});

// Function with switch case to show custom badge for each license choice
function getLicenseBadge(license) {
    switch(license) {
        case 'None': return '';
        case 'Apache License 2.0': return '![license_badge](https://img.shields.io/badge/license-Apache%202.0-blueviolet)\n';
        case 'GNU General Public License v3.0': return '![license_badge](https://img.shields.io/badge/license-GNU%20GPLv3-blueviolet)\n';
        case 'MIT License': return '![license_badge](https://img.shields.io/badge/license-MIT-blueviolet)\n';
        case 'BSD 2-Clause "Simplified" License': return '![license_badge](https://img.shields.io/badge/license-BSD%202--Clause-blueviolet)\n';
        case 'BSD 3-Clause "New" or "Revised" License': return '![license_badge](https://img.shields.io/badge/license-BSD%203--Clause-blueviolet)\n';
        case 'Boost Software License': return '![license_badge](https://img.shields.io/badge/license-BSL-blueviolet)\n';
        case 'Creative Commons Zero v1.0 Universal': return '![license_badge](https://img.shields.io/badge/license-CC0%20v1.0%20Universal-blueviolet)\n';
        case 'Eclipse Public License 2.0': return '![license_badge](https://img.shields.io/badge/license-EPL%202.0-blueviolet)\n';
        case 'GNU Affero General Public License v3.0': return '![license_badge](https://img.shields.io/badge/license-GNU%20AGPLv3-blueviolet)\n';
        case 'GNU General Public License v2.0': return '![license_badge](https://img.shields.io/badge/license-GNU%20GPLv2-blueviolet)\n';
        case 'GNU Lesser General Public License v2.1': return '![license_badge](https://img.shields.io/badge/license-GNU%20LGPLv3-blueviolet)\n';
        case 'Mozilla Public License 2.0': return '![license_badge](https://img.shields.io/badge/license-MPL%202.0-blueviolet)\n';
        case 'The Unlicense': return '![license_badge](https://img.shields.io/badge/license-Unlicense-blueviolet)\n';
        default: return '';
    }
}

// Function with switch case to provide link for each license type (instead of full license info -- some are extremely long)
function getLicenseInfo(license) {
    switch(license) {
        case 'None': return '';
        case 'Apache License 2.0': return 'licenced by [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)';
        case 'GNU General Public License v3.0': return 'licenced by [GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)';
        case 'MIT License': return 'licenced by [MIT](https://choosealicense.com/licenses/mit/)';
        case 'BSD 2-Clause "Simplified" License': return 'licenced by [BSD 2-Clause](https://choosealicense.com/licenses/bsd-2-clause/)';
        case 'BSD 3-Clause "New" or "Revised" License': return 'licenced by [BSD 3-Clause](https://choosealicense.com/licenses/bsd-3-clause/)';
        case 'Boost Software License': return 'licenced by [BSL](https://choosealicense.com/licenses/bsl-1.0/)';
        case 'Creative Commons Zero v1.0 Universal': return 'licenced by [CC0 v1.0 Universal](https://choosealicense.com/licenses/cc0-1.0/)';
        case 'Eclipse Public License 2.0': return 'licenced by [EPL 2.0](https://choosealicense.com/licenses/epl-2.0/)';
        case 'GNU Affero General Public License v3.0': return 'licenced by [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)';
        case 'GNU General Public License v2.0': return 'licenced by [GNU GPLv2](https://choosealicense.com/licenses/gpl-2.0/)';
        case 'GNU Lesser General Public License v2.1': return 'licenced by [GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)';
        case 'Mozilla Public License 2.0': return 'licenced by [MPL 2.0](https://choosealicense.com/licenses/mpl-2.0/)';
        case 'The Unlicense': return 'licenced by [Unlicense](https://choosealicense.com/licenses/unlicense/)';
        default: return 'not licensed';
    }
}

