// Jest tests for shapes

// TODO: Import the Shapes class.

// TODO: Describe a testing suite for checking the functionality of the Logo class.

// TODO: Write a test that asserts that shapes returns false when passed an empty string.




const Logo = require('./logo')

describe('Logo class', () => {
  describe('isShape method', () => {
    it('should return false when passed an empty string', ()=> {
      const Logo = new Logo()
      expect(Logo.isShape("")).toBe(false)
    })

    it('should return false when passed less than 8 chars', ()=> {
        const validate = new Validate()
        expect(validate.isPassword("reeaS4d")).toBe(false)
      })

      it('should return false when passed lowercase stuff', ()=> {
        const validate = new Validate()
        expect(validate.isPassword("reeasd4")).toBe(false)
      })

      it('should return false when passed uppercasey stuff', ()=> {
        const validate = new Validate()
        expect(validate.isPassword("HTNEB4")).toBe(false)
      })

      it('should return false when passed no nums', ()=> {
        const validate = new Validate()
        expect(validate.isPassword("HThjbgBihiuhg")).toBe(false)
      })

      it('should return true when valid', ()=> {
        const validate = new Validate()
        expect(validate.isPassword("HThjbgB6786")).toBe(true)
      })
  })
})