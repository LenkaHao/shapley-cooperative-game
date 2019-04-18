const permutator = inputArr => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
};

const powerSet = array => {
  const result = [];
  result.push([]);

  for (let i = 1; i < 1 << array.length; i++) {
    const subset = [];
    for (let j = 0; j < array.length; j++)
      if (i & (1 << j)) subset.push(array[j]);

    result.push(subset);
  }

  return result;
};

module.exports = {
  permutator,
  powerSet,
};
