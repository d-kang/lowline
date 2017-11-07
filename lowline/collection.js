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
    const store = [];
    _.forEach(collection, function(item, index, array) {
      if (cb(item, index, array)) {
        store.push(item);
      }
    });
    return store;
  };

})();
