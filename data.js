// FILTRO POR TIPOS
export const select = (todosPokemons, filtroType) => {
  console.log(todosPokemons, filtroType)
  return todosPokemons.filter(search => search.type.includes(filtroType));
}

// FILTRO POR RESISTÊNCIAS
export const selectResist = (todosPokemons, filtroResistant) => {
  console.log(todosPokemons, filtroResistant)
  return todosPokemons.filter(search => search.resistant.includes(filtroResistant));
}

// FILTRO POR FRAQUEZAS
export const selectWeaknesses = (todosPokemons, filtroWeaknesses) => {
  console.log(todosPokemons, filtroWeaknesses)
  return todosPokemons.filter(search => search.weaknesses.includes(filtroWeaknesses));
}

// ORDENAÇÃO
export const ordenarPokemons = (todosPokemons, filtroOrdenar) => {
  const ordenarAZ = (a, b) => (a["name"]).localeCompare(b["name"]);
  const ordenarZA = (a, b) => (a["name"]).localeCompare(b["name"]);
  switch (filtroOrdenar) {
    case "A-Z":
      return todosPokemons.sort((a, b) => ordenarAZ(a, b))
    case "Z-A":
      return todosPokemons.sort((a, b) => ordenarZA(a, b)).reverse()
  }
}
