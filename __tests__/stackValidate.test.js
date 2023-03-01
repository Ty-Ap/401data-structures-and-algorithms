const validateBrackets = require('../stack/queue');
const { Stack } = require('../stack/queue')

const stack = new Stack();


describe('validateBrackets', () => {
  test('should return true for balanced brackets', () => {
    

    expect(stack.validateBrackets('(())[]{}')).toBe(true);
  });

  test('should return false for unbalanced brackets', () => {
    expect(validateBrackets('([)]')).toBe(false);
  });

  test('should return true for empty string', () => {
    expect(stack.validateBrackets('')).toBe(true);
  });

  test('should return false for string with only opening brackets', () => {
    expect(stack.validateBrackets('(()')).toBe(false);
  });

  test('should return false for string with only closing brackets', () => {
    expect(stack.validateBrackets('())')).toBe(false);
  });
});