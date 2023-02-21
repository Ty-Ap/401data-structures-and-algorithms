'use strict';


const LinkedList = require('../linkedList');

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

    expect(linkedString).toEqual('{ val2 } ->{ val1 } ->NULL');
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
    expect(linked.NthFromTheEnd('')).toEqual('exception');
  });

  it ('should append to end', () => {
    const linked = new LinkedList();
    linked.insert('metalcore');
    linked.insertAfter('metalcore', 'end');

    expect(linked.head).toEqual('end');
  })
});

