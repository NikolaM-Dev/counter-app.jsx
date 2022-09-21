import { getGIF } from '../../src/base/11-async-await';

describe('Tests on 11-async-await', () => {
  it('should to return the url of the gif', async () => {
    try {
      const url = await getGIF();

      expect(url).toBeTruthy();
      expect(url).toEqual(expect.any(String));
    } catch (error) {
      expect(error.message).toMatch('GIF not found');
    }
  });
});
