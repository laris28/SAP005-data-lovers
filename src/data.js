// FILTRO
export const select = (todosPokemons, filtroType) => {
  console.log(todosPokemons, filtroType)
  return todosPokemons.filter(search => search.type.includes(filtroType));
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
