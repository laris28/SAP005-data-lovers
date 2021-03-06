import {select, selectResist, selectWeaknesses, ordenarPokemons} from './data.js';
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

//FILTRO POR TIPOS
const selecionar = document.getElementById("filterType");
selecionar.addEventListener("change", pegarTipo);

function pegarTipo() {
  const filtrado = select(todosPokemons, selecionar.value);
  div.innerHTML = geraCards(filtrado);
  return calculoAgregado(filtrado)
}

//FILTRO POR RESISTÊNCIAS
const selecionarResist = document.getElementById("filterResistencia");
selecionarResist.addEventListener("change", pegarResist);

function pegarResist() {
  const filtrandoResist = selectResist(todosPokemons, selecionarResist.value);
  div.innerHTML = geraCards(filtrandoResist);
}

//FILTRO POR FRAQUEZAS
const selecionarWeaknesses = document.getElementById("filterWeaknesses");
selecionarWeaknesses.addEventListener("change", pegarWeaknesses);

function pegarWeaknesses() {
  const filtrandoWeaknesses = selectWeaknesses(todosPokemons, selecionarWeaknesses.value);
  div.innerHTML = geraCards(filtrandoWeaknesses);
}

//ORDENAÇÃO
const selectOrdenar = document.getElementById("orderResult");
selectOrdenar.addEventListener("change", pegarOrdem);

function pegarOrdem() {
  const ordered = ordenarPokemons(todosPokemons, selectOrdenar.value);
  div.innerHTML = geraCards(ordered);
}

//CÁLCULO AGREGADO
function calculoAgregado(resultado) {
  const sizeArray = todosPokemons.length
  const sizeFilter = resultado.length
  const result = ((sizeFilter/sizeArray)*100).toFixed(0)+"%";
  const aggregateCal = `<h3>The type ${selecionar.value} represents ${result} of the total Pokémons.</h3>`
  return document.getElementById("item-aggregate-calc").innerHTML = aggregateCal;
}

