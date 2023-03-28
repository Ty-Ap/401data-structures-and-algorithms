import firstRepeatedWord from './repeatWord';

const assert = require('assert');

describe('firstRepeatedWord', function() {
  it('should return the first repeated word in a sentence', function() {
    const sentence = 'the quick brown fox jumps over the lazy dog dog';
    const result = firstRepeatedWord(sentence);
    assert.strictEqual(result, 'dog');
  });

  it('should return undefined when there are no repeated words', function() {
    const sentence = 'the quick brown fox jumps over the lazy dog';
    const result = firstRepeatedWord(sentence);
    assert.strictEqual(result, undefined);
  });
});