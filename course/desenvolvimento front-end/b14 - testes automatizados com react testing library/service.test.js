import * as service from './service';

describe('Função que gera um número aleatório', () => {
  test('O retorno da função generateRandomNumber() é 10', () => { 
    service.generateRandomNumber() = jest.fn().mockReturnValue(10);
    expect(service.generateRandomNumber()).toBeCalled();
    expect(service.generateRandomNumber()).toBe(10)
   })
});

