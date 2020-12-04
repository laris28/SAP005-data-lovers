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
        <p class="texto-card">Type: ${pokemon.type.join(", ")}</p>
        <p class="texto-card">Resistant: ${pokemon.resistant.join(", ")}</p>
        <p class="texto-card">Weaknesses: ${pokemon.weaknesses.join(", ")}</p>
      </article>`
  }
  return card
}

div.innerHTML = geraCards(data.pokemon)
console.log(data.pokemon);
// console.log(data);

//FILTRO
const selecionar = document.getElementById("filterType");
selecionar.addEventListener("change", pegarTipo);

function pegarTipo() {
  const filtroType = document.getElementsByClassName("filterType").value;
  console.log(filtroType)
  const filtrado = select(todosPokemons, "normal");
  geraCards(filtrado);
}

//ORDENAÇÃO
const selectOrdenar = document.getElementById("ordenar");
if(selectOrdenar){
selectOrdenar.addEventListener("change", pegarOrdem);
}

function pegarOrdem() {
    const filtroOrdenar = document.getElementById("ordenar").value;
    const ordered = ordenarPokemons(todosPokemons, filtroOrdenar);
    geraCards(ordered);
}
