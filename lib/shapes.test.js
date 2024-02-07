// Jest tests for shapes

const {Triangle, Circle, Square} = require("./shapes")

describe ('Shape', () => {
  describe ('Triangle', () =>{
    describe ('properties',() => {
      test ('textColor', () => {
        const shape = new Triangle();
        shape.setTextColor("white");
        shape.setShapeColor("orange");
        shape.setText('0');
        expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon width="300" height="200" points ="150, 18 244, 182 56, 182" fill="${shape.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text></svg>`);
      })
    })
    describe ('methods', () => {
      test('setShapeColor', () => {
        const shape = new Triangle();
        shape.setShapeColor('blue');
        expect(shape.shapeColor).toBe('blue');
      });
    }) 
  } )
  describe ('Circle', () =>{
    
  } )
  describe ('Square', () =>{
    
  } )
})


// TODO: Describe a testing suite for checking the functionality of the Validate class.

// TODO: Write a test that asserts that isPassword() returns false when passed an empty string.


// const Validate = require('../validate')

// describe('Validate class', () => {
//   describe('isPassword method', () => {
//     it('should return false when passed an empty string', ()=> {
//       const validate = new Validate()
//       expect(validate.isPassword("")).toBe(false)
//     })

//     it('should return false when passed less than 8 chars', ()=> {
//         const validate = new Validate()
//         expect(validate.isPassword("reeaS4d")).toBe(false)
//       })

//       it('should return false when passed lowercase stuff', ()=> {
//         const validate = new Validate()
//         expect(validate.isPassword("reeasd4")).toBe(false)
//       })

//       it('should return false when passed uppercasey stuff', ()=> {
//         const validate = new Validate()
//         expect(validate.isPassword("HTNEB4")).toBe(false)
//       })

//       it('should return false when passed no nums', ()=> {
//         const validate = new Validate()
//         expect(validate.isPassword("HThjbgBihiuhg")).toBe(false)
//       })

//       it('should return true when valid', ()=> {
//         const validate = new Validate()
//         expect(validate.isPassword("HThjbgB6786")).toBe(true)
//       })
//   })
// })


// // TODO: Import the Shapes class.

// // TODO: Describe a testing suite for checking the functionality of the Logo class.

// // TODO: Write a test that asserts that shapes returns false when passed an empty string.



// // // Triangle Shape
// // describe('Triangle', () => {
// //   test('renders correctly', () => {
// //     const shape = new Triangle();
// //     var color =('orange')
// //     shape.setColor(color);
// //     expect(shape.render()).toEqual(`<triangle height="400" width="500" xmlns="http://www.w3.org/2000/svg" fill="${color}">`);
   
  
// //     <polygon points="260,290 330,20 400,290" style="fill:#86a9b9; stroke-width:5; stroke:#fb6796" />
// // </svg>
// //   });
// // });