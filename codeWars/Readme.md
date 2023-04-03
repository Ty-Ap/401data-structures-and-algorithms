# MinMax

## Problem Domain

Write a function that returns both the minimum and maximum number of the given list/array.

## Approach & Efficiency

The implemented algorithm iterates through the input array and compares each element to the current minimum and maximum values. If the current element is less than the current minimum, it becomes the new minimum. If the current element is greater than the current maximum, it becomes the new maximum. The algorithm returns the range of the arrays values.

## Solution & UML

![uml](../assets/exported-freehand.png%20(4).png)

The time complexity of the minMax function is O(n), where n is the length of the input array. This is because the function loops through each element of the array exactly once, and performs a constant amount of work for each element.

The space complexity of the minMax function is O(1), because the function only uses a constant amount of additional space to store the variables max and min, regardless of the size of the input array. Therefore, the minMax function has a linear time complexity and constant space complexity.
