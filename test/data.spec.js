import {select} from '../src/data.js';

const mock =  [{
  "num": "001",
  "name": "bulbasaur",
  "type": [
    "grass",
    "poison"
  ]
  },
{
  "num": "002",
  "name": "ivysaur",
  "type": [
    "normal",
    "poison"
  ]
}]

const pokemonNormal = [
  {
    "num": "002",
    "name": "ivysaur",
    "type": [
      "normal",
      "poison"
    ]
  }
]

describe('example', () => {
  it('is a function', () => {
    expect(typeof select).toBe('function');
  });

  it('returns `example`', () => {
    expect(select(mock, "normal")).toStrictEqual(pokemonNormal);
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    // expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    // expect(anotherExample()).toBe('OMG');
  });
});
