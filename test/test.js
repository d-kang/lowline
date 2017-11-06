const assert = require('assert');
const chai = require('chai');
const _ = require('../lowline');

const { expect } = chai;

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
      expect(_).to.deep.equal({});
    })
  })
})