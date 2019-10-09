const all = function(num) {
  const result = num * num;
  return result;
};

const quantity = function(num) {
  const value = all(num);
  const result = Array(value)
    .fill({})
    .map((obj, index) => ({ id: index, name: index + 1, bg: 'white' }));
  return result;
};
export default quantity;
