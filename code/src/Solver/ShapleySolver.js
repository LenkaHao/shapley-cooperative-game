import { permutator } from './util.js';
// const { permutator } = require('./util');

// const keys = ['a', 'b', 'c'];

// const values = {
//   a: 80,
//   b: 56,
//   c: 70,
//   ab: 80,
//   ac: 85,
//   bc: 72,
//   abc: 90,
// };

const shapleySolver = (keys, values) => {
  const permutations = permutator(keys);
  const orderCosts = permutations.map(order => {
    let cost = 0;
    const orderCost = [...keys];
    order.forEach((key, i) => {
      const valueKey = order
        .slice(0, i + 1)
        .sort()
        .join('');
      const newCost = values[valueKey];
      orderCost[orderCost.indexOf(key)] = newCost - cost;
      cost = newCost;
    });

    return orderCost;
  });

  const shapleyValues = [];

  for (let i = 0; i < keys.length; i += 1) {
    let value = 0;
    for (let j = 0; j < orderCosts.length; j += 1) {
      value += orderCosts[j][i];
    }
    shapleyValues[i] = value / orderCosts.length;
  }

  return shapleyValues;
};

export default shapleySolver;
