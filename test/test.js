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
    });
  });
});

describe('_', () => {
  describe('_', () => {
    it('should import _ successfully', () => {
      expect(_).to.not.equal(undefined);
    });
    it('_ should be an object', () => {
      expect(_).to.be.a('object');
    });
  });
});


describe('_.chunk', () => {
  const expected = _.chunk(['a', 'b', 'c', 'd'], 2);
  const actual = [['a', 'b'], ['c', 'd']];

  it('it should be a function', () => {
    expect(_.chunk).to.be.a('function');
  });
  it('it should return an array', () => {
    expect(expected).to.be.an('array');
  });
  it('it should return an array of arrays', () => {
    expect(expected[0]).to.be.an('array');
    expect(expected[1]).to.be.an('array');
  });
  it('it should have a length of 2', () => {
    expect(expected.length).to.equal(2);
  });
  it('it should chunk arrays into groups', () => {
    expect(expected).to.deep.equal(actual);
  });
  it('it should chunk arrays into groups', () => {
    expect(expected).to.deep.equal(actual);
  });
});