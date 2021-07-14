import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve garantir que 1 + 4 é igual a 5', 
  inject([CalculadoraService], (service: CalculadoraService) => {
    let soma = service.calcular(1,4,CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  }));

  it('Deve garantir que 1 - 4 é igual a -3', 
  inject([CalculadoraService], (service: CalculadoraService) => {
    let subtracao = service.calcular(1,4,CalculadoraService.SUBTRACAO);
    expect(subtracao).toEqual(-3);
  }));

  it('Deve garantir que 1 * 4 é igual a 4', 
  inject([CalculadoraService], (service: CalculadoraService) => {
    let multiplicacao = service.calcular(1,4,CalculadoraService.MULTIPLICACAO);
    expect(multiplicacao).toEqual(4);
  }));

  it('deve garantir que 1 / 4 = 0.25',
  inject([CalculadoraService], (service: CalculadoraService) => {
    let divisao = service.calcular(1, 4, CalculadoraService.DIVISAO);
    expect(divisao).toEqual(0.25);
  }));

  it('deve garantir que 1 / 0 = Invalida',
  inject([CalculadoraService], (service: CalculadoraService) => {
    let divisaoInvalida = service.calcular(1, 0, CalculadoraService.DIVISAO);
    expect(divisaoInvalida).toEqual(0);
  }));

  it('deve retornar 0 para operação invalida',
  inject([CalculadoraService], (service: CalculadoraService) => {
    let operacaoInvalida = service.calcular(1, 4, '%');
    expect(operacaoInvalida).toEqual(0);
  }));
  
});
