const expect = require("chai").expect;
const calculator = require("../app/calculator");

describe("Calcultator tests using EXPECT interface from CHAI module: ", function () {
//   before(function () {
//     // runs before all tests in this block
//     // let result;
//   });
//   after(function () {
//     // runs after all tests in this block
//   });
//   beforeEach(function () {
//     // runs before each test in this block
//   });
//   afterEach(function () {
//     // runs after each test in this block
//     // result = null;
//   });
  describe("Check Sum Function: ", function () {
    it("Check the returned value using: expect(value).to.equal(value): ", function () {
      const result = calculator.sum(2);
      expect(result).to.equal(4);
    });
    it("Check the returned value using: expect(value).to.be.a('value'): ", function () {
      const result = calculator.sum(2);
      expect(result).to.be.a("number");
    });
  });
  describe("Check addTested Function: ", function () {
    it("Check the returned value using: expect(value).to.equal('value'): ", function () {
      const result = calculator.addTested("text");
      expect(result).to.equal("text tested");
    });
    it("Check the returned value using: expect(value).to.be.a('value')): ", function () {
      const result = calculator.addTested("text");
      expect(result).to.be.a("string");
    });
    it("Check the returned value using: expect(value).to.have.lengthOf(value): ", function () {
      const result = calculator.addTested("text");
      expect(result).to.have.lengthOf(11);
    });
  });
  describe("Check multiply Function: ", function () {
    it("Check the returned value using: expect(value).to.equal('value'): ", () => {
      let result = calculator.multiply(2, 2);
      expect(result).to.equal(4);
    });
    it("Check the returned value with null first parameter using: expect(value).to.equal('value'): ", () => {
      let result = calculator.multiply(null, 2);
      expect(result).to.equal(0);
    });
    it("Check the returned value with null second parameter using: expect(value).to.equal('value'): ", () => {
      let result = calculator.multiply(2, null);
      expect(result).to.equal(0);
    });
  });
});
