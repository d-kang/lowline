/**
 * @Author: wiz
 * @Date:   11.14.2017 07:30pm
 * @Filename: test.array.js
 * @Last modified by:   wiz
 * @Last modified time: 11.14.2017 07:31pm
 */

(function() {
  'use strict';
  const { expect } = chai;
  const FILL_ME_IN = 'FILL_ME_IN';
  const FILL_ME_IN_ARR = [FILL_ME_IN];
  const FILL_ME_IN_FUNC = () => {};

  console.log('============//////////////==============');
  console.log(new Date().toLocaleTimeString());

  describe('Array', () => {
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

    describe('_.concat', () => {
      var array = [1];
      var other = _.concat(array, 2, [3], [[4]]);

      it('it should concat array', () => {
        expect(other).to.deep.equal([1, 2, 3, [4]]);
      });

      it('should not mutate the original array', () => {
        expect(array).to.deep.equal([1]);
      });
    });

    describe('_.difference', () => {
      describe('Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.', () => {
        it('should return the array items not found in the other array', (done) => {
          const result = _.difference([2, 1], [2, 3]);
          expect(result).to.deep.equal([1]);
        });
      });
    });
    describe('_.fill', () => {
      describe('', () => {
        it('Fills elements of array with value from start up to, but not including, end.', (done) => {
          var array = [1, 2, 3];
          expect(_.fill(array, 'a'));
          console.log(array);
          // => ['a', 'a', 'a']
          _.fill(Array(3), 2);
          // => [2, 2, 2]
          _.fill([4, 6, 8, 10], '*', 1, 3);
          // => [4, '*', '*', 10]
        });
      });
    });





  });
})();
