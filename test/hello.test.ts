import { func } from '../src/modules/hello';
describe('test.ts test', () => {
  beforeAll(() => {
    Logger.log = jest.fn().mockImplementation((msg) => {
      return console.log(msg);
    });
    jest.spyOn(Logger, 'log');
  });
  test('func', () => {
    const expected = func();
    expect(Logger.log).toBeCalled();
    expect(expected).toBe('Hello, Panda');
  });
});
