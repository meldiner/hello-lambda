import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';

describe('GET /hello/lambda', () => {
  it('should return "Hello Lambda"', () => {
    return axios.get(`${process.env.SERVICE_URL}/hello/lambda`).then(response => {
      expect(response.data.message).toBe("Hello Lambda");
    });
  })
});