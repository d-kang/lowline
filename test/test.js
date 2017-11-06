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
  const test = {
    e1: _.chunk(['a', 'b', 'c', 'd'], 2),
    a1: [['a', 'b'], ['c', 'd']],
    e2: _.chunk(['a', 'b', 'c', 'd'], 3),
    a2: [['a', 'b', 'c'], ['d']]
  };

  it('it should be a function', () => {
    expect(_.chunk).to.be.a('function');
  });
  it('it should return an array', () => {
    expect(test.a1).to.be.an('array');
    expect(test.a2).to.be.an('array');
  });
  it('it should return an array of arrays', () => {
    expect(test.a1[0]).to.be.an('array');
    expect(test.a1[1]).to.be.an('array');
    expect(test.a2[0]).to.be.an('array');
    expect(test.a2[1]).to.be.an('array');
  });
  it('it should have a length of 2', () => {
    expect(test.a1.length).to.equal(2);
    expect(test.a2.length).to.equal(2);
  });
  it('it should chunk arrays into groups', () => {
    expect(test.a1).to.deep.equal(test.e1);
    expect(test.a2).to.deep.equal(test.e2);
  });
});