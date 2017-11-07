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
    describe('_.forEach', () => {
      it('it should iterate over elem', () => {
        const store = [];
        _.forEach([1, 2, 3], (elem, i, arr) => {
          store.push([elem, i]);
        });
        expect(store).to.deep.equal([[1,0], [2,1], [3,2]]);
      });
      it('it should work on objects', () => {
        const store = [];
        _.forEach({a:1, b:2, c:3}, (val, key, obj) => {
          store.push([val, key]);
        });
        expect(store).to.deep.equal([[1, 'a'], [2, 'b'], [3, 'c']]);
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




  });
})();
