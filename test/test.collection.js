// describe('', () => {})

// describe('', () => {
//   it('', () => {
//
//   });
//   it('', () => {
//
//   });
// });
(function() {
  'use strict';

  const { expect } = chai;
  describe('Collection', () => {
    describe('_.each', () => {
      it('it should iterate over elem', () => {
        const store = [];
        _.each([1, 2, 3], (elem, i, arr) => {
          store.push([elem, i]);
        });
        expect(store).to.deep.equal([[1,0], [2,1], [3,2]]);
      });
      it('it should work on objects', () => {
        const store = [];
        _.each({a:1, b:2, c:3}, (val, key, obj) => {
          store.push([val, key]);
        });
        expect(store).to.deep.equal([[1, 'a'], [2, 'b'], [3, 'c']]);
      });
    });

    describe('_.map', () => {
      it('it should map arrays', () => {
        const result = _.map([1, 2, 3], (elem, i, arr) => elem + 2);
        expect(result).to.deep.equal([3, 4, 5]);
      });
      it('it should return an array', () => {
        const result = _.map({a:1, b:2, c:3}, (val, key, obj) => val + 2);
        expect(result).to.be.an('array');
      });
      it('it should map objects', () => {
        const result = _.map({a:1, b:2, c:3}, (val, key, obj) => val + 2);
        expect(result).to.deep.equal([3, 4, 5]);
      });
    });

    describe('_.filter', () => {
      it('it should filter arrays', () => {
        const result = _.filter([-2,-1,0,1,2,3,4,5], (e,i,a) => e > 0 && i % 2 === 0);
        expect(result).to.deep.equal([2, 4]);
      });
      it('it should filter objects', () => {
        const result = _.filter({a:1, ONE: 2}, (e,i,a) => e > 0 && i.toLowerCase() === i);
        expect(result).to.deep.equal({a: 1});
      });
    });

    describe('_.reduce', () => {
      it('it should reduce arrays', () => {
        const result = _.reduce([1,2,3,4,5], (acc, curr, i, arr) => {
          return acc + curr;
        }, 0);
        expect(result).to.equal(15);
      });
      it('it should reduce arrays with no inital val', () => {
        const result = _.reduce([1,2,3,4,5], (acc, curr, i, arr) => {
          return acc + curr;
        }, 0);
        expect(result).to.equal(15);
      });
      it('it should reduce objects', () => {
        const result = _.reduce({a:1, b:2, c:3, d:4}, (acc, curr, key, arr) => {
          return acc + curr;
        });
        expect(result).to.equal(10);
      });
      it('it should reduce objects with no initial val', () => {
        const result = _.reduce({a:1, b:2, c:3, d:4}, (acc, curr, key, arr) => {
          return acc + curr;
        });
        expect(result).to.equal(10);
      });
    });

  });
})();
