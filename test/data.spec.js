import {ordenarPokemons, select} from '../src/data.js';

const mock =  [{
  "pokemon": [{
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ],
    "resistant": [
      "electric",
      "grass",
      "fighting",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "psychic"
    ],
  },
  {
    "num": "002",
    "name": "ivysaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "pokemon-rarity": "normal",
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
]
}];

const pokemonNormal = [
  {
    "num": "002",
    "name": "ivysaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "pokemon-rarity": "normal",
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
]


describe('Realizar testes no campo de filtro por tipo', () => {
  it('is a function', () => {
    expect(typeof select).toBe('function');
  });

  it('Quando o usuário acionar a função, devolve filtrado por tipo', () => {
    expect(select(mock, "normal")).toStrictEqual(pokemonNormal);
  });
});

describe('Realizar testes no campo de filtro por resistência', () => {
  it('is a function', () => {
    expect(typeof select).toBe('function');
  });

  it('Quando o usuário acionar a função, devolve filtro por resistência', () => {
    expect(select(mock, "water")).toStrictEqual(pokemonNormal);
  });
});

describe('Realizar testes no campo de filtro por fraqueza', () => {
  it('is a function', () => {
    expect(typeof select).toBe('function');
  });

  it('Quando o usuário acionar a função, devolve filtro por fraqueza', () => {
    expect(select(mock, "flying")).toStrictEqual(pokemonNormal);
  });
});

describe('Realizar testes no campo de ordenação (com uso de metodo sort)', () => {
  it('is a function', () => {
    expect(typeof select).toBe('function');
  });

  it('Quando o usuário acionar a função, devolve ordenado por nome', () => {
  const parametro= "A-Z";
     const resultado = ordenarPokemons(mock, parametro);
     expect(resultado).toBe(mock);
   });
 })
