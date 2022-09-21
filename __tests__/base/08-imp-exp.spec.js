import { getHeroById, getHeroesByOwner } from '../../src/base/08-imp-exp';

describe('Tests on 08-imp-exp', () => {
  it('getHeroById should return a hero by id', () => {
    const id = 1;
    const hero = getHeroById(id);

    expect(hero).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC',
    });
  });

  it('getHeroById should return undefined if id not exists', () => {
    const id = 100;
    const hero = getHeroById(id);

    expect(hero).toBeUndefined();
  });

  it('getHeroesByOwner should return an array with DC heroes', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);
    const mockHeroes = [
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' },
    ];

    expect(heroes).toEqual(mockHeroes);
  });

  it('getHeroesByOwner should return an array with Marvel heroes', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);

    expect(heroes).toHaveLength(2);
  });
});
