const HashTable = require('../hashTable/hashTable');

function leftJoin(hashMap1, hashMap2) {
  const result = new HashTable(hashMap1.size);

  for (const key of hashMap1.keys()) {
    const synonym = hashMap1.get(key);
    const antonym = hashMap2.has(key) ? hashMap2.get(key) : null;

    result.set(key, { synonym, antonym });
  }

  return result;
}

module.exports = leftJoin;
