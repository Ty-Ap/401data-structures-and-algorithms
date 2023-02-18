'use strict';

class LinkedList {
  constructor() {
    this.head= null;
  }

  insert(value){
    const prevHead = this.head;
    this.head= new Node(value);
    this.head.next = prevHead;
  }

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

// for (let i=0; i<LinkedList.length;i++)

class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;