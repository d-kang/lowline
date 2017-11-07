// const assert = require('assert');
// const chai = require('chai');
// const _ = require('../lowline');

const { expect } = chai;
const FILL_ME_IN = 'FILL_ME_IN';
const FILL_ME_IN_ARR = [FILL_ME_IN];
const FILL_ME_IN_FUNC = () => {};

console.log('============//////////////==============');
console.log(new Date().toLocaleTimeString());
const xxdescribe = () => {};

xxdescribe('', () => {
  xxdescribe('', () => {
    const testFunc = FILL_ME_IN_FUNC;
    const params1 = FILL_ME_IN_ARR;
    const output1 = FILL_ME_IN_ARR;
    const params2 = FILL_ME_IN_ARR;
    const output2 = FILL_ME_IN_ARR;
    const test = {
      e1: testFunc(...params1),
      a1: output1,
      e2: testFunc(...params2),
      a2: output2
    };

    it('it should be a function', () => {
      expect(testFunc).to.be.a('function');
    });
    it('it should return an array', () => {
      expect(test.a1).to.be.an('array');
      expect(test.a2).to.be.an('array');
    });
    it('it should return an array', () => {
      expect(test.a1).to.be.an('array');
      expect(test.a2).to.be.an('array');
    });
    it('it should have correct length', () => {
      expect(test.a1.length).to.equal(3);
      expect(test.a2.length).to.equal(2);
    });
    it('it should remove falsey values', () => {
      expect(test.a1).to.deep.equal(test.e1);
      expect(test.a2).to.deep.equal(test.e2);
    });

  });
});

xxdescribe('_', () => {
  xxdescribe('_', () => {
    it('should import _ successfully', () => {
      expect(_).to.not.equal(undefined);
    });
    it('_ should be an object', () => {
      expect(_).to.be.a('object');
    });
  });
});


describe('_.chunk', () => {
  describe(' Creates an array of elements split into groups the length of size. If array can\'t be split evenly, the final chunk will be the remaining elements.', () => {
    const testFunc = _.chunk;
    const params1 = [['a', 'b', 'c', 'd'], 2];
    const output1 = [['a', 'b'], ['c', 'd']];
    const params2 = [['a', 'b', 'c', 'd'], 3];
    const output2 = [['a', 'b', 'c'], ['d']];
    const test = {
      e1: testFunc(...params1),
      a1: output1,
      e2: testFunc(...params2),
      a2: output2
    };

    it('it should be a function', () => {
      expect(testFunc).to.be.a('function');
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
});



describe('_.compact', () => {
  describe('Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.', () => {
    const testFunc = _.compact;
    const params1 = [0, 1, false, 2, '', 3];
    const output1 = [1, 2, 3];
    const params2 = [false, null, undefined, 'hello', 42, NaN];
    const output2 = ['hello', 42];
    const test = {
      e1: testFunc(params1),
      a1: output1,
      e2: testFunc(params2),
      a2: output2
    };

    it('it should be a function', () => {
      expect(testFunc).to.be.a('function');
    });
    it('it should return an array', () => {
      expect(test.a1).to.be.an('array');
      expect(test.a2).to.be.an('array');
    });
    it('it should return an array', () => {
      expect(test.a1).to.be.an('array');
      expect(test.a2).to.be.an('array');
    });
    it('it should have correct length', () => {
      expect(test.a1.length).to.equal(3);
      expect(test.a2.length).to.equal(2);
    });
    it('it should filter falsey values', () => {
      expect(test.a1).to.deep.equal(test.e1);
      expect(test.a2).to.deep.equal(test.e2);
    });

  });
});
