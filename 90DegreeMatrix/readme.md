# uml

![uml](../assets/exported-freehand.png%20(6).png)

## rotateMatrix

The rotateMatrix function rotates a square matrix (2 x 2 / 3 x 3 / 4 x 4, etc.) by 90 degrees clockwise. It takes a matrix as an input and returns the rotated matrix.

## Usage

To use the rotateMatrix function, simply call it with a square matrix as the input

## Algorithm

The rotateMatrix function uses the following algorithm to rotate the input matrix by 90 degrees clockwise:

Transpose the matrix (swap rows and columns).
Reverse each row of the transposed matrix.

## Time and Space Complexity

The time complexity of the rotateMatrix function is O(n^2), where n is the length of the input matrix. The space complexity of the function is O(1), because we modify the input matrix in-place without creating any new data structures.
