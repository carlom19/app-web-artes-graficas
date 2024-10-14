const request = require('supertest');
const app = require('../index'); // Asegúrate de que esté apuntando a tu servidor

describe('GET /api/example', () => {
    it('should return 200 OK', async () => {
        const res = await request(app).get('/api/example');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message');
    });
});
