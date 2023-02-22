'use strict';


const {LinkedList, zipLists} = require('../linkedList');


//can i refeactor testlist into a global here?
describe('Linked List', ()=> {
  it('should instantiate and empty linked list', () => {
    const testList = new LinkedList();

    expect(testList.head).toBeNull();
  });

  it('should insert at beginning of empty list', ()=> {
    const testList = new LinkedList();
    testList.insert(true);

    expect(testList.head.value).toBeTruthy();
    expect(testList.head.next).toBeNull();
  });

  it('should insert at beginning of populated list', ()=>{
    const testList = new LinkedList();
    testList.insert('something else');
    testList.insert('something');

    expect(testList.head.value).toEqual('something');
    expect(testList.head.next.value).toEqual('something else');
    expect(testList.head.next.next).toBeNull();
  });

  
  it('should display as string', ()=> {
    const testList = new LinkedList();
    testList.insert('val1');
    testList.insert('val2');

    const linkedString = testList.toString();

    expect(linkedString).toEqual('{ val2 } -> { val1 } -> NULL');
  });

  it('should know when value is included in list', () => {

    const linked = new LinkedList();
    linked.insert('metalcore');
    linked.insert('deathmetal');

    expect(linked.includes('deathmetal')).toBe(true);
  });

  it('should know when value is not included in list', () => {

    const linked = new LinkedList();
    linked.insert('metalcore');
    linked.insert('deathmetal');

    expect(linked.includes('country')).toBe(false);
  });

  it('should return the nth from the end', ()=> {
    const linked = new LinkedList();
    linked.insert('metalcore');
    linked.insert('deathmetal');

    linked.NthFromTheEnd(1);

    expect(linked.head.value).toEqual('deathmetal');
  });

  it ('should append to end', () => {
    const linked = new LinkedList();
    linked.insert('metalcore');
    linked.insertAfter('metalcore', 'end');

    expect(linked.head).toBeTruthy();
  })

  it('should merge two linked lists in alternating fashion', () => {
    const linked = new LinkedList();
    const linked2 = new LinkedList();
    linked.insert('metalcore2');
    linked.insert('metalcore');
    linked2.insert('mosh2');
    linked2.insert('mosh');
    const zipped = zipLists(linked, linked2);

    expect(zipped.head.value).toEqual('metalcore');
    expect(zipped.head.next.value).toEqual('mosh');
    expect(zipped.head.next.next.value).toEqual('metalcore2');
    expect(zipped.head.next.next.next.value).toEqual('mosh2');
    
  })
});

