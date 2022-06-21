const index = require('../index');
const assert = require('assert');

describe('The sum function', function() {
    it('should return the sum of 3, 5 and 9', () => {
      assert.equal(17, index.AddNumbers(3, 5, 9));
    })
  })