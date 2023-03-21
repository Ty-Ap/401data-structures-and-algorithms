# mergeSort (timsort)

## psuedocode

ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2 
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left

## step-through

Summary
This pseudocode is describing the Merge Sort algorithm, which is a sorting algorithm that works by dividing the input array into two halves, recursively sorting each half, and then merging the sorted halves back together.

Line 9-17
The main algorithm, Mergesort, takes an array as an input and first checks if the length of the array is greater than 1. If it is, the algorithm divides the array into two halves, left and right, and recursively calls Mergesort on each half. This continues until each subarray has a length of 1 or 0, at which point they are considered sorted. Finally, the Merge function is called to merge the left and right subarrays together into a single sorted array.

Line 19-22
The Merge function takes in three arrays as inputs: the left subarray, the right subarray, and the original array that the subarrays came from. The function initializes three variables i, j, and k to 0, which are used as indices to iterate through the left, right, and merged arrays, respectively.

Line 24-32
The function then iterates through the left and right arrays using a while loop, comparing the values at each index i and j. If the value at index i in the left array is less than or equal to the value at index j in the right array, the value at index k in the merged array is set to the value at index i in the left array, and i is incremented. Otherwise, the value at index k in the merged array is set to the value at index j in the right array, and j is incremented. In either case, k is also incremented.

Line 33-End
Once the loop has finished, the function checks if all elements in the left or right array have been added to the merged array. If there are remaining elements in the left array, they are added to the end of the merged array. If there are remaining elements in the right array, they are added to the end of the merged array. The resulting merged array is now sorted and contains all the elements from the original left and right subarrays.
