'use strict';



const insert =(sorted,value)=>{
  let i= 0 ;
  while(value>sorted[i]){
    i++;
  }
  while(i<sorted.length){
    let temp = sorted[i];
    sorted[i] = value;
    value = temp;
    i++;
  }
  sorted.push(value);
  return sorted;
}

const insertionSort=(input)=>{
  let sorted = [];
  sorted[0] = input[0];
  for(let i =1;i< input.length;i++){
    insert(sorted,input[i]);
  }
  return sorted;
}

module.exports = {insertionSort, insert} 