const HashTable = require('./hashTable');


test('Setting a key/value to the hashtable results in the value being in the data structure', () => {
  const table = new HashTable(1024);
  table.set('Ty', 'peepeepoopoo');
  expect(table.get('Ty')).toBe('peepeepoopoo');
});

test('Retrieving based on a key returns the value stored', () => {
  const table = new HashTable(1024);
  table.set('Belle', '💚');
  expect(table.get('Belle')).toBe('💚');
});

test('Successfully returns null for a key that does not exist in the hashtable', () => {
  const table = new HashTable(1024);
  expect(table.get('NonExistent')).toBeNull();
});

test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
  const table = new HashTable(1024);
  table.set('Ty', 'peepeepoopoo');
  table.set('Belle', '💚');
  table.set('Sadie', 'poopoopeepee');
  const keys = table.keys();
  expect(keys).toContain('Ty');
  expect(keys).toContain('Belle');
  expect(keys).toContain('Sadie');
});

test('Successfully handle a collision within the hashtable', () => {
  const table = new HashTable(2);
  table.set('Ty', 'peepeepoopoo');
  table.set('Belle', '💚');
  expect(table.has('Ty')).toBeTruthy();
  expect(table.has('Belle')).toBeTruthy();
});

test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
  const table = new HashTable(2);
  table.set('Ty', 'peepeepoopoo');
  table.set('Belle', '💚');
  expect(table.get('Ty')).toBe('peepeepoopoo');
});


