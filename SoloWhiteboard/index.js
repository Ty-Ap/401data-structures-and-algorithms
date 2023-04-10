function greatestDistance(arr) {
  const addresses = {};
  const midpoint = Math.floor(arr.length / 2);

  // loop forward from beginning to midpoint
  for (let i = 0; i < midpoint; i++) {
    addresses[arr[i]] = i;
  }

  // loop backward from end to midpoint
  for (let j = arr.length - 1; j >= midpoint; j--) {
    addresses[arr[j]] = j;
  }

  // find the highest difference between matching values
  let maxDiff = 0;
  for (const value in addresses) {
    if (addresses.hasOwnProperty(value) && typeof addresses[value] === 'number') {
      const diff = Math.abs(addresses[value] - midpoint);
      if (diff > maxDiff) {
        maxDiff = diff;
      }
    }
  }

  return maxDiff;
}
