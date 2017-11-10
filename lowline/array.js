(function() {
  'use strict';
  window._ = {};

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
    return _.filter(array, elem => Boolean(elem));
  };

  _.concat = (...args) => {
    return _.reduce(args, (acc, next, i, arr) => {
      if (Array.isArray(next)) {
        acc.push(...next);
      } else {
        acc.push(next);
      }
      return acc;
    }, []);
  };

})();
