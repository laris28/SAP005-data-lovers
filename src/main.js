import {select, ordenarPokemons} from './data.js';
import data from "./data/pokemon/pokemon.js";

const todosPokemons = data.pokemon;
const div = document.querySelector("#card");

function geraCards(array){
  let card = ""
  for (let pokemon of array) {
    card += `
      <article class="divcard">
        <p class="numero">Nº ${pokemon.num}</p>
        <p class="nome">${pokemon.name.toUpperCase()}</p>
        <img class="imagem" src="${pokemon.img}">
        <p class="texto-card">Tipo: ${pokemon.type.join(", ")}</p>
        <p class="texto-card">Resistências: ${pokemon.resistant.join(", ")}</p>
        <p class="texto-card">Fraquezas: ${pokemon.weaknesses.join(", ")}</p>
      </article>`
  }
  return card
}

div.innerHTML = geraCards(data.pokemon)
console.log(data.pokemon);

//FILTRO
const selecionar = document.getElementById("filterType");
selecionar.addEventListener("change", pegarTipo);

function pegarTipo() {
  const filtrado = select(todosPokemons, selecionar.value);
  div.innerHTML = geraCards(filtrado);
}

//ORDENAÇÃO
const selectOrdenar = document.getElementById("orderResult");
selectOrdenar.addEventListener("change", pegarOrdem);

function pegarOrdem() {
  const ordered = ordenarPokemons(todosPokemons, selectOrdenar.value);
  div.innerHTML = geraCards(ordered);
}
