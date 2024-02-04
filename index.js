 // Runs the application using imports from lib/
//importing the inquirer library
const inquirer = require('inquirer');
//importing the file system
const fs = require('fs');

const prompts = async () => {
  try {
    const input = await inquirer.prompt ({
    
        type: 'list',
        name: 'shape',
        message: 'Choose the shape you would like for your logo:',
        choices: ['Circle', 'Square', 'Triangle'],
      },
      {
      type: 'input',
      name: 'text',
      message: 'TEXT: Enter up to 3 Characters:',
      },
      {
        type: 'input',
        name: 'text-color',
        message: 'TEXT COLOR: Enter a color:',
      },
      {
        type: 'input',
        name: 'shape',
        message: 'SHAPE COLOR: : Enter a color:',
       },
      }

    }
 


    const response = await fetch(`https://api.github.com/users/${input.username}`)
    const json = await response.json()

    console.log(json)
   catch (err) {
    console.log(err)
  }


prompts()

module.exports = Shapes


