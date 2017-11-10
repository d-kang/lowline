(function() {
  'use strict';

  const {expect} = chai;

  describe('Function', () => {

    describe('', () => {
      var saves = ['profile', 'settings'];
      var done = _.after(saves.length, function() {
        console.log('done saving!');
      });

      _.forEach(saves, function(type) {
        asyncSave({'type': type, 'complete': done});
      });
      // => Logs 'done saving!' after the two async saves have completed.
    });



    describe('', () => {});
    describe('', () => {});
    describe('', () => {});
  });
})();
