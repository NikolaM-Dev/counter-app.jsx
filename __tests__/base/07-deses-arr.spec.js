import { getArr } from '../../src/base/07-deses-arr';

describe('Tests on 07-deses-arr', () => {
  it('should return an array with a string & a number', () => {
    const [letters, numbers] = getArr();

    expect(letters).toBe('ABC');
    expect(numbers).toBe(123);

    expect(letters).toEqual(expect.any(String));
    expect(numbers).toEqual(expect.any(Number));
  });
});
