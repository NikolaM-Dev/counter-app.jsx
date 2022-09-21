import { getGreeting } from '../../src/base/02-template-string';

describe('Tests on 02-template-string', () => {
  it('getGreeting should return "Hello Nikola"', () => {
    const name = 'Nikola';
    const message = getGreeting(name);

    expect(message).toBe(`Hello ${name}`);
  });
});
