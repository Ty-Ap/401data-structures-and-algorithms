const squareChecker= require ('./Square');

describe('Square', () => {
  it('should return true when values are a square', () => {
    expect(squareChecker(8, 2)).toBe(true);
  });
  it('should return false when values are not a square', () => {
    expect(squareChecker(8, 3)).toBe(false);
  });
  it('should return false when values are negative or 0', () => {
    expect(squareChecker(0, 0)).toBe(false);
    expect(squareChecker(-1, -1)).toBe(false);
  });
});

