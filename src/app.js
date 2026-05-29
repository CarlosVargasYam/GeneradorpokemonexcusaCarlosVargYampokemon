import "bootstrap";
import "./style.css";


window.onload = function() {

let who = ['Pikachu', 'Bulbasaur', 'Charmander', 'Squirtle'];
let action = ['se comio', 'se meo', 'golpeo', 'rompio'];
let what = ['mi cena', 'la pokeball', 'mis calcetines'];
let when = ['antes de el entrenamiento', 'cuando estaba durmiendo', 'cuando estabamos en medio de una pelea', 'mientras hablaba con la enfermera Joy', 'Mientras estaba estudiando en la Pokedex'];

  console.log("Buenas Buenas");




let randomwho = Math.floor(Math.random() * who.length);
let randomaction = Math.floor(Math.random() * action.length);
let randomwhat = Math.floor(Math.random() * what.length);
let randomwhen = Math.floor(Math.random() * when.length);

let randomexcuse = who[randomwho] + " " + action[randomaction] + " " + what[randomwhat] + " " + when[randomwhen]

let excuse = document.querySelector ("#excuse") 

 excuse.innerHTML = randomexcuse ;
}