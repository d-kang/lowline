const assert = require('assert');
const _ = require('../lowline');

console.log('============//////////////==============');
console.log(new Date().toLocaleTimeString());
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    })
  })
})

console.log('_', JSON.stringify(_))
describe('_', function() {
  describe('_', function() {
    it('should import _ successfully', function() {
      assert.equal(_, 'hello world')
    })
  })
})