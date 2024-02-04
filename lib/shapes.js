// Exports `Triangle`, `Circle`, and `Square` classes

class Shape {

  constructor() {
    this.color = ''
  }
  setColor(color) {
    this.color = (color);
  }
}

class Triangle extends Shape{
  isLogo(logo) {
    if (logo.length()) return false
    return true
  }
}

// class Circle extends Shape {
//   isLogo(logo) {
//     if (logo.length()) return false
//     return true
//   }
// }

// class Square extends Shape {
//   isLogo(logo) {
//     if (logo.length()) return false
//     return true
//   }
// }



module.exports = Triangle
// module.exports = Circle
// module.exports = Square