let chai = require('chai');
let assert = chai.assert;
let getSurveyResults = require('../app/main.js');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
