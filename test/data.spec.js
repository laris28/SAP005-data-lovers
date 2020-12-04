import {select, selectResist, selectWeaknesses, ordenarPokemons} from '../src/data.js';

const mock =  [
    {
    "num": "002",
    "name": "ivysaur",
    "type": [
      "grass",
      "normal"
    ],
    "resistant": [
      "water",
      "electric",
      "grass",
      "fighting",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
  },
  {
    "num": "110",
    "name": "weezing",
    "type": [
      "poison"
    ],
    "resistant": [
      "grass",
      "fighting",
      "poison",
      "bug",
      "fairy"
    ],
    "weaknesses": [
      "ground",
      "psychic"
    ],
  },
];

const Weezing = [
  {
    "num": "110",
    "name": "weezing",
    "type": [
      "poison"
    ],
    "resistant": [
      "grass",
      "fighting",
      "poison",
      "bug",
      "fairy"
    ],
    "weaknesses": [
      "ground",
      "psychic"
    ],
  },
];

const ordenarAZ = [
    {
    "num": "002",
    "name": "ivysaur",
    "type": [
      "grass",
      "normal"
    ],
    "resistant": [
      "water",
      "electric",
      "grass",
      "fighting",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
  },
  {
    "num": "110",
    "name": "weezing",
    "type": [
      "poison"
    ],
    "resistant": [
      "grass",
      "fighting",
      "poison",
      "bug",
      "fairy"
    ],
    "weaknesses": [
      "ground",
      "psychic"
    ],
  },
];

const ordenarZA = [
  {
    "num": "110",
    "name": "weezing",
    "type": [
      "poison"
    ],
    "resistant": [
      "grass",
      "fighting",
      "poison",
      "bug",
      "fairy"
    ],
    "weaknesses": [
      "ground",
      "psychic"
    ],
  },
  {
    "num": "002",
    "name": "ivysaur",
    "type": [
      "grass",
      "normal"
    ],
    "resistant": [
      "water",
      "electric",
      "grass",
      "fighting",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
  }
];


describe('Realizar testes no campo de filtro por tipo', () => {
  it('is a function', () => {
    expect(typeof select).toBe('function');
  });

  it('Quando o usuário acionar a função, devolve filtrado por tipo', () => {
    const tipo = "poison";
    expect(select(mock, tipo)).toStrictEqual(Weezing);
  });
});

describe('Realizar testes no campo de filtro por resistência', () => {
  it('is a function', () => {
    expect(typeof selectResist).toBe('function');
  });

  it('Quando o usuário acionar a função, devolve filtro por resistência', () => {
    const resist = "bug";
    expect(selectResist(mock, resist)).toStrictEqual(Weezing);
  });
});

describe('Realizar testes no campo de filtro por fraqueza', () => {
  it('is a function', () => {
    expect(typeof selectWeaknesses).toBe('function');
  });

  it('Quando o usuário acionar a função, devolve filtro por fraqueza', () => {
    const weaknesses = "ground";
    expect(selectWeaknesses(mock, weaknesses)).toStrictEqual(Weezing);
  });
});

describe('Realizar testes no campo de ordenação (com uso de metodo sort)', () => {
  it('is a function', () => {
    expect(typeof ordenarPokemons).toBe('function');
  });

  it('Quando o usuário acionar a função, devolve ordenado por nome em ordem alfabética', () => {
    let parametro = "A-Z";
    expect(ordenarPokemons(mock, parametro)).toStrictEqual(ordenarAZ);
  });

  it('Quando o usuário acionar a função, devolve ordenado por nome em ordem alfabética decrescente', () => {
    let parametro = "Z-A";
   expect(ordenarPokemons(mock, parametro)).toStrictEqual(ordenarZA);
  });
 })
