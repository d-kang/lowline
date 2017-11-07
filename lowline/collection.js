(function() {
  'use strict';

  _.each = (collection, cb) => {
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

  _.map = (collection, cb) => {
    if (Array.isArray(collection)) {
      return _.reduce(collection, (acc, elem, index, arr) => {
        acc[index] = cb(elem, index, arr);
        return acc;
      }, []);
    } else {
      return _.reduce(collection, (acc, val, key, obj) => {
        acc.push(cb(val, key, obj));
        return acc;
      }, []);
    }
  };

  _.filter = (collection, cb) => {
    let store;
    if (typeof collection.length === 'number') {
      store = [];
      _.each(collection, function(item, index, array) {
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

  _.reduce = (collection, cb, acc) => {
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        const elem = collection[i];
        if (acc === undefined) {
          acc = elem;
        } else {
          acc = cb(acc, elem, i, collection);
        }
      }
    } else {
      for (var key in collection) {
        const val = collection[key];
        if (acc === undefined) {
          acc = val;
        } else {
          acc = cb(acc, val, key, collection);
        }
      }
    }
    return acc;
  };

})();
