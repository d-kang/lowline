const _ = {};

_.chunk = (array, size) => {
  const len = array.length;
  const store = [];
  for (let i = 0; i < len; i += size) {
    const chunk = array.slice(i, i + size);
    store.push(chunk);
  }
  return store;
};

_.compact = () => {};

module.exports = _;