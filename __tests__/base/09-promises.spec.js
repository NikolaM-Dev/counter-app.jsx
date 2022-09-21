import { getHeroByIdAsync } from '../../src/base/09-promises';

describe('Tests on 09-promises', () => {
  it('getHeroByIdAsync should return a hero', async () => {
    const id = 1;
    const batman = { id, name: 'Batman', owner: 'DC' };

    const hero = await getHeroByIdAsync(id);

    expect(hero).toEqual(batman);
  });

  it('getHeroByIdAsync should return "Hero with id 100 not found"', async () => {
    const id = 100;
    const errorMessage = `Hero with id ${id} not found`;

    try {
      await getHeroByIdAsync(id);
    } catch (error) {
      expect(error).toMatch(errorMessage);
    }
  });
});
