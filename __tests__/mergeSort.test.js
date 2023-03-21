const {mergeSort} = require('../sorting/mergeSort/mergeSort');

describe('mergeSort', () => {
  it('sorts an unsorted array of integers in ascending order', () => {
    const unsortedArray = [3, 5, 1, 4, 2];
    const expectedSortedArray = [1, 2, 3, 4, 5];
    expect(mergeSort(unsortedArray)).toEqual(expectedSortedArray);
  });

  //unstable algorithm technically
  it('sorts an unsorted array of integers with duplicates in ascending order', () => {
    const unsortedArray = [3, 5, 1, 4, 2, 1];
    const expectedSortedArray = [1, 1, 2, 3, 4, 5];
    expect(mergeSort(unsortedArray)).toEqual(expectedSortedArray);
  });

  it('returns an empty array when an empty array is passed as input', () => {
    const unsortedArray = [];
    const expectedSortedArray = [];
    expect(mergeSort(unsortedArray)).toEqual(expectedSortedArray);
  });

  it('does not modify an already sorted array', () => {
    const sortedArray = [1, 2, 3, 4, 5];
    expect(mergeSort(sortedArray)).toEqual(sortedArray);
  });
});