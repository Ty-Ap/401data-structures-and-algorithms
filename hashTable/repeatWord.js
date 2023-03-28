

function firstRepeatedWord(sentence){
  let words= sentence.split(' ');

  let frequency = {};
  for (let i =0; i< words.length; i++){
    let word = words[i];
    if(!frequency[word]){
      frequency[word] = 1;
    }else {
      frequency[word]++;
    }
  }
  for(let i=0; i < words.length; i++){
    let word = words[i];
    
    if(frequency[word] > 1) {
      return word;
    }
  }
}


module.exports = firstRepeatedWord;



// same thing but done with hashtable 

// import HashTable from "./hashTable";

// const HashTable = require('./HashTable');

// function firstRepeatedWord(sentence) {
//   const words = sentence.split(' ');
//   const frequency = new HashTable(words.length);
  
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
    
//     if (frequency.has(word)) {
//       return word;
//     } else {
//       frequency.set(word, true);
//     }
//   }
  
//   return undefined;
// }
