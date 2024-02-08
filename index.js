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
console.log(response)

    if (response.shape === 'Circle') {
      const circle = new Circle()
      circle.setTextColor(response.textColor)
      circle.setShapeColor(response.shapeColor)
      circle.setText(response.text)
      fs.writeFileSync('./Assets/circle.svg', circle.render())
    }
    
    if (response.shape === 'Square') {
    const square = new Square();
    square.setTextColor(response.textColor);
    square.setShapeColor(response.shapeColor);
    square.setText(response.text);
    fs.writeFileSync('./Assets/square.svg', square.render());
  }

  if (response.shape === 'Triangle') {
    const triangle = new Triangle();
    triangle.setTextColor(response.textColor);
    triangle.setShapeColor(response.shapeColor);
    triangle.setText(response.text);
    fs.writeFileSync('./Assets/triangle.svg', triangle.render());
  }
});

function generateLogo(text, shapeColor, shape, textColor) {
  // Create the SVG content
  const svgContent = `<svg width="300" height="200">
    <rect width="300" height="200" fill="${shapeColor}" />
    <text x="50%" y="50%" text-anchor="middle" fill="${textColor}" font-size="48">${text}</text>
  </svg>`;

  // Write the SVG content to a file
  fs.writeFile('logo.svg', svgContent, (err) => {
    if (err) {
      console.error('Error generating logo:', err);
    } else {
      console.log('Generated logo.svg');
    }
  });
}

generateLogo (text, shapeColor, shape, textColor);
