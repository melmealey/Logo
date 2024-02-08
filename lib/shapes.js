// Exports `Triangle`, `Circle`, and `Square` classes as children of a parent `Shape` class


class Shape {

  constructor() {
    this.textColor = ''
    this.text = ''
    this.shapeColor = ''
  }
  setTextColor(textColor) {
    this.textColor = textColor;
  }
  setText(text) {
    this.text = text;
  }
  setShapeColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  render() {
    return new Error('Child constructor must have its own render')
  }
}

class Triangle extends Shape {
  constructor() {
    super()
  }
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon width="300" height="200" points ="150, 18 244, 182 56, 182" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
  }
}

class Circle extends Shape {
  constructor() {
    super()
  }
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
  }
}

class Square extends Shape {
  constructor() {
    super()
  }
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="200"><rect x="0" y="0" width="200" height="200" fill="${this.shapeColor}"/><text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
  }
}

module.exports = { Triangle, Circle, Square }
