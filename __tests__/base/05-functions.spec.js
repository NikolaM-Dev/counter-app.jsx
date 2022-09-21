import { getActiveUser, getUser } from '../../src/base/05-functions';

describe('Tests on 05-functions', () => {
  it('getUser should return a object', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const user = getUser();

    expect(user).toEqual(testUser);
  });

  it('getActiveUser should return a object with username Nikola', () => {
    const name = 'Nikola';
    const { username } = getActiveUser(name);

    expect(username).toEqual(name);
  });
});
