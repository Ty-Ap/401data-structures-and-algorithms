'use strict';

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }

  set(key, value) {
    let index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    let found = false;
    for (let pair of this.buckets[index]) {
      if (pair.key === key) {
        pair.value = value;
        found = true;
        break;
      }
    }

    if (!found) {
      this.buckets[index].push({ key, value });
    }
  }

  get(key) {
    let index = this.hash(key);
    if (this.buckets[index]) {
      for (let pair of this.buckets[index]) {
        if (pair.key === key) {
          return pair.value;
        }
      }
    }
    return null;
  }

  has(key) {
    return this.get(key) !== null;
  }

  keys() {
    let keys = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        for (let pair of bucket) {
          keys.push(pair.key);
        }
      }
    }
    return keys;
  }
}

 module.exports = HashTable;



