const assert = require("assert");
const calculator = require("../src/calculator");

describe("Calcultator tests using ASSERT module", function () {
    before(function () {
      // runs before all tests in this block
      //let result;
      console.info("##### Hook before...");
    });
    after(function () {
      // runs after all tests in this block
      console.info("##### Hook after...");
    });
    beforeEach(function () {
      // runs before each test in this block
      console.info("##### Hook beforeEach...");
    });
    afterEach(function () {
      // runs after each test in this block
      // result = null;
      console.info("##### Hook afterEach...");
    });
  describe("Check Sum Function: ", function () {
    it("Check the returned value using: assert.strictEqual(value, value): ", function () {
      let result = calculator.sum(2);
      assert.strictEqual(result, 4);
    });
    it("Check the returned value using: assert(typeof(value, 'value')): ", function () {
      let result = calculator.sum(2);
      assert(typeof result, "number");
    });
  });
  describe("Check addTested Function: ", function () {
    it("Check the returned value using: assert.strictEqual(value, value): ", function () {
      let result = calculator.addTested("text");
      assert.strictEqual(result, "text tested");
    });
    it("Check the returned value using: assert(typeof(value, 'value')): ", function () {
      let result = calculator.addTested("text");
      assert.strictEqual(typeof result, "string");
    });
    it("Check the returned value using: assert.strictEqual(value, value): ", function () {
      // Arranged
      const testObj = { name: "Juan" };

      // Act
      let result = calculator.addTested("text");
      
      // Assert
      assert.strictEqual(result, "text tested");
    });
  });
  describe("Check multiply Function: ", function () {
    it("Check the returned value using: assert.strictEqual(value, value): ", () => {
      const testObj = { name: "Juan" };

      let result = calculator.multiply(2, 2);

      assert.strictEqual(result, 4);
    });
    it("Check the returned value with null first parameter using: assert.strictEqual(value, value): ", () => {
      let result = calculator.multiply(null, 2);
      assert.strictEqual(result, 0);
    });
    it("Check the returned value with null second parameter using: assert.strictEqual(value, value): ", () => {
      let result = calculator.multiply(2, null);
      assert.strictEqual(result, 0);
    });
  });
});
