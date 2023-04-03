const minMax = require('./minMax.js');

describe('minMax', () => {
  it('should return the difference between the largest and smallest values', () => {
    expect(minMax([1, 2, 3, 4, 5])).toBe(4);
    expect(minMax([2334454, 5])).toBe(2334449);
    expect(minMax([1])).toBe(0);
  });
});