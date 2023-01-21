import { port } from '../server';
it('test port is 3000 or not', () => {
  expect(port).toEqual(3000);
});
