// Runs the application using imports from lib/

//importing the inquirer library
const inquirer = require('inquirer');
//importing the file system
const fs = require('fs');


const { Circle, Square, Triangle } = require('./lib/shapes');

inquirer.prompt([
  {
    type: 'list',
    name: 'shape',
    message: 'Choose the shape you would like for your logo:',
    choices: ['Circle', 'Square', 'Triangle'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'SHAPE COLOR: : Enter a color for your shape:',
  },
  {
    type: 'input',
    name: 'text',
    message: 'TEXT: Enter up to 3 Characters:',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'TEXT COLOR: Enter a text color:',
  },
])

  .then(response => {
    // console.log(response)
    let shape;
    if (response.shape === 'Circle') {
      shape = new Circle()
    }
    if (response.shape === 'Square') {
      shape = new Square();
    }
    if (response.shape === 'Triangle') {
      shape = new Triangle();
    }
    generateLogo(response.text, response.shapeColor, shape, response.textColor);
  });

function generateLogo(text, shapeColor, shape, textColor) {
  shape.setTextColor(textColor)
  shape.setShapeColor(shapeColor)
  shape.setText(text)
  fs.writeFile('./logo.svg', shape.render(), (err) => {
    if (err) {
      console.error('Error generating logo:', err);
    } else {
      console.log('Generated logo.svg');
    }
  });
}