# array-binary-search

## Challenge

The challenge of this problem is to implement a binary search algorithm on a sorted array of integers. Given a sorted array and a target value, the algorithm should return the index of the target value in the array, or -1 if the value is not found.

### Approach

The binary search algorithm works by repeatedly dividing the array in half until the target value is found. The algorithm begins by comparing the target value to the middle element of the array. If the target value is less than the middle element, the algorithm repeats the search on the left half of the array. If the target value is greater than the middle element, the algorithm repeats the search on the right half of the array. This process is repeated until the target value is found or until the array is exhausted.

### Example

Suppose we have the following sorted array of integers:

[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
We want to search for the target value 11. The binary search algorithm would proceed as follows:

The middle element of the array is 9. Since 11 is greater than 9, we search the right half of the array.

The middle element of the right half of the array is 13. Since 11 is less than 13, we search the left half of the right half of the array.

The middle element of the left half of the right half of the array is 11, which is the target value we are searching for. The algorithm returns the index of 11, which is 5.

![binary search wb](/assets/BinarySearch.png)
