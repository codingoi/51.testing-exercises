const assert = require('assert');
const Rooster = require('../index.js');

describe('Rooster', () => {
  describe('.announceDown', () => {
    it('returns a rooster call', () => {
        //setup
        const expected = 'cock-a-doodle-doo!';
        //exercise
        const result = Rooster.announceDown();
        //verify
        assert.equal(expected, result);
        //Teardown
    });
  });
  //+++++++++++++++++++++++
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
        //setup
        const expected = '4';
        const input = 4;
        //exercise
        const result = Rooster.timeAtDawn(input);
        //verify
        assert.strictEqual(expected, result);
        //Teardown
    });
    //-----------------------------------------
    it('returns its argument as a string when input is higher than 23', () => {
        //setup
        const expected = RangeError;
        const input = 24;
        //exercise

        //verify
        assert.throws(() => {
          Rooster.timeAtDawn(input);
          }, expected)
        //Teardown
      
    });
    //-------------------------------------

    it('returns its argument as a string when input is lower than 0', () => {
        //setup
        const expected = RangeError;
        const input = -1;
        //exercise

        //verify
        assert.throws(() => {
          Rooster.timeAtDawn(input);
          }, expected)
        //Teardown
      
    });
  });
});
