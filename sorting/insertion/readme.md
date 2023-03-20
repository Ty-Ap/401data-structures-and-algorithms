# insertion step through

## provided Pseudocode

Insert(int[] sorted, int value)
  initialize i to 0
  WHILE value > sorted[i]
    set i to i + 1
  WHILE i < sorted.length
    set temp to sorted[i]
    set sorted[i] to value
    set value to temp
    set i to i + 1
  append value to sorted

InsertionSort(int[] input)
  LET sorted = New Empty Array
  sorted[0] = input[0]
  FOR i from 1 up to input.length
    Insert(sorted, input[i])
  return sorted

### step through

The above psuedo code consists of two functions ; Insert, and InsertionSort, and shows us a rough algorithm for performing aforementioned operations on an array.

#### InsertionSort(int[] input) starts off by creating an empty array called sorted

1. This array will store the sorted elements from the input parameter.
2. Assign the first element of the input array to the first element of the sorted array.
3. Iterate through the input array, starting from the second element (index 1) up to the last element.
4. For each element in the input array, call the Insert() function to insert the current element into its proper position in the sorted array.
5. Return the sorted array after processing all elements of the input array.

#### Insert(int[] sorted, int value)

1. Initialize an index variable i to 0.
2. Compare the given value to the element at the index i in the sorted array. If value is greater than the element, increment i and continue the comparison with the next element in the sorted array. Repeat this process until value is less than or equal to the element at index i or i exceeds the array bounds.
3. Starting from index i, iterate through the remaining elements in the sorted array. For each element:

- Store the current element at index i in a temporary variable temp.
- Set the element at index i in the sorted array to the value.
- Update the value with the value stored in the temporary variable temp.
- Increment i to process the next element in the sorted array.

1. When the end of the sorted array is reached, append the final value of temp to the sorted array.

#### sample

for instance; say we have an array with the following values, [8,4,23,42,16,15] , running our functions to add a value of 9 would leave us a sorted array(ascending) of [4,8,9,15,16,23,42]
