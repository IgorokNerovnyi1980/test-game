const all = function(num) {
  const result = num * num;
  return result;
};

const quantity = function(num) {
  const value = all(num);
  let result = [];
  for (let i = 0; i < value; i++) {
    result.push(i);
  }
  return result;
};
export default quantity;
