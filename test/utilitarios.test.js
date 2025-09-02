const Utilitarios = require('../src/utilitarios');
let util;

beforeEach(() => {
  util = new Utilitarios();
});

describe('Utilitarios - Manipulação de Strings', () => {
  test('inverterString', () => {
    expect(util.inverterString('abc')).toBe('cba');
  });

  test('contarCaracteres', () => {
    expect(util.contarCaracteres('chat')).toBe(4);
  });

  test('paraMaiusculas', () => {
    expect(util.paraMaiusculas('willian')).toBe('WILLIAN');
  });

  test('paraMinusculas', () => {
    expect(util.paraMinusculas('WiLLiAN')).toBe('willian');
  });

  test('primeiraLetraMaiuscula', () => {
    expect(util.primeiraLetraMaiuscula('willian')).toBe('Willian');
    expect(util.primeiraLetraMaiuscula('')).toBe('');
  });

  test('removerEspacos', () => {
    expect(util.removerEspacos('  teste ')).toBe('teste');
  });

  test('repetirTexto', () => {
    expect(util.repetirTexto('a', 3)).toBe('aaa');
  });
});

describe('Utilitarios - Operações Matemáticas', () => {
  test('somar', () => {
    expect(util.somar(3, 2)).toBe(5);
  });

  test('subtrair', () => {
    expect(util.subtrair(5, 3)).toBe(2);
  });

  test('multiplicar', () => {
    expect(util.multiplicar(2, 4)).toBe(8);
  });

  test('dividir', () => {
    expect(util.dividir(10, 2)).toBe(5);
  });

  test('dividir por zero', () => {
    expect(() => util.dividir(10, 0)).toThrow('Divisão por zero');
  });

  test('ehPar - par', () => {
    expect(util.ehPar(4)).toBe(true);
  });

  test('ehPar - ímpar', () => {
    expect(util.ehPar(3)).toBe(false);
  });

  test('gerarNumeroAleatorio', () => {
    for (let i = 0; i < 100; i++) {
      const num = util.gerarNumeroAleatorio(50);
      expect(num).toBeGreaterThanOrEqual(0);
      expect(num).toBeLessThan(50);
    }
  });

  test('ehNumero - número válido', () => {
    expect(util.ehNumero(10)).toBe(true);
  });

  test('ehNumero - NaN', () => {
    expect(util.ehNumero(NaN)).toBe(false);
  });

  test('ehNumero - string', () => {
    expect(util.ehNumero('10')).toBe(false);
  });
});

describe('Utilitarios - Arrays', () => {
  const arr = [3, 1, 2, 2];

  test('primeiroElemento', () => {
    expect(util.primeiroElemento(arr)).toBe(3);
  });

  test('ultimoElemento', () => {
    expect(util.ultimoElemento(arr)).toBe(2);
  });

  test('tamanhoArray', () => {
    expect(util.tamanhoArray(arr)).toBe(4);
  });

  test('ordenarArray', () => {
    expect(util.ordenarArray(arr)).toEqual([1, 2, 2, 3]);
  });

  test('inverterArray', () => {
    expect(util.inverterArray(arr)).toEqual([2, 2, 1, 3]);
  });

  test('juntarArray - padrão', () => {
    expect(util.juntarArray(['a', 'b', 'c'])).toBe('a,b,c');
  });

  test('juntarArray - separador personalizado', () => {
    expect(util.juntarArray(['a', 'b', 'c'], '-')).toBe('a-b-c');
  });

  test('mediaArray - com elementos', () => {
    expect(util.mediaArray([2, 4, 6])).toBe(4);
  });

  test('mediaArray - array vazio', () => {
    expect(util.mediaArray([])).toBe(0);
  });

  test('removerDuplicados', () => {
    expect(util.removerDuplicados(arr)).toEqual([3, 1, 2]);
  });
});

describe('Utilitarios - Diversos', () => {
  test('ehPalindromo - verdadeiro', () => {
    expect(util.ehPalindromo('Ame a ema')).toBe(true);
  });

  test('ehPalindromo - falso', () => {
    expect(util.ehPalindromo('teste')).toBe(false);
  });

  test('mesclarObjetos', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    expect(util.mesclarObjetos(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
  });
});
