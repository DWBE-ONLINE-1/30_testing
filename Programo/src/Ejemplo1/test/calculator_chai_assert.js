const assert = require("chai").assert;
const calculator = require("../app/calculator");

describe("Calcultator tests using ASSERT interface from CHAI module: ", function () {
//   before(function () {
//     // runs before all tests in this block
//     let result;
//   });
//   after(function () {
//     // runs after all tests in this block
//   });
//   beforeEach(function () {
//     // runs before each test in this block
//   });
//   afterEach(function () {
//     // runs after each test in this block
//     result = null;
//   });
  describe("Check Sum Function: ", function () {
    it("Check the returned value using: assert.equal(value,'value'): ", function () {
      const result = calculator.sum(2);
      assert.equal(result, 4);
    });
    it("Check the returned value using: assert.typeOf(value,'value'):  ", function () {
      const result = calculator.sum(2);
      assert.typeOf(result, "number");
    });
  });
  describe("Check addTested Function: ", function () {
    it("Check the returned value using: assert.equal(value,'value'): ", function () {
      const result = calculator.addTested("text");
      assert.equal(result, "text tested");
    });
    it("Check the returned value using: assert.typeOf(value,'value'): ", function () {
      const result = calculator.addTested("text");
      assert.typeOf(result, "string");
    });
    it("Check the returned value using: assert.lengthOf(value,'value'): ", function () {
      const result = calculator.addTested("text");
      assert.lengthOf(result, 11);
    });
  });
  describe("Check multiply Function: ", function () {
    it("Check the returned value using: assert.equal(value, value): ", () => {
      let result = calculator.multiply(2, 2);
      assert.equal(result, 4);
    });
    it("Check the returned value with null first parameter using: assert.equal(value, value): ", () => {
      let result = calculator.multiply(null, 2);
      assert.equal(result, 0);
    });
    it("Check the returned value with null second parameter using: assert.equal(value, value): ", () => {
      let result = calculator.multiply(2, null);
      assert.equal(result, 0);
    });
  });
});
