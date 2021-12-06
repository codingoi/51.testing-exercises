var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('check if if 5! is 120 ', () => {
      //setup
      const input = 5;
      const expected = 120;
      
      //exercise
      const result = Calculate.factorial(input);
      
      //verify
      assert.equal(result, expected);
    });

    it('check if if 3! is 6 ', () => {
      //setup
      const input = 3;
      const expected = 6;
      
      //exercise
      const result = Calculate.factorial(input);
      
      //verify
      assert.equal(result, expected);
    });

    it('check if if 0! is 1', () => {
      //setup
      const input = 0;
      const expected = 1;
      
      //exercise
      const result = Calculate.factorial(input);
      
      //verify
      assert.equal(result, expected);
    });   
  });
});
