const inquirer = require('inquirer');
const fs = require('fs');

function promptCreateReadme() {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'createReadme',
            message: 'Do you want to create a README file?',
            default: true
        }
    ]);
}

promptCreateReadme().then((response) => {
    if (response.createReadme) {
        inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter the project title:'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Enter a brief description of your project:'
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Enter installation instructions:'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Enter usage instructions:'
            },
            {
                type: 'list',
                name: 'license',
                message: 'Choose a license for your project:',
                choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'Enter guidelines for contributing to your project:'
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Enter instructions for running tests:'
            },
            {
                type: 'input',
                name: 'questions',
                message: 'Enter your contact information for questions:'
            },
            {
                type: 'input',
                name: 'imageUrl',
                message: 'Enter the URL of an image to attach:'
            },
            {
                type: 'input',
                name: 'projectLink',
                message: 'Enter the project link:'
            }
        ]).then((answers) => {
            console.log(answers);
            let data = createReadMe(answers);
            fs.writeFileSync(`${answers.title}.md`, data);
        });
    } else {
        console.log('No README file will be created. Exiting...');
    }
});

function createReadMe(answers) {
    return `
# ${answers.title}

![GitHub license](https://img.shields.io/badge/license-${answers.license}-blue.svg)
![Project Image](${answers.imageUrl})

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions regarding the project, contact ${answers.questions}.

[Project Link](${answers.projectLink})
`;
}