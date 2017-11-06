const assert = require('assert');
const _ = require('../lowline');

console.log('============//////////////==============');
console.log(new Date().toLocaleTimeString());
describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    })
  })
})

describe('_', () => {
  describe('_', () => {
    it('should import _ successfully', () => {
      assert.equal(_, 'hello world');
    })
  })
})