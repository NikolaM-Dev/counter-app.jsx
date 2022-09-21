import { getHeroById } from './08-imp-exp';

export const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);

      hero ? resolve(hero) : reject(`Hero with id ${id} not found`);
    }, 1000);
  });
};
