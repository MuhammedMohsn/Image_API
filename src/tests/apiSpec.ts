import supertest from 'supertest';
import app from '../server';
const request = supertest(app);
describe('Test endpoint responses', () => {
  it('tests the  main route endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
  describe('tests the  images route endpoint', () => {
    it('tests the images route endpoint when valid query parmeters and existing image for images route', async () => {
      const response = await request.get(
        `/images?width=600&height=800&filename=1.jpg`
      );
      expect(response.status).toBe(200);
    });
    describe('tests the images route endpoint when invalid parmeters', () => {
      it('test when filename parameter is invalid', async () => {
        const response = await request.get(
          `/images?width=600&height=800&filename=1.png`
        );
        expect(response.status).toBe(404);
      });
      it('test when width parameter is invalid', async () => {
        const response = await request.get(
          `/images?width=4&height=800&filename=1.jpg`
        );
        expect(response.status).toBe(404);
      });
    });
  });
});
