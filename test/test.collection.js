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
        const store = [[1, 'a'], [2, 'b'], [3, 'c']];
        _.forEach({a:1, b:2, c:3}, (val, key, obj) => {
          return;
          store.push([val, key]);
        });
        expect(store).to.deep.equal([]);
      });

    });

    describe('', () => {
      it('', () => {

      });
      it('', () => {

      });
    });




  });
})();
