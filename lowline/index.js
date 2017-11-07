(function() {
  'use strict';
  window._ = {};
  // module = module || {};
  _.forEach = (collection, cb) => {
    for (let i = 0; i < collection.length; i++) {
      let item = collection[i];
      cb(item, i, collection);
    }
  };

  _.filter = (collection, cb) => {
    const store = [];
    _.forEach(collection, function(item, index, array) {
      if (cb(item, index, array)) {
        store.push(item);
      }
    });
    return store;
  };

  _.chunk = (array, size) => {
    const len = array.length;
    const store = [];
    for (let i = 0; i < len; i += size) {
      const chunk = array.slice(i, i + size);
      store.push(chunk);
    }
    return store;
  };

  _.compact = (array) => {
    console.log('array', array)
    return _.filter(array, elem => Boolean(elem));
  };

})();
