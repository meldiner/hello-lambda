import DB from './DB';

describe('DB', () => {
  it('should return "Hello Lambda"', () => {
    const db = new DB();
    return db.getHelloMessage()
      .then(message => {
        expect(message).toBe('Hello Lambda');
      });
  });
});