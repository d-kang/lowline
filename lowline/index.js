const _ = {};

_.chunk = (collection, num) => {
  const len = collection.length;
  const store = [];
  for (let i = 0; i < len; i += num) {
    const chunk = collection.slice(i, i + num);
    store.push(chunk);
  }
  return store;
};


module.exports = _;