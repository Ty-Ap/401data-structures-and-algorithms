const validateBrackets = require('../stack/queue');
const { Stack } = require('../stack/queue')

const stack = new Stack();


describe('validateBrackets', () => {
  test('should return true for balanced brackets', () => {
    

    expect(stack.validateBrackets('(())[]{}')).toBe(true);
  });



  test('should return true for empty string', () => {
    expect(stack.validateBrackets('')).toBe(true);
  });


});