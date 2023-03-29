const HashTable = require('../hashTable/hashTable');
const leftJoin = require('./leftJoin');

describe('leftJoin', () => {
  it('should perform a left join on two hash maps', () => {
    const synonyms = new HashTable(10);
    const antonyms = new HashTable(10);

    synonyms.set('happy', 'joyful');
    synonyms.set('sad', 'unhappy');
    synonyms.set('angry', 'irate');

    antonyms.set('happy', 'sad');
    antonyms.set('sad', 'happy');
    antonyms.set('calm', 'anxious');

    const result = leftJoin(synonyms, antonyms);

    expect(result.get('happy')).toEqual({ synonym: 'joyful', antonym: 'sad' });
    expect(result.get('sad')).toEqual({ synonym: 'unhappy', antonym: 'happy' });
    expect(result.get('angry')).toEqual({ synonym: 'irate', antonym: null });
    expect(result.get('calm')).toBeNull();
  });
});
