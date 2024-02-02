 // Runs the application using imports from lib/

const inquirer = require('inquirer');

const prompt = async () => {
  try {
    const input = await inquirer.prompt({
      type: 'input',
      name: 'username',
      message: 'Enter a Github Username:'
    })

    const response = await fetch(`https://api.github.com/users/${input.username}`)
    const json = await response.json()

    console.log(json)
  } catch (err) {
    console.log(err)
  }
}

prompt()

module.exports = SVG 

// const inquirer = require('inquirer');
// const fs = require('fs');

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?',
//     },
//     {
//       type: 'checkbox',
//       message: 'What languages do you know?',
//       name: 'stack',
//       choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
//     },
//     {
//       type: 'list',
//       message: 'What is your preferred method of communication?',
//       name: 'contact',
//       choices: ['email', 'phone', 'telekinesis'],
//     },
//   ])
//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });