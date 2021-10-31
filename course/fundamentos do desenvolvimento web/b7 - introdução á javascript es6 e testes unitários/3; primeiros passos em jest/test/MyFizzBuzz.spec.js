const myFizzBuzz = require('../src/MyFizzBuzz');

describe('As cinco possibilidades de resultado para a função myFizzBuzz(num)', () => {

  test('Retornar "fizzbuzz" ao receber 15 como parâmetro', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  });

  test('Retornar "fizz" ao receber 9 como parâmetro', () => {
    expect(myFizzBuzz(9)).toMatch('fizz');
  });

  test('Retornar "buzz" ao receber 125 como parâmetro', () => {
    expect(myFizzBuzz(125)).toMatch('buzz');
  });

  test('Retornar 8 ao recebe-lo como parâmetro', () => {
    expect(myFizzBuzz(8)).toEqual(8);
  });

  test('Retornar false ao receber "NaN"', () => {
    expect(myFizzBuzz('NaN')).toBeFalsy();
  });
});