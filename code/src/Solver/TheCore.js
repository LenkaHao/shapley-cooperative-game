import { powerSet } from './util.js';

export const coreInitializer = keys => {
  const setKeys = powerSet(keys);
  setKeys.shift();

  const grandCoalition = {};
  keys.forEach(key => (grandCoalition[key] = 0));

  const sets = setKeys.map(keys => {
    const set = new Set();
    const values = { ...grandCoalition };
    keys.forEach(key => {
      set.add(key);
    });
    return { set: [...set], values };
  });

  return sets;
};

// Computes total value of values that are in both sets
const computeSetValue = (set, values, parentSet) => {
  let value = 0;
  set.forEach(key => {
    if (parentSet.indexOf(key) !== -1) value += values[key];
  });

  return value;
};

export const coreSolver = keyObjects => {
  const sol = Object.entries(keyObjects).map(([keyCombined, current]) => {
    const { set, values } = current;

    // Compute set value
    let isCore = true;

    // Loop over all sets and check core condition;
    Object.values(keyObjects).forEach(A => {
      if (
        computeSetValue(A.set, values, set) <
        computeSetValue(A.set, A.values, set)
      )
        isCore = false;
    });
    return { keyCombined, isCore };
  });

  return sol;
};
