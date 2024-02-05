// Runs the application using imports from lib/
//importing the inquirer library
const inquirer = require('inquirer');
//importing the file system
const fs = require('fs');

const { Circle, Square, Triangle } = require('./lib/shapes');

inquirer.prompt ([
    {
      type: 'list',
      name: 'shape',
      message: 'Choose the shape you would like for your logo:',
      choices: ['Circle', 'Square', 'Triangle'],
    },
      {
        type: 'input',
        name: 'shape',
        message: 'SHAPE COLOR: : Enter a color for your shape:',
      },
      {
        type: 'input',
        name: 'text',
        message: 'TEXT: Enter up to 3 Characters:',
      },
      {
        type: 'input',
        name: 'text-color',
        message: 'TEXT COLOR: Enter a text color:',
      },
    ])
  
 .then(response => {

    if (response.shape === 'circle') {
      const circle = new Circle()
      circle.setTextColor(response.setTextColor)
      circle.setShapeColor(response.setShapeColor)
      circle.setText(response.text)
      fs.writeFileSync('.Assets/circle.svg', circle.render())
    }
    if (response.shape === 'square') {
      const square = new Square()
      circle.setTextColor(response.setTextColor)
      circle.setShapeColor(response.setShapeColor)
      circle.setText(response.text)
      fs.writeFileSync('.Assets/square.svg', square.render())
    }
    if (response.shape === 'triangle') {
      const triangle = new Triangle()
      circle.setTextColor(response.setTextColor)
      circle.setShapeColor(response.setShapeColor)
      circle.setText(response.text)
      fs.writeFileSync('.Assets/triangle.svg', triangle.render())
    }
  })


const response = await fetch(`https://api.github.com/users/${input.username}`)
const json = await response.json()

console.log(json)
//    catch (err) {
//   console.log(err)
// }


prompts()

module.exports = Shapes


