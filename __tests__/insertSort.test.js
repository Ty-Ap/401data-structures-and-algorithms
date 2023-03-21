const { insert, insertionSort } = require('../sorting/sort.js')

test('insert() should insert a value into a sorted array in the correct position', () => {
  const sorted = [1, 3, 5, 7];
  insert(sorted, 4);
  expect(sorted).toEqual([1, 3, 4, 5, 7]);

  insert(sorted, 0);
  expect(sorted).toEqual([0, 1, 3, 4, 5, 7]);

  insert(sorted, 8);
  expect(sorted).toEqual([0, 1, 3, 4, 5, 7, 8]);
});

test('insertionSort() should sort an unsorted array correctly', () => {
  const unsorted = [5, 3, 8, 1, 6];
  const sorted = insertionSort(unsorted);
  expect(sorted).toEqual([1, 3, 5, 6, 8]);

  const unsortedDescending = [5, 4, 3, 2, 1];
  const sortedDescending = insertionSort(unsortedDescending);
  expect(sortedDescending).toEqual([1, 2, 3, 4, 5]);

  const unsortedDuplicates = [4, 2, 4, 1, 3, 2];
  const sortedDuplicates = insertionSort(unsortedDuplicates);
  expect(sortedDuplicates).toEqual([1, 2, 2, 3, 4, 4]);
});