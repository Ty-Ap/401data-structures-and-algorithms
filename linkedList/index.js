'use strict';

class LinkedList {
  constructor() {
    this.head= null;
    this.length = null;
  }

  insert(value){
    const prevHead = this.head;
    this.head= new Node(value);
    this.head.next = prevHead;
  }

  insertAfter(value, newValue){
    let current = this.head;
    while(current){
      if(current.value=== value){
        let newNext = current.next;
        current.next = new Node(newValue, newNext);
        this.length++;
        return this.length;
      } else {
        current= current.next;
      }
    }
  }

  
  

  // insertBefore(value,newValue){
  //   //adds a new node with the given new value immediately before the first node that has the value specified

  // }

  // insertAfter(value,newValue){
  //   // adds a new node with the given new value immediately after the first node that has the value specified

  // }


  toString() {
    let current = this.head;
    let text = '';

    while(current){
      text += `{ ${current.value} } ->`;

      current = current.next;
    }
    return text + 'NULL';
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}




// append
// arguments: new value
// 
// insert before
// arguments: value, new value
// 
// insert after
// arguments: value, new value
//
// for (let i=0; i<LinkedList.length;i++)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = LinkedList;