(function() {
  'use strict';

  _.forEach = (collection, cb) => {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        let item = collection[i];
        cb(item, i, collection);
      }
    } else {
      for (let key in collection) {
        const value = collection[key];
        cb(value, key, collection);
      }
    }
  };

  _.filter = (collection, cb) => {
    let store;
    if (typeof collection.length === 'number') {
      store = [];
      _.forEach(collection, function(item, index, array) {
        if (cb(item, index, array)) {
          store.push(item);
        }
      });
    } else {
      store = {};
      for (let key in collection) {
        const val = collection[key];
        if (cb(val, key, collection)) {
          store[key] = val;
        }
      }
    }

    return store;
  };

})();
