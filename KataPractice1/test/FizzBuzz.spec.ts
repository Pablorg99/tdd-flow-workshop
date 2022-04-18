import { FizzBuzz } from '../src/FizzBuzz';

describe('FizzBuzz', () => {
  let printer: any;
  let fizzBuzz: FizzBuzz;

  beforeEach(() => {
    printer = jest.fn();
    fizzBuzz = new FizzBuzz(printer);
  });

  afterEach(() => {
    expect(printer).toHaveBeenCalledTimes(1);
  });

  it('should print the given number', () => {
    fizzBuzz.run(2);

    expect(printer).toHaveBeenCalledWith('2');
  });

  it.each([3, 6, 9, 12])('should print fizz with %p', (number) => {
    fizzBuzz.run(number);

    expect(printer).toHaveBeenCalledWith('Fizz');
  });

  it.each([5, 10, 25])('should print buzz with %p', (number) => {
    fizzBuzz.run(number);

    expect(printer).toHaveBeenCalledWith('Buzz');
  });

  it.each([15, 30])('should print buzz with %p', (number) => {
    fizzBuzz.run(number);

    expect(printer).toHaveBeenCalledWith('FizzBuzz');
  });
});
