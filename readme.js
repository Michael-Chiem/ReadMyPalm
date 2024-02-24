const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt(

[
{type:'input',name:'title',message:'What is your project title?'},
{type:'input',name:'description',message:'What is your project description?'},
{type:'input',name:'installation',message:'how to install?'},
{type:'input',name:'usage',message:'how to use?'},
{type:'list', name:'license',message:'What is your project license?', choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']},


//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
]


).then((answers) => {console.log(answers);

let data = createReadMe(answers);
fs.writeFileSync(`${answers.title}.md`, data)}

)


function createReadMe(answers) {
    return`
# ${answers.title}

![GitHub license](https://img.shields.io/badge/license-${answers.license}-blue.svg)
## Table of Contents 

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)


## Description
${answers.description}
## Installation
${answers.installation}
## Usage
${answers.usage}
## License
${answers.license}
    `
}