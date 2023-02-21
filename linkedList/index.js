'use strict';



class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insert(value) {
    const prevHead = this.head;
    this.head = new Node(value);
    this.head.next = prevHead;
    this.length+=1;
  }

  insertAfter(value, newValue) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        let newNext = current.next;
        current.next = new Node(newValue, newNext);
        this.length+=1;
        return this.length;

      } else {
        current = current.next;
      }
    }
  }

  NthFromTheEnd(n){
    let current = this.head;
    this.head.next = current;
    let position= this.length - n;
    if(position<0||n===''){
      return 'exception';
    }
    for(let i=0; i<=position;i++){
      current = current.next;
    } 
    return current.value;
  }


  // (this.length - n);

  // insertBefore(value,newValue){
  //   //adds a new node with the given new value immediately before the first node that has the value specified

  // }

  // insertAfter(value,newValue){
  //   // adds a new node with the given new value immediately after the first node that has the value specified

  // }


  toString() {
    let current = this.head;
    let text = '';

    while (current) {
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