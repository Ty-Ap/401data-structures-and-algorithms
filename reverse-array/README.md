# reverse array

given that its late, and I'm winded, I'm
going to do this quick and easy with no regard to efficiency.

## Problem Doamain

Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.
input=array
output=array but different

### test cases

make [1,2,3] into [3,2,1]

#### Algorithm

- create function that accepts array as input
- put the front half of array to back of array
- put end where front was
- return array

function reverseArray(arr){
  let newArr=[];
  for(let i = arr.length -1; i >=0; i--){
    newArr.push(arr[i]);
  }

};

![uml](../assets/reverseArray.png)
